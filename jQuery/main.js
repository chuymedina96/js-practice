$("#btn").click(function(){
	$.ajax({
		method: "GET",
		url: "https://baconipsum.com/api/?type=meat-and-filler",
		dataType: 'json'
	})
	.done(addP)
	.fail(function(){
		alert("failed");
	})
})


//This function appends text from within the api endpoint json object to p
function addP(data){
	$("p").text(data[0]);
	console.log(data);
}


