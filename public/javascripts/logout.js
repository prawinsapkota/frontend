$(document).ready(function (){
   

    
    
    
$("#logout").on('click', function (e) {
    e.preventDefault();
    alert("Logged Out!");
    
    let event ={};
        
        
      $.ajax({
            type: 'GET',
            url: "http://localhost:3000/clients/logout",
        data: event,
            success: function (event) {
                console.log(event);
                
                window.location.replace('/login');
                
            }
          
      });
    
    
    });
    
    
    
});