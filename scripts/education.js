// Get the div containing education
const eduDiv = document.getElementById('education');

// Define a function returning link to a course based on its code
const courseLink = (code) => `https://is.cuni.cz/studium/predmety/index.php?do=predmet&kod=${code}`;

// Define a function constructing a div based on info given in an object
function constructEducation(data) {
    // Loop through all schools (entries in the object) and add a div for them
    Object.entries(data).forEach(
        ([id, info]) => {
            const div = document.createElement('div') // Create the div to store the current school
            div.className = 'school width' // Specify the class for CSS
            Object.entries(info).forEach( // Loop through the entries containing the information about the school
                ([key, value]) => {
                    if (value !== '') {
                        const infoDiv = document.createElement('div'); // Create an element to store the current information
                        if (key.includes('courses')) { // Handle courses separately (they contain a list)
                            infoDiv.innerHTML = `<span class="edu-key">${key}:</span> `; // Specify the type of information
                            Object.entries(value).forEach( // Loop through the courses and add them to the div
                                ([course, code]) => {
                                    const a = document.createElement('a'); // Create a hypertext element used for the given course
                                    a.textContent = `${course}, `; // Specify the course
                                    a.setAttribute('href', courseLink(code)) // Specify the link to the course
                                    a.setAttribute('target', '_blank') // Make sure the website opens in new tab
                                    // a.className = 'in-text-link'
                                    infoDiv.appendChild(a) // Add the course to the current information div
                                }
                            );
                        } else {
                            infoDiv.innerHTML = `<span class="edu-key">${key}:</span> ${value}`;
                            infoDiv.className = 'justify'
                        }
                        div.appendChild(infoDiv); // Add the given info to the div
                    }
                }
            );
            const hr = document.createElement('hr') // Create an element representing a horizontal line separating individual schools
            hr.className = 'width' // Fit the line to the specified width
            div.appendChild(hr) // Add the element to the main div
            eduDiv.appendChild(div); // Add the school to the education page
        }
    );
}

// Define a function loading the information and costructing the div
function loadJSONFile(fileName) {
    fetch(fileName)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch ${fileName}. Status: ${response.status}`);
            }
            return response.json();  
        })
        .then(data => constructEducation(data))
        .catch(error => console.error(`Failed to fetch ${fileName}: `, error)); 
}

// Construct the div
loadJSONFile('src/education.json');

