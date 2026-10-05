import { useEffect, useRef } from 'react';

interface FooterSmokeProps {
  background?: string;
  color1?: string;
  color2?: string;
  speed?: number;
  size?: number;
  angle?: number;
  hover?: number;
  reach?: number;
  opacity?: number;
}

const VERTEX_SHADER = `#version 300 es
const vec2 P[3] = vec2[3](vec2(-1.0, -1.0), vec2(3.0, -1.0), vec2(-1.0, 3.0));
void main() { gl_Position = vec4(P[gl_VertexID], 0.0, 1.0); }
`;

const FRAGMENT_FIELD = `#version 300 es
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uC1;
uniform vec3 uC2;
uniform float uSize;
uniform float uAngle;
uniform vec2 uMouse;
uniform float uOn;
uniform float uReach;
uniform vec2 uVel;
out vec4 o;

const float TAU = 6.28318530718;
const float LAYERS = 72.0;
const float TWIST = 1.25;
const float DRAG = 0.18;
const float GAIN = 0.62;
const vec2 CENTRE = vec2(-0.62, 0.24);
const float TILT = 0.6;
const float ZOOM = 1.05;
const float THETA = 2.13;
const float SHEAR = 0.963;
const float SHRINK = 0.953;
const vec2 WARP_FREQ = vec2(0.42, 2.4);
const vec2 WARP_AMP = vec2(0.13, 0.027);
const vec2 ASPECT = vec2(2.1, 0.17);
const float OFFSET = 0.36;
const float GLOW = 0.0021;
const float SOFT = 0.0019;
const float FALLOFF = 0.37;
const float PHASE = 12.0;
const float CYCLE = 0.16;
const float HUE_TRAVEL = 2.0;

mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, s, -s, c); }

void main() {
  vec2 R = uRes;
  vec2 pos = (gl_FragCoord.xy - 0.5 * R) / R.y;

  vec2 d = pos - uMouse;
  float w = uOn * exp(-dot(d, d) / (uReach * uReach));
  if (w > 1e-4) pos = uMouse + rot(w * TWIST) * d * (1.0 - 0.3 * min(w, 1.0)) - uVel * min(w, 1.0) * DRAG;

  pos = rot(uAngle) * pos / uSize;
  float t = uTime * 0.49 + PHASE;
  float breath = (-sin(uTime * 0.735) + sin(uTime * 0.49 + 1.0)) * 0.25 + 0.5;
  vec2 u = rot(TILT) * ((pos - CENTRE) * (ZOOM - breath * 0.085));
  mat2 fold = mat2(cos(THETA), sin(THETA), -SHEAR, cos(THETA));

  vec3 col = vec3(0.0);
  for (float i = 1.0; i <= LAYERS; i += 1.0) {
    u.x -= sin(u.y * WARP_FREQ.x + t + i * 0.007) * WARP_AMP.x;
    u.y -= sin(u.x * WARP_FREQ.y - t + i * 0.02) * WARP_AMP.y;
    u = fold * u * SHRINK;
    vec2 q = (u - vec2(OFFSET + breath * 0.1, 0.0)) * ASPECT;
    float g = GLOW / (dot(q, q) + SOFT) * (0.25 + breath * 0.4);
    float r = length(u);
    float k = sin(i * CYCLE + t * 1.2 + r * HUE_TRAVEL) * 0.5 + 0.5;
    col += g * mix(uC1, uC2, k) * (0.62 + 0.5 * k) * exp2(-r * FALLOFF);
  }
  vec3 x = max(col * GAIN, 0.0);
  col = (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
  col = pow(clamp(col, 0.0, 1.0), vec3(0.85, 0.92, 0.98));
  col *= 1.0 - smoothstep(0.5, 1.6, length(pos)) * 0.07;
  o = vec4(col, 1.0);
}
`;

const FRAGMENT_FINISH = `#version 300 es
precision highp float;
uniform sampler2D uField;
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uBg;
uniform float uPaper;
out vec4 o;

float ign(vec2 p, float f) { 
  p += 5.588238 * mod(f, 64.0); 
  return fract(52.9829189 * fract(0.06711056 * p.x + 0.00583715 * p.y)); 
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  vec3 L = max(texture(uField, frag / uRes).rgb, 0.0);

  vec3 dark = uBg + L * (1.0 - uBg);
  float strength = clamp(max(L.r, max(L.g, L.b)), 0.0, 1.0);
  vec3 paper = uBg * (1.0 - strength) + L * 0.96;
  vec3 col = mix(dark, paper, uPaper);
  col += (ign(frag, floor(uTime * 24.0)) - 0.5) / 255.0;
  o = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

function hexToRgb(hex: string): [number, number, number] {
  let c = hex.trim().replace(/^#/, '');
  if (c.length === 3) c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2];
  const num = parseInt(c, 16);
  return [(num >> 16 & 255) / 255, (num >> 8 & 255) / 255, (num & 255) / 255];
}

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

function createShader(gl: WebGL2RenderingContext, type: number, src: string): WebGLShader | null {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
    console.warn('Shader compile err:', gl.getShaderInfoLog(s));
    gl.deleteShader(s);
    return null;
  }
  return s;
}

function createProgram(gl: WebGL2RenderingContext, vsSrc: string, fsSrc: string): WebGLProgram | null {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSrc);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSrc);
  if (!vs || !fs) return null;
  const p = gl.createProgram();
  if (!p) return null;
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    console.warn('Program link err:', gl.getProgramInfoLog(p));
    gl.deleteProgram(p);
    return null;
  }
  return p;
}

export function FooterSmoke({
  background = '#0A0B0E',
  color1 = '#C5A059',
  color2 = '#6A5C47',
  speed = 24,
  size = 115,
  angle = -150,
  hover = 45,
  reach = 250,
  opacity = 0.65
}: FooterSmokeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let gl: WebGL2RenderingContext | null = null;
    try {
      gl = canvas.getContext('webgl2', {
        antialias: false,
        alpha: false,
        depth: false,
        stencil: false,
        powerPreference: 'low-power'
      });
    } catch {
      // Fallback
    }

    if (!gl) return;

    const progField = createProgram(gl, VERTEX_SHADER, FRAGMENT_FIELD);
    const progFinish = createProgram(gl, VERTEX_SHADER, FRAGMENT_FINISH);
    if (!progField || !progFinish) {
      if (progField) gl.deleteProgram(progField);
      if (progFinish) gl.deleteProgram(progFinish);
      return;
    }

    const uField = {
      uRes: gl.getUniformLocation(progField, 'uRes'),
      uTime: gl.getUniformLocation(progField, 'uTime'),
      uC1: gl.getUniformLocation(progField, 'uC1'),
      uC2: gl.getUniformLocation(progField, 'uC2'),
      uSize: gl.getUniformLocation(progField, 'uSize'),
      uAngle: gl.getUniformLocation(progField, 'uAngle'),
      uMouse: gl.getUniformLocation(progField, 'uMouse'),
      uOn: gl.getUniformLocation(progField, 'uOn'),
      uReach: gl.getUniformLocation(progField, 'uReach'),
      uVel: gl.getUniformLocation(progField, 'uVel')
    };

    const uFinish = {
      uField: gl.getUniformLocation(progFinish, 'uField'),
      uRes: gl.getUniformLocation(progFinish, 'uRes'),
      uTime: gl.getUniformLocation(progFinish, 'uTime'),
      uBg: gl.getUniformLocation(progFinish, 'uBg'),
      uPaper: gl.getUniformLocation(progFinish, 'uPaper')
    };

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);

    // Framebuffer for intermediate render pass
    const fbo = gl.createFramebuffer();
    let fboTex: WebGLTexture | null = null;
    let fboW = 0;
    let fboH = 0;
    const hasFloat = !!gl.getExtension('EXT_color_buffer_float');

    const resizeFbo = (w: number, h: number) => {
      if (!gl) return;
      if (fboW === w && fboH === h && fboTex) return;
      if (fboTex) gl.deleteTexture(fboTex);
      fboTex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, fboTex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        hasFloat ? gl.RGBA16F : gl.RGBA8,
        w,
        h,
        0,
        gl.RGBA,
        hasFloat ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE,
        null
      );
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, fboTex, 0);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      fboW = w;
      fboH = h;
    };

    // Mouse tracking
    const mouse = { tx: 0, ty: 0, inside: false };
    const onPointerMove = (e: PointerEvent) => {
      const parent = container.parentElement || container;
      const rect = parent.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
      mouse.inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerMove, { passive: true });

    let curX = 0;
    let curY = 0;
    let velX = 0;
    let velY = 0;
    let hoverAmount = 0;
    let animId = 0;
    let lastTime = -1;
    let simTime = 0;

    const render = (now: number) => {
      animId = requestAnimationFrame(render);
      if (!gl || !canvas) return;

      const dt = lastTime < 0 ? 0 : clamp((now - lastTime) / 1000, 0, 0.05);
      lastTime = now;

      const spd = speed / 50;
      simTime = (simTime + dt * spd) % 3600;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const w = canvas.clientWidth || 800;
      const h = canvas.clientHeight || 300;
      const dw = Math.max(1, Math.round(w * dpr));
      const dh = Math.max(1, Math.round(h * dpr));

      if (canvas.width !== dw || canvas.height !== dh) {
        canvas.width = dw;
        canvas.height = dh;
      }

      resizeFbo(Math.max(1, Math.round(dw / 2)), Math.max(1, Math.round(dh / 2)));

      const isInside = mouse.inside ? 1 : 0;
      if (isInside && hoverAmount < 0.02) {
        curX = mouse.tx;
        curY = mouse.ty;
      }

      hoverAmount += (isInside - hoverAmount) * (1 - Math.exp(-dt * 5));

      const spring = 1 - Math.exp(-dt * 16);
      const prevX = curX;
      const prevY = curY;
      curX += (mouse.tx - curX) * spring;
      curY += (mouse.ty - curY) * spring;

      if (dt > 0) {
        const velSpring = 1 - Math.exp(-dt * 8);
        velX += ((curX - prevX) / dt - velX) * velSpring;
        velY += ((curY - prevY) / dt - velY) * velSpring;
      }

      const speedMag = Math.hypot(velX, velY) / h;
      const dragFactor = speedMag > 3 ? 3 / speedMag : 1;

      const rgb1 = hexToRgb(color1);
      const rgb2 = hexToRgb(color2);
      const bgRgb = hexToRgb(background);
      const lum = 0.2126 * bgRgb[0] + 0.7152 * bgRgb[1] + 0.0722 * bgRgb[2];

      // Pass 1: Fluid smoke field into intermediate FBO
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.viewport(0, 0, fboW, fboH);
      gl.useProgram(progField);

      gl.uniform2f(uField.uRes, fboW, fboH);
      gl.uniform1f(uField.uTime, simTime);
      gl.uniform3f(uField.uC1, rgb1[0], rgb1[1], rgb1[2]);
      gl.uniform3f(uField.uC2, rgb2[0], rgb2[1], rgb2[2]);
      gl.uniform1f(uField.uSize, size / 100);
      gl.uniform1f(uField.uAngle, (angle * Math.PI) / 180);
      gl.uniform2f(uField.uMouse, (curX - w / 2) / h, (h / 2 - curY) / h);
      gl.uniform1f(uField.uOn, hoverAmount * (hover / 100));
      gl.uniform1f(uField.uReach, reach / h);
      gl.uniform2f(uField.uVel, (velX / h) * dragFactor, (-velY / h) * dragFactor);

      gl.drawArrays(gl.TRIANGLES, 0, 3);

      // Pass 2: Finish pass onto screen with subtle film grain
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, dw, dh);
      gl.useProgram(progFinish);

      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, fboTex);
      gl.uniform1i(uFinish.uField, 0);
      gl.uniform2f(uFinish.uRes, dw, dh);
      gl.uniform1f(uFinish.uTime, simTime);
      gl.uniform3f(uFinish.uBg, bgRgb[0], bgRgb[1], bgRgb[2]);
      gl.uniform1f(uFinish.uPaper, clamp((lum - 0.35) / 0.3, 0, 1));

      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerMove);
      if (fboTex) gl?.deleteTexture(fboTex);
      if (fbo) gl?.deleteFramebuffer(fbo);
      if (vao) gl?.deleteVertexArray(vao);
      if (progField) gl?.deleteProgram(progField);
      if (progFinish) gl?.deleteProgram(progFinish);
    };
  }, [background, color1, color2, speed, size, angle, hover, reach]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        opacity,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
    </div>
  );
}

export default FooterSmoke;
