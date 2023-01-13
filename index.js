// Function for sending email through contact form

function sendEmail() {
    var userEmail = document.getElementById("email").value;
    var messageSent = document.getElementById("message").value;
    var userName = document.getElementById("name").value;

    Email.send({
        SecureToken : "10a6a2c7-1213-464c-9daa-03ae6c032e7d",
        To : 'alkhatib_ahmed@hotmail.com',
        From : userEmail,
        Subject : "message from Photos by Alaa",
        Body : "Name: " + userName
        + "<br> Email: " + userEmail
        + "<br> Message: " + messageSent
    }).then(
      message => alert("Message sent. Thank you!")
    );
}

// function for navbar to collapse the navbar menu when a link is clicked

function toggleNavbar(event) {
  event.preventDefault();
  $(event.target).closest('.navbar-collapse').collapse('toggle');
  window.location = event.target.getAttribute('href');
}