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

document.addEventListener("DOMContentLoaded", () => {
    const heartContainer = document.querySelector('.heart-container');
    const audioControl = document.getElementById('audio-control');
    const backgroundMusic = document.getElementById('background-music');

    backgroundMusic.play();
    audioControl.src = 'speaker-icon.png';

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 4 + 6 + 's';
        heart.style.backgroundColor = getRandomColor();
        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000);
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    setInterval(createHeart, 300);
});

function Next() {
    const wipeEffect2 = document.createElement('div');
    wipeEffect2.id = 'wipe-effect2'; // Create the element with the correct ID
    document.body.appendChild(wipeEffect2); // Append the element to the body

    setTimeout(() => {
        window.location.href = 'Mae.html'; // Redirect after a delay
    }, 1000);
}

function Next1() {
    const wipeEffect2 = document.createElement('div');
    wipeEffect2.id = 'wipe-effect2'; // Create the element with the correct ID
    document.body.appendChild(wipeEffect2); // Append the element to the body

    setTimeout(() => {
        window.location.href = 'jace.html'; // Redirect after a delay
    }, 1000);
}

function Next2() {
    const wipeEffect2 = document.createElement('div');
    wipeEffect2.id = 'wipe-effect2'; // Create the element with the correct ID
    document.body.appendChild(wipeEffect2); // Append the element to the body

    setTimeout(() => {
        window.location.href = 'Together.html'; // Redirect after a delay
    }, 1000);
}
