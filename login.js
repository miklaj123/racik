document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Zatrzymaj domyślne zachowanie formularza

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Sprawdzenie loginu i hasła
    if (username === 'miklaj123' && password === '123') {
        alert('Login successful!');
        // Możesz tutaj przekierować użytkownika do innej strony
    } else {
        errorMessage.textContent = 'Invalid username or password!';
        errorMessage.style.display = 'block';
    }
});
