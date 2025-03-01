// Get the div containing education
const eduDiv = document.getElementById('education');

// Define a function returning link to a course based on its code
const courseLink = (code) => `https://is.cuni.cz/studium/predmety/index.php?do=predmet&kod=${code}`;

// Define a function constructing a div based on info given in an object
function constructEducation(data) {
    // Loop through all schools (entries in the object) and add a div for them
    Object.entries(data).forEach(
        ([name, info]) => {
            // Add title, logo, and description
            const title = document.createElement('h2'); // Create a title for the school
            title.textContent = name; // Specify the name as the title
            title.className = 'width school-title'
            eduDiv.appendChild(title) // Add the title to the div
            const descriptionLogo = document.createElement('div') // Create a div holding the description and the logo
            descriptionLogo.className = 'width school-desc-logo' // Specify the class name for CSS
            const description = document.createElement('div') // Create a div holding the description
            description.textContent = info['Description'] // Specify the description
            description.className = 'school-desc' // Class name for CSS
            const logo = document.createElement('a') // Create an a element to store the link to the school page
            logo.setAttribute('href', info['Link']) // Specify the link to the school page 
            logo.setAttribute('target', '_blank') // Open the link in a new tab
            logo.className = 'school-logo' // Add class name for CSS
            const logoImg = document.createElement('img') // Create an image element for the logo
            logoImg.setAttribute('src', info['Logo']) // Specify the link to the image
            logoImg.className = 'school-logo-img' // Specify the class name for CSS
            logo.appendChild(logoImg) // Connect the link element and img element
            descriptionLogo.appendChild(logo) // Add the logo
            descriptionLogo.appendChild(description) // Add the description
            eduDiv.appendChild(descriptionLogo) // Add the description

            // Create a table with information
            const table = document.createElement('table'); // Create a table to store the current school information
            table.className = 'school width'; // Specify the class for CSS
            Object.entries(info).forEach( // Loop through the entries containing the information about the school
                ([key, value]) => {
                    if (value !== '' && key !== 'Description' && key !== 'Logo' && key !== 'Link') { // Skip the non-specified values and the description (already added above) and the logo
                        const row = document.createElement('tr'); // Create a row to store the current information
                        const tdKey = document.createElement('td'); // Create a cell to store the key name for the current information
                        tdKey.textContent = key; // Specify the key name of the current information
                        tdKey.className = 'edu-key'; // Specify a class name for the key for CSS
                        row.appendChild(tdKey); // Add the cell with key to the row
                        if (key.includes('courses')) { // Handle courses separately (they will span multiple rows)
                            tdKey.setAttribute('rowspan', Object.keys(value).length.toString()); // Span the key over all rows with information
                            let first = true; // Create an indicator for the first course which need to be handled separately (it needs to be added along with the key)
                            Object.entries(value).forEach( // Loop through the courses and create row for each
                                ([course, code]) => {
                                    const tdVal = document.createElement('td'); // Create a table cell element
                                    tdVal.className = 'centered-text'; // Make sure the value is centered
                                    if (code !== "") { // If available, add the link to the course web page
                                        const a = document.createElement('a'); // Create a hypertext element used for the given course
                                        a.textContent = course; // Specify the course
                                        a.setAttribute('href', courseLink(code)); // Specify the link to the course
                                        a.setAttribute('target', '_blank'); // Make sure the website opens in new tab
                                        tdVal.appendChild(a); // Insert the hypertext element into the cell
                                    } else {
                                        tdVal.textContent = course; // Specify the course
                                    }
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
                            tdVal.textContent = value;
                            tdVal.className = 'centered-text'; // Make sure the value is centered
                            row.appendChild(tdVal);
                            table.appendChild(row); // Add the row to the table
                        }
                    }
                }
            );
            eduDiv.appendChild(table); // Add the school to the education page
            // const hr = document.createElement('hr') // Create an element representing a horizontal line separating individual schools
            // hr.className = 'width' // Fit the line to the specified width
            // eduDiv.appendChild(hr) // Add the line after the table
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

