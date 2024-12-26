// Select the form and message elements
const form = document.getElementById('registration-form');
const message = document.getElementById('message');
const dataOutput = document.getElementById('data-output');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const username = document.getElementById('username').value;
    const country = document.getElementById('country').value;
    const TimeZone = document.getElementById('TimeZone').value;
    const language = document.getElementById('language').value;
    const grade = document.getElementById('grade').value;
    const topic =document.getElementById('topic').value;

    // Validate the input data
    if (username && country && TimeZone && language && grade && topic) {
        // Create an object with the form data
        const profileData = { username, country, TimeZone, language, grade, topic };

        // Store the data in localStorage
        localStorage.setItem('profileData', JSON.stringify(profileData));
        

        window.location.href='index.html';
        
    } else {
        // Display error message if any form fields are missing
        message.textContent = 'Please complete all fields!';
        message.style.color = 'red';
    }
});

