#!/usr/env python
import json
import os
def mini(string):
	string = string.replace('\t', '').replace('\n', '')
	while '  ' in string:
		string = string.replace('  ', '')
	return string
skeleton = mini("""
<html>
	<head>
		<title>Ryan Goldstein: {title}</title>
		<meta name=viewport content="width=device-width, initial-scale=1"></meta>
		<link rel="stylesheet" href="../css/sub.css"></link>
		<script src="../js/subpage.js"></script>
	</head>
	<body>
		<header>
			<h1> Ryan Goldstein: {title} </h1>
			<h3> {subtitle} </h3>
		</header>
		<article>
			{body}
		</article>
		<nav>
			<button type="button" onclick="gohome()"> Home </button>
			<button type="button" onclick="window.open('{link}')"> Github </button>
		</nav>
	</body>
</html>
""")
section = mini("""
<h5> {header} </h5>
<section>
	{content}
</section>
""")

for article in os.listdir("content"):
	article = article.split('.')[0]
	with open('content/' + article + '.json', 'r') as f:
		data = json.loads(f.read())
	title = data['title']
	subtitle = data['subtitle']
	link = data['link']
	body = ""
	for chunk in data['body']:
		body += section.format(header = chunk[0], content = "\n".join(chunk[1:]))
	rendered = skeleton.format(title = title, subtitle = subtitle, link = link, body = body)
	with open('html/' + article + '.html', 'w') as f:
		f.write(rendered)
