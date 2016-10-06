$(function(){
	
	$window = $(window);
	if( $window .width() > 800){
		$('.parallax-scroll1').parallax("50%", 0.5);
		$('.parallax-scroll2').parallax("50%", 0.5);
	}
	
	
	$('.main-navigation').onePageNav({
		
		filter: ':not(.external)',
	    currentClass: 'current',
		scrollOffset: 85,
	    scrollSpeed: 1000,
	    scrollThreshold: 0.5 ,
	    easing: 'easeInOutExpo'
	   
	});
	
	
	$('.contact-link').magnificPopup({
		type: 'inline',
		preloader: false,
		modal: true
	});
	
	$(document).on('click', '.close-btn', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
	
	
	
});

