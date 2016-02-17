$(document).ready(function(){
	
	
	// popup 2
    $('.show_search').click(function(e) {
         e.preventDefault();
        $('.overlay, .search').fadeIn(150);
        $('.search').center();
	});
	
	// popup 2
    $('.show_visit').click(function(e) {
         e.preventDefault();
        $('.overlay, .visit').fadeIn(150);
        $('.visit').center();
	});
	
	// popup 2
    $('.show_enter').click(function(e) {
         e.preventDefault();
        $('.overlay, .enter').fadeIn(150);
        $('.enter').center();
	});
	
	// popup 2
    $('.show_thank_you').click(function(e) {
         e.preventDefault();
        $('.overlay, .thank_you').fadeIn(150);
        $('.thank_you').center();
	});
	
	$('.close_popup').click(function() {
		$('.overlay, .popup').fadeOut(150);
	});
	
	// popup 
    $('.details').click(function(e) {
         e.preventDefault();
        $('.overlay, .popup_otdel_item').fadeIn(150);
        $('.popup_otdel_item').center();
	});
	
	
        
	$('#header').fixedHeader()
	$(window).scroll(function(){
		$('#header').fixedHeader()
	});
	
	
	
        
	 $('.for_mask').mask('+7 (000) 000-00-00');
	
	$(window).on('resize', function(result) {
//		window_resize();
	});
	
});
function window_resize() {
	var li_first = $('.ul_1 > li:first').outerWidth();
	var width_left = $('.logo').outerWidth();
	var width_menu = $('.main_menu').outerWidth();
	var width_phone = $('.ul_1 li:last').outerWidth();
	var summa_1 = width_left + width_menu + width_phone;
	var result = $(window).width() - summa_1;
		$('.ul_1 > li:first').css({
			'position' : 'relative',
			'left' : - + (result / 2) - (li_first / 2) + 'px'
		});
//	return(result);
//		alert(result);
}



      
     

$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        $(".popup, .overlay").fadeOut(500);
    }
});

 $(document).mouseup(function (e)
    {
        var container = $(".popup");

        if (!container.is(e.target) // if the target of the click isn't the container...
            && container.has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".popup, .overlay").fadeOut(500);
        }
    });
        

jQuery.fn.center = function () {
    this.css("position","absolute");
    this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + 
                                                $(window).scrollTop()) + "px");
    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}

jQuery.fn.fixedHeader = function () {
      var window_width = $(window).width();
        if ($(window).scrollTop() >= 5 ) {
               this.addClass('bg_header');
            }
            else {
               this.removeClass('bg_header');
     } 
    return this;
}


  




  
 

