$(document).ready(function() {
    $('.green_btn').on('click', function() {
        return false;
    });
    var els = $('.products_img, .products.st_p .prod')
    $(els).on('mouseenter', function(e) {
        if($(this).is('.prod')) {
            $(this).addClass('hover')
        }
         if($(this).is('.products_img')) {
            $(this).parent('.prod').addClass('hover');
         }
        
        
    });
     $('.products_item .prod').on('mouseleave', function(e) {
        $(this).removeClass('hover');
    });

});

//green_btn