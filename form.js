const form = document.getElementById("form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;

function validateForm() {
    let isValid = true;

    if (!nameRegex.test(firstNameInput.value)) {
        document.getElementById("first-name-error").textContent = "Invalid first name";
        isValid = false;
    } else {
        document.getElementById("first-name-error").textContent = "";
    }

    if (!nameRegex.test(lastNameInput.value)) {
        document.getElementById("last-name-error").textContent = "Invalid last name";
        isValid = false;
    } else {
        document.getElementById("last-name-error").textContent = "";
    }

    if (!emailRegex.test(emailInput.value)) {
        document.getElementById("email-error").textContent = "Invalid email";
        isValid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (!phoneRegex.test(phoneInput.value)) {
        document.getElementById("phone-error").textContent = "Invalid phone number";
        isValid = false;
    } else {
        document.getElementById("phone-error").textContent = "";
    }

    return isValid;
}

function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
        document.getElementById("ok").textContent = "Submitted successfully!";
    }
}

form.addEventListener("submit", handleSubmit);