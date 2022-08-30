jQuery( document ).ready(function() {

    // slick slider
    jQuery('.slider-box').slick({
        rows: 1,
        dots: false,
        gap: 20,
        arrows: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 1300,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
            breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
            breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
            breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

     // sticky Menu
     jQuery(window).scroll(function () {
        var sticky = $('header'),
                scroll = $(window).scrollTop();

        if (scroll >= 70)
            sticky.addClass('fixed');
        else
            sticky.removeClass('fixed');
    });

    // toogle menu
    jQuery('.toggle-menu').click(function (e) {
        e.stopPropagation();
        jQuery('body').toggleClass('open-nav');
        jQuery(this).toggleClass('open');
    });

    if (jQuery(window).width() < 768) {
		// footer hider
		jQuery(".footer-links").hide();
		jQuery(".footer-title").click(function() {
			jQuery(this).toggleClass('open');
			jQuery(this).next(".footer-links").slideToggle();
		})
	}

});