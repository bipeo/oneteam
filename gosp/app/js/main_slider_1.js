$(document).ready(function () {
		// initiates gallery slider			
		var TSsettings = function() {
			var TSsettings1 = {
				infiniteLoop: true,
				controls: false,
				arrows: false,
				variableWidth: true,
				auto:true,
				slidesToShow: 3,
				minSlides: 3,
				maxSlides: 4,
				moveSlides: 1,
				startSlide: 0,
				mode: 'vertical',
                            
			};
			var TSsettings2 = {
				infiniteLoop: true,
				controls: false,
				arrows: false,
				variableWidth: true,
				auto:true,
				slidesToShow: 3,
				maxSlides: 10,
				moveSlides: 1,
				startSlide: 0,
				slideWidth: 480
			};
			return ($(window).width()<530) ? TSsettings1 : TSsettings2;
		}

		var TSSlider;

		function TStourLandingScript() {
			TSSlider.reloadSlider(TSsettings());
		}
                
               
                TSSlider = $('#top_slider').show().bxSlider(TSsettings());
               
		
		$(window).resize(TStourLandingScript);

		
	});