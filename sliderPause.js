// This script ensures that when the slider is hovered over, the animation stops

// Get the slider
const slider = document.getElementsByClassName('slider')[0]

// Add an event listener for entering the slider
slider.addEventListener('mouseenter', () => {
    // Pause animation for all imgages
    document.querySelectorAll('.slider img').forEach(img => {
        img.style.animationPlayState = 'paused';
    });
});

// Add an event listener for leaving the slider
slider.addEventListener('mouseleave', () => {
    // Pause animation for all imgages
    document.querySelectorAll('.slider img').forEach(img => {
        img.style.animationPlayState = 'running';
    });
});