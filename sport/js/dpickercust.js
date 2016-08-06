  /*function showdatepicker() {
          $( "#from, #to" ).datepicker({
            defaultDate: "-1w",
            changeMonth: true,
            numberOfMonths: 1,
            dateFormat : 'dd.mm',
            nextText: '',
            prevText: '',
            onSelect: function( selectedDate ) {
                if(this.id == 'from'){
                  var dateMin = $('#from').datepicker("getDate");
                  var rMin = new Date(dateMin.getFullYear(), dateMin.getMonth(),dateMin.getDate() + 1); 
                  var rMax = new Date(dateMin.getFullYear(), dateMin.getMonth(),dateMin.getDate() + 31); 
                  $('#from').datepicker("option","minDate",rMin);
                  $('#to').datepicker("option","maxDate",rMax);                    
                }
                
            },
            beforeShow: function(input, inst) {
       $('#ui-datepicker-div').removeClass(function() {
           return $('input').get(0).id; 
       });
       $('#ui-datepicker-div').addClass('custdper');
        }
        });
    } 
    */
   function showdp() {
        $("#from").datepicker({
        changeMonth: true,
      //  changeYear: true,
        numberOfMonths: 1,
         nextText: '',
        prevText: '',
        defaultDate: new Date(),
      //  showOn: "button",        
        //showAnim: "slideDown",
        dateFormat: "dd.mm",
        onClose: function(selectedDate) {
            $("#to").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#to").datepicker({
        changeMonth: true,
     //   changeYear: true,
        numberOfMonths: 1,
        nextText: '',
        prevText: '',
        defaultDate: new Date(),
      //  showOn: "button",        
        //showAnim: "slideDown",
        dateFormat: "dd.mm",
        onClose: function(selectedDate) {
            $("#from").datepicker("option", "maxDate", selectedDate);
        }
    });
    $('#ui-datepicker-div').addClass('custdper');
   }

        function populateDefaultValues() {
            var today = new Date();
            var month = today.getMonth() - 1,
                year = today.getFullYear();
            if (month < 0) {
                month = 11;
                year -= 1;
            }
            var oneMonthAgo = new Date(year, month, today.getDate());

            $('#to').val($.datepicker.formatDate('dd.mm', today));
            $('#from').val($.datepicker.formatDate('dd.mm', today));
        }

        $(function() {
            populateDefaultValues();
            showdp()
          //  showdatepicker();
        });
        
        
        
/*
 * 
 * 
 *  <div class="demo"> 

                <label for="from">From</label> 
                <input type="text" id="from" name="from"/> 
                <label for="to">to</label> 
                <input type="text" id="to" name="to"/> 

                </div>
 *****/