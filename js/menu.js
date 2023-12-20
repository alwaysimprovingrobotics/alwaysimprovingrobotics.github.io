function print_menu(n) {
	var str = "";
	str += '<a class="menu" href="' + (n == 1? '#' : 'index.html') + '">About Us</a> |';
	str += '<a class="menu" href="' + (n == 2? '#' : 'awards.html') + '">Awards</a> |';
	str += '<a class="menu" href="' + (n == 3? '#' : 'accomp.html') + '">Accomplished</a> |';
	str += '<a class="menu" href="' + (n == 4? '#' : 'hobby.html') + '">Hobby Card</a> |';
	str += '<a class="menu" href="' + (n == 5? '#' : 'innovation.html') + '">Innovation</a>';

	document.getElementById("navi").innerHTML = str;
}

