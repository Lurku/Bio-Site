const wrapper = document.querySelector(".wrapper"),
musicImg = wrapper.querySelector(".img-area img"),
musicName = wrapper.querySelector(".song-details .name"),
musicArtist = wrapper.querySelector(".song-details .artist")

let musicIndex = 3;

window.addEventListener("load", ()=>{
    loadMusic(musicIndex);
});

function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `music/Thumbnails/${allMusic[indexNumb - 1].img}.jpg`;
}