(function($) {

 $.fn.sdboxScroll = function(options) {

       //Значения по умолчанию
       options = $.extend({ 
       lastScrollLeft : 0,    
       fixedheader_1: $('.top-block'),
     
       }, options); 


       return this.each(function(){

        var $this = $(this);

        $(document).ready(function() {
    getWidthAndHeight();
    });

        $(window).resize(function() {
    getWidthAndHeight();
    });

        $(window).scroll(function() {
      getWidthAndHeight();    
    });
    

    
    function getWidthAndHeight (){
     
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var documentScrollLeft = $(document).scrollLeft();
    if (options.lastScrollLeft != documentScrollLeft) {
            
    options.fixedheader_1.css({'min-width': winWidth + documentScrollLeft + 'px' });
    options.fixedheader_1.css({'left': '-'+ documentScrollLeft + 'px'}); // correct menu fixed position
   
    options.lastScrollLeft = documentScrollLeft;
    }
    

  
   
    }        

       

       });

}; 
})(jQuery);