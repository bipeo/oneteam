$(document).ready(function()
        {
 
	$('.btn_menu').on('click', function() {
		
		$("html, body").css('overflow-y', 'hidden');
//		var heightMenu = $('#menu_mobile').outerHeight();
//		$('#menu_mobile').css('height', heightMenu );
	});
	
		///////////////////////////////////////////////////////////////////////// menu_mobile

		var pull 		= $('.btn_menu');
			menu 		= $('#menu_mobile');
			menuHeight	= menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
                    
                    menu.slideToggle();

//                    $(this).toggleClass('close_menu');
		});
                
                 $(document).mouseup(function (e)
    {
        var container = menu.add(pull);

        if (!container.is(e.target) 
            && container.has(e.target).length === 0) 
        {
            $('#menu_mobile').hide(500);
         
        }
    });
	
		$('.close_menu').on('click', function(e) {
			e.preventDefault();
			$('#menu_mobile').hide(500);
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
                    checkHeight();
                }
            );


            $(window).resize(function()
                {
//                    getWidthAndHeight();
//                    checkHeight();
                   
                }
            );


            function getWidthAndHeight() {
              
                var scrollHeight = document.documentElement.scrollHeight,
                clientHeight = document.documentElement.clientHeight;
                scrollHeight = Math.max(scrollHeight, clientHeight);

                 //   var bar = $('.cabtop').outerHeight();
                 //  scrollHeight -=  bar;
                $(".wrap_bootle").css("min-height", scrollHeight + "px");
//				var heightMenu = $('#menu_mobile').outerHeight();
//				$('#menu_mobile').css('height', scrollHeight );
                
            }
             function checkHeight() {
                var boxs = $('.logform .form, .pscrbox, #menu_mobile'),
               minh = boxs.outerHeight();
               var addmar = 0;
               if($('.logform .form').length) {
                    addmar = 150;
//                    $('body').css('min-height',minh + addmar +'px');
               }
               if($('.pscrbox').length) {
                 /*   addmar = 100;
                    $('.pscrbox').css('height',minh - addmar +'px'); */
               }
               if($('.menu_psec').length) {
//                   addmar = 100;
//                    $('.wrap_bootle').css('min-height',minh + addmar +'px');
               }
            } 
        }
				  
	  
						  
	  

);
