#!/usr/bin/env python3
import subprocess
with open('style.css', 'r') as data:
    style = data.read()
with open('content.html', 'w') as data:
    subprocess.call(['markdown', 'content.md'], stdout = data)
with open('content.html', 'r') as data:
    content = data.read()
with open('frame.html', 'r') as data:
    frame = data.read()
with open('index.html', 'w') as data:
    data.write((frame % (style, content)).replace('  ', ' ').replace('\r', '').replace('\n', '').replace('\t', '').replace(', ', ',').replace(' {', '{'))

