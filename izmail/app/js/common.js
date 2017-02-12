$(document).ready(function(){
	
	// смена картинок
   $('.background').not( ":first" ).css({opacity: 0});
    $('.background:first').css({zIndex:1}).addClass('active');
    setInterval(function(){
       var obj = $('.background.active');
    obj.css({zIndex:0}).removeClass('active');
    var index = obj.index();
     if($('.background:eq('+(index+1)+')').length) {
           var nextObj = $('.background:eq('+(index+1)+')');
        }else{
           var nextObj = $('.background:eq(0)');
       }
    nextObj.css({zIndex: 1}).addClass('active').animate({opacity: 1}, 1000, function(){
           obj.css({opacity: 0});
       });
    }, 6000);
	
	///////////////////////////////////////////////////////////////////////// menu_mobile
	
	var pull 		= $('.btn_menu');
		menu 		= $('#menu_mobile');
		menuHeight	= menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
		$(this).toggleClass('close_menu');
	});

	$(window).resize(function(){
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
	
	/////////////////////////////////////////////////////////////////////////////
	$('.fancybox').fancybox({
            wrapCSS : 'photo-fancy',
            padding: 0,
//            maxWidth: 821,
            helpers : {
                overlay: {
               //  css: {'background': 'rgba(0,46,92, 0.9)'} 
             }
           } 
		
		
	});
        
	$('.fnc_btns .fancy_prev').click(function(){
		$.fancybox.prev();
	});

	$('.fnc_btns .fancy_next').click(function(){
		$.fancybox.next();
	});
        
    // перемотка
    $('.rooms_param a').click(function(event) {
        event.preventDefault();

        var my_attr = $(this).attr('href').substring(1);
        gotoblock(my_attr);
    });
    
});//конец ready

function gotocoord(val){
    $("html,body").stop(true, true).animate({'scrollTop': val-80}, 750);
}

function gotoblock(id){
    var obj = $('#'+id);
    var destination = obj.offset().top;
    $("html,body").stop(true, true).animate({'scrollTop': destination-80}, 750);
}


