
/**** index.js ********************************************************
 * index: user login and create vimjs
 *
 * Copyright (C) eXerigumo Clanjor (哆啦比猫/兰威举), 2012.
 * Under GPLv2. ABSOLUTELY NO WARRANTY!
 **********************************************************************/

var w = localStorage.width || 180, h = localStorage.height || 40,
fontSize = localStorage.fontSize || 12,
font = localStorage.font || 'Mono';

var convas = new Convas("vimjs", w, h, fontSize);
var vim;

(function userLogin(){
	convas.font_name = font;
	convas.write("Welcome to vim.js!\n", true);
	setTimeout( function() {
		var fs = new FSLocalStorage();
		// var fs = new GDriveStorage();
		vim = new Vim( convas, fs, function() {
			console.log( 'restart' );
		});
	},1000);
	 // convas.write("You can login with \"local\"" +
			 // " for local use.\n\n", true);
	 // convas.write("login: ", true);
	 // convas.readLine(true, function(login){
		 // if (login == "local") {
			 // var fs = new FSLocalStorage();
			 // vim = new Vim(convas, fs, userLogin);
		 // }
		 // else {
			 // convas.write("Password: ", true);
			 // convas.readLine(false, function(password){
				 // convas.write("\nLogin incorrect\n\n", true);
				 // userLogin();
			 // });
		 // }
	 // });
})();

