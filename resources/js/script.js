//must have this to start, all goes inside this
$(document).ready(function(){

	$('.js--section-features').waypoint(function(direction) { 
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	})

	/*
	var waypoints = $('#handler-first').waypoint(function(direction) {
	  notify(this.element.id + ' hit 25% from top of window') 
	}, {
	  offset: '25%'
	})
	*/











});
//must have that to finish, all goes inside this