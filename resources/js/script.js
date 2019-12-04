//must have this to start, all goes inside this
$(document).ready(function(){                                                                                    
	$('.js--section-features').waypoint(function(direction) { 
		if (direction == "down") {                            
			$('nav').addClass('sticky');                      
		} else {                                              
			$('nav').removeClass('sticky');                   
		}
    }, {
        offset: '60px;'
	});                                                     
/*button action - scroll on button clicks */
$('.js--scroll-to-plans').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
});

$('.js--scroll-to-start').click(function () {
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
});
/* navigation scroll smooth */
$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});  
    
/*  animation on scroll - stuff shows up in section as you scroll to that section...pretty cool affect*/    
/* jquery triggers the animation, css animates the wanted affect*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn'); /*this will fade the 4 icons and paragraphs in */
    }, {
        offset: '50%'
    });
    
    
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    
    
    
    
    
    
    
    
});
//must have that to finish, all goes inside this