import re

with open('site_raw.html', 'r', encoding='utf-8', errors='ignore') as f:
    c = f.read()

keywords = ['daylo', 'gallery', 'project', 'builder', 'prasad', 'license', 'arb', 'registration']
for kw in keywords:
    matches = re.findall(rf'([^.\n]*?{kw}[^.\n]*?\.)', c, re.IGNORECASE)
    print(f"=== Keyword: {kw} ({len(matches)} matches) ===")
    for m in set(matches[:5]):
        print("-", ' '.join(m.split()))
