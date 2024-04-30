const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const messageBody = `Name: ${fullName.value}<br>Email: ${email.value}<br>Phone: ${phone.value}<br>Subject: ${subject.value}<br>Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Password : "password",
        Username : "youremail@email.com",
        From : "youremail@email.com",
        To : 'youremail@email.com',
        Subject : subject.value,
        Body : messageBody
    }).then(
        message => {
            if(message == "OK") {
                Swal.fire({
                    title: "Good job!",
                    text: "Message sent successfully",
                    icon: "success"
                });
                setTimeout(() => {
                    form.reset();
                }, 1200);
            }
        }
    );
}