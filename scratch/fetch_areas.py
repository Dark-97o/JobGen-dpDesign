import urllib.request
import os

urls = {
    'parramatta': 'https://www.dpdesignstudio.com.au/areas-we-serve/parramatta/',
    'box_hill': 'https://www.dpdesignstudio.com.au/areas-we-serve/box-hill/',
    'castle_hill': 'https://www.dpdesignstudio.com.au/areas-we-serve/castle-hill/'
}

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
}

for key, url in urls.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            content = resp.read().decode('utf-8', errors='ignore')
            path = f'scratch/{key}.html'
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f'SUCCESS {key}: {len(content)} bytes')
    except Exception as e:
        print(f'ERROR {key}: {e}')
