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
        'Together/image (1).jpg',
        'Together/image (2).jpg',
        'Together/image (3).jpg',
        'Together/image (4).jpg',
        'Together/image (5).jpg',
        'Together/image (6).jpg',
        'Together/image (7).jpg',
        'Together/image (8).jpg',
        'Together/image (9).jpg',
        'Together/image (11).jpg',
        'Together/image (12).jpg',
        'Together/image (13).jpg',
        'Together/image (14).jpg',
        'Together/image (15).jpg',
        'Together/image (16).jpg',
        'Together/image (17).jpg',
        'Together/image (18).jpg',
        'Together/image (19).jpg',
        'Together/image (20).jpg',
        'Together/image (21).jpg',
        'Together/image (22).jpg',
        'Together/image (23).jpg',
        'Together/image (24).jpg',
        'Together/image (25).jpg',
        'Together/image (26).jpg',
        'Together/image (27).jpg',
        'Together/image (28).jpg',
        'Together/image (29).jpg',
        'Together/image (30).jpg',
        'Together/image (31).jpg',
        'Together/image (32).jpg',
        'Together/image (33).jpg',
        'Together/image (31).jpg',
        'Together/image (32).jpg',
        'Together/image (33).jpg',
        'Together/image (34).jpg',
        'Together/image (35).jpg',
        'Together/image (36).jpg',
        'Together/image (37).jpg',
        'Together/image (38).jpg',
        'Together/image (39).jpg',
        'Together/image (40).jpg',
        'Together/image (41).jpg',
        'Together/image (42).jpg',
        'Together/image (43).jpg',
        'Together/image (44).jpg',
        'Together/image (45).jpg',
        'Together/image (46).jpg',
        'Together/image (47).jpg',
        'Together/image (48).jpg',
        'Together/image (49).jpg',
        'Together/image (50).jpg',
        'Together/image (51).jpg',
        'Together/image (52).jpg',
        'Together/image (53).jpg',
        'Together/image (54).jpg',
        'Together/image (55).jpg',
        'Together/image (56).jpg',
        'Together/image (57).jpg',
        'Together/image (58).jpg',
        'Together/image (59).jpg',
        'Together/image (60).jpg'
        
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
       setInterval(fadeOutAndSwitchImage, 4000); // 2 seconds to show + 2 seconds for fade-out
   });

   function Next() {
    const wipeEffect2 = document.createElement('div');
    wipeEffect2.id = 'wipe-effect2'; // Create the element with the correct ID
    document.body.appendChild(wipeEffect2); // Append the element to the body

    setTimeout(() => {
        window.location.href = 'letter.html'; // Redirect after a delay
    }, 1000);
}

function Back() {
    const wipeEffect2 = document.createElement('div');
    wipeEffect2.id = 'wipe-effect2'; // Create the element with the correct ID
    document.body.appendChild(wipeEffect2); // Append the element to the body

    setTimeout(() => {
        window.location.href = 'selection.html'; // Redirect after a delay
    }, 1000);
    
}

