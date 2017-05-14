var searchForm = function(){
	let tracks = [];

	let title = document.getElementById('playlist-title');
	let query = document.getElementById('search-form-query');
	let submit = document.getElementById('search-form-submit');

	submit.addEventListener('click', (ev)=>{
		ev.preventDefault();	
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200) {
		      for( let track of JSON.parse(this.responseText)){
		      	console.log(track);
		      	tracks.push(new Audio(track.preview_url));
		      }
		    }
		};
		xhttp.open("GET", "/spotify/search/" + query.value + "/" + title.value, true);
		xhttp.send();
	})

	return tracks;
}

