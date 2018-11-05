var url 		= 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var xhrbtn 		= document.querySelector("#xhr");
var fetchbtn 	= document.querySelector("#fetch");
var jquerybtn 	= document.querySelector("#jquery");
var axiosbtn 	= document.querySelector("#axios");
var display    	= document.querySelector("#quote");


xhrbtn.addEventListener("click", function(){
	var XHR = new XMLHttpRequest()
	XHR.onreadystatechange = function(){
		if(XHR.readyState == 4 && XHR.status == 200){ //4 is when the the request is done
			var quote = JSON.parse(XHR.responseText)[0];
			display.innerText = quote;	
	}
}
	XHR.open("GET", url);
	XHR.send();
});

fetchbtn.addEventListener("click", function(){
	fetch(url)
	.then(function(req){
		req.json().then(function(data){
			display.innerText = data[0];
		})
	})
	.catch(function(){
		console.log("Error");
	})
});

$("#jquery").click(function(){
	$.getJSON(url)
	.done(function(data){ //.done is the jquery way
		$("#quote").text(data[0]);
	});
});

axiosbtn.addEventListener("click", function(){
	axios.get(url)
	.then(function(res){
		display.innerText = res.data[0];
	})
	.catch(function(){
		alert("ERROR!");
	})
});

