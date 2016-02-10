var templates = {
	stuff: require('../public/templates/stuff.html'),
	pictures: require('../public/templates/pictures.html'),
	press: require('../public/templates/press.html'),
	contact: require('../public/templates/contact.html'),
}

var facebookScript = require('./fbscript');
var cached = {};

window.onload = function init()  {
	var songsButton      = document.getElementById('stuff-button');
	var picturesButton   = document.getElementById('pictures-button');
	var pressButton      = document.getElementById('press-button');

	var contactButton      = document.getElementById('contact-button');
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
	var currentSection;

	songsButton.onclick    = switchSection.bind(null, 'stuff', facebookScript);
	picturesButton.onclick = switchSection.bind(null, 'pictures');
	pressButton.onclick    = switchSection.bind(null, 'press');
	contactButton.onclick    = switchSection.bind(null, 'contact');

	handleScroll();
	switchSection('stuff', facebookScript);

	function switchSection(section, script) {
		// Take previous section out of DOM
		if (currentSection) {
			console.log('removing ', currentSection)
			sectionContainer.removeChild(currentSection);
		}
		// Put new element in DOM if existing
		if (cached[section]) {
			console.log('adding cached ', section);
			sectionContainer.appendChild(cached[section]);
		}
		// Otherwise create and put element in DOM
		else {
			sectionContainer.innerHTML = '<div>' + templates[section] + '</div>';
			cached[section] = sectionContainer.children[0];
		}

		currentSection = cached[section];

		if (script != null) {
			setTimeout(script, 100);
		} else {
			document.getElementById("menu").classList.add("sticky");
		}

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
