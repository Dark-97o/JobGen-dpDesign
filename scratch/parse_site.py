import re
import os
import urllib.parse

with open('site_raw.html', 'r', encoding='utf-8', errors='ignore') as f:
    content = f.read()

# Title
title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE | re.DOTALL)
print('TITLE:', title_match.group(1).strip() if title_match else 'None')

# Meta description
desc_match = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', content, re.IGNORECASE)
if not desc_match:
    desc_match = re.search(r'<meta[^>]*content=["\'](.*?)["\'][^>]*name=["\']description["\']', content, re.IGNORECASE)
print('META DESC:', desc_match.group(1).strip() if desc_match else 'None')

# Headings
print('\n--- HEADINGS ---')
headings = re.findall(r'<(h[1-6])[^>]*>(.*?)</\1>', content, re.IGNORECASE | re.DOTALL)
for tag, text in headings:
    clean = re.sub(r'<[^>]+>', ' ', text).strip()
    clean = ' '.join(clean.split())
    if clean:
        print(f'{tag.upper()}: {clean}')

# Links
print('\n--- ALL LINKS ---')
links = re.findall(r'<a[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', content, re.IGNORECASE | re.DOTALL)
seen = set()
for href, text in links:
    clean = ' '.join(re.sub(r'<[^>]+>', ' ', text).split())
    if href not in seen and not href.startswith('#') and not href.startswith('javascript:'):
        seen.add(href)
        print(f'- [{clean}] -> {href}')

# Images
print('\n--- IMAGES ---')
images = re.findall(r'<img[^>]+src=["\']([^"\']+)["\'][^>]*>', content, re.IGNORECASE)
for img in set(images):
    print(f'- {img}')
