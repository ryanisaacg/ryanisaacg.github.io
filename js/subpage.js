function gohome() {
	if(document.referrer.indexOf("ryanisaacg.com") == -1 && document.referrer.indexOf("ryanisaacg.github.io") == -1) {
		window.location.href = "../index.html";
	} else {
		window.history.back();
	}
}
