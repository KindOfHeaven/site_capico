'use strict';

const APP = new Object();
const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream; 
var windowOuterWidth = iOS ? screen.width : window.outerWidth;
windowOuterWidth = iOS && windowOuterWidth === 768 && window.orientation ? 1024 : windowOuterWidth;
var windowInnerHeight = window.innerHeight;
if (iOS && windowOuterWidth > 1023) {
	$('body,html').css({'height': windowInnerHeight});
	window.addEventListener('orientationchange', () => {
		// $(window).trigger('resize')
	})
}
APP.wrapper = {
	element: $('#app'),
	resizeHeight: function() {
		if (windowOuterWidth < 1024) {
			this.element.css('height', '');
			return 0
		}
		let height = iOS ? windowInnerHeight : document.body.clientHeight;
		this.element.css('height', height);
	}
}

APP.slider = {
	element: $('#slider'),
	initSlider: function(config) {
  		this.element.on('init', function(e) {
			APP.navigation.calculatePosition();	
  		})
  		this.element.on('afterChange', function(e) {
  			setTimeout(function() {
				$('.slide.slick-active .animate').removeClass('animate')
				$('.slide.slick-active .calculated').removeClass('calculated')
  			},1000)
  		})
		this.element.slick(config);
		this.element.on('touchmove', function(e) {
			this.element.trigger('wheel');
		})
		this.element.on('wheel', (function(e) {
			if (!e.deltaMode && Math.abs(e.originalEvent.deltaY) < 10 && windowOuterWidth > 1336) {
            	return;
        	}
  			e.preventDefault();
  			if (e.originalEvent.deltaY < 0) {
  				$(this).slick('slickPrev');
  			} else {
  				$(this).slick('slickNext');
  			}
  		}));
  		this.element.on('keydown', (function(e) {
  			if (e.keyCode === 37) {
  			  $(this).slick('slickPrev')
  			}
  			if (e.keyCode === 39) {
  			  $(this).slick('slickNext')
  			}
  		}))
	}
};

APP.navigation = {
	element: $('#nav'),
	calculatePosition: function() {
		const width = parseInt(this.element.css('width'));
		if (windowOuterWidth === 1024 && iOS && window.innerWidth > 1300) {
			this.element.css({'left': (window.innerWidth - width)/2});	
		} else {
			this.element.css({'left': (windowOuterWidth - width)/2});
		}
	}
}

$(document).ready(() => { 
	APP.wrapper.resizeHeight();
	APP.slider.initSlider({
		arrows: false,
		dots: true,
		infinite: false,
		edge: false,
		draggable: true,
		appendDots: APP.navigation.element,
		responsive: [
			{
				breakpoint: 1024,
				settings: "unslick"
			}
		]
	});

	$(window).resize(() => {

		APP.wrapper.resizeHeight();
		APP.navigation.calculatePosition();

	})

})