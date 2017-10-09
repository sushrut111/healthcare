
$( document ).ready(function() {
	$.ajax({
    url: "/fetchdoctors",
 
 
    // Tell YQL what we want and that we want JSON
    // data: {
    //     q: "select title,abstract,url from search.news where query=\"cat\"",
    //     format: "json"
    // },
 
    // Work with the response
    success: function( response ) {
        console.log( response ); // server response
        var str ='<option value="" disabled selected>Choose your option</option>';
        for (var i =  0; i < response.length; i++) {
        	str+='<option value="'+response[i].id+'" data-icon="/images/doctor.png" class="circle">'+response[i].name+'</option>';
        };
        console.log(str);
        $('.doctors').html(str);
        $('select').material_select();
    }
});
});
