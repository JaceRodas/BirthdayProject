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

function Back() {
    const wipeEffect2 = document.createElement('div');
    wipeEffect2.id = 'wipe-effect2'; // Create the element with the correct ID
    document.body.appendChild(wipeEffect2); // Append the element to the body

    setTimeout(() => {
        window.location.href = 'selection.html'; // Redirect after a delay
    }, 1000);
}
