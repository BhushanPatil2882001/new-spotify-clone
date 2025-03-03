let progress = document.getElementById("seekbar")
let currentSongId = 1;
let currentSong = document.getElementById(currentSongId).firstElementChild
let playPausebtn = document.getElementById("play")
let songQul = document.querySelector(".now-playing")

currentSong.onloadedmetadata = () =>{
    progress.max = currentSong.duration;
    progress.value = currentSong.currenTime;
}

songQul.addEventListener("click",(e)=>{
    currentSong.parentElement.classList.remove("playing")
    currentSong.pause()
    currentSongId = parseInt(e.target.id) 
    currentSong = document.getElementById(currentSongId).firstElementChild
    currentSong.parentElement.classList.add("playing")
    progress.max = currentSong.duration
    progress.value = currentSong.currentTime
    currentSong.play()
    playPausebtn.classList.replace("ri-play-circle-fill", "ri-pause-circle-fill")
    console.log(currentSongId);
} )

playPausebtn.addEventListener("click", ()=>{
    if(playPausebtn.classList.contains("ri-play-circle-fill")){
        currentSong.play();
        playPausebtn.classList.remove("ri-play-circle-fill");
        playPausebtn.classList.add("ri-pause-circle-fill")
    }
    else{
        currentSong.pause()
        playPausebtn.classList.add("ri-play-circle-fill");
        playPausebtn.classList.remove("ri-pause-circle-fill")
    }
})

if(currentSong.play()){
    setInterval(()=>{
        progress.value = currentSong.currentTime
    },1000)
}

progress.onchange = () =>{
    currentSong.play();
    currentSong.currentTime = progress.value
    playPausebtn.classList.remove("ri-play-circle-fill");
    playPausebtn.classList.add("ri-pause-circle-fill")
}
