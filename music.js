// 1. This code loads the IFrame Player API code asynchronously.

const VIDEO_ID = "yMZ0je45cqg";
const playerBtn = document.querySelector("#playerBtn");
const stopBtn = document.querySelector("#stopBtn");
let playerStatus = false;

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 2. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    videoId: VIDEO_ID,
  });
};

function toggleAudio() {
  if (playerStatus === false) {
    player.playVideo();
    playerStatus = true;
    playerBtn.innerHTML = "⏸";
    console.log(playerStatus);
  } else {
    player.pauseVideo();
    playerStatus = false;
    playerBtn.innerHTML = "▶";
    console.log(playerStatus);
  } 
};

function stopAudio() {
  player.stopVideo();
  playerStatus = false;
  playerBtn.innerHTML = "▶";
}

playerBtn.addEventListener("click", toggleAudio);
stopBtn.addEventListener("click", stopAudio);

  // video id
  // yMZ0je45cqg