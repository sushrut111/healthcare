function ambulance () {
		$.ajax({
    url: "/ambulance",
 	data:{name:"sushrut",phone:"9403039900"},
    success: function( response ) {
 		alert("contacted");
    }
    ,
    
});

}