import re

with open('scratch/blogs.html', 'r', encoding='utf-8', errors='ignore') as f:
    c = f.read()

links = re.findall(r'<a[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', c, re.IGNORECASE)
for h, t in links:
    clean = ' '.join(re.sub(r'<[^>]+>', ' ', t).split())
    if clean and ('blog' in h.lower() or '/20' in h or 'guide' in h.lower() or 'design' in h.lower()):
        print(f'{clean} -> {h}')
