var playerInit = function(tracks){
	current = 0;

	let play_button = document.getElementById('play');
	let pause_button = document.getElementById('pause');
	let next_button = document.getElementById('next');

	next_button.addEventListener('click', ()=>{
		tracks[current].pause();
		current += 1;
		tracks[current].play();
	})

	pause_button.addEventListener('click', ()=>{
		tracks[current].pause();
	})

	play_button.addEventListener('click', ()=>{
		tracks[current].play();
	})
}