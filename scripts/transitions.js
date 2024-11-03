// This script contains functions performing smooth transitions between sections. Each time the current section is hidden and the new section displayed

// Define a function returning the title appropriate for the given section
function getTitle(sectionId) {
    // Return the title based on the section id
    switch (sectionId) {
        case 'home':
            return 'Mgr. Matyáš Mattanelli';
        case 'aboutme':
            return 'About Me';
        case 'education':
            return 'Education';
        case 'work':
            return 'Work';
        case 'projects':
            return 'Projects';
        case 'skills':
            return 'Skills';
    }
}

// Define a function for hiding the current section
function changeSection(sectionId, addToHistory=true) {
    // Get the div of the new section
    const newSection = document.getElementById(sectionId);

    // Get the div of the current section
    const currentSection = document.getElementsByClassName('section-shown')[0]; 

    // Hide the current section only if the new section is different from the current section
    if (newSection !== currentSection) {
        // Change the opacity of the current section
        currentSection.classList.remove('section-shown');
        currentSection.classList.add('section-hidden');

        // Show the new section after the transition is complete
        currentSection.addEventListener('transitionend', function() {
            // Remove the current section from the display after the transition is complete
            this.style.display = 'none';
            newSection.style.display = 'block';

            // Change the title
            document.title = getTitle(sectionId);

            // Show the new section
            setTimeout(() => {
                newSection.classList.remove('section-hidden');
                newSection.classList.add('section-shown');
            }, 10)
            
        }, { once: true });

        // Add the current section to the history to allow for correct behavior of the back and forward buttons
        if (addToHistory) {
            window.history.pushState(sectionId, "", `#${sectionId}`)
        }
    }
}

// Handle back and forward navigation
window.addEventListener('popstate', (event) => {
    // Change the section to the previous or next one
    if (event.state) {
        changeSection(event.state, false)
    }
});

// Show the home page
const homeSection = document.getElementById('home');
homeSection.classList.remove('section-hidden');
homeSection.classList.add('section-shown');
window.history.pushState("home", "", "#home") // Add it to the history and change the URL to allow for the correct behavior of back and forward buttons