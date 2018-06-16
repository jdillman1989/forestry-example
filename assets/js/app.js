jQuery(document).ready(function($) {

	var breakPoint = 800;

	////////////////////
	// Scroll Sidebar //
	////////////////////

	var scroll = $('.aside-container'),
		navHeight = $('nav').outerHeight(),
		fixPoint = scroll.offset().top - navHeight;

	var footerHeight = $('footer').outerHeight(),
		docHeight = $(document).height(),
		footerPoint = (docHeight - screen.height) + footerHeight;

	$(window).scroll(function(){
		if($(window).width() > breakPoint){
			if ($(window).scrollTop() >= fixPoint){
				scroll.addClass('fixed');
				docHeight = $(document).height();
				footerPoint = (docHeight - screen.height) + footerHeight;
				if ($(window).scrollTop() >= footerPoint){
					scroll.css({'transform': 'translate(0, ' + ( -1 * ($(window).scrollTop() - footerPoint)) + 'px'});
				}
			}
			else{
				scroll.removeClass('fixed');
			}
		}
	});

    ///////////////
    // Accordion //
    ///////////////

	$('body').on('click', '.accordion-toggle', function() {
		$(this).toggleClass('active');
		$(this).next('.accordion-content').slideToggle(300);
	});
});
