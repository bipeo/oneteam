$(document).ready(function () {   
	 $('.slider_1').slick({
		 arrows: true,
		 dots: true
	 });
	$('#slider_2').slick({
		arrows: true,
		dots: false,
		fade: true,
		infinite: false
	 });
	$('#slider_3, #slider_4').slick({
		arrows: true,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: false
	 });
         
         $('#slider_5').slick({
		arrows: true,
		infinite: false,
		slidesToShow: 5,
		slidesToScroll: 1,
		dots: false,
               
	 });
	
        
        $('.slider-forprod').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });
    $('.slider-prodnav').slick({
      arrows:false,
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.slider-forprod',
      dots: false,
      centerMode: true,
      focusOnSelect: true,
      centerPadding: '0px',
    });
        
        
        
	// табы 
    $('.link_1 a').click(function(e) {
        e.preventDefault();
        $('.link_1 .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tabs').not(tab).css({'visibility':'hidden'});
        $(tab).css({'visibility':'visible'});
    });
  
    
    $('.link_2 a').click(function(e) {
        e.preventDefault();
        $('.link_2 .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tabs_2').not(tab).css({'display':'none'});
        $(tab).css({'display':'block'});
    });
});