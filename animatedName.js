// Find the title to be changed
const h1 = document.querySelector('h1.name');

// Get the title text
const title = h1.textContent;

// Define the last current index shown
let letterIndex = 0;

// Define a function gradually revealing the text of the given title
function showTitle() {
    h1.textContent = title.slice(0, letterIndex)
    letterIndex++
    if (letterIndex !== (title.length + 1)) { // Repeat itself until the end of the text is reached
        setTimeout(showTitle, 100)
    }
}

// Call the function
showTitle()