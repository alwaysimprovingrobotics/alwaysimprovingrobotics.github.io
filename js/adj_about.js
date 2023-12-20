if(window.attachEvent) {
	window.attachEvent("onload", adj_about)
}
else if(window.addEventListener) {
	window.addEventListener("load", adj_about, false)
}

function $(id) {
	return document.getElementById(id);
}

function adj_about() {
	var w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	if(w > h) {
		$("team").style.position = "absolute";
		$("team").style.top = "16px";
		$("team").style.bottom = "16px";
		$("team").style.left = "16px";
		$("team").style.right = "calc(50% + 8px)";

		$("members").style.position = "absolute";
		$("members").style.top = "16px";
		$("members").style.bottom = "16px";
		$("members").style.left = "calc(50% + 8px)";
		$("members").style.right = "16px";
	}
	else {
		$("team").style.position = "relative";
		$("members").style.position = "relative";
		$("members").style.marginTop = "16px";
	}
}

