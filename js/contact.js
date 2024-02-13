document.addEventListener('DOMContentLoaded', function() {

    const sendButton = document.querySelector('button[type="submit"]');

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        sendMessage();
    });

    // This script captures form data (name, email, and message) and currently logs it to the console.
    // In the future, a backend component will handle this data, allowing for full functionality like sending emails.
    // This is a temporary solution and I'm planing on coming back to it when implementing a real backend
    function sendMessage() {
        const name = document.getElementById('name').value;
        const mail = document.getElementById('mail').value;
        const message = document.getElementById('message').value;

        console.log("Name:", name);
        console.log("Email:", mail);
        console.log("Message:", message);
    }
});