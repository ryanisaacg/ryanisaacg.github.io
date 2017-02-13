var sections = document.getElementsByTagName('section');
for(var i = 0; i < sections.length; i++) {
	var section = sections[i];
	var contained = document.getElementsByTagName('aside');
	if(contained.length === 0) continue;
	var aside = contained[0];
	section.onclick = function(e) {
		if(aside.style.visibility !== "visible") {
			aside.style.visibility = "visible";
		} else {
			aside.style.visibility = "hidden";
		}
	};
}
