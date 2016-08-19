#!/usr/bin/env python3
import markdown
with open('style.css', 'r') as data:
    style = data.read()
with open('content.md', 'r') as data:
    text = data.read()
with open('frame.html', 'r') as data:
    frame = data.read()
with open('index.html', 'w') as data:
    data.write((frame % (style, markdown.markdown(text)))
    .replace('  ', ' ')
    .replace('\r', '')
    .replace('\n', '')
    .replace('\t', '')
    .replace(', ', ',')
    .replace(' {', '{'))
