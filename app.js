$(document).ready(function() {
    //MODAL SHOW FUNCTION
        $('#login').click(function(){
            $('#loginModal').modal('show');
        });

    //SEARCH ENGINE MOCKUP WITH JQUERY

        $('#find').click(function(){
            $("#main").addClass('d-none'); 
            $("#loading").removeClass('d-none');
            setTimeout(function() { // .delay() method doesn't work with Bootstrap
                $('#loading').addClass('d-none');
                $('#results').removeClass('d-none');
                setTimeout(function() {
                    $('#alert').show();
                  }, 2000);
              }, 3000);
            
    
              });
            
           
    
        
});


   
