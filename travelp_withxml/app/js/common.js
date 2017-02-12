jQuery(function() {
    

    
    var forHeight = $('.list_tur .row > div');
    
    forHeight.matchHeight();
    
    /*========================== tabs ==========================*/
  /*  
    $('.wrap_tabs_main .tab_item').hide();
    $('.wrap_tabs_main .tab_item').first().show();
    
    $('.slick_town').on('click', function() {
        $('.slick_town').removeClass('active');
        $(this).addClass('active');
        
        $('.tab_item').hide();
        var elem_href = $(this).attr('href');
        
        $(elem_href).show();
        return false;
    });
  */  
    
    /*========================== popup ==========================*/
    
  /*  $('.for_popup').on('click', function() {
        var idPopup = $(this).attr('href');
        var widthElem = $(idPopup).innerWidth();
        var heightElem = $(idPopup).innerHeight();
        $(idPopup).css({
            'marginLeft' : - widthElem / 2,
            'marginTop' : - heightElem / 2
        });
        $(idPopup).fadeIn();
        $('body').append('<div class="overlay"></div>');
        return false;
    }); */
  
 var keepPosOn =function(mbox) {
        var m_wh = $(window).height(),
        m_ww = $(window).width();
        $(mbox).css({
            left: (m_ww - $(mbox).outerWidth()) / 2
        })
        
         if(m_wh <= $(mbox).outerHeight()) {
         $(mbox).css({'top':'30px'});
        } else {
          $(mbox).css({
            top: (m_wh - $(mbox).outerHeight()) / 2,
        });
           }
      
    }  
    
    
var appendthis =  ("<div class='overlay'></div>");

    $('a[data-modal-id]').click(function(e) {
		e.preventDefault();
    $("body").append(appendthis);
    $('.mm-page').css('position','static'); ///fix for mmmenu available popup
    $(".overlay").fadeTo(500,1);
    var modalBox = $(this).attr('data-modal-id');
    $('#'+modalBox).fadeIn($(this).data());

    keepPosOn('.modal-box');
              
	});  
  
  
$(".close_popup").click(function() {
    $(".modal-box, .overlay").fadeOut(300, function() {
        $(".overlay").remove();
    });
      $('.mm-page').css('position','relative'); ///fix for mmmenu available popup
 
});

 $(document).mouseup(function (e)
    {
        var container = $(".modal-box");
       
        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
         $(".modal-box").fadeOut()
         $('.overlay').remove();
        }
    });
 
    $(window).resize(function() {
        
          keepPosOn('.modal-box');
      
        
    });

    $(window).resize();

    
    
    $('.list_town a').on('click', function() {
        var valElem = $(this).text();
        $('.for_js').empty();
        $('.for_js').append(valElem);
        $('.modal-box').fadeOut();        
        $('.overlay').remove();
        return false;
    });
    
    /*========================== popup end ==========================*/
    
    /*========================== mmenu ==========================*/
    
    $("#menu").mmenu({
        extensions: ['widescreen', 'theme-white', 'effect-menu-slide', 'pagedim-black'],
        navbar: {
            title: ''
        }
    });
    
    $(".menu_btn").click(function() {
        $(this).toggleClass("on");
        //$(".main-mnu").slideToggle();
        //return false;
    });
    
    $('#mm-blocker').on('click', function() {
        if ($('.menu_btn').hasClass('on')) {
            $('.menu_btn').removeClass('on');
        }
    });
});
