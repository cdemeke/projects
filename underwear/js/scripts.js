//Keep Form on the same page
$(document).ready(function(){
   var $form = $('form');
   $form.submit(function(){
      $.post($(this).attr('action'), $(this).serialize(), function(response){
            // do something here on success
      },'json');
      return false;
   });
});



//
$(document).ready(function() {
    $('#dynamicOptionForm').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            numFloors: {
                validators: {
                    between: {
                        min: 1,
                        max: 30,
                        message: 'Currently support between 1 - 30 days; because anything longer that that is not a vacation'
                    }
                }
            }
        }
    });


   //start
   $("#buttonSubmit").click(function(){
	    $("#inputDisplay").hide();
	    //$('#msg').html($('#inputVal').val());
	    var inputData = 0;
	    inputData = parseInt($('#inputVal').val());
	    document.getElementById("msg").innerHTML = inputData;
	    //document.getElementById("msg").innerHTML = inputData;


	    
			inputData = inputData - 1;
		    document.getElementById("msgRecommendation").innerHTML = inputData;

		    //no Wash
		    var inputData_NoWash = 0;
		    var inputData_NoWash = inputData;
		    document.getElementById("msgRecommendation_NoWash").innerHTML = inputData_NoWash;
		    //1 wash
		    var inputData_OneWash = 0;
		    var inputData_OneWash = Math.round((inputData / 2)) ;
		    document.getElementById("msgRecommendation_OneWash").innerHTML = inputData_OneWash;
		    //2 washes
		    var inputData_TwoWash = 0;
		    var inputData_TwoWash = Math.round((inputData / 3)) ;
		    document.getElementById("msgRecommendation_TwoWash").innerHTML = inputData_TwoWash;
    //
    $("#inputResults").show();
  });




$("#buttonSubmit2").click(function(){
    $("#inputDisplay").show();
    $("#inputResults").hide();
    inputResults
  });
});