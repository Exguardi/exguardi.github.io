/* @flow */

/*
	Future Imperfect by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge:	'(max-width: 1680px)',
		large:	'(max-width: 1280px)',
		medium:	'(max-width: 980px)',
		small:	'(max-width: 736px)',
		xsmall:	'(max-width: 480px)'
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$menu = $('#menu'),
			$sidebar = $('#sidebar'),
			$main = $('#main');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// IE<=9: Reverse order of main and sidebar.
			if (skel.vars.IEVersion <= 9)
				$main.insertAfter($sidebar);

		// Menu.
			$menu
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'is-menu-visible'
				});

		// Search (header).
			var $search = $('#search'),
				$search_input = $search.find('input');

			$body
				.on('click', '[href="#search"]', function(event) {

					event.preventDefault();

					// Not visible?
						if (!$search.hasClass('visible')) {

							// Reset form.
								$search[0].reset();

							// Show.
								$search.addClass('visible');

							// Focus input.
								$search_input.focus();

						}

				});

			$search_input
				.on('keydown', function(event) {

					if (event.keyCode == 27)
						$search_input.blur();

				})
				.on('blur', function() {
					window.setTimeout(function() {
						$search.removeClass('visible');
					}, 100);
				});

				// custom tipue site search integration
				/*$('#tipue_search_input').tipuesearch({
						 'mode': 'live'
				});*/
				/*$('#tipue_search_input').tipuesearch();*/

		// Nav (Header)
			$header = $('header');
			var pathname = document.location.href;
			if(pathname!=null) { // make sure we don't execute this on null path
				// Highlight link for current page
				if(pathname!="/" || pathname.indexOf('file://') > -1) {
					pathname = pathname.split("/").slice(-1).toString();
					pathname = pathname.replace(/-.*\./, '.'); // remove all characters after a - and before . so our subpages work
					pathname = pathname.split("#")[0]; // remove # and everything after it if it exists
					if(pathname!="") { // disregard site root
						var failures = 0;
						var $links = $header.find('ul').first().find('li a');
						$links.each(function(index) {
							if( $(this).attr('href').indexOf(pathname) > -1 ) {
								$(this).css("font-weight", 800);
							} else {
								$(this).css("font-weight", 100);
								failures++;
							}
						});
						if(failures<$links.length) { // add exception for the Index which is not in the normal group
								$header.find('h1').css("font-weight", 100);
						}
					}
				}
			} else {
				console.warn('Page location failed to parse. Navigation links may not highlight correctly.');
			}


		// Intro.
			var $intro = $('#intro');

			// Move to main on <=large, back to sidebar on >large.
				skel
					.on('+large', function() {
						$intro.prependTo($main);
					})
					.on('-large', function() {
						$intro.prependTo($sidebar);
					});
	});

})(jQuery);

/* CUSTOM BOX RESIZING FOR SAFARI */
function safariBoxes(){
	if($(window).width() > 980){
		$('.badges.box').each(function(){
			var newHeight = $(this).parents('.meta').siblings('.title').height();
			console.log(newHeight);
			$(this).css('height', newHeight);
		});
	}
}
$(window).resize(function(){
	safariBoxes();
})
$(document).ready(function(){
	safariBoxes();
});
