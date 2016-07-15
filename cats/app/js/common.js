$('#circle_4').circleProgress({
    value: 0.45,
    size: 246,
    fill: {
        color: "#a71850"
    },
    emptyFill: "#a87880",
    thickness: 9
});

$('#circle_5').circleProgress({
    value: 0.45,
    size: 218,
    fill: {
        color: "#a71850"
    },
    emptyFill: "#a87880",
    thickness: 9
});

$('.cats_1').hover(function(){
    $(this).addClass('cats_4');
},
function() {
    $(this).removeClass('cats_4');
});

$(function(){
        

        
        
        $('body').sdboxScroll();
  
       
});




    
