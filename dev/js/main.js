$(document).ready(function() {
	$('.c-header__mobile-open').click(function(e){
		$('.c-header__navOpen').addClass('c-header__navOpen--open');
		e.preventDefault();
	});

	$('.close-nav').click(function (e) {
		$('.c-header__navOpen').removeClass('c-header__navOpen--open');
		e.preventDefault();
	});	
});

