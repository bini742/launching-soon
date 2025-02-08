// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Function to handle the "Notify Me" button click
function not() {
    const emailInput = document.getElementById("email");
    const messageElement = document.getElementById("message");
    const email = emailInput.value.trim();

    // Validate the email
    const emailstate = validateEmail(email);

    if (emailstate) {
        alert("Success: Valid email!");
        messageElement.textContent = "";
        emailInput.style.borderColor = "#28a745";
    } else {
        alert("Error: Invalid email!");
        messageElement.textContent = "Please provide a valid email address";
        messageElement.className = "error-message error";
        emailInput.style.borderColor = "#ff5757";
    }
}

// Add event listener to the button
document.getElementById("btn").addEventListener("click", function () {
    not(); // Call the not() function when the button is clicked
});

// Clear error message while typing
document.getElementById("email").addEventListener("input", function () {
    document.getElementById("message").textContent = "";
    this.style.borderColor = "";
});