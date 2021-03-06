if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	// PRELOADER UTILITY
	var AceLoadImages = AceLoadImages || function(a, d, z) {
		a instanceof Array || (a = [a]);
		for (var e = a.length, f = 0, g = e; g--;) {
			var b = document.createElement("img");
			b.onload = function() {
				f++; 
				f >= e && isFunction(d) && d(z)
			};
			b.src = a[g]; 
		}
	}

	var isFunction = isFunction || function(functionToCheck) {
		var getType = {};
		return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	}	

	AceLoadImages([
		'assets/img/planes/NASM Illustration_v4-09.png',
		'assets/img/planes/NASM Illustration_v4-10.png',
		'assets/img/planes/NASM Illustration_v4-11.png',
		'assets/img/planes/NASM Illustration_v4-12.png',
		'assets/img/planes/NASM Illustration_v4-13.png',
		'assets/img/planes/NASM Illustration_v4-14.png',
		'assets/img/planes/NASM Illustration_v4-15.png',
		'assets/img/bg/bg-apollo.png',
		'assets/img/bg/bg-last-transform-blur.jpg',
		'assets/img/bg/bg-last-transform-norm.jpg',
		'assets/img/bg/bg-mustang.png',
		'assets/img/bg/bg-rover.png',
		'assets/img/bg/bg-shuttle.png',
		'assets/img/bg/bg-spirit.png',
		'assets/img/bg/bg-splash.png',
		'assets/img/bg/bg-sputnik.png',
		'assets/img/bg/bg-station.png',
		'assets/img/bg/bg-wright.png',
	], imagesAreLoaded);

	function imagesAreLoaded() {
	  	TweenMax.to(".l-splash-overlay" , 0.75, {
	  		autoAlpha: 0,
	  		display: "none",
	  		ease: Back.easeInOut, 		
	  		onComplete: function() {
	  			
	  			TweenMax.to(".l-section-splash img" , 0.5, {
			  		autoAlpha: 1,
			  		left: "50%",
			  		top: "50%",
			  		ease: Back.easeInOut
			  	});
	  		}
	  	});
	}
	// END PRELOAD UTILITY

	// INIT FUNCTION
	var init = function() {
		console.log('cornerstone API works');
		// MOUSEWHEEL
		$('html, body, *').mousewheel(function(event, delta) {
		    var speed = 3;
		    this.scrollLeft -= (delta * speed);
		    this.scrollRight -= (delta * speed);
		    event.preventDefault();
		});

		// stellar for now, knock out after waypoints
		$(window).stellar();

		// STELLAR JS
		$.stellar({
			horizontalScrolling: true,
			responsive: true,
			scrollProperty: 'scroll',
			positionProperty: 'position'
		});

		// MOBILE TOGGLE
		var mobileNav = new TimelineMax({paused: true});

		mobileNav.to(["#mobile-list"], 0.15, {left: 0, ease: Back.easeInOut});
		
		// EVENT HANDLER
		$(".mobile-nav-icon").on("click", function() {
			console.log("presssed");
			// REVERSE ANIMATION 
			if ($(this).hasClass("played")) {
				mobileNav.reverse();	
			} else {
				mobileNav.play();
			}	
			$(this).toggleClass("played");
		});

		// SCROLL TO's
		$("#section-start").click(function() {
		    $('html, body').animate({
		        scrollLeft: $("#mStart").offset().left -1
		    }, 2000);
		});

		$("#section-1").click(function() {
		    $('html, body').animate({
		        scrollLeft: $("#m1").offset().left -1
		    }, 2000);
		});

		$("#section-2").click(function() {
		    $('html, body').animate({
		        scrollLeft: $("#m2").offset().left -1
		    }, 3000);
		});

		$("#section-3").click(function() {
		    $('html, body').animate({
		        scrollLeft: $("#m3").offset().left -1
		    }, 3000);
		});

		$("#section-4").click(function() {
		    $('html, body').animate({
		        scrollLeft: $("#m4").offset().left -1
		    }, 3000);
		});

		$("#section-5").click(function() {
		    $('html, body').animate({
		        scrollLeft: $("#m5").offset().left -1
		    }, 3000);
		});

		$("#section-6").click(function() {
		    $('html, body').animate({
		        scrollLeft: $("#m6").offset().left -1
		    }, 3000);
		});

		$("#section-7").click(function() {
		    $('html, body').animate({
		        scrollLeft: $("#m7").offset().left -1
		    }, 3000);
		});

		$("#section-8").click(function() {
		    $('html, body').animate({
		        scrollLeft: $("#m8").offset().left -1
		    }, 3000);
		});

		$("#section-museum").click(function() {
		    $('html, body').animate({
		        scrollLeft: $("#m9").offset().left -1
		    }, 3000);
		});


		$(".l-section-last").on("click", function(){
			finalSectionTransition.play();
		});

		// WHOLE DIV LINK
		$(".four-col").click(function(){
		     window.location=$(this).find("a").attr("href"); 
		     return false;
		});

		// WAYPOINTS HORIZONTAL PARALLAX STUFF
		console.log("make waypoints");
		var waypoint = new Waypoint({
			element: document.body,
			horizontal: true,
			offset: '-100%', // full width of section
			handler: function(direction) {
				console.log("section 1 happened");
				TweenMax.to("#l-section-1 .body-copy", 1, {color: "blue"});
				// todo: write tweenmax timelines on elements (background, planes, clouds, stars, etc...)
			}
		});

		// ANIMATION TIMELINE
		var finalSectionTransition = new TimelineMax();

		finalSectionTransition.to(["#l-last-copy", ".l-tablet-container"], 0.75, {autoAlpha: 0, scale: 0, display: "none", ease: Quad.easeInOut});
		finalSectionTransition.to(".l-section-overlay", 0.75, {autoAlpha: 1, display: "block", scale: 1, ease: Back.easeInOut}, "-=0.25");
		finalSectionTransition.to(".l-section-overlay", 1, {autoAlpha: 0, display: "none", ease: Back.easeInOut}, "-=0.05");
		finalSectionTransition.to(".l-section-overlay-final", 1, {autoAlpha: 1, display: "block", ease: Quad.easeInOut}, "-=0.25");
		finalSectionTransition.to(".museum-logo", 0.75, {autoAlpha: 1, top: "50%", ease: Back.easeInOut}, "-=0.75");
		finalSectionTransition.staggerTo(".l-section-overlay-final .three-col", 0.55, {autoAlpha: 1, height: 80, ease: Back.easeInOut}, 0.15);

		finalSectionTransition.pause();

	}; // END INIT

	shared.init = init;

	return shared;
}());

$(document).ready(function() {
	cornerstoneAPI.init();
});
