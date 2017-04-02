var collapse_sections = document.getElementsByClassName('collapse')
for(var i = 0; i < collapse_sections.length; i++) {
	var section = collapse_sections[i];
	section.onclick = function(e) {
		var style = this.children[1].style;
		console.log(style.display);
		if(!this.children[1].open) {
			style.display = 'flex';
			this.children[1].open = true;
		} else {
			style.display = 'none';
			this.children[1].open = false;
		}
	};
}
