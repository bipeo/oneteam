$(document).ready(function() {
    $('.green_btn').on('click', function() {
        return false;
    });
    var els = $('.products_img ')
    $(els).on('mouseenter', function(e) {
        $(this).parent('.prod').addClass('hover');
        
    });
     $('.products_item .prod').on('mouseleave', function(e) {
        $(this).removeClass('hover');
    });
    
        /*remove this*///$('.prod').addClass('hover')

});

//green_btn