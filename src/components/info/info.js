function info() {
	jQuery('.mode__inner .info').css({'height': ''})
	jQuery('.portfile__inner .info').css({'height': ''})
	jQuery('.compass__inner .content-block').css({'height': ''})
	if (windowOuterWidth > 1023) {
		return 0
	}
	const height = jQuery('.mode__inner .mode__inner--img').height();
	const heightP = jQuery('.portfile__inner .portfile__icon svg').height();
	const heightC = jQuery('.compass__inner .compass__img').height();

	var newHeight = jQuery('.mode__inner .info').height();
	var newHeightP = jQuery('.portfile__inner .info').height();
	var newHeightC = jQuery('.compass__inner .content-block').height();

	jQuery('.mode__inner .info').css({'height': height + newHeight});
	jQuery('.portfile__inner .info').css({'height': heightP + newHeightP});
	jQuery('.compass__inner .content-block').css({'height': heightC + newHeightC});
}

jQuery(document).ready(function() {

	info()

	jQuery(window).on('resize', () => info())

})