//modal code
window.onload = function () {
    const modal = document.getElementById("myModal");
    const closeModalButton = document.getElementById("close-modal");
  
    // Display the modal 
    modal.style.display = "block";
  
    // Close the modal when the close button is clicked
    closeModalButton.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Close the modal when clicking outside of it
    modal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  };



// Redirect user to Profile page
document.getElementById('myButton').onclick = function () {
  location.href = 'profile.html';
};


   // Function to load and display profile data from localStorage
   function displayProfileData() {
    const storedData = localStorage.getItem('profileData');
    const profileDataContainer = document.getElementById('profile-data');

    if (storedData) {
        // Parse the stored data from localStorage
        const parsedData = JSON.parse(storedData);

        // Inject the data into the HTML
        profileDataContainer.innerHTML = `
            <p><strong>Hello, </strong> ${parsedData.username}</p>
            <p><strong>Country:</strong> ${parsedData.country}</p>
            <p><strong>Timezone:</strong> ${parsedData.TimeZone}</p>
            <p><strong>Language:</strong> ${parsedData.language}</p>
            <p><strong>Grade:</strong> ${parsedData.grade}</p>
            <p><strong>Topic for the Project:</strong> ${parsedData.topic}</p>
        `;
    } else {
        profileDataContainer.innerHTML = '<p>No profile data found.</p>';
    }
}

// Call the function to display profile data when the page loads
document.addEventListener('DOMContentLoaded', displayProfileData);

// Get references to the elements


// Event listener for opening the dialog when "Join" button is clicked
document.getElementById('joinButton').addEventListener('click', () => {
  document.getElementById('ensure').showModal();  // Show the dialog
});

// Event listener for confirming the event join
document.getElementById('confirmButton').addEventListener('click', () => {
   // Show the success message
   document.getElementById('successMessage').style.display = 'block';

});

// Event listener for canceling the event join
document.getElementById('cancelButton').addEventListener('click', () => {
  document.getElementById('successMessage').style.display = 'none';
  // Close the dialog without any action
  document.getElementById('ensure').close();
});

document.getElementById('closeDialog').addEventListener('click',() =>{
    document.getElementById('ensure').close();
} );
