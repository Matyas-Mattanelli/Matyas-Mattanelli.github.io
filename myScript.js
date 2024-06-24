function changeText() {
    if (document.getElementById('demo').innerHTML == "Welcome!") {
        document.getElementById('demo').innerHTML = "Nice job!"
    } else {
        document.getElementById('demo').innerHTML = "Welcome!"
    }
}

function changeBackground() {
    // Get the current background color of the body
    const body = document.body;
    const currentColor = window.getComputedStyle(body).backgroundColor;

    // Convert the current color to RGB format
    const rgbColor = currentColor.replace(/\s/g, '').toLowerCase();

    // Check if the background color is grey
    const isGrey = rgbColor === 'rgb(128,128,128)' || rgbColor === 'grey';

    // Change the background color based on the current color
    if (isGrey) {
        body.style.backgroundColor = 'black';
    } else {
        body.style.backgroundColor = 'grey';
    }
 }