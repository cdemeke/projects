//finds the assoicated wrapper
        function findCorrectWrap(id){
          return $('.'+id+'.wrap')
         //$('.'+id+'.wrap').toggleClass('active');
        };

        //toggles the wrap activate class
        function toggleCorrectWrap(id){
          $(id).toggleClass('active');
        }

        //listener for a button to be pressed
        $('.buttons').on('click', function(e){
          //get the exact location of the mouse click
          //alert(e.pageX+ ' , ' + e.pageY);
          //grabs the value attribute from the clicked button
          var id = $(this).attr("value");
          //class function to find assoicated wrapper
          var wrapper = findCorrectWrap(id)
          
          //checks if the the wrap div is already activated
          if ($(wrapper).hasClass('active')) {
            }
            else{
              //hides all active wraps
              $('.wrap').removeClass('active');
            };

          //calls function to activate the assoicated wrapper
          toggleCorrectWrap(wrapper);

        });