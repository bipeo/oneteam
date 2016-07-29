$(document).ready(function(){
    $("#owl_1").owlCarousel({
        items: 1,
        nav: false,
        loop: true
    });
    $("#owl_2").owlCarousel({
        items: 6,
        nav: true,
        loop: true,
    });
    $("#owl_3").owlCarousel({
        items: 6,
        nav: true,
        loop: true,
    });

/* search box start */

    $('.search .submfad').on('click', function() {
        $('.search .inner').fadeToggle(200);
          if($('.search input[type="text"]').val() != '') {
      
          }
        
    });
    
    $('.search input[type="text"]').keyup(function() {
        if($(this).val() != '') {
               $('.search .submfad').hide();
               $('.search input[type=submit]').show()
        } else {
            $('.submfad').show();
            $('.search input[type=submit]').hide();
        }
     });
    
     $(document).mouseup(function (e)
    {
        var container = $('.search .inner, .search input[type=submit], .search .submfad');

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".search .inner").fadeOut(200);
            $('.search .submfad').show();
            $('.search input[type=submit]').hide();
            $('.search input[type="text"]').val('');
        }
    });
    
    /* search box end */



    $('.toggle-mnu').click(function() {
        $(this).toggleClass("on");
        $('.menu_main').slideToggle();
        return false;
    });
    
    $('.for_mask').mask('+7(000) 000-00-00');
    
      $('select.soflow').selectBoxes({
        //    maxHeight : 40000 // the maximum height of the dropdown list

        });
        

    
});


