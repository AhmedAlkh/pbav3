function sendEmail() {
    var userEmail = document.getElementById("email").value;
    var messageSent = document.getElementById("message").value;
    var userName = document.getElementById("name").value;

    Email.send({
        SecureToken : "10a6a2c7-1213-464c-9daa-03ae6c032e7d",
        To : 'alaa.alkhatib15@gmail.com',
        From : userEmail,
        Subject : "message from Photos by Alaa",
        Body : "Name: " + userName
        + "<br> Email: " + userEmail
        + "<br> Message: " + messageSent
    }).then(
      message => alert("Message sent. Thank you!")
    );
}

