import re
import urllib.request

headers = {"User-Agent": "Mozilla/5.0"}
url = "https://www.dpdesignstudio.com.au/about-us/"
req = urllib.request.Request(url, headers=headers)
html = urllib.request.urlopen(req).read().decode('utf-8', errors='ignore')

images = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.IGNORECASE)
for img in set(images):
    if 'wp-content' in img:
        print(img)
