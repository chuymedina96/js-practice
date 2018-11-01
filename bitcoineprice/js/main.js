var btn = document.querySelector("#btn");
var price = document.querySelector("#price");

btn.addEventListener("click", function(){
	// USING FETCH FOR FETCHING DATA FROM APIS
	var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
	fetch(url)
	.then(function(response){
		console.log(response);
		return response.json();
	})
	.then(function(data){
		price.innerText = data.bpi.EUR.rate;
	});
});

//Using XHR for API request
/*var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function() {
		if(XHR.readyState == 4 && XHR.status == 200){
			var url = JSON.parse(XHR.responseText).bpi.USD.rate;
			price.innerText = url;
		}
	}
	XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json");
	XHR.send();