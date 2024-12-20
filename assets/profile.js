// Select the form and message elements
const form = document.getElementById('registration-form');
const message = document.getElementById('message');
const dataOutput = document.getElementById('data-output');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    // Validate the input data
    if (username && title && content) {
        // Create an object with the form data
        const profileData = { username, title, content };

        // Store the data in localStorage
        localStorage.setItem('profileData', JSON.stringify(profileData));

        // Display success message
        message.textContent = 'Form submitted successfully!';
        message.style.color = 'green';

        // Clear the form
        form.reset();

        // Display stored data
        displayStoredData();
    } else {
        // Display error message if any form fields are missing
        message.textContent = 'Please complete all fields!';
        message.style.color = 'red';
    }
});

// Function to display the stored data from localStorage
function displayStoredData() {
    const storedData = localStorage.getItem('profileData');
    if (storedData) {
        const parsedData = JSON.parse(storedData);
        dataOutput.innerHTML = `
            <p><strong>Username:</strong> ${parsedData.username}</p>
            <p><strong>Title:</strong> ${parsedData.title}</p>
            <p><strong>Content:</strong> ${parsedData.content}</p>
        `;
    } else {
        dataOutput.innerHTML = 'No data found in localStorage.';
    }
}

// Display stored data when the page loads (if data exists)
document.addEventListener('DOMContentLoaded', displayStoredData);
