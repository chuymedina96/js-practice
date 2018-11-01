$("#clickBtn").click(function(){
	$.getJSON("http://aws.random.cat//meow")
	.done(addSRC)
	.fail(function(){
		console.log("error");
	})
})


function addSRC(data){
	$("#catSRC").attr("src", data.file);
	console.log(data.file);
}

