var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

btn.addEventListener("click", function(){
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function(){ //onreadystatechange 
		if(XHR.readyState == 4 && XHR.status == 200){ //4 is when the the request is done
			var url = JSON.parse(XHR.responseText).message; 
			img.src= url;
			console.log(url);		
		}
	}
	XHR.open("GET", "https://dog.ceo/api/breeds/image/random");
	XHR.send();
});