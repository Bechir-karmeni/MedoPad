// Get the form element and add a submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', validateForm);

// Function to validate the form fields
function validateForm(event) {
// Prevent the default form submission behavior
event.preventDefault();

// Get the form fields
const name = document.querySelector('#pets-name');
const phoneNumber = document.querySelector('#pets-breed');
const birthday = document.querySelector('#pets-birthday');
const email = document.querySelector('#pets-breed');
const age = document.querySelector('#pets-age');
const file = document.querySelector('#file');

// Validate the name field
if (name.value === '') {
alert('Please enter your name.');
return;
}

// Validate the phone number field
if (phoneNumber.value.length !== 8 || isNaN(phoneNumber.value)) {
alert('Please enter a valid phone number.');
return;
}

// Validate the birthday field
const birthdayPattern = /(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/[0-9]{4}/;
if (!birthdayPattern.test(birthday.value)) {
alert('Please enter a valid birthday (MM/DD/YYYY).');
return;
}

// Validate the email field
const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
if (!emailPattern.test(email.value)) {
alert('Please enter a valid email address.');
return;
}

// Validate the age field
if (age.value === '' || age.value < 18 || age.value > 120) {
alert('Please enter a valid age (between 18 and 120).');
return;
}

// Validate the file field
if (file.files.length === 0) {
alert('Please attach a file.');
return;
}

// If all fields are valid, submit the form
alert('Form submitted successfully!');
form.submit();
}
