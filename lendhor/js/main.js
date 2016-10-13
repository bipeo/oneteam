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
