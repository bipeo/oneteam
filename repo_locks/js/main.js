// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
//$('body').scrollspy({
//    target: '.navbar-fixed-top'
//})

// Closes the Responsive Menu on Menu Item Click
/*$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
*/
$('ul.nav li.dropdown').hover(function() {
  $(this).addClass("open");
}, function() {
  $(this).removeClass("open");
});

$("city_dropdown .dropdown-menu li a").click(function(){
  var selText = $(this).text();
  $(this).parents('.dropdown').find('.dropdown-toggle').html(selText+' <span class="fa fa-angle-down dropdown-caret"></span>');
});

//bootstrap swipe mobile slider
$(document).ready(function() {  
  $("carousel-1").swiperight(function() {  
    $(this).carousel('prev');  
  });  
  $("carousel-1").swipeleft(function() {  
    $(this).carousel('next');  
  });  
});

// slick-slider
$(document).on('ready', function() {
    $(".product-slider").slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    slidesToShow: 4,
    centerPadding: '0',
    slidesToScroll: 1,
    variableWidth: false,
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 2,
        variableWidth: false,
        initialSlide: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        initialSlide: 1,
        variableWidth: false
      }
    }
    ]
  });
});

// Count-down
$(function () {
  var austDay = new Date();
  austDay = new Date(2016, 06-1, 18, 23);
  $('#defaultCountdown').countdown({
    until: austDay,
    format: 'HMS',
    padZeroes: true
  });
  $('#year').text(austDay.getFullYear());
});

/*navbar script below *******
 ***************************** 
 **************************/

 var navbar = $(".navbar--top .navbar-collapse");
 
  var closeNav = function(navbar){
            $(navbar).removeClass('in');
            $(navbar).find('.nav>li').removeClass('wascl');
            $("body").css("overflow", "auto");
          }

    $(document).keydown(function(e) {
    if (e.keyCode == 27) {
        closeNav('.navbar--top .navbar-collapse')
    }
        });  

  
  $(document).ready(function() {
       
  
  	checkSize();
        
      $(window).on('resize', function () {
              checkSize()      
              });
        
    function checkSize(){
         var closeNav = function(){
            navbar.removeClass('in');
            navbar.find('.nav>li').removeClass('wascl');
            $("body").css("overflow", "auto");
          }
          closeNav()
          
          
            
    
  
        $(function() {
        $(document).mouseup(function (e) {
          var container = $(".navbar-collapse.in, .navbar-toggle");

          if (!container.is(e.target) 
         
          && container.has(e.target).length === 0)  {
                //closeNav()
          }
        });
      });
   
       if (navbar.css("z-index") == "99999" ){
                    
            $('.navbar-toggle').click( function() {
      if ($(this).is( ".collapsed" )) {
        $("body").css("overflow", "hidden");
      } else {
        $("body").css("overflow", "auto");
      }
        });
    
         
            navbar.find('.nav>li').unbind('mouseenter').bind('mouseenter',function(e) {
              $("body").css("overflow", "hidden");   
              $(e).removeClass('open');
                if($(e).hasClass('wascl')) {
              $(e).addClass('open'); 
          } else {
               
          }
          
//          $('.nav>li').css('background','pink')
          
            })
            navbar.find('.nav>li').unbind('mouseleave').bind('mouseleave',function(e) {
                 $("body").css("overflow", "hidden");
                 $(e).removeClass('wascl');
                   
            })
            
       
            
          navbar.find('.nav>li').on('click',function(e) {
          if($(e).hasClass('wascl')) {
               $(e).removeClass('wascl');
          } else {
            $(e).addClass('wascl');
          }
         
        });

          // navbar.find('.nav>li').css('background','green')
             } else {
          
            navbar.find('.nav>li').unbind('mouseenter').bind('mouseenter',function() {
              $(this).addClass('open');
            })
            navbar.find('.nav>li').unbind('mouseleave').bind('mouseleave',function() {
              $(this).removeClass('open');
            })
            
              $("body").css("overflow", "auto");
            //  navbar.find('.nav>li').css('background','red')
                
             }
           } 
      
 
    });
    
    
    /*navbar script end ********
     ******************
     ************************/

