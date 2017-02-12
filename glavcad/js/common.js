$(function() {
    

    
    // $('select').selectBoxes();
	
	$('#slick_1 .slick_carousel, #slick_3 .slick_carousel').slick({
		slidesToShow: 12,
		vertical: true,
		slidesToScroll: 2,
		arrows: true
    });
	
//	setTimeout(function() {
            $('#slick_2 .slick_carousel').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    dots: false
            });
//	},1500);
	
	$('.brand_slider').slick({
		slidesToShow: 9,
		slidesToScroll: 1,
		arrows: true,
		dots: false
	});
        
        $("#owl_1, #owl_2").owlCarousel({
                loop: true,
                items: 3,
                dots: false,
                nav: true

        });


        $("#owl_map").owlCarousel({
        loop: true,
        items: 1,
        dots: false,
        nav: true

        });

         $('select.soflow').selectBoxes({
        //    maxHeight : 40000 // the maximum height of the dropdown list

        });  
    $('.header').fixedHeader();
    $(window).scroll(function(){
        $('.header').fixedHeader();
    });
    
    $('body').sdboxScroll();
    
});


jQuery.fn.fixedHeader = function () {
    var window_width = $(window).width();
    if ($(window).scrollTop() >= 5 ) {
        this.addClass('fixed');
    }
    else {
        this.removeClass('fixed');
    } 
    return this;
}
