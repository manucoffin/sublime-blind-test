window.addEventListener('load', ()=>{
	let query = document.getElementById('search-form-query');
	let submit = document.getElementById('search-form-submit');

	submit.addEventListener('click', (ev)=>{
		ev.preventDefault();	
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		      // Typical action to be performed when the document is ready:
					console.log(xhttp.responseText);
		    }
		};
		xhttp.open("GET", "/spotify/search/" + query.value, true);
		xhttp.send();
	})
})

