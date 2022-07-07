'use strict';
document.addEventListener('DOMContentLoaded', () => {
  
    // $('.phones-button').click(function (e) {
    //     $(this).toggleClass('active');
    //     $('.header-top__phones_block').slideToggle();
    //     $('.header-top__schedule_block').hide();
    //     $('.schedule-button').removeClass('active');
    // });
    
    $('[data-role=toggle-block]').each(function() {
        console.log(1)
		var $block = $(this);
		$block.on('click.toggle', '[data-role=toggle-btn]', function() {
			console.log(1)
            var $btn = $(this);
			var $data = $block.find('[data-role=toggle-data]');

			// toggle $btn
			$btn.toggleClass('shown');
			// show/hide $data
			$data.slideToggle(200);
		});
	});

});