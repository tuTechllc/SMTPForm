# SMTPForm
 Contact form, sends data to email via SMTPJS

Contact Form with Email Sending Functionality

This project implements a contact form in HTML and JavaScript, allowing users to send inquiries via email. It utilizes the SMTP protocol through the SMTP.js library for sending emails directly from the web application.

# Features:
Form Fields:
Full Name
Email Address
Phone Number
Subject
Message

# Form Validation:
Validates that all form fields are filled out before submission.
Validates the email format using regular expressions.
Formats the phone number as (XXX) - XXX - XXXX and ensures it contains exactly 10 digits.

# Email Sending:
Sends the form data via email using the SMTP protocol.
Utilizes the Elastic Email SMTP server for sending emails.
Displays a success message using SweetAlert2 upon successful email submission.

# Code Explanation:
# HTML Structure: The HTML file defines the structure of the contact form, including input fields for each piece of information and a submit button.
JavaScript Functionality: The JavaScript file provides the functionality for form validation, email sending, and error handling.
The checkInputs() function validates the form inputs, ensuring they are not empty and formatting the phone number.
The sendEmail() function constructs the email message body and sends it using the SMTP.js library.
Event listeners are set up to handle form submission and input validation.

# How to Use:
Clone the repository to your local machine.
Open the HTML file in a web browser.
Fill out the contact form with your information.
Click the "Send" button to submit the form.
Upon successful submission, a success message will be displayed, and the form will be reset.

# Dependencies:
SMTP.js: A JavaScript library for sending emails using SMTP.
SweetAlert2: A beautiful, responsive, customizable, and accessible (WAI-ARIA) replacement for JavaScript's popup boxes.

# Contribution:
# Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to submit a pull request or open an issue on the GitHub repository.

License:
This project is licensed under the MIT License.