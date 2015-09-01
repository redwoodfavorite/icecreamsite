var templates = {
	songs: require('../public/templates/songs.html'),
	pictures: require('../public/templates/pictures.html'),
	press: require('../public/templates/press.html'),
	shows: require('../public/templates/shows.html')
}

window.onload = function init()  {
	var songsButton      = document.getElementById('songs-button');
	var picturesButton   = document.getElementById('pictures-button');
	var pressButton      = document.getElementById('press-button');
	var showsButton      = document.getElementById('shows-button');
	var contentDiv       = document.getElementById('content');
	var logo             = document.getElementById('logo');
	var menu             = document.getElementById('menu');
	var background       = document.getElementById('background');
	var sectionContainer = document.querySelector('.section-container');
	var footer           = document.querySelector('footer');
	var backButton       = document.getElementById('back');
	var scrollIcon       = document.getElementById('scroll-icon');

	var stickyState = true;
	var scrollY = 0;
	var progress = 0;
	var max = 250;
	var stickyPos;

	songsButton.onclick    = switchSection.bind(null, 'songs');
	picturesButton.onclick = switchSection.bind(null, 'pictures');
	pressButton.onclick    = switchSection.bind(null, 'press');
	showsButton.onclick    = switchSection.bind(null, 'shows');

	handleScroll();
	switchSection('songs');

	function switchSection(section) {
		sectionContainer.innerHTML = templates[section];

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
			scrollIcon.style.opacity = 1 - progress;
		}
		else if (progress < 1) {
			progress = 1;

			logo.style.opacity = 1 - progress;
			footer.style.bottom = (-40 + 60 * progress) + "px";
			backButton.style.top = (-170 + 200 * progress) + "px";
			scrollIcon.style.opacity = 1 - progress * 2.0;
		}
	}
}
