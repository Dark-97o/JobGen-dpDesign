import re

for area, filename in [('Parramatta', 'scratch/parramatta.html'), ('Box Hill', 'scratch/box_hill.html'), ('Castle Hill', 'scratch/castle_hill.html')]:
    print(f"\n=== {area} FAQs ===")
    with open(filename, 'r', encoding='utf-8', errors='ignore') as f:
        html = f.read()
    questions = re.findall(r'<h[234][^>]*>(.*?)</h[234]>', html, re.I | re.S)
    for q in questions:
        clean = ' '.join(re.sub(r'<[^>]+>', ' ', q).split())
        if '?' in clean:
            print("  Q:", clean)
