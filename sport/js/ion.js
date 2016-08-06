              $(function() {
          
    
            var $range = $("#range_93");

        
$range.ionRangeSlider({
    type: "double",
    min: 1000,
    step:1000,
    max: 20000,
    from: 5000,
    to: 19000,
    grid:false,
    
});

$range.on("change", function () {
    var $this = $(this),
        from = $this.data("from"),
        to = $this.data("to");

    $('#range_from').val(from);
    $('#range_to').val(to);
});

              })