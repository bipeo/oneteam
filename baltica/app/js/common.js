        $(document).ready(function()
        {

            $(window).load(function()
                {
                    getWidthAndHeight()
                    checkHeight()
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
             function checkHeight() {
                var boxs = $('.logform .form, .product_descript'),
               minh = boxs.outerHeight();
               var addmar = 0;
               if($('.logform .form').length) {
                    addmar = 150;
                    $('body').css('min-height',minh + addmar +'px');
               }
               if($('.product_descript').length) {
                    addmar = 50;
                    $('.product_descript').css('height',minh - addmar +'px');
               }
            
              
            }
            
        }
    );
