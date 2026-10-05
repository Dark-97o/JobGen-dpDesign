import re

with open('scratch/about_us.html', 'r', encoding='utf-8', errors='ignore') as f:
    c = f.read()

images = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', c, re.IGNORECASE)
for img in set(images):
    if 'wp-content/uploads' in img:
        print(img)
