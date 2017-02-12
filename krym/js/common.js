$(function() {
    
    // select
    $('select').selectBoxes();  
    $('.select-element').on('click', function() {
        $('.option-list').not($(this).find('.option-list')).removeClass('show');
    });

    // datepicker
    $("#date_from, #date_from_popup").datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
        dateFormat: 'dd.mm.yy',
        onClose: function(selectedDate) {
            $("#date_to, #date_to_popup").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#date_to, #date_to_popup").datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,        
        showAnim: "slideDown",
        dateFormat: 'dd.mm.yy',
        onClose: function(selectedDate) {
            $("#date_from, #date_from_popup").datepicker("option", "maxDate", selectedDate);
        }
    });
    
    
//    var $Divs = $('.menu_header_ul > li > ul > li');
//    $Divs.each(function(i) {
//      if ($(this).find("img").length > 0) {
//                  $(this).addClass('hasimg')
//      } else {
//            // do something else
//     }
//});
    
      
       wWidth(); //fire matchHeight
       


      $('.menu_header_ul > li > ul > li').each(function() {
            var  pck = $(this).attr('data-pck');
            var  pdef = $(this).parent().find('.hasimg').attr('data-pdef');
            var himg = $(this).parent().find('.hasimg img');
        
            $(this).not('.hasimg').hover(function() {

          himg.attr("src", "img/" + pck );
        }, function() {
        $('.hasimg').attr("src", "img/" + pdef)
        }
                ) 
          
       
      
      
      })  
     
          
    
    

});
    
        
    $(function(){
           var $gallery = $('#gallery')
        .on('init', function(slick) {
           // console.log('fired!');
                $('#gallery').fadeIn(3000).addClass('loaded');
        })
        .slick({
                dots: false,
                asNavFor: '',
                slidesToShow: 2,
                slidesToScroll: 2,
                prevArrow: "<a class=\"btn prev\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i></a>",
                nextArrow: "<a class=\"btn next\"><i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i></a>",
                responsive: [
                        {
                                breakpoint: 959,
                                settings: {
                                        slidesToShow: 1,
                                        slidesToScroll: 1
                                }
                        }
                ]

        });

    });    




      var wWidth = function() {
        var width_window = $(window).width();
        if (width_window <= 1024) {
            $('.menu_header_ul > li').matchHeight();
        }
      }

// menu


// mobile_menu

$("#pull").click(function() {
    $(this).toggleClass("on");
    return false;
});

var pull         = $('#pull');
menu         = $('.menu_header_ul');
menuHeight    = menu.height();

$(pull).on('click', function() {
    menu.slideToggle();
    return false;
});

function closeMnuOut() {

    $(document).mouseup(function (e) {
        if($('.menu_mobile').is(':visible')) {
            var container = $(".menu_header_ul, #pull");
            if (!container.is(e.target) // if the target of the click isn't the container...
                && container.has(e.target).length === 0) // ... nor a descendant of the container
            {
                menu.slideUp();
                $('#pull').removeClass('on');
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

$(window).resize(function(){
    wWidth(); //fire matchHeight
});
