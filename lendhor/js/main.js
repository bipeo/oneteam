$(document).ready(function() {
  var slider = $('.slider');
  slider.bxSlider({
    mode: 'fade',
    controls: false,
    pager: false,
    minSlides: 1,
    moveSlides: 1,
    auto: false,
    pause: 20000,
    responsive: false,
    speed: 700
  });

  var responces = $('.responces');
  responces.bxSlider({
    mode: 'fade',
    slideWidth: 960,
    controls: true,
    pager: true,
    minSlides: 1,
    moveSlides: 1,
    auto: false,
    responsive: true,
  });
  
  
  
  


  
});

    $(document).ready(function() {


    pushTool()

    $(window).scroll(function() {

       pushTool()
    })

    })




    var pushTool = function() {
        
    var footerOffsetTop = $('.jbar').offset().top;
    var zz = $('.block.wintop').offset().top;
    var tt = $('.block.wintop').outerHeight();
    var zero = $('#zero.container').outerHeight();
    var scrt = $(window).scrollTop();
    if(scrt>=tt + zz + zero) {
      
    if($('.jbar').is(':hidden')) {
        
           
    var topToBottom =   $('.jbar').outerHeight();
    $('.jbar').css('top',- topToBottom + 'px');    
    $(".jbar").show().animate({
        top : 0 ,
    }, 1000);
    
     }  
        
        }
    
    

    }