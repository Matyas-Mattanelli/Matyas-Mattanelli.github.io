// Get the footer div
const footer = document.getElementById('footer')

// Get current year
const currentDate = new Date()
let year = currentDate.getFullYear()

// Specify the text of the footer
footer.innerHTML = `Copyright &#169; ${year} Matyáš Mattanelli`
