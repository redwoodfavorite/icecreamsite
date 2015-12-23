var templates = {
	stuff: require('../public/templates/stuff.html'),
	pictures: require('../public/templates/pictures.html'),
	press: require('../public/templates/press.html'),
}

var facebookScript = require('./fbscript');

window.onload = function init()  {
	var songsButton      = document.getElementById('stuff-button');
	var picturesButton   = document.getElementById('pictures-button');
	var pressButton      = document.getElementById('press-button');
	var contentDiv       = document.getElementById('content');
	var logo             = document.getElementById('logo');
	var menu             = document.getElementById('menu');
	var background       = document.getElementById('background');
	var sectionContainer = document.querySelector('.section-container');
	var footer           = document.querySelector('footer');
	var backButton       = document.getElementById('back');

	var stickyState = true;
	var scrollY = 0;
	var progress = 0;
	var max = 250;
	var stickyPos;

	songsButton.onclick    = switchSection.bind(null, 'stuff', facebookScript);
	picturesButton.onclick = switchSection.bind(null, 'pictures');
	pressButton.onclick    = switchSection.bind(null, 'press');

	handleScroll();
	switchSection('stuff', facebookScript);

	function switchSection(section, script) {
		sectionContainer.innerHTML = templates[section];
		setTimeout(script, 300);

		if (scrollY > stickyPos) {
			scrollY = stickyPos;
			document.body.scrollTop = stickyPos;
		}
	}

	window.onscroll = handleScroll;

	function handleScroll(e) {
		scrollY = document.body.scrollTop;
		stickyPos = innerHeight - 50;

		/*
			Handle sticky-ness of menu-bar
		*/

		if (scrollY > stickyPos && stickyState)  {
			stickyState = !stickyState;

			menu.className = "sticky";
			sectionContainer.className += " pushed";
		}
		else if (scrollY < stickyPos && !stickyState) {
			stickyState = !stickyState;

			menu.className = "";
			sectionContainer.className = "section-container";
		}

		/*
			Adjust logo opacity, footer position, and top logo position on scroll
		*/

		if (scrollY < max) {
			progress = scrollY / max;

			logo.style.opacity = 1 - progress;
			footer.style.bottom = (-40 + 60 * progress) + "px";
			backButton.style.top = (-170 + 200 * progress) + "px";
		}
		else if (progress < 1) {
			progress = 1;

			logo.style.opacity = 1 - progress;
			footer.style.bottom = (-40 + 60 * progress) + "px";
			backButton.style.top = (-170 + 200 * progress) + "px";
		}
	}
}
