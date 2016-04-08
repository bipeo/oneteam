$(document).ready(function()
        {
 
	
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
	
		///////////////////////////////////////////////////////////////////////// menu_mobile

		var pull 		= $('.btn_menu');
			menu 		= $('#menu_mobile');
			menuHeight	= menu.height();
                        body =  $("html, body");

		$(pull).on('click', function(e) {
			e.preventDefault();
                    
                    menu.slideToggle();
                    body.toggleClass('overflow_y');
                    

//                    $(this).toggleClass('close_menu');
		});
                
                 $(document).mouseup(function (e)
    {
        var container = menu.add(pull);

        if (!container.is(e.target) 
            && container.has(e.target).length === 0) 
        {
            menu.hide(500);
            body.removeClass('overflow_y');
         
        }
    });
     $(document).keyup(function(e) { 
        if (e.keyCode == 27) { // esc keycode
            $('#menu_mobile').hide(500);
              body.removeClass('overflow_y');
        }
    });
	
		$('.close_menu').on('click', function(e) {
			e.preventDefault();
			$('#menu_mobile').hide(500);
                        body.removeClass('overflow_y');
		});

		$(window).resize(function(){
			var w = $(window).width();
			if(w > 320 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});
			
			
			$('.close_btn').on('click',function() {
               $('.logform').hide(); 
            });
 

            $(window).load(function()
                {
                    getWidthAndHeight();
                }
            );


            $(window).resize(function()
                {
                   getWidthAndHeight();
                   
                }
            );


            function getWidthAndHeight() {
              
                var scrollHeight = document.documentElement.scrollHeight,
                clientHeight = document.documentElement.clientHeight;
                scrollHeight = Math.max(scrollHeight, clientHeight);
                 
                $(".wrap_bootle").css("min-height", scrollHeight + "px");
                
                        /*mobile menu height*/
                        
                        var wh =$(window).height(),
                         incr = 20,       
                         mm = $('#menu_mobile').outerHeight(),
                         toth = Math.max(wh, mm);
                         if(mm > wh) {
                             toth = wh;
                         } else {
                              toth = mm;
                         } 
			$('#menu_mobile').css('height',toth + incr + 'px');
                         /*mobile menu height end */
                
            }
    
        }
				  
	  
						  
	  

);
