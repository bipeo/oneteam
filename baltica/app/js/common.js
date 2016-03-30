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
              
                var scrollHeight = document.documentElement.scrollHeight,
                clientHeight = document.documentElement.clientHeight;
                scrollHeight = Math.max(scrollHeight, clientHeight);

                 //   var bar = $('.cabtop').outerHeight();
                 //  scrollHeight -=  bar;
                $(".wrap_bootle").css("min-height", scrollHeight + "px");
                
            }
            
        }
    );
