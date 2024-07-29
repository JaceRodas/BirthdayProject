document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var welcomeText = document.getElementById("welcomeText");
        welcomeText.classList.remove("fade-in"); // Remove the fade-in class
        welcomeText.classList.add("fade-out"); // Add the fade-out class
        setTimeout(function() {
            window.location.href = "selection/selection.html"; // Redirect to menu.html after fade out
        }, 1000); // Adjust the time for fading out effect (1000 milliseconds = 1 second)
    }, 2000); // Adjust the delay before fading in (3000 milliseconds = 3 seconds)
});
