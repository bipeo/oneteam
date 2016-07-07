$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
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
        dateFormat: 'd MM yy'
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
        dateFormat: 'd MM yy'
        onClose: function(selectedDate) {
            $("#date_from").datepicker("option", "maxDate", selectedDate);
        }
    });
});