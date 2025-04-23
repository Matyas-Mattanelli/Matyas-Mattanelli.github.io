// Import data loading
import { loadJSONFile } from "./education.js";

// Get the div containing projects
const projectsDiv = document.getElementById('projects');

// Define a function constructing the div containing the projects
function constructProjects(data) {
    // Loop through all projects (entries in the object) and add a div for them
    Object.entries(data).forEach(
        ([name, info]) => {
            // Add title, logo, and description
            const title = document.createElement('h2'); // Create a title for the position
            title.textContent = name; // Specify the name as the title
            title.className = 'width school-title'
            projectsDiv.appendChild(title) // Add the title to the div
            const descriptionLogo = document.createElement('div') // Create a div holding the description and the logo
            descriptionLogo.className = 'width school-desc-logo' // Specify the class name for CSS
            const description = document.createElement('div') // Create a div holding the description
            description.textContent = info['Description'] // Specify the description
            description.className = 'school-desc' // Class name for CSS
            const logoImg = document.createElement('img') // Create an image element for the logo
            logoImg.setAttribute('src', info['Pic']) // Specify the link to the image
            logoImg.className = 'school-logo-img' // Specify the class name for CSS
            const logo = document.createElement('a') // Create an a element to store the link to the Github repository
            if ('Github repo' in info && info['Github repo'] !== "") { // If available, add link to Github repository
                logo.setAttribute('href', info['Github repo']) // Specify the link to the Github repository
                logo.setAttribute('target', '_blank') // Open the link in a new tab
                logo.className = 'school-logo' // Add class name for CSS
            } else {
                logo.className = 'school-logo-empty' // Add class name for CSS
            }
            logo.appendChild(logoImg) // Connect the link element and img element
            descriptionLogo.appendChild(logo) // Add the logo
            descriptionLogo.appendChild(description) // Add the description
            projectsDiv.appendChild(descriptionLogo) // Add the description

            // Create a table with information
            const table = document.createElement('table'); // Create a table to store the current position information
            table.className = 'school width'; // Specify the class for CSS
            Object.entries(info).forEach( // Loop through the entries containing the information about the position
                ([key, value]) => {
                    if (value !== '' && key !== 'Description' && key !== 'Pic' && key !== 'Github repo') { // Skip the non-specified values and the description (already added above) and the logo
                        const row = document.createElement('tr'); // Create a row to store the current information
                        const tdKey = document.createElement('td'); // Create a cell to store the key name for the current information
                        tdKey.textContent = key; // Specify the key name of the current information
                        tdKey.className = 'edu-key'; // Specify a class name for the key for CSS
                        row.appendChild(tdKey); // Add the cell with key to the row
                        if (key === "Key words" || key == 'Software') { // Handle courses separately (they will span multiple rows)
                            tdKey.setAttribute('rowspan', Object.keys(value).length.toString()); // Span the key over all rows with information
                            let first = true; // Create an indicator for the first course which need to be handled separately (it needs to be added along with the key)
                            value.forEach( // Loop through the skills and create row for each
                                (skill) => {
                                    const tdVal = document.createElement('td'); // Create a table cell element
                                    tdVal.className = 'centered-text'; // Make sure the value is centered
                                    tdVal.textContent = skill; // Specify the skill
                                    if (first) { // Add the first course along with the key
                                        first = false;
                                        row.appendChild(tdVal); // Add the cell to the table
                                        table.appendChild(row); // Add the row to the table
                                    } else { // Create a new row for each additional course
                                        const newRow = document.createElement('tr');
                                        newRow.appendChild(tdVal);
                                        table.appendChild(newRow);
                                    }
                                }
                            );
                        } else { // For other information, there is only a single cell required
                            const tdVal = document.createElement('td');
                            if (key === "Link") { // Add a hypertext reference for the link
                                tdVal.innerHTML = `<a href="${value}">${value}</a>`
                            } else {
                                tdVal.textContent = value;
                            }
                            tdVal.className = 'centered-text'; // Make sure the value is centered
                            row.appendChild(tdVal);
                            table.appendChild(row); // Add the row to the table
                        }
                    }
                }
            );
            projectsDiv.appendChild(table); // Add the position to the work page
        }
    );
}

// Construct the div
loadJSONFile('src/projects.json', constructProjects);