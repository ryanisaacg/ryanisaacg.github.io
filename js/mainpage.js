var collapse_sections = document.getElementsByClassName('collapse')
for(var i = 0; i < collapse_sections.length; i++) {
	var section = collapse_sections[i];
	var text = document.createTextNode("\u21E9");
	text.style = {}
	text.style.float = 'left'
	section.children[0].appendChild(text)
	section.onclick = function(e) {
		var content = this.children[1];
		var style = content.style;
		console.log(style.display);
		if(!content.open) {
			style.display = 'flex';
			content.open = true;
		} else {
			style.display = 'none';
			content.open = false;
		}
	};
}
