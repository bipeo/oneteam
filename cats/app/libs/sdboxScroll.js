(function($) {

 $.fn.sdboxScroll = function(options) {

       //Значения по умолчанию
       options = $.extend({ 
       lastScrollLeft : 0,    
       inbox: $('.wrapper'),
       footer: $('.footer'),
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
    options.inbox.css({'width': winWidth + documentScrollLeft });
    options.lastScrollLeft = documentScrollLeft;
    }
    
    options.inbox.css({'width': winWidth + documentScrollLeft });
   
    }        

       

       });

}; 
})(jQuery);