(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = '<img class="feed-image light-shadow" src="images/feed/profile1.jpg" />\n' +
    '<img class="feed-image light-shadow" src="images/feed/BOTH1.jpg" />\n' +
    '<img class="feed-image light-shadow" src="images/feed/BOTH2.jpg" />\n' +
    '<img class="feed-image light-shadow" src="images/feed/BOTH3.jpg" />\n' +
    '<img class="feed-image light-shadow" src="images/feed/BOTH4.jpg" />\n' +
    '<img class="feed-image light-shadow" src="images/feed/halloween.jpg" />\n' +
    '<img class="feed-image light-shadow" src="images/feed/mason-social1.jpg" />\n' +
    '<img class="feed-image light-shadow" src="images/feed/milkbar.jpg" />\n' +
    '<img class="feed-image light-shadow" src="images/feed/parkside.jpg" />\n' +
    '<img class="feed-image light-shadow" src="images/feed/tapes.jpg" />\n' +
    '';
},{}],2:[function(require,module,exports){
module.exports = '<div class="outlined light-shadow press-container">\n' +
    '	<div class="press-header">\n' +
    '		<h1> Ice Cream tapes by Weiner Records! [News] </h1>\n' +
    '		<h3> January 15, 2015 </h3>\n' +
    '	</div>\n' +
    '	<p>\n' +
    '		ICE CREAM\'S "WE\'RE SET" OUT NOW ON WIENER RECORDS!!! CRUCIAL GARAGE POP ROCK & COLA FROM THE BAY\'S #ICECREAM!!! \n' +
    '	</p>\n' +
    '	<img class="press" src="http://www.wienerrecords.org/WIENER%20RECORDS%20RED%20copy.png">\n' +
    '	<p>\n' +
    '		Get \'em while there hot -> <a href="http://www.wienerrecords.org/apps/webstore/products/show/5563017"> HERE </a>\n' +
    '	</p>\n' +
    '</div>\n' +
    '\n' +
    '<div class="outlined light-shadow press-container">\n' +
    '	<div class="press-header">\n' +
    '		<h1> KALW Today\'s Local Music [Feature] </h1>\n' +
    '		<h3> November 11, 2014 </h3>\n' +
    '	</div>\n' +
    '	<p>\n' +
    '		We\'re having some of our warmest weather of the year, so how about some Ice Cream?  Not the dairy treat, the band you\'re hearing now.\n' +
    '	</p>\n' +
    '	<img class="press" src="http://www.kalw.org/sites/kalw/themes/station/images/hdr-logo-kalw.png">\n' +
    '	<p>\n' +
    '		<a href="http://kalw.org/post/todays-local-music-ice-cream"> Check out the full feature here! </a>\n' +
    '	</p>\n' +
    '</div>\n' +
    '\n' +
    '<div class="outlined light-shadow press-container">\n' +
    '	<div class="press-header">\n' +
    '		<h1> Get to Know: Ice Cream [Feature] </h1>\n' +
    '		<h3> April 8, 2015 </h3>\n' +
    '	</div>\n' +
    '	<p>\n' +
    '		The music of Ice Cream may not be as innocently sweet as the treat they’re named after, but they’ll certainly delight anyone with even a passing interest in garage rock.\n' +
    '	</p>\n' +
    '	<img class="press" src="http://thebaybridged.com/wp-content/uploads/2013/12/baybrided_logo1-e1387917527159.png">\n' +
    '	<p>\n' +
    '		<a href="http://thebaybridged.com/2015/04/08/get-know-ice-cream/#.VVMUm7jBzRY"> Check out all the goodness! </a>\n' +
    '	</p>\n' +
    '</div>\n' +
    '\n' +
    '<div class="outlined light-shadow press-container">\n' +
    '	<div class="press-header">\n' +
    '		<h1> Side One Track One [Feature] </h1>\n' +
    '		<h3> November 19, 2014 </h3>\n' +
    '	</div>\n' +
    '	<p>\n' +
    '		You expect a certain sound when you hear of a band called Ice Cream. You expect the sound of summer, or maybe you expect bubbly, refreshing pop ‘n’ roll or maybe you just expect it to be a bunch of teenage girls in sparkly pantsuits dancing to a pre-recorded beat. Ice Cream is just about none of these...\n' +
    '	</p>\n' +
    '	<img class="press" src="images/press/SOTO-banner.jpg">\n' +
    '	<p>\n' +
    '		Read the full feature <a href="http://sideonetrackone.com/2014/11/ice-cream-noah/"> here </a>\n' +
    '	</p>\n' +
    '</div>';
},{}],3:[function(require,module,exports){
module.exports = '';
},{}],4:[function(require,module,exports){
module.exports = '<iframe style="border: 0; width: 540px; height: 655px;" class="light-shadow" src="http://bandcamp.com/EmbeddedPlayer/album=4230529859/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://icecreamlicks.bandcamp.com/album/were-set">We&#39;re set by Ice Cream</a></iframe>\n' +
    '\n' +
    '<iframe style="border: 0; width: 540px; height: 655px;" class="light-shadow" src="http://bandcamp.com/EmbeddedPlayer/album=1879345795/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="http://icecreamlicks.bandcamp.com/album/live-at-the-stork-club">Live at the Stork Club by Ice Cream</a></iframe>';
},{}],5:[function(require,module,exports){
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

},{"../public/templates/pictures.html":1,"../public/templates/press.html":2,"../public/templates/shows.html":3,"../public/templates/songs.html":4}]},{},[5]);
