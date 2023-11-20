
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
    } else {
        emailError.innerHTML = "";
    }

    if (number.length === 0) {
        numberError.innerHTML = "Enter your phone number";
    } else {
        numberError.innerHTML = "";
    }

    return email.length > 0 && number.length > 0;
}

// Example of how to use these functions in a form submission:
function validateForm(event) {
    
    let isNameValid = validateName();
    let isMailAndNumberValid = validateMailAndNumber();

    if (!isNameValid || !isMailAndNumberValid) {
        submitError.innerHTML = "Please fill in all required fields.";
        return false;
    }

    submitError.innerHTML = "";
    return true;
}
