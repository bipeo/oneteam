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
    
});//конец ready