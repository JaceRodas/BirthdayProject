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
    const audioControl = document.getElementById('audio-control');
    const backgroundMusic = document.getElementById('background-music');
    const image = document.getElementById('image');
    
    // Define images array and currentIndex in a global scope within this function
    const images = [
        'selection/Together/pic/image (1).jpg',
        'selection/Together/pic/image (2).jpg',
        'selection/Together/pic/image (3).jpg',
        'selection/Together/pic/image (4).jpg',
        'selection/Together/pic/image (5).jpg'
    ];
    let currentIndex = 0;

    // Play background music by default
    backgroundMusic.play();
    audioControl.src = 'speaker-icon.png';

    // Function to handle fade-out and switch image
    function fadeOutAndSwitchImage() {
        image.classList.add('fade-out'); // Start fade-out animation

        // Listen for the animation end to switch the image
        image.addEventListener('animationend', onFadeOut);
    }

    // Function to switch image after fade-out
    function onFadeOut() {
        // Remove fade-out class after animation completes
        image.classList.remove('fade-out');
        
        // Update to the next image in the array
        currentIndex = (currentIndex + 1) % images.length; // Increment index and loop back to 0
        image.src = images[currentIndex]; // Change image source

        // Add fade-in class for the new image
        image.classList.add('fade-in');

        // Remove fade-in class after animation completes to allow repeat fading
        image.addEventListener('animationend', function onFadeIn() {
            image.classList.remove('fade-in');
            image.removeEventListener('animationend', onFadeIn);
        });

        // Remove the fade-out listener until the next fade-out cycle
        image.removeEventListener('animationend', onFadeOut);
    }

    // Start the loop: fade out and switch images every 2 seconds
    setInterval(fadeOutAndSwitchImage, 2000);
});

function Back() {
    const wipeEffect2 = document.createElement('div');
    wipeEffect2.id = 'wipe-effect2'; // Create the element with the correct ID
    document.body.appendChild(wipeEffect2); // Append the element to the body

    setTimeout(() => {
        window.location.href = 'selection.html'; // Redirect after a delay
    }, 1000);
    
}

