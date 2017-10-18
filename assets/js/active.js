/*------------------------------------------------------------------------------------
    
      JS INDEX
    =============

    01. Navigation
    02. Smoothscroll js
    03. Gallery Lightbox
    04. Testimonial slider

-------------------------------------------------------------------------------------*/

(function ($) {
	"use strict";

    
    /*==============================================
	               01. Navigation
	===============================================*/
        
	$('a.page-scroll').on('click', function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top - 50
		}, 1500);
		e.preventDefault();
	});		

	$(window).on('scroll', function() {
		var menuTop = $('.menu-top');
		if ($(this).scrollTop() > 100) {
			menuTop.addClass('menu-shrink');
		} else {
			menuTop.removeClass('menu-shrink');
		}
	});			
	
	$(document).on('click','.navbar-collapse.in',function(e) {
		if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
			$(this).collapse('hide');
		}
	});
        
    
    /*==============================================
	               02. Smoothscroll js
	===============================================*/

        $('a[href*="#"]:not([href="#"])').on(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	   });

        
    /*==============================================
                    03. Gallery Lightbox
    ===============================================*/
	           
     $(".gallery-lightbox").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
             zoom: {
                    enabled: true, // By default it's false, so don't forget to enable it

                    duration: 300, // duration of the effect, in milliseconds
                    easing: 'ease-in-out', // CSS transition easing function

                    // The "opener" function should return the element from which popup will be zoomed in
                    // and to which popup will be scaled down
                    // By defailt it looks for an image tag:
                    opener: function (openerElement) {
                        // openerElement is the element on which popup was initialized, in this case its <a> tag
                        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                        return openerElement.is('img') ? openerElement : openerElement.find('img');
                    }
                }
        });
        
        
        /*==============================================
                       04. Testimonial slider
        ===============================================*/

        $('.client-say').owlCarousel({
              center: true,
              autoplay:true,
              loop:true,
              touchDrag:false,
              mouseDrag:false,
              autoplaySpeed:1200,
              autoplayTimeout:11000,
            dots:true,
              responsive:{
                  0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
              }
          });


}(jQuery));	

