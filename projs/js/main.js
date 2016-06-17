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
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
/*$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});*/

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').fadeIn(0);
}, function() {
  $(this).find('.dropdown-menu').fadeOut(0);
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

$(function() {
  $(document).mouseup(function (e) {
    var container = $(".navbar-collapse.in, .navbar-toggle");

    if (!container.is(e.target) /* if the target of the click isn't the container...*/
    && container.has(e.target).length === 0) /* ... nor a descendant of the container */ {
      $(".navbar-collapse").removeClass('in');
    }
  });
});

$("ul.nav li.dropdown").keydown(function(e) {
    if (e.keyCode == 27) {
      $(this).find('.dropdown-menu').fadeOut(0);
    }
});