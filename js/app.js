// Selecting form elements
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

// Function to send email using SMTP
function sendEmail() {
    // Constructing email body
    const messageBody = `Name: ${fullName.value}<br>Email: ${email.value}<br>Phone: ${phone.value}<br>Subject: ${subject.value}<br>Message: ${message.value}`;

    // Sending email using SMTP.js library
    Email.send({
        Host : "smtp.elasticemail.com", // SMTP host
        Username : "youremail@email.com", // SMTP username
        Password : "password", // SMTP password
        To : 'youremail@email.com', // Recipient email
        From : "youremail@email.com", // Sender email
        Subject : subject.value, // Email subject
        Body : messageBody // Email body
    }).then(
        message => {
            // Displaying success message using SweetAlert2
            if(message == "OK") {
                Swal.fire({
                    title: "Good job!",
                    text: "Message sent successfully",
                    icon: "success"
                });
                // Resetting the form after a delay
                setTimeout(() => {
                    form.reset();
                }, 1200);
            }
        }
    );
}

// Function to validate form inputs
function checkInputs() {
    const items = document.querySelectorAll(".item");

    // Iterating through each form input
    for (const item of items) {
        if (item.value === "") {
            // Adding error class if input is empty
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        // Validating phone number field
        if (item === phone) {
            const phoneRegex = /^[\d ()-]+$/; // Regex to allow only digits, parentheses, hyphens, and spaces
            const phoneDigits = phone.value.replace(/\D/g, '').length; // Counting only digits in phone number
            if (!phone.value.match(phoneRegex) || phone.value.replace(/\D/g, '').length !== 10) { // Checking if phone number is valid
                phone.classList.add("error");
                phone.parentElement.classList.add("error");
                if (phoneDigits < 10) {
                    phone.parentElement.querySelector('.error-txt').innerHTML = "Please enter a 10 digit phone number"; // Displaying error message for phone number length
                }
            } else {
                phone.classList.remove("error");
                phone.parentElement.classList.remove("error");
            }
        }

        // Validating email field using regex
        if (item === email) {
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            const emailErrorTxt = document.querySelector(".error-txt.email");

            if (!email.value.match(emailRegex)) {
                email.classList.add("error");
                email.parentElement.classList.add("error");

                if (email.value != "") {
                    emailErrorTxt.innerHTML = "Enter a valid email address";
                }
            } else {
                email.classList.remove("error");
                email.parentElement.classList.remove("error");
            }
        }

        // Adding keyup event listener to remove error class when input is not empty
        item.addEventListener("keyup", () => {
            if (item.value !== "") {
                item.classList.remove("error");
                item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
                item.parentElement.classList.add("error");
            }
        });
    }
}

// Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Preventing default form submission behavior
    checkInputs(); // Validating form inputs

    // Checking if there are no input errors
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
        sendEmail(); // Sending email if there are no errors
    }
});
