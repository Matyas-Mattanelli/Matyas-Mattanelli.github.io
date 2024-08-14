// Get the images
const imgs = document.querySelectorAll('.slider img')

// Initiate the indices
let currentIndex = 0
let prevIndex = imgs.length - 1

// Set timeo out
const timeOut = 5000

// Define a function to periodically show the images
function showImage() {
    // Hide previous image
    prevIndex = currentIndex === 0 ? imgs.length - 1 : currentIndex - 1
    imgs[prevIndex].style.display = 'none'

    // Show the current image
    imgs[currentIndex].style.display = 'block'

    // Increase index
    currentIndex++
    currentIndex = currentIndex < imgs.length ? currentIndex : 0
    

    // Call the function again
    setTimeout(showImage, timeOut)
}

// Call the function
showImage()