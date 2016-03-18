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
	
	// табы 
    $('.link_1 a').click(function(e) {
        e.preventDefault();
        $('.link_1 .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tabs').not(tab).css({'visibility':'hidden'});
        $(tab).css({'visibility':'visible'});
    });
});