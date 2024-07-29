function toggleAudio() {
    const audioControl = document.getElementById('audio-control');
    const backgroundMusic = document.getElementById('background-music');
    
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        audioControl.src = 'speaker-icon.png';
    } else {
        backgroundMusic.pause();
        audioControl.src = 'muted-icon.png';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab');
    const audioControl = document.getElementById('audio-control');
    const backgroundMusic = document.getElementById('background-music');

    backgroundMusic.play();
    audioControl.src = 'speaker-icon.png';

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });
});
