$(function() {
    
    $('select').selectBoxes();
    
    $('.popup-with-form').magnificPopup({
        type: 'inline',
        closeBtnInside: true,
        preloader: false
    });
    
    
    /*  $('form').each(function () {
        $(this).validate({
            submitHandler: function (form) { // for demo
             
                return false;
            }
        });
    }); */
    
    
        $('form').each(function () {
         $(this).parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('.bs-callout-info').toggleClass('hidden', !ok);
    $('.bs-callout-warning').toggleClass('hidden', ok);
  })
  .on('form:submit', function() {
    return false; // Don't submit form for this demo
  });
    }); 

    
    // menu
    
    var pull 		= $('#pull');
    menu 		= $('.menu_main');
    menuHeight	= menu.height();

    $(pull).on('click', function() {
        menu.slideToggle();
        return false;
    });
    
    function closeMnuOut() {
        
     $(document).mouseup(function (e)
    {
         if($('.toggle-mnu').is(':visible')) {
        var container = $(".menu_main, #pull, .search_input, .search");
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            menu.slideUp();
        }
        }
    });       
        
        
    }
    
   
        closeMnuOut();
    
 

    $(window).resize(function(){
        
           
        closeMnuOut();
       
        var w = $(window).width();
        if(w > 320 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    
    // search
    
    $('.search').on('click', function() {
        $(".search_input").animate({
            right: "20px"           
        }, 500);
        return false;
    });
    $('.search_close').on('click', function() {
        $('.search_input').animate({
            right: "-980px"           
        }, 500);
    });
    
    // youtube
        
    $('.play_video').on('click', function(ev) {
 
        var vcode = $(this).next(".videoCont").data('vid');
        $(".videoCont").html('');
        $(this).next(".videoCont").html('<iframe width="100%" height="254" src="https://www.youtube.com/embed/'+vcode+'?autoplay=1&loop=1&rel=0&wmode=transparent" frameborder="0" allowfullscreen wmode="Opaque"></iframe>');

        $(this).hide();
        $('.play_video').not($(this)).show();
        $(this).next(".videoCont").show();
        ev.preventDefault();

    });
    
    $(window).on('resize',function() {
        $('.videoCont').html('');
        $('.play_video').show()
    }) 
    
    
    
    // mask
    $('.for_mask').mask('+7 (000) 000-00-00');
    
    // select
    $('.select-element').on('click', function() {
        $('.option-list').not($(this).find('.option-list')).removeClass('show');
    });
    
});




$(document).click(function(event) {
    if(!$(event.target).closest('.search_input').length) {
        if($('.search_input').is(":visible")) {
            $('.search_input').animate({
                right: "-980px"
            });
        }
    }
});