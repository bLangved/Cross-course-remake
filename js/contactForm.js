const form = document.querySelector("#contactForm");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");
const phoneNumber = document.querySelector("#phoneNumber");
const phoneNumberError = document.querySelector("#phoneNumberError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const customerNumber = document.querySelector("#customerNumber");
const customerNumberError = document.querySelector("#customerNumberError");
const subject = document.querySelector("#formSubject");
const subjectError = document.querySelector("#formSubjectError");
const message = document.querySelector("#formMessage");
const messageError = document.querySelector("#formMessageError");


function validateForm() {
    event.preventDefault();
    console.clear();

    // Name
    if(checkLength(fullName.value, 4) === true) {
        fullNameError.style.display = "none";
    }
    else{
        fullNameError.style.display = "block";
        console.log("Name does not meet criteria for input")
    }
    // Phone Number
    if(validatePhoneNumber(phoneNumber.value) === true) {
        phoneNumberError.style.display = "none";
    }
    else{
        phoneNumberError.style.display = "block";
        console.log("Phone number does not meet criteria for input")
    }
    // Email
    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    } 
    else {
        emailError.style.display = "block";
        console.log("Email does not meet criteria for input")
    }
     // Customer number
     if(checkLength(customerNumber.value, 10) === true) {
        customerNumberError.style.display = "none";
    }
    else{
        customerNumber.style.display = "block";
        console.log("Customer number does not meet criteria for input")
    }
    // Subject
    if(checkLength(subject.value, 1) === true) {
        subjectError.style.display = "none";
    }
    else{
        subjectError.style.display = "block";
        console.log("Subject does not meet criteria for input")
    }
      // Message
      if(checkLength(message.value, 5) === true) {
        messageError.style.display = "none";
    }
    else{
        messageError.style.display = "block";
        console.log("Message does not meet criteria for input")
    }
}

form.addEventListener("submit", validateForm);


// Checking the length of the value passed in. 
function checkLength(value, length) {
    if(value.trim().length >= length){
        return true;
    }
    else{
        return false;
    }
}

// Checking the customer number passed in, to see if it passes validation
function validateCustomerNumber(customerNumber) {
    if (customerNumber === "") {
        return true;
    }
    const regex = /^\d+$/;
    const patternMatches = regex.test(customerNumber);
    return patternMatches;
  }

// Checking the phone number passed in, to see if if passes validation. 
function validatePhoneNumber(phoneNumber) {
    if (phoneNumber === "") {
        return true;
    }
    const regex = /^\(?(\d{3})\)?[- ]?(\d{2})[- ]?(\d{3})$/;
    const patternMatches = regex.test(phoneNumber);
    return patternMatches;
  }


// Checking the email passed in, to see if if passes validation. 
function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    const patternMatches = regex.test(email);
    return patternMatches;
}