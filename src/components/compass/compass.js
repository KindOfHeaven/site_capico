$(document).ready(function() {
	const compass = $('.compass__inner .content-block__title').addClass('_slideUp').html();
	$('.compass__inner .content-block__title').text('').append(`<span>${compass}</span>`)
	$('.compass__inner .content-block').addClass('mb')
})