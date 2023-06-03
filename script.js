console.log("welcome to my spotify app")
// initializ variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById('myProgressBar')
let masterPlay = document.getElementById('masterPlay')
let songInfo = document.getElementById('songInfo')
let masterSongName = document.getElementById('masterSongName')
let songListItems = Array.from(document.getElementsByClassName('songListItems'));
let songName = Array.from(document.getElementsByClassName('songName'));
let songs = [
    {songName:"NCS- no copyright song-1", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName:"NCS- no copyright song-2", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"NCS- no copyright song-3", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"NCS- no copyright song-4", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"NCS- no copyright song-5", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"NCS- no copyright song-6", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"NCS- no copyright song-7", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"NCS- no copyright song-8", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"NCS- no copyright song-9", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"NCS- no copyright song-10", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
];
songListItems.forEach((elements, i)=>{
    elements.getElementsByTagName('img')[0].src = songs[i].coverPath;
    elements.getElementsByClassName('songName')[0].innerText = songs[i].songName;
})

// audioElement.play();
// Handle play pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songInfo.style.opacity = 1;
    }else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        songInfo.style.opacity = 0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    console.log("timeupdate")
    // update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)
    myProgressBar.value = progress
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-circle-play')
        element.classList.remove('fa-circle-pause')
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        songInfo.style.opacity = 1;
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }else{
        songIndex += 1
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }else{
        songIndex -= 1
    }
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})