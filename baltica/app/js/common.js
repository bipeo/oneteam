	$(function(){
           var boxs = $('.logform .form'),
           addmar = 150,
           minh = boxs.outerHeight();
          
           $('body').css('min-height',minh + addmar +'px'); 
        });
        
        
        
        $(document).ready(function()
        {

            $(window).load(function()
                {
                    getWidthAndHeight()
                }
            );


            $(window).resize(function()
                {
                    getWidthAndHeight()
                }
            );


            function getWidthAndHeight() {
                //var ass = $('.ass_box').show();
                var scrollHeight = document.documentElement.scrollHeight,
                clientHeight = document.documentElement.clientHeight;
                scrollHeight = Math.max(scrollHeight, clientHeight);

                    var wpbar = $('.cabtop').outerHeight();
                   scrollHeight -=   wpbar;
                $(".opsidebar").css("min-height", scrollHeight + "px");
                
            }
            
            
            
          
            
            
        }
    );
