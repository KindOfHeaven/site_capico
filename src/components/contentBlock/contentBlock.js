$(window).on('load', function() {
	function contentIcons() {
		jQuery('.content-block._has-icon').each(function() {
		
			const item = jQuery(this).find('.content-block__icon:eq(0)');
			
			item.width = item.outerWidth();
			// item.height = item.outerHeight();
		
			var left = windowOuterWidth > 480 ? item.width + 43 : item.width + 23;
			// var top = $(window).outerWidth() > 1024 ? (400 - item.height)/2 : (300 - item.height)/2;
		
			item.css({'left': -left}).addClass('calculated');
		
		})
	}
	if (windowOuterWidth < 1024) {
		contentIcons();
	} else {
		setTimeout(() => {
			contentIcons();
		}, 2000)
	}
	jQuery(window).resize(() => contentIcons());
})