import re

def parse_area(path, name):
    print(f"\n==========================================")
    print(f"AREA: {name}")
    print(f"==========================================")
    with open(path, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()

    # Title
    t = re.search(r'<title>(.*?)</title>', html, re.I | re.S)
    if t:
        print("TITLE:", ' '.join(t.group(1).split()))

    # Meta desc
    m = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html, re.I)
    if m:
        print("DESC:", m.group(1))

    # Headings
    print("\nHEADINGS:")
    for tag, content in re.findall(r'<(h[1-4])[^>]*>(.*?)</\1>', html, re.I | re.S):
        clean = ' '.join(re.sub(r'<[^>]+>', ' ', content).split())
        if clean and len(clean) > 2 and 'Google' not in clean and 'Reviews' not in clean and 'DP Design Studio' not in clean:
            print(f"  {tag.upper()}: {clean}")

    # Sample paragraphs
    print("\nPARAGRAPHS:")
    p_count = 0
    for content in re.findall(r'<p[^>]*>(.*?)</p>', html, re.I | re.S):
        clean = ' '.join(re.sub(r'<[^>]+>', ' ', content).split())
        if len(clean) > 80 and 'WordPress' not in clean and 'cookie' not in clean.lower() and 'rights reserved' not in clean.lower():
            print(f"  - {clean[:160]}...")
            p_count += 1
            if p_count >= 10:
                break

parse_area("scratch/parramatta.html", "PARRAMATTA")
parse_area("scratch/box_hill.html", "BOX HILL")
parse_area("scratch/castle_hill.html", "CASTLE HILL")
