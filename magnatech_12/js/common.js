$(document).ready(function(){
    

        
        
    $("#owl_1").owlCarousel({
        loop: true,
        items: 1,
        responsive : {
            0 : {
                dots: true,
                nav: false
            },
            641 : {
                dots: false,
                nav: true
            }
        }
    });
    $("#owl_2").owlCarousel({
        
        loop: true,
        responsive : {
            0 : {
                items : 2 
            },
            420 : {
                items : 3
            },
            530 : {
                items: 4,
                dots: true,
                nav: false
            },
            641 : {
                nav: true,
                items: 6,
                dots: false
            }
        }
    });
    $("#owl_3").owlCarousel({
        
        loop: true,
        responsive : {
            0 : {
                items : 2 
            },
            420 : {
                items : 3
            },
            530 : {
                items: 4,
                dots: true,
                nav: false
            },
            641 : {
                items: 6,
                dots: false,
                nav: true
            }
        }
    });
    $("#owl_4").owlCarousel({
        loop: true,
        nav: false,
        responsive : {
            0 : {
                items: 1,
                dots: true
            },
            641 : {
                items: 3,
                margin: 33,
                dots: false
            }
        }
    });
    $("#owl_5").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: false,
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


    
      $('select.soflow, select.selcat').selectBoxes({
        //    maxHeight : 40000 // the maximum height of the dropdown list

        });
//      $('select.selcat').selectBoxes({
//        //    maxHeight : 40000 // the maximum height of the dropdown list
//
//        });
        

        
        $('.video-js').each(function() {
          $(this).on('click',function() {
             var video =  $(this).find('video').get(0);
            if (video.paused === false) {
        video.pause();
        $(this).find('.vjs-big-play-button').removeClass('fadeOut');
        } else {
        video.play();
        $(this).find('.vjs-big-play-button').addClass('fadeOut');
        }
      
          }); 
          
          
       
          
        });
        
        
     $("#owl_6").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: false,
    });
    $("#owl_3stTop").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: true,
    });
    $("#owl_3stBottom").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true,
    });
    $("#owl_st1Top").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: false,
    });
    $("#owl_7").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: false,
    });
    $("#owl_8").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: false,
    });
    $("#owl_pbSlaid").owlCarousel({
        loop: true,
        nav: true,
        items: 1,
        dots: false,
    }); 
    $("#owl_pbSlaid640").owlCarousel({
        loop: true,
        nav: false,
        items: 1,
        dots: true,
    });   

    
});




