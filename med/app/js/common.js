$(document).ready(function () {   
	
	// menu
    $('#menu ul li').hover(
        function () {
            $('ul:first', this).slideDown(150);  
        },
        function () {
            $('ul:first', this).slideUp(150);
        }
    ); 
	
});