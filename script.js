var sections = document.getElementsByTagName('section');
var open_aside = null;
for(var i = 0; i < sections.length; i++) {
	sections[i].onclick = function(e) {
		var contained = this.getElementsByTagName('aside');
		if(contained.length === 0) return;
		var aside = contained[0];
		if(aside.style.visibility !== "visible") {
			aside.style.visibility = "visible";
			open_aside = aside;
			e.stopPropagation();
		}
	};
}
document.onclick = function(e) {
	if(open_aside !== null) {
		open_aside.style.visibility = "hidden";
		open_aside = null;
	}
}
var images = document.getElementsByClassName('img');
for(var i = 0; i < images.length; i++) {
	var image_marker = images[i];
	var image = new Image();
	image.src = image_marker.innerHTML;
	var parent = image_marker.parentNode;
	parent.removeChild(image_marker);
	parent.insertBefore(image, parent.firstChild);
}
