        $(document).ready(function()
        {
            
            
            
            $('.logform .form .error').on('click',function() {
                alert(3);
       //     $('.logform .form .error').fadeOut(1000);
            
            });
            
            $('.myDiv').bind('DOMNodeInserted DOMNodeRemoved', function() {
                    alert(3);
                });

            

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
