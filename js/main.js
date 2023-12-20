function $(id) {
	return document.getElementById(id);
}

function print_header(n) {
	var w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	if(w > h) {
		$("header").style.height = '64px';
		$("header").innerHTML = '<img src="img/logo.png" width=384 height=64>';
	
		$("navi").style.left = '480px';
		$("navi").style.top = '72px';
		$("navi").style.fontSize = '16px';

		$("frame").style.top = '116px';
	}
	else {
		$("header").style.height = '90px';
		$("header").innerHTML = '<img src="img/logo.png" width=316 height=53>';

		$("navi").style.left = '16px';
		$("navi").style.top = '96px';
		$("navi").style.fontSize = '16px';

		$("frame").style.top = '142px';
	}


	var str = "";
	str += '<a class="menu" href="' + (n == 1? '#' : 'index.html') + '">About Us</a> |';
	str += '<a class="menu" href="' + (n == 2? '#' : 'awards.html') + '">Awards</a> |';
	str += '<a class="menu" href="' + (n == 3? '#' : 'accomp.html') + '">Accomplished</a> |';
	if(w < h) {
		str += '<br>';
	}
	str += '<a class="menu" href="' + (n == 4? '#' : 'hobby.html') + '">Hobby Card</a> |';
	str += '<a class="menu" href="' + (n == 5? '#' : 'innovation.html') + '">Innovation</a>';

	$("navi").innerHTML = str;
}

