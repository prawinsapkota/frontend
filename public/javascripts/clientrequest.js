$(document).ready(function (){
   let base_url = 'http://localhost:3000/';
    let imageFile = '';
    let tblBody = $("#tblbody");

   console.log(localStorage.getItem('username'));
   console.log(localStorage.getItem('client._id'));

  var  us = localStorage.getItem('username');
    $('#username').text(localStorage.getItem('username'));
    
    $.ajaxSetup({
        xhrFields: {
            withCredentials: true
            
        },
        crossDomain: true
        
        
        
    });
    
//    $.ajax({
//         type: 'GET',
//         url: base_url + 'clients',
//         success: function (user) {
//             console.log(user);
//             $('#username').append(user.username);
//         }
// });
    
        $("#imageFile").on('change', function () {
        let formData = new FormData();
        let files = $("#imageFile").get(0).files;
        if (files.length > 0) {
            formData.append("imageFile", files[0]);
        }
        // $("#add-hero").prop("disabled", true);
        $.ajax({
            type: 'POST',
            url: base_url + 'upload',
            contentType: false,
            cache: false,
            processData: false,
            data: formData,
            success: function (data) {
                imageFile = data.filename;
                // $("#add-hero").prop("disabled", false);
            },
            error: function () {
                alert("Image upload failed!");
            }
        });
    });
    
    
    
        $("#requestevent").on('click', function () {
        let requestevent = {
            username: localStorage.getItem('username'),
            name: $("#name").val(),
            place: $("#place").val(),
            purpose: $('#purpose').val(),
            description: $('#description').val(),
            date: $('#date').val(),
            image: imageFile
        };
        $.ajax({
            type: 'POST',
            url: base_url + 'requestevent',
            data: requestevent,
            success: function (requestevent) {
                alert("Event Requested");
            },
            error: function () {
                alert("Fill all the form fields!");
            }
        });
    });
    
    
    //    function rowTemplate(requestevent) {
    //     let oneRow = 
            
    //         "<tr><td>" + event.requestname + "</td><td>" + event.requestplace + "</td>" +  "</td><td>" + event.requestpurpose + "</td>"
    //     +  "</td><td>" + event.description + "</td>" + 
    //         "</td><td>" + event.date + "</td>";
    //     if (event.image !== '') {
    //         oneRow += "<td><img src= " + base_url + "uploads/" + event.image + " width='130' /></td>";
    //     } else {
    //         oneRow += "<td> No Image </td>";
    //     }
    //     oneRow += '<td><button type="button" class="btn btn-warning update" event_id=' + event._id + '>Update</button></td> ';
    //     oneRow += '<td><button type="button" class="btn btn-danger delete" event_id=' + event._id + '>Delete</button></td> </tr>';
        
       

        
    //     return oneRow;
    // }
    
    
    
    });