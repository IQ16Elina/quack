let clickCount = 0;

// Function to handle the quack animation and sound
function triggerQuack() {
    clickCount++;
    document.getElementById('click-count').innerText = `Clicks: ${clickCount}`;

    // Play the quack sound
    document.getElementById('quack-sound').play();

    const quackImage = document.getElementById('quack-image');
    
    // Change image to open mouth and set a timeout to close it after 500ms
    quackImage.src = 'quack-open.png'; // Open mouth

    // After 500ms, reset the image back to closed mouth
    setTimeout(() => {
        quackImage.src = 'quack-closed.png'; // Closed mouth
    }, 500); // Adjust timing if needed
}
