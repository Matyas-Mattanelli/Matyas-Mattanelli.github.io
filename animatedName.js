// Find the title to be changed
const h1 = document.querySelector('h1.name');

// Get the title text
const title = h1.textContent;

// Define the last current index shown
let letterIndex = 0;

// Define a function showing the title up to the current index and repeatedly calling itself
function showTitle() {
    h1.textContent = title.slice(0, letterIndex)
    letterIndex++
    if (letterIndex === (title.length + 1)) {
        letterIndex = 0
    }
    let timeOut = (letterIndex === 0) ? 500 : 100
    setTimeout(showTitle, timeOut)
}

// Call the function
showTitle()