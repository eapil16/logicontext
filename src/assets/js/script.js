'use strict';
document.addEventListener('DOMContentLoaded', () => {  
 
    $('[data-role=toggle-block]').each(function() {
		var $block = $(this);
		$block.on('click.toggle', '[data-role=toggle-btn]', function() {
            var $btn = $(this);
			var $data = $block.find('[data-role=toggle-data]');

			// toggle $btn
			$btn.toggleClass('shown');
			// show/hide $data
			$data.slideToggle(200);
		});
	});

	$(".banner-image").mousemove(function(e) {
		parallaxIt(e, ".parallax-one", -10);
		parallaxIt(e, ".parallax-two", -25);
	  });
	  
	  function parallaxIt(e, target, movement) {
		var $this = $(".banner-image");
		var relX = e.pageX - $this.offset().left;
	  
		TweenMax.to(target, 1, {
		  x: (relX - $this.width() / 2) / $this.width() * movement,
	  	});
	}

	try {
		new WOW().init();
	} catch (err) {}

	const mainSlider = new Swiper(".portfolio-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".portfolio-next",
            prevEl: ".portfolio-prev",
        },
    });

	const reviewsSlider = new Swiper(".reviews-slider", {
        allowTouchMove: true,
        slidesPerView: 1,
        loop: true,
        spaceBetween: 0,
        speed: 800,
        navigation: {
            nextEl: ".reviews-next",
            prevEl: ".reviews-prev",
        },
    });

	

});