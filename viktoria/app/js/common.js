$(document).ready(function(){
    $(".owl-carousel, #owl_2, #owl_3").owlCarousel({
        items: 1,
        nav: false,
        loop: true
    });
    
    $("#date_from").datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
//        showOn: "button",        
//        showAnim: "slideDown",
        dateFormat: 'd MM yy',
        onClose: function(selectedDate) {
            $("#date_to").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#date_to").datepicker({
        changeMonth: true,
        changeYear: true,
        numberOfMonths: 1,
//        showOn: "button",        
        showAnim: "slideDown",
        dateFormat: 'd MM yy',
        onClose: function(selectedDate) {
            $("#date_from").datepicker("option", "maxDate", selectedDate);
        }
    });

    $('.toggle-mnu').click(function() {
        $(this).toggleClass("on");
        $('.menu_main').slideToggle();
        return false;
    });
    
});


$(document).click(function(event) {
    if ($('.toggle-mnu').css('display') == 'block') {
        if(!$(event.target).closest('.menu_main').length) {
            if($('.menu_main').is(":visible")) {
                $('.menu_main').slideUp();
                $('.toggle-mnu').removeClass("on");
                return false;
            }
        }
        
    }
});