const playButton = document.getElementById('playButton');
const audioElement = document.getElementById('audioElement');

playButton.onclick = () => {
    audioElement.play();
};