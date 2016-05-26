$(document).ready(function() {
    $('#slider_1').slick({
        dots: false,
    });
    
    $('#slider_2').slick({
        dots: false,
    });
});
    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('.to_top').fadeIn();

        } else {

            $('.to_top').fadeOut();

        }

    });

    $('.to_top').click(function() {

        $('body,html').animate({scrollTop:0},800);

    });