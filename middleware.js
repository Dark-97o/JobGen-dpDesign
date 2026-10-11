const HUB_URL = "https://gate-hub-omega.vercel.app";
const PUBLIC_KEY_JWK = { "kty": "EC", "crv": "P-256", "x": "pAXktfSaz-bPEQvQu_eCCYxVzvgAvIM2g3-IoNJkLc8", "y": "XERoCf1rmRnCt-l7kS4q_4v8RzakGv5z8DslgxfOyjA" };

// Run on every path (including assets) so nothing is reachable without acceptance.
export const config = { matcher: ["/((?!favicon\\.ico|robots\\.txt).*)"] };

const b64uToBytes = (s) => { s = s.replace(/-/g, "+").replace(/_/g, "/"); while (s.length % 4) s += "="; return Uint8Array.from(atob(s), (c) => c.charCodeAt(0)); };
let cache = { html: "", t: 0 };

async function verify(token, host) {
  try {
    const [h, b, s] = token.split(".");
    const key = await crypto.subtle.importKey("jwk", PUBLIC_KEY_JWK, { name: "ECDSA", namedCurve: "P-256" }, false, ["verify"]);
    const ok = await crypto.subtle.verify({ name: "ECDSA", hash: "SHA-256" }, key, b64uToBytes(s), new TextEncoder().encode(h + "." + b));
    if (!ok) return null;
    const p = JSON.parse(new TextDecoder().decode(b64uToBytes(b)));
    if (!p.exp || p.exp * 1000 < Date.now() || p.host !== host) return null;
    return p;
  } catch (_) { return null; }
}

async function gatePage() {
  if (!cache.html || Date.now() - cache.t > 300000) {
    try {
      const r = await fetch(HUB_URL + "/gate.html");
      if (r.ok) cache = { html: (await r.text()).replace(/__HUB__/g, HUB_URL), t: Date.now() };
    } catch (_) {}
  }
  const h = { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };
  return cache.html ? new Response(cache.html, { status: 200, headers: h }) : new Response("Temporarily unavailable. Please try again shortly.", { status: 503, headers: h });
}

export default async function middleware(req) {
  const url = new URL(req.url);

  // The gate page calls this after the hub accepts the agreement; we verify and set the cookies.
  if (url.pathname === "/__jg/session" && req.method === "POST") {
    let token = ""; try { token = (await req.json()).token || ""; } catch (_) {}
    const p = await verify(token, url.host);
    if (!p) return new Response(JSON.stringify({ ok: false }), { status: 401, headers: { "Content-Type": "application/json" } });
    const info = btoa(JSON.stringify({ id: p.id, name: p.name, email: p.email })).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
    const age = Math.max(60, p.exp - Math.floor(Date.now() / 1000));
    const headers = new Headers({ "Content-Type": "application/json", "Cache-Control": "no-store" });
    headers.append("Set-Cookie", `jg_gate=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${age}`);
    headers.append("Set-Cookie", `jg_info=${info}; Secure; SameSite=Lax; Path=/; Max-Age=${age}`);
    return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  }

  const m = (req.headers.get("cookie") || "").match(/(?:^|; )jg_gate=([^;]+)/);
  if (m && (await verify(m[1], url.host))) return;
  return gatePage();
}
