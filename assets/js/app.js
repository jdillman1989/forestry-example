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
		if($(window).width() > breakPoint && $('.aside-container').outerHeight() < ($('.content-container').outerHeight() - 50) ){
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

	$('body').on('click', '.accordion-toggle', function(e) {
		e.preventDefault();
		$(this).toggleClass('active');
		$(this).next('.accordion-content').slideToggle(300);
	});

	//////////////////
	// Contact Form //
	//////////////////

	$('form.contact').submit(function(e){
		e.preventDefault();
		var el = $(this),
			name = el.find('.name').val(),
			email = el.find('.email').val(),
			message = el.find('.message').val(),
			subject = el.attr('name');
		$.ajax({
			type: 'POST',
			url: 'https://wt-9a9836193ef80b974d75acd701bbf74e-0.sandbox.auth0-extend.com/contact',
			data: {email: email, name: name, message: message, subject: subject},
			dataType: 'json',
			complete: function(response) {
				el.html('<h3>' + response.responseJSON.message + '</h3>');
			}
		});
	});
});
