var templates = {
	stuff: require('../public/templates/stuff.html'),
	pictures: require('../public/templates/pictures.html'),
	press: require('../public/templates/press.html'),
	contact: require('../public/templates/contact.html'),
}

var facebookScript = require('./fbscript');
var cached = {};

window.onload = function init()  {
	var buttons = {
			stuff: document.getElementById('stuff-button'),
			pictures: document.getElementById('pictures-button'),
			press: document.getElementById('press-button'),
			contact: document.getElementById('contact-button')
	};

	var contentDiv       = document.getElementById('content');
	var logo             = document.getElementById('logo');
	var menu             = document.getElementById('menu');
	var background       = document.getElementById('background');
	var sectionContainer = document.querySelector('.section-container');
	var footer           = document.querySelector('footer');
	var backButton       = document.getElementById('back');

	var stickyState = true;
	var logoSticky = true;
	var scrollY = 0;
	var progress = 0;
	var max = 250;
	var stickyPos;
	var currentSection;
	var selectedButton;

	buttons['stuff'].addEventListener('click', switchSection.bind(null, 'stuff', facebookScript));
	buttons['pictures'].addEventListener('click', switchSection.bind(null, 'pictures', null));
	buttons['press'].addEventListener('click', switchSection.bind(null, 'press', null));
	buttons['contact'].addEventListener('click', switchSection.bind(null, 'contact', null));

	handleScroll();
	switchSection('stuff', facebookScript);

	function switchSection(section, script) {

		// Take previous section out of DOM
		if (currentSection) {
			sectionContainer.removeChild(currentSection);
		}
		// Put new element in DOM if existing
		if (cached[section]) {
			sectionContainer.appendChild(cached[section]);
		}
		// Otherwise create and put element in DOM
		else {
			sectionContainer.innerHTML = '<div>' + templates[section] + '</div>';
			cached[section] = sectionContainer.children[0];
		}

		currentSection = cached[section];

		if (selectedButton) {
				selectedButton.className = '';
		}
		selectedButton = buttons[section];
		selectedButton.className = 'selected';

		setTimeout(script, 100);
	}

	/*
		Handle scroll
	*/

	requestAnimationFrame(onTick);

	function onTick() {
		if (document.body.scrollTop !== scrollY) {
			handleScroll();
		}

		requestAnimationFrame(onTick);
	}

	function handleScroll(e) {
		scrollY = document.body.scrollTop;
		stickyPos = 410 - 60;

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

		// comment out this to return scroll behavior
		max = 0;

		if (scrollY < max) {
			progress = scrollY / max;

			footer.style.bottom = (-40 + 60 * progress) + "px";
			backButton.style.top = (-170 + 200 * progress) + "px";
		}
		else if (progress < 1) {
			progress = 1;

			footer.style.bottom = (-40 + 60 * progress) + "px";
			backButton.style.top = (-170 + 200 * progress) + "px";
		}
	}
}
