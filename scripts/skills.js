// Import data loading
import { loadJSONFile } from "./education.js";

// Get the div containing skills
const skillsDiv = document.getElementById('skills');

// Define a function constructing the div containing the skills
function constructSkills(data) {
    // Sort the skills by score
    const dataSorted = Object.fromEntries(Object.entries(data).sort(([, a], [, b]) => b.Score - a.Score));

    // Loop through all skills (entries in the object) and add a div for them
    Object.entries(dataSorted).forEach(
        ([name, info]) => {
            // Create an image with the logo for the skill
            const skillLogo = document.createElement('img');
            skillLogo.setAttribute('src', info['Logo']);
            skillLogo.className = 'skill-logo';

            // Create a container for the logo
            const skillLogoContainer = document.createElement('div');
            skillLogoContainer.setAttribute('title', name);
            skillLogoContainer.className = 'skill-logo-container';
            skillLogoContainer.appendChild(skillLogo);

            // Create a div for the bar representing the score for the skill
            const skillBar = document.createElement('div');
            skillBar.className = 'skill-bar';
            skillBar.innerHTML = `<div style="width: ${info['Score']}%" class="skill-fill"></div>`; // Set width depending on the score

            // Create a div for the skill
            const skillDiv = document.createElement('div')
            skillDiv.className = 'skill width'
            skillDiv.appendChild(skillLogoContainer)
            skillDiv.appendChild(skillBar)

            // Add the skill to the section
            skillsDiv.appendChild(skillDiv)
        }
    );
}

// Construct the div
loadJSONFile('src/skills.json', constructSkills);