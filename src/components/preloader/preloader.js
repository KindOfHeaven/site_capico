jQuery(window).on('load', function() {
	
	const body = jQuery('body');
	
	console.log(body);

	setTimeout(() => {
		body.removeClass('loading')
	}, 300)

})