import re
import os

def summarize(file_path, name):
    print(f"==============================\n{name}\n==============================")
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        return
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        html = f.read()
    
    t = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
    if t:
        print("TITLE:", ' '.join(t.group(1).split()))
    
    m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.I)
    if m:
        print("DESC:", m.group(1))
    
    print("\nHEADINGS:")
    for tag, content in re.findall(r'<(h[1-4])[^>]*>(.*?)</\1>', html, re.I | re.S):
        clean = ' '.join(re.sub(r'<[^>]+>', ' ', content).split())
        if clean and len(clean) > 2 and 'Google' not in clean and 'Reviews' not in clean and 'DP Design Studio' not in clean:
            print(f"  {tag.upper()}: {clean}")

    print("\nPARAGRAPHS:")
    p_count = 0
    for content in re.findall(r'<p[^>]*>(.*?)</p>', html, re.I | re.S):
        clean = ' '.join(re.sub(r'<[^>]+>', ' ', content).split())
        if len(clean) > 80 and 'WordPress' not in clean and 'cookie' not in clean.lower() and 'rights reserved' not in clean.lower():
            print(f"  - {clean[:160]}...")
            p_count += 1
            if p_count >= 12:
                break

summarize("C:/Users/subhr/.gemini/antigravity-ide/brain/5c5568b6-a26c-443c-aeda-c76154c8ba19/.system_generated/steps/311/content.md", "1. ARCHITECTURAL DESIGN")
summarize("C:/Users/subhr/.gemini/antigravity-ide/brain/5c5568b6-a26c-443c-aeda-c76154c8ba19/.system_generated/steps/315/content.md", "2. KITCHEN DESIGN")
summarize("scratch/bathroom_raw.html", "3. BATHROOM DESIGN")
