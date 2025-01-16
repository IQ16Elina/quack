let clickCount = 0;

// Function to handle the quack animation and sound
function triggerQuack() {
    const sound = document.getElementById('quack-sound');
    const image = document.getElementById('quack-image');
    const counter = document.getElementById('click-count');
    
    // Play the quack sound
    sound.play();
    
    // Change the image to the open mouth (quack-open.png)
    image.src = 'quack-open.png'; // Image with the mouth open
    
    // Increment click count
    clickCount++;
    counter.textContent = `Clicks: ${clickCount}`;
    
    // After 500ms, reset the image to closed mouth (quack-closed.png)
    setTimeout(() => {
        image.src = 'quack-closed.png'; // Image with the mouth closed
    }, 500); // Adjust timing if needed
}
