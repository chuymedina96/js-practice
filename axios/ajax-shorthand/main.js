$("#getBtn").click(function(){
	$.get("https://api.github.com/users/colt")
	.done(function(data){
		console.log(data);
	})
	.fail(function(){
		console.log("error");
	})
});


$("#postBtn").click(function(){
	var data = {name: "Chuy", city: "Chicago"}
	$.post("https://api.github.com/users/coltd", data)
	.done(function(data){
		console.log("HI!");
	})
});


$("#getJSONBtn").click(function(){
	$.getJSON("https://api.github.com/users/colt")
	.done(function(data){
		console.log(data);
	})
	.fail(function(){
		console.log("PROBLEM!");
	})
});