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
    // $('.top-block button').on('click',  function(event) {
    // 	event.preventDefault();
    //   //$('.overlay').show();
    // 	$('.modal-window-call').show();
    // });
    $('.feedback button').on('click',  function(event) {
    	event.preventDefault();
      event.stopPropagation();
      //$('.overlay').show();
      var inputLenght = $('.feedback .for_mask').val();
      if(inputLenght.length >= 18) {
        $('.modal-window-calling').show();
        $('.feedback form').hide();
        $('.feedback .callus').show();
      } else {
        $(this).prev('.for_mask').addClass('no-valid');
      }
    });
    $('.time-order .time').on('click', function(event) {
    	event.preventDefault();
      event.stopPropagation();
      if(!$('.hide-item').hasClass('active')) {
        $('.hide-item').addClass('active').animate({'right':'-0px'},500);
        //$('.overlay').show();
      } else {
        $('.hide-item').removeClass('active').animate({'right':'-355px'},500);
      }
    });
  
    $('.time-order .text button').on('click', function(event) {
    	event.preventDefault();
    	$('.hide-item').animate({'right':'-355px'},500);
      //$('.overlay').hide();
      $('.hide-item').removeClass('active');
    });
    $('.close, .overlay').click(function(e) {
      e.preventDefault();
      $('.hide-item').removeClass('active').animate({'right':'-355px'},500);
      $('.overlay, .modal-window-call').fadeOut(400, function() {
      });
    });
    $(document).on('click', function(event){
          var containerDD = $('.modal-window-call');
          if (!containerDD.is(event.target) && containerDD.has(event.target).length === 0){
              $('.modal-window-call').hide();
          }
          var containerEE = $('.modal-window-calling');
            if (!containerEE.is(event.target) && containerEE.has(event.target).length === 0){
           // $('.modal-window-calling').hide();
           }
          var containerFF = $('.hide-item');
            if (!containerFF.is(event.target) && containerFF.has(event.target).length === 0){
            $('.hide-item').removeClass('active').animate({'right':'-355px'},500);
           }
           // if($('.for_mask').hasClass('no-valid')) {
           //  $('.for_mask.no-valid').removeClass('no-valid');
           // }
           var containerFA = $('.for_mask');
            if (!containerFA.is(event.target) && containerFA.has(event.target).length === 0){
            $('.for_mask').removeClass('no-valid');
           }
           
      });
    $(document).on('click', '.top-block button', function(event) {
      event.preventDefault();
      event.stopPropagation();
      $('.modal-window-call').show();
    });
   $('.accumulation').on('click',  function(event) {
      event.preventDefault();
      event.stopPropagation();
      var inputLenght1 =  $(this).prev('.enter-phone .for_mask').val();
      console.log(inputLenght1);
      if(inputLenght1.length < 18) {
        $(this).prev('.enter-phone .for_mask').addClass('no-valid');
      } else {
        $(this).prev('.enter-phone .for_mask').removeClass('no-valid');
      }
    });
});