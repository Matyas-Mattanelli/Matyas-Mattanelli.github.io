// This script implements an Easter Egg devoted to my significant other <3

// Locate the span element
const elem = document.getElementById("secret")

// Assign a function run upon clicking
elem.onclick = function() {
    // Create a heart image
    const img = document.createElement('img');
    img.src = 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678087-heart-256.png';
    img.alt = 'Heart';

    // Add the image to the document
    document.body.appendChild(img);

    // Style the image
    img.style.position = 'fixed';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%,-50%)';
    img.style.width = '600px';
    img.style.height = '600px';
    img.style.opacity = '1'; // Start hidden
    img.style.transition = 'opacity 0.5s ease-in-out'; // Transition to appear slowly
    img.style.animation = 'jump-in 2s'

    // Create a text element
    const textDiv = document.createElement('div');

    // Add the text
    textDiv.textContent = 'Dorinka'

    // Style the text
    textDiv.style.position = 'fixed';
    textDiv.style.top = '50%';
    textDiv.style.left = '50%';
    textDiv.style.transform = 'translate(-50%,-50%)';
    textDiv.style.color = 'white';
    textDiv.style.fontSize = '96px';
    textDiv.style.fontWeight = 'bold';
    textDiv.style.fontFamily = ['Romantic', 'sans-serif'];
    textDiv.style.opacity = '1'; // Start hidden
    textDiv.style.transition = 'opacity 0.5s ease-in-out'; // Transition to appear slowly
    textDiv.style.animation = 'jump-in 2s'

    // Add the text to the document
    document.body.appendChild(textDiv);

    // Hide the elements after 5 seconds
    setTimeout(() => {
        img.style.opacity = 0;
        textDiv.style.opacity = 0;
    }, 5000)

    // Remove the elements after hiding them
    img.addEventListener('transitionend', () => {
        if (img.style.opacity === '0') { // Remove only after the disappearing transition
            img.remove();
            textDiv.remove();
        }
    })
}
