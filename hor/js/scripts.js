$(function() {
    if ($('.slider-block').length) {
        $('.slider-block').slick({
            arrows: true,
            infinite: true,
            dots: true,
            speed: 300,
            slidesToScroll: 1,
        });
    }
    $('.for_mask').mask('+7 (000) 000-00-00');
    $('.top-block button').on('click',  function(event) {
    	event.preventDefault();
      $('.overlay').show();
    	$('.modal-window-call').show();
    });
    $('.feedback button').on('click',  function(event) {
    	event.preventDefault();
      $('.overlay').show();
    	$('.modal-window-calling').show();
      $('.feedback form').hide();
      $('.feedback .callus').show();

    });
    $('.time-order .time').on('click', function(event) {
    	event.preventDefault();
      if(!$('.hide-item').hasClass('active')) {
        $('.hide-item').addClass('active').animate({'right':'0px'},500);
        $('.overlay').show();
      } else {
        $('.hide-item').removeClass('active').animate({'right':'-295px'},500);
      }
    });
    $('nav a').on('click', function(event) {
      event.preventDefault();
      $('nav a').removeClass('active');
      $(this).addClass('active');
    });
    $('.time-order .text button').on('click', function(event) {
    	event.preventDefault();
    	$('.hide-item').animate({'right':'-295px'},500);
      $('.overlay').hide();
      $('.hide-item').removeClass('active');
    });
    $('.close, .overlay').click(function(e) {
      e.preventDefault();
      $('.hide-item').removeClass('active').animate({'right':'-295px'},500);
      $('.overlay, .modal-window-call, .modal-window-calling').fadeOut(400, function() {
      });
    });
    /*$(document).on('click', function(event){
          var containerDD = $('.top-block button');
          if (!containerDD.is(event.target) && containerDD.has(event.target).length === 0){
              $('.modal-window-call').hide();
          }
          var containerEE = $('.feedback button');
          if (!containerEE.is(event.target) && containerEE.has(event.target).length === 0){
              $('.modal-window-calling').hide();
          }
      });*/
    
    
           $('form').each(function () {
         $(this).parsley().on('field:validated', function() {
    var ok = $('.parsley-error').length === 0;
    $('.bs-callout-info').toggleClass('hidden', !ok);
    $('.bs-callout-warning').toggleClass('hidden', ok);
  })
  .on('form:submit', function() {
    return false; // Don't submit form for this demo
  });
    }); 
    
    
});