

$(document).ready(function() {
            adjustMenu();
})

var adjustMenu = function() {
    
    $(document).mouseup(function (e)
	{
		var container = $(".main_menu,.top_slwrap, .popup");

		if (!container.is(e.target) // if the target of the click isn't the container...
			&& container.has(e.target).length === 0) // ... nor a descendant of the container
		{
                            //$('.flexnav').removeClass('flexnav-show');

		}
	});

	$(document).keydown(function(e) {
		// ESCAPE key pressed
		if (e.keyCode == 27) {
                        $('html').removeClass('opnav'); 
			$('.flexnav').removeClass('flexnav-show');
		}
	});
    
    $(".flexnav li").each(function() {
        if($(this).find('ul').length) {
            $(this).toggleClass('item-with-ul');
        }
    });
    
$(window).bind('orientationchange', function() {
     
	location.reload();
});

		checkSize();
                
    
      $(window).resize(checkSize);
      function checkSize(){
          var flexnav = $(".flexnav");
        
          
           var c = $(".item-with-ul > ul");
           c.each(function(b, a) {
           $(a).prev().unbind('click').bind('click',function(e) {
           c.not($(a).toggleClass('show_with')).removeClass("show_with");
            return false;
           })
       
            });
            
            
            /*var m = $(".item-with-ul > ul li ul");
           m.each(function(b, a) {
           $(a).find('.htit').unbind('click').bind('click',function(e) {
           m.not($(a).toggleClass('withsub')).removeClass("withsub");
            return false;
           })
            }); */
            
            
            
            
          
          

         // bugggfflexnav.removeClass('flexnav-show'); this was bug
          if (flexnav.css("z-index") == "2" ){
              
              flexnav.removeClass('flexnav-show');
              $('html').removeClass('opnav'); 

          } else {
              
               $(".touch-press").unbind('click').bind('click', function(e) {
                  e.preventDefault();
                  flexnav.toggleClass('flexnav-show');
                  if(flexnav.hasClass('flexnav-show')) {
                   $('html').addClass('opnav');  
                   } else {
                        $('html').removeClass('opnav'); 
                   }

              }); 
               

          }

      }
         
}

