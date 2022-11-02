console.log("Welcome to Spotify");

//Initialize the Variables
let singindex = 0;
let audioElement = new Audio('./assests/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');



let songs = [
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},
	{songName: "Rabta", filePath: "./assests/1.mp3", coverPath: "assests/cover.jpg"},

]
// audioElement.play();

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
	if(audioElement.paused || audioElement.currentTime<=0){
		audioElement.play();
		masterPlay.classList.remove('fa-play-circle');
		masterPlay.classList.add('fa-pause-circle');
		gif.style.opacity = 0;

	}
	else{
		audioElement.pause();
		masterPlay.classList.remove('fa-pause-circle');
		masterPlay.classList.add('fa-play-circle');
		gif.style.opacity = 0;
	}
})

// Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
	console.log('timeupdate');
	// Update Seekbar
})