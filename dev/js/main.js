$(document).ready(function(e) {
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
});

$(window).on('load', function () {
	$('.c-blog__articles').masonry({
		itemSelector: '.c-blog__article',
		columnWidth: '.grid-sizer'
	});	
});