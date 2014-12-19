if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function() {};

var cornerstoneAPI = (function(options) {
	var shared = {},
		options = options || {}
	
	// PRELOADER UTILITY
	// var AceLoadImages = AceLoadImages || function(a, d, z) {
	// 	a instanceof Array || (a = [a]);
	// 	for (var e = a.length, f = 0, g = e; g--;) {
	// 		var b = document.createElement("img");
	// 		b.onload = function() {
	// 			f++; 
	// 			f >= e && isFunction(d) && d(z)
	// 		};
	// 		b.src = a[g]; 
	// 	}
	// }

	// var isFunction = isFunction || function(functionToCheck) {
	// 	var getType = {};
	// 	return functionToCheck && getType.toString.call(functionToCheck) == '[object Function]';
	// }

	
	// // // USE
	// AceLoadImages([
	// 	// yourArrayOfImages.jpg,
	// 	// keepEmComming.jpg,
	// 	// calls imagesAreLoaded() function at end
	// ], imagesAreLoaded);

	// // // USE A PRELOADING IMAGE/TWEENMAX AFTER LOADS
	// function imagesAreLoaded() {
	// 	// do whatever it is that cant happen before the images are ready
	// 	TweenMax.to("#spinner" , 0.75, {
	//   		scale: 0,
	//   		autoAlpha: 0,
	//   		ease: Back.easeInOut
	//   	});
	// }
	// END PRELOAD UTILITY

	// INIT FUNCTION
	var init = function() {
		console.log('cornerstone API works');
		// MOUSEWHEEL
		$('html, body, *').mousewheel(function(event, delta) {
			// console.log(event.deltaX, event.deltaY, event.deltaFactor);
		    this.scrollLeft -= (delta * 30);
		    this.scrollRight -= (delta * 30);
		    event.preventDefault();
		});

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

		//mobileNav.pause();
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

		// $(".l-timeline-nav #section-start").on("mouseover", function(){
		// 	$(".l-timeline-nav .timeline-gauge").css(' background',' url(../img/other/hovers/start.png) ' );
		// 	TweenMax.to(".l-timeline-nav .timeline-gauge", 0.75, {
 	// 	  		css: {"background": "url(../img/other/hovers/start.png)"}
 	// 		});
		// });

		// $(function(){
		// 	$(window).scroll(function(e){
		// 		if($(this).scrollLeft()> 1000){
		// 			console.log("Happened");
		// 			TweenMax.to("#wright-text", 0.75, {
		// 		  		autoAlpha: 1,
		// 		  		scale: 1,
		// 				ease: Back.easeInOut
		// 			});
		// 		} else {
		// 			TweenMax.to("#wright-text", 0.75, {
		// 		  		autoAlpha: 0,
		// 		  		scale: 0,
		// 				ease: Back.easeInOut
		// 			});
		// 		}
		// 	});
		// });

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
			
		})

		// WHOLE DIV LINK
		$(".four-col").click(function(){
		     window.location=$(this).find("a").attr("href"); 
		     return false;
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