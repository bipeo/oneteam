$(document).ready(function(){
  /*detect browser*/	
    var is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    var is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    var is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    var is_safari = navigator.userAgent.indexOf("Safari") > -1;
    var is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome)&&(is_safari)) {is_safari=false;}
    if ((is_chrome)&&(is_opera)) {is_chrome=false;}
   /* end detect browser*/	

    
    if(is_opera) {
        $('body').addClass('is_opera');
    }
    if(is_chrome) {
        $('body').addClass('is_chrome');
    }
    if(is_firefox) {
        $('body').addClass('is_firefox');
    }
    if(is_safari) {
        $('body').addClass('is_safari');
    }
 
    $('.ul_4 li').each(function(i, val) {
        
    
        $(val).on('mouseleave',function() {
          $(this).removeClass('ahrhover');
          $(val).find('a:last-child').not('.attn').removeClass('hover');
        });
        
        $(val).not('.attn').find('a').on('mouseleave',function() {
        $(this).removeClass('hover');
         $(this).parent().removeClass('ahrhover'); /*added*/
         
        });
        
         $(val).not('.attn').find('a').on('mouseenter',function() {
           $(this).addClass('hover');
           if ($(this).is(':last-child')) {
             $(this).parent().addClass('ahrhover');
           }
        });
      /*add hover class to ul_4 */
    })
    
 /*detect browser*/
 
 
 //plugin end
 
 

// Warn if the code tries to get jQuery.browser

 /*detect browser end*/   
 
    
	// popup 2
    $('.show_search').click(function(e) {
         e.preventDefault();
        $('.overlay, .search').fadeIn(150);
        $('.search').center();
	});
	
	// popup 2
    $('.show_visit').click(function(e) {
         e.preventDefault();
        $('.overlay, .visit').fadeIn(150);
        $('.visit').center();
	});
	
	// popup 2
    $('.show_enter').click(function(e) {
         e.preventDefault();
        $('.overlay, .enter').fadeIn(150);
        $('.enter').center();
	});
	
	// popup 2
    $('.show_thank_you').click(function(e) {
         e.preventDefault();
        $('.overlay, .thank_you').fadeIn(150);
        $('.thank_you').center();
	});
	
	$('.close_popup').click(function() {
		$('.overlay, .popup').fadeOut(150);
	});
	
	// popup 
    $('.details').click(function(e) {
         e.preventDefault();
        $('.overlay, .popup_otdel_item').fadeIn(150);
        $('.popup_otdel_item').center();
	});
	
	
        
	$('#header').fixedHeader()
	$(window).scroll(function(){
		$('#header').fixedHeader()
	});
	
	
	
        
	 $('.for_mask').mask('+7 (000) 000-00-00');
	
	 $(window).on('load resize', function() {
		setTimeout(function() {
                        var top = - 45;
			var name_1 = $('.bx_style  .bx-wrapper li:visible').find('img').outerHeight();
                        $('.bx_style .bx-wrapper .bx-pager').show().css('top', name_1 + top + 'px')
		}, 0);
	});
        
   
	
});




      
     

$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $(".popup, .overlay").fadeOut(500);
    }
});

 $(document).mouseup(function (e)
    {
        var container = $(".popup");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".popup, .overlay").fadeOut(500);
        }
    });
        

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

jQuery.fn.fixedHeader = function () {
      var window_width = $(window).width();
        if ($(window).scrollTop() >= 5 ) {
               this.addClass('bg_header');
            }
            else {
               this.removeClass('bg_header');
     } 
    return this;
}


  




  
 

