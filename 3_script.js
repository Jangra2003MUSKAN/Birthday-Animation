// Play music on first user intraction

function playSong() {
    const audio = document.getElementById("bg-music");

    //restart and play
    audio.currentTime = 0;
    audio.play();
}