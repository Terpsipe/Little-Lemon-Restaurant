document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.querySelector('button[type="submit"]');

    sendButton.addEventListener('click', function(event) {
        event.preventDefault();
        findTable();
    });

    // This script captures form data (name, date, time) and currently logs it to the console.
    // In the future, a backend component will handle this data, allowing for full functionality like looking for tables and reserving them.
    // The current state is a temporary solution and I'm planing on coming back to it when implementing a real backend
    function findTable(){
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        console.log("Name:", name);
        console.log("Date:", date);
        console.log("Time:", time);
    };
});