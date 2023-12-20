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
		$("header").style.height = "64px";
		$("navi").style.left = "480px";
		$("navi").style.top = "72px";
		$("frame").style.top = "116px";

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
		$("header").style.height = "90px";
		$("navi").style.left = "16px";
		$("navi").style.top = "110px";
		$("frame").style.top = "142px";

		$("team").style.position = "relative";
		$("members").style.position = "relative";
		$("members").style.marginTop = "16px";
	}
}

