function submitForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Aquí puedes realizar la autenticación (por ejemplo, enviar datos a un servidor)
    // En este ejemplo, simplemente mostraremos un mensaje de error si el usuario y la contraseña no son "admin"

    if (username === 'admin' && password === 'admin') {
        // Autenticación exitosa, redirige a la página principal o realiza otras acciones necesarias
        alert('¡Inicio de sesión exitoso!');
        window.location.href = "index.html"; // Reemplaza "index.html" con el nombre de tu página principal
    } else {
        // Muestra un mensaje de error
        document.getElementById('error-message').innerText = 'Nombre de usuario o contraseña incorrectos';
    }
}
