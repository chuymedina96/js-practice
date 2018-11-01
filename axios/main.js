$("#btn").click(function(){
	var url = "https://opentdb.com/api.php?amount=1"
	axios.get(url)
	.then(trivia)
	.catch(function(){
		console.log("error");
	})
})

function trivia(res){
	$("#question").text(res.data.results[0].question)
	console.log(res.data.results[0].question);
}