window.sr = ScrollReveal({ reset: true });
sr.reveal('.c-blog__article', {
	duration   : 800,
	distance   : "50px",
	delay	   : 0,
	scale      : 0.9,
	viewFactor : 0.2,
	scale      : 0.99
});


$(document).ready(function(e) {	

	// Acordeon
	$('.c-savaTemas__boxes').on('click', '.c-savaTemas__box', function(){
		var t = $(this);
		var tp = t.find('p');
		var p = t.siblings().find('p');
		tp.slideToggle();
		p.slideUp();
	});

	var win = $(window).width();


	$('.c-header__mobile-open').click(function(e){
		$('.c-header__navOpen').addClass('c-header__navOpen--open');
		e.preventDefault();
	});

	$('.close-nav').click(function (e) {
		$('.c-header__navOpen').removeClass('c-header__navOpen--open');
		e.preventDefault();
	});	

	$('.c-modalCupon__overlay').click(function(e){
		$('.c-modalCupon').hide();

		e.preventDefault();
	});

	$('.buscadorResultados__button').click(function (e) {
		$('.c-modalCupon').show();

		e.preventDefault();
	});		

	if(win < 992) {
		$('.c-modalMobile__btn').click(function (e) {
			$('.c-modalMobile__firstStep').removeClass('c-modalMobile__firstStep--active');
			$('.c-modalMobile__secondStep').addClass('c-modalMobile__secondStep--active');

			e.preventDefault();
		});

		$('.buscadorResultados__button').click(function (e) {
			$('.c-modalMobile').show();

			e.preventDefault();
		});			

		$('.c-modalMobile__btn-imprimir').click(function (e) {
			$('.c-modalMobile__firstStep').addClass('c-modalMobile__firstStep--active');
			$('.c-modalMobile__secondStep').removeClass('c-modalMobile__secondStep--active');			
			$('.c-modalMobile').hide();

			e.preventDefault();
		});
	}


	$('#slider').owlCarousel({
		loop: true,
		margin: 0,
		dots: true,
		nav: false,
		responsiveClass: true,
		autoplay: true,
		autoplayTimeout: 5000,
		smartSpeed: 350,
		items: 1
	});

	$('#quienes-somos').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	})	
});

$(window).on('load', function () {
	$('.c-blog__articles').masonry({
		itemSelector: '.c-blog__article',
		columnWidth: '.grid-sizer'
	});
});