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
		$("navi").style.top = '80px';
		$("navi").style.fontSize = '16px';
		$("navi").style.lineHeight = '16px';

		$("frame").style.top = '116px';
	}
	else {
		$("header").style.height = '90px';
		$("header").innerHTML = '<img src="img/logo.png" width=316 height=53>';

		$("navi").style.left = '24px';
		$("navi").style.lineHeight = '18px';
		$("navi").style.top = '96px';
		$("navi").style.fontSize = '12px';

		$("frame").style.top = '142px';
	}

	var items = [
		['home',		'Home',			'index.html'],
		['hobbycard',	'Hobby Cards',	'hobbycards.html'],
		['awards',		'Awards',		'awards.html'],
		['robotdesign',	'Robot Design',	'robotdesign.html'],
		['innovation',	'Innovation Project',	'innovation.html'],
		['feedback',	'Feedback',		'feedback.html'],
		['about',		'About Us',		'about.html']
	];

	var str = "";
	for(var i=0; i<items.length; i++) {
		if(n == items[i][0])
			str += '<span class="menu_selected">&nbsp;' + items[i][1] + '&nbsp;</span>|';
		else
			str += '<span class="menu"><a href="' + items[i][2] + '">&nbsp;' + items[i][1] + '&nbsp;</a></span>|';
	}

	$("navi").innerHTML = str;
}

function portrait() {
	var w = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	var h = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	return h > w;
}