$(document).ready(function()
        {
 
		///////////////////////////////////////////////////////////////////////// menu_mobile

		var pull 		= $('.btn_menu');
			menu 		= $('#menu_mobile');
			menuHeight	= menu.height();

		$(pull).on('click', function(e) {
			e.preventDefault();
			menu.slideToggle();
			$(this).toggleClass('close_menu');
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
                    getWidthAndHeight();
                    checkHeight();
                   
                }
            );


            function getWidthAndHeight() {
              
                var scrollHeight = document.documentElement.scrollHeight,
                clientHeight = document.documentElement.clientHeight;
                scrollHeight = Math.max(scrollHeight, clientHeight);

                 //   var bar = $('.cabtop').outerHeight();
                 //  scrollHeight -=  bar;
                $(".wrap_bootle").css("min-height", scrollHeight + "px");
                
            }
             function checkHeight() {
                var boxs = $('.logform .form, .pscrbox'),
               minh = boxs.outerHeight();
               var addmar = 0;
               if($('.logform .form').length) {
                    addmar = 150;
                    $('body').css('min-height',minh + addmar +'px');
               }
               if($('.pscrbox').length) {
                    addmar = 100;
                    $('.pscrbox').css('height',minh - addmar +'px');
               }
            } 
        }
						  
	  

    );
