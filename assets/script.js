// variables
document.getElementById("myButton").onclick = function () {
  location.href = "http://127.0.0.1:5500/Chalk-n-Charts/Chalk-n-Charts/assets/profile.html";
};



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

//profile button