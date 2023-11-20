let firstNameError = document.getElementById("f-nameErr");
let lastNameError = document.getElementById("l-nameErr");
let emailError = document.getElementById("emailErr");
let numberError = document.getElementById("numberErr");
let submitError = document.getElementById("submitErr");

function validateName() {
    let firstName = document.getElementById("first-name").value.trim();
    let lastName = document.getElementById("last-name").value.trim();

    if (firstName.length === 0) {
        firstNameError.innerHTML = "Enter your first name";
    } else {
        firstNameError.innerHTML = "";
    }

    if (lastName.length === 0) {
        lastNameError.innerHTML = "Enter your last name.";
    } else {
        lastNameError.innerHTML = "";
    }

    return firstName.length > 0 && lastName.length > 0;
}

function validateMailAndNumber() {
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("phone").value.trim();

    if (email.length === 0) {
        emailError.innerHTML = "Enter your email";
    } else if (!isValidEmail(email)) {
        emailError.innerHTML = "Enter a valid email address";
    } else {
        emailError.innerHTML = "";
    }

    if (number.length === 0) {
        numberError.innerHTML = "Enter your phone number";
    } else if (!isValidPhoneNumber(number)) {
        numberError.innerHTML = "Enter a valid 10-digit phone number";
    } else {
        numberError.innerHTML = "";
    }

    return email.length > 0 && number.length > 0;
}

function isValidEmail(email) {
    // Use a regular expression to check if the email format is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhoneNumber(number) {
    // Check if the phone number consists of exactly 10 digits
    return /^\d{10}$/.test(number);
}

function submitForm() {
    let isNameValid = validateName();
    let isMailAndNumberValid = validateMailAndNumber();

    if (!isNameValid || !isMailAndNumberValid) {
        submitError.innerHTML = "Please fill in all required fields correctly.";
    } else {
        // Perform any additional actions you need for a successful form submission
        submitError.innerHTML = "submitted successfully!";
        // Optionally, refresh the page after a delay (e.g., 2 seconds)
        submitError.style.color = "green";

        setTimeout(() => {
            location.reload();
        }, 3000);

    }
}

// Example of how to use these functions in a form submission:
function validateForm(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    submitForm();
}

// Attach the validateForm function to the form's submit event
document.getElementById("form").addEventListener("submit", validateForm);
