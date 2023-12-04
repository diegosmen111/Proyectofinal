function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Agrega más validaciones según tus requisitos (por ejemplo, validar el formato del correo electrónico)

    return true;
}

function submitForm() {
    if (validateForm()) {
        // Aquí puedes realizar acciones adicionales antes de enviar el formulario, si es necesario
        alert('¡Formulario enviado con éxito!');
        // Aquí podrías enviar los datos a un servidor utilizando AJAX o cualquier otro método que prefieras
        return true;  // Esto permite enviar el formulario
    } else {
        // Evita que el formulario se envíe si la validación no pasa
        return false;
    }
}

