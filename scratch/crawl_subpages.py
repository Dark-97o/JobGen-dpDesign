import urllib.request
import re
import os
import json

urls = [
    "https://www.dpdesignstudio.com.au/about-us/",
    "https://www.dpdesignstudio.com.au/about-us/prasad-perera/",
    "https://www.dpdesignstudio.com.au/services/",
    "https://www.dpdesignstudio.com.au/services/architectural-design/",
    "https://www.dpdesignstudio.com.au/services/kitchen-design/",
    "https://www.dpdesignstudio.com.au/services/bathroom-design/",
    "https://www.dpdesignstudio.com.au/contact-us/",
    "https://www.dpdesignstudio.com.au/areas-we-serve/",
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
}

results = {}

for u in urls:
    print(f"Fetching {u}...")
    try:
        req = urllib.request.Request(u, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            
            # title
            title_m = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
            title = title_m.group(1).strip() if title_m else ''
            
            # meta desc
            desc_m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.IGNORECASE)
            desc = desc_m.group(1).strip() if desc_m else ''
            
            # Headings
            headings = []
            for tag, text in re.findall(r'<(h[1-6])[^>]*>(.*?)</\1>', html, re.IGNORECASE | re.DOTALL):
                clean = ' '.join(re.sub(r'<[^>]+>', ' ', text).split())
                if clean:
                    headings.append(f"{tag.upper()}: {clean}")
            
            # Paragraphs / Main content snippets
            paras = []
            for p in re.findall(r'<p[^>]*>(.*?)</p>', html, re.IGNORECASE | re.DOTALL):
                clean = ' '.join(re.sub(r'<[^>]+>', ' ', p).split())
                if clean and len(clean) > 20 and 'cookie' not in clean.lower():
                    paras.append(clean)
                    
            results[u] = {
                "title": title,
                "description": desc,
                "headings": headings,
                "paragraphs": paras[:15] # Top relevant paras
            }
    except Exception as e:
        print(f"Error fetching {u}: {e}")
        # fallback to curl.exe
        out_name = "scratch/temp_subpage.html"
        cmd = f'curl.exe -s -L -A "{headers["User-Agent"]}" "{u}" -o {out_name}'
        os.system(cmd)
        if os.path.exists(out_name):
            with open(out_name, 'r', encoding='utf-8', errors='ignore') as f:
                html = f.read()
            title_m = re.search(r'<title>(.*?)</title>', html, re.IGNORECASE | re.DOTALL)
            title = title_m.group(1).strip() if title_m else ''
            headings = []
            for tag, text in re.findall(r'<(h[1-6])[^>]*>(.*?)</\1>', html, re.IGNORECASE | re.DOTALL):
                clean = ' '.join(re.sub(r'<[^>]+>', ' ', text).split())
                if clean:
                    headings.append(f"{tag.upper()}: {clean}")
            paras = []
            for p in re.findall(r'<p[^>]*>(.*?)</p>', html, re.IGNORECASE | re.DOTALL):
                clean = ' '.join(re.sub(r'<[^>]+>', ' ', p).split())
                if clean and len(clean) > 20:
                    paras.append(clean)
            results[u] = {
                "title": title,
                "headings": headings,
                "paragraphs": paras[:15]
            }

with open("scratch/scraped_details.json", "w", encoding="utf-8") as f:
    json.dump(results, f, indent=2)

print("Saved scratch/scraped_details.json")
