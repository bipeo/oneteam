$(document).ready(function(){
	$("select").selecter();
	
	$('.slick_slider').slick({
		arrows: true,
		dots: false
	});
	
	// accordeon
	$('.answer').css({'display':'none'});
			
	$('.accord_title').click(function(){
		$('.accord_title').not($(this)).removeClass('open');
		$('.answer').not($(this).next('.answer')).slideUp(500);
		$(this).next('.answer').slideToggle(500);
		$(this).toggleClass('open');
	});
	
	$('.block_4_ul li').matchHeight();
	
	// табы
    $('.tabs a').click(function(e) {
        e.preventDefault();
        $('.tabs .active').removeClass('active');
        $(this).parent().addClass('active');
        var tab = $(this).attr('href');
        $('.for_tabs > div').not(tab).css({'display':'none'});
        $(tab).fadeIn(400);
    });
	
	var slick_2 =  $('.slick_2').slick({
		slidesToShow: 1,
		slidesToScroll: 1,    
		infinite: true,
		//arrows: false,
                prevArrow: $('.prev'),
                nextArrow: $('.next'),
	});
        $('.slick_2').on('afterChange', function(event, slick, currentSlide, nextSlide){
         $('.block_3_ul > li').removeClass('act');
         $('.block_3_ul > li').eq(currentSlide).addClass('act');
         
          
        /*try toggle*/
      
        /*try toggle end*/ 
       // $('.block_3_ul > li[data-id=' + (currentSlide + 1) + ']').hide();
       
        });
	 $('.block_3_ul > li').on('click', function () {
              var slideIndex = $(this).index();
              $(".slick_2").slick('slickGoTo', parseInt(slideIndex));
	});
        
       
});

jQuery(window).scroll(function(){
    var block_2 = $('.block_2').outerHeight(),
    header = $('header').outerHeight(),
    top_menu = $('.top_menu').outerHeight();
   
    var fromTopPx = header + top_menu + block_2 ; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('body').addClass('bg_2');
    }else{
        jQuery('body').removeClass('bg_2');
    }
});