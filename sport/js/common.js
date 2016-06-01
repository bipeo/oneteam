
$(document).ready(function() {
    setTimeout(function() {
    if($('#slider_1').length) {
    $('#slider_1').show().slick({
        dots: false,
    });
    }
     if($('#slider_2').length) {
    $('#slider_2').show().slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true
    });
     }
    
}, 1);
    
    

 $('.to_top').click(function() {
       
        $('body,html').animate({scrollTop:0},800);

    });
    
 
    
    
    
});
    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('.to_top').fadeIn();

        } else {

            $('.to_top').fadeOut();

        }

    });

   