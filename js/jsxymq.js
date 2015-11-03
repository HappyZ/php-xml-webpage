/*
**	Author: LaiSi
*/
$(function() {
	var pull = $('#pull'); menu = $('nav ul'); menuHeight = menu.height();
	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
});
$( document ).ready(function() {

	$('#nav .item').mouseenter(function () {
		$(this).children('#nav .subnav').finish().show();
	}).mouseleave(function () {
		$(this).children('#nav .subnav').finish().slideUp('slow');
	});
	$('#slider').slick({
		autoplay  : true,
		prevArrow : '<button type="button" class="slick-prev"><</button>',
		nextArrow : '<button type="button" class="slick-next">></button>'
	});
});

