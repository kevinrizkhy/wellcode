jQuery(function($) {'use strict';
	
	// Navigation Scroll
	$(window).scroll(function(event) {
		Scroll();
	}); 

	$('#main-menu.navbar-default .products-dropdown-menu .products-clickable').on('mouseover', function(e) {
		var image_title = $(e.currentTarget).children().html();
		var image_description = $(e.currentTarget).attr("img-desc");
		var image_url = $(e.currentTarget).attr("img-url");
		
		if (typeof image_url !== 'undefined') {
			if ($(window).width() >= 720) {
				$( "#main-menu.navbar-default .products-dropdown-menu" ).stop().animate({
					width: '620px'
					}, 300, function() {
						var background = 'url("' + image_url + '")';
						$( "#main-menu.navbar-default .products-dropdown-menu .products-link-image" ).css('background-image', background);
						$( "#main-menu.navbar-default .products-dropdown-menu .products-link-image" ).css('background-repeat', 'no-repeat');
						$( "#main-menu.navbar-default .products-dropdown-menu #product-title" ).html(image_title);
						$( "#main-menu.navbar-default .products-dropdown-menu .products-link-image" ).css("display", "block");
						$( "#main-menu.navbar-default .products-dropdown-menu .products-link-image" ).stop().animate({
							width: '325px',
						}, 20, function() {
							/*$( "#main-menu.navbar-default .products-dropdown-menu #product-description" ).html(image_description);*/
						});
					});
			}
		}
		return false;
	});
	
	$('#main-menu.navbar-default .products-dropdown-menu .products-clickable').on('mouseout', function() {
		if ($(window).width() >= 720) {
			$( "#main-menu.navbar-default .products-dropdown-menu #product-description" ).html("");
			$( "#main-menu.navbar-default .products-dropdown-menu .products-link-image" ).stop().animate({
				width: '0px',
			}, 20, function() {
			});
			$( "#main-menu.navbar-default .products-dropdown-menu .products-link-image" ).css("display", "none");
			$( "#main-menu.navbar-default .products-dropdown-menu" ).stop().animate({
				width: '230px'
			}, 300, function() {		
			});
		}
		return false;
	});
	
	$('#main-menu.navbar-default .dropdown-menu .applications-clickable').on('mouseover', function(e) { 
		var image_url = $(e.currentTarget).attr("img-url");
		/*if (typeof image_url !== 'undefined') {
			if ($(window).width() >= 720) {
				$( "#main-menu.navbar-default .applications-dropdown-menu" ).stop().animate({
					width: '530px'
					}, 300, function() {
						var background = 'url("' + image_url + '")';
						$( "#main-menu.navbar-default .applications-dropdown-menu .applications-link-image" ).css('background-image', background);
						$( "#main-menu.navbar-default .applications-dropdown-menu .applications-link-image" ).css('background-repeat', 'no-repeat');
						$( "#main-menu.navbar-default .applications-dropdown-menu .applications-link-image" ).css("display", "block");
						$( "#main-menu.navbar-default .applications-dropdown-menu .applications-link-image" ).stop().animate({
							width: '325px',
						}, 20, function() {
						});
					});
			}
		}*/
		return false;
	});
	
	$('#main-menu.navbar-default .applications-dropdown-menu .applications-clickable').on('mouseout', function() {
		/*if ($(window).width() >= 720) {
			$( "#main-menu.navbar-default .applications-dropdown-menu .applications-link-image").stop().animate({
				width: '0px',
			}, 20, function() {
			});
			$( "#main-menu.navbar-default .applications-dropdown-menu .applications-link-image" ).css("display", "none");
			$( "#main-menu.navbar-default .applications-dropdown-menu" ).stop().animate({
				width: '190px'
			}, 300, function() {			
			});
		}*/
		return false;
	});

	// User define function
	function Scroll() {
		var contentTop      =   [];
		var contentBottom   =   [];
		var winTop      =   $(window).scrollTop();
		var rangeTop    =   200;
		var rangeBottom =   500;
		$('.navbar-collapse').find('.scroll a').each(function(){
			contentTop.push( $( $(this).attr('href') ).offset().top);
			contentBottom.push( $( $(this).attr('href') ).offset().top + $( $(this).attr('href') ).height() );
		})
		$.each( contentTop, function(i){
			if ( winTop > contentTop[i] - rangeTop ){
				$('.navbar-collapse li.scroll')
				.removeClass('active')
				.eq(i).addClass('active');			
			}
		})
	};

	$('#tohash').on('click', function(){
		$('html, body').animate({scrollTop: $(this.hash).offset().top - 5}, 1000);
		return false;
	});

	// accordian
	$('.accordion-toggle').on('click', function(){
		$(this).closest('.panel-group').children().each(function(){
		$(this).find('>.panel-heading').removeClass('active');
		 });

	 	$(this).closest('.panel-heading').toggleClass('active');
	});

	//Slider
	$(document).ready(function() {
		var time = 7; // time in seconds

	 	var $progressBar,
	      $bar, 
	      $elem, 
	      isPause, 
	      tick,
	      percentTime;
	 
		$("#main-slider").find('.owl-carousel').owlCarousel({
			items: 1,
			loop: true,
			navText: [
				"<i class='fa fa-angle-left'></i>",
				"<i class='fa fa-angle-right'></i>"
			],
			dots: true,
			dotsEach: 1,
			autoplay: true,
			autoplayTimeout: 40000,
			autoplaySpeed: 1000,
			dotsSpeed: 1000,
			autoplayHoverPause: true,
	      //autoHeight : true,
	    });
	 
	    //Init progressBar where elem is $("#owl-demo")
	    function progressBar(elem){
	      $elem = elem;
	      //build progress bar elements
	      buildProgressBar();
	      //start counting
	      start();
	    }
	 
	    //create div#progressBar and div#bar then append to $(".owl-carousel")
	    function buildProgressBar(){
	      $progressBar = $("<div>",{
	        id:"progressBar"
	      });
	      $bar = $("<div>",{
	        id:"bar"
	      });
	      $progressBar.append($bar).appendTo($elem);
	    }
	 
	    function start() {
	      //reset timer
	      percentTime = 0;
	      isPause = false;
	      //run interval every 0.01 second
	      tick = setInterval(interval, 10);
	    };
	 
	    function interval() {
	      if(isPause === false){
	        percentTime += 1 / time;
	        $bar.css({
	           width: percentTime+"%"
	         });
	        //if percentTime is equal or greater than 100
	        if(percentTime >= 100){
	          //slide to next item 
	          $elem.trigger('owl.next')
	        }
	      }
	    }
	 
	    //pause while dragging 
	    function pauseOnDragging(){
	      isPause = true;
	    }
	 
	    //moved callback
	    function moved(){
	      //clear interval
	      clearTimeout(tick);
	      //start again
	      start();
	    }
	});

	//Initiat WOW JS
	new WOW().init();
	//smoothScroll
	smoothScroll.init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	$(document).ready(function() {
		//Animated Progress
		$('.progress-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			if (visible) {
				$(this).css('width', $(this).data('width') + '%');
				$(this).unbind('inview');
			}
		});

		//Animated Number
		$.fn.animateNumbers = function(stop, commas, duration, ease) {
			return this.each(function() {
				var $this = $(this);
				var start = parseInt($this.text().replace(/,/g, ""));
				commas = (commas === undefined) ? true : commas;
				$({value: start}).animate({value: stop}, {
					duration: duration == undefined ? 1000 : duration,
					easing: ease == undefined ? "swing" : ease,
					step: function() {
						$this.text(Math.floor(this.value));
						if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
					},
					complete: function() {
						if (parseInt($this.text()) !== stop) {
							$this.text(stop);
							if (commas) { $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")); }
						}
					}
				});
			});
		};

		$('.animated-number').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
			var $this = $(this);
			if (visible) {
				$this.animateNumbers($this.data('digit'), false, $this.data('duration')); 
				$this.unbind('inview');
			}
		});
	});

	// Contact form
	var form = $('#main-contact-form');
	form.submit(function(event){
		event.preventDefault();
		var form_status = $('<div class="form_status"></div>');
		$.ajax({
			url: $(this).attr('action'),
			beforeSend: function(){
				form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Email is sending...</p>').fadeIn() );
			}
		}).done(function(data){
			form_status.html('<p class="text-success">Thank you for contact us. As early as possible  we will contact you</p>').delay(3000).fadeOut();
		});
	});

	//Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});

	//Google Map
	var latitude = $('#google-map').data('latitude');
	var longitude = $('#google-map').data('longitude');
	function initialize_map() {
		var myLatlng = new google.maps.LatLng(latitude,longitude);
		var mapOptions = {
			zoom: 16,
			scrollwheel: false,
			center: myLatlng
		};
		var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
		var marker = new google.maps.Marker({
			position: myLatlng,
			map: map
		});
	}
	google.maps.event.addDomListener(window, 'load', initialize_map);
	
	$(document).ready(function() {
		$('.image-popup-vertical-fit').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			mainClass: 'mfp-img-mobile',
			image: {
				verticalFit: true
			}
			
		});
	
		$('.image-popup-fit-width').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			image: {
				verticalFit: false
			}
		});
	
		$('.image-popup-no-margins').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});
		
		$('.popup-gallery').magnificPopup({
			delegate: 'a',
			type: 'image',
			tLoading: 'Loading image #%curr%...',
			mainClass: 'mfp-img-mobile',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
				titleSrc: function(item) {
					return item.el.attr('title');
				}
			}
		});
		
		$('[data-toggle="tooltip"]').tooltip({placement: "bottom"});
	});
});