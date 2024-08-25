// This script contains functions performing transitions between sections. Each time the current section is hidden and the new section displayed

// Define a function for hiding all content except for the navigation bar
function hideALL() {
    // Get divs for all sections
    const divs = document.querySelectorAll('.display'); 

    // Hide all section divs
    divs.forEach(elem => {
        elem.classList.remove('display-active');
        // elem.style.opacity = 0;
        // elem.style.display = 'none';
    })
}

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

// Define a function for showing the required section
function showSection(sectionId) {
    // Hide all sections
    hideALL();

    // Change the title
    document.title = getTitle(sectionId);

    // Find the required section div
    const sectionDiv = document.getElementById(sectionId);

    // Show the required section
    sectionDiv.classList.add('display-active');
    // sectionDiv.style.display = 'block';
    // sectionDiv.style.opacity = 1;
}

// Start by showing the home section (all section are hidden as default)
showSection('home');