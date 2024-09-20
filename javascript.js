document.addEventListener('DOMContentLoaded', function() {
    const loginForm  = document.querySelector('form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const usernamePattern = /^[a-zA-Z0-9]{3,15}$/; 
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,12}$/; 

        if (!usernamePattern.test(username)) {
            console.log('Invalid username.');
            return;
        }

        else if (!passwordPattern.test(password)) {
            console.log('Invalid password.');
            return;
        }
        else{
            console.log('Username:', username);
            console.log('Password:', password);
            console.log('Login successful');
        }

    });
});
