// Import data loading
import { loadJSONFile } from "./education.js";

// Get the div containing the random facts
const randomFactsDiv = document.getElementById('randomFacts');

// Create a table to store the facts
const table = document.createElement('table')
table.className = 'school width'

// Define a function constructing the div containing the projects
function constructRandomFacts(data) {
    Object.entries(data).forEach(
        ([key, value]) => {
            // Create a new row
            const tr = document.createElement('tr')
            
            // Create the name of the fact
            const tdName = document.createElement('td')
            tdName.textContent = key
            tdName.className = 'edu-key'
            tr.appendChild(tdName)

            // Create the value
            const tdVal = document.createElement('td')
            tdVal.textContent = value
            tdVal.className = 'centered-text'
            tr.appendChild(tdVal)

            // Add the row to the table
            table.appendChild(tr)
        }
    );
    randomFactsDiv.appendChild(table) // Add the table to the div
} 

// Construct the div
loadJSONFile('src/randomFacts.json', constructRandomFacts);