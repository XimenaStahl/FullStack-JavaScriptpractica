// Captura el botón
let boton = document.getElementById('botton');

//Función al presionar el botón
boton.addEventListener('click', function(event) {
    event.preventDefault();
    let nombre = document.getElementById('nombre').value;
    let asunto = document.getElementById('asunto').value;
    let mensaje = document.getElementById('mensaje').value;
    document.getElementsByClassName('resultado')[0].innerHTML = ''; // inicializar el mensaje de éxito

    let regex = new RegExp(/^[Z-zA-a\s]+$/, 'gm'); // Expresión regular que sólo admite letras y espacios

    let nom = (regex.test(nombre));
    regex = new RegExp(/^[Z-zA-a\s]+$/, 'gm');
    let asun = (regex.test(asunto));
    regex = new RegExp(/^[Z-zA-a\s]+$/, 'gm');
    let mens = (regex.test(mensaje));

    if (nombre == '') {
        document.getElementsByClassName('errorNombre')[0].innerHTML = 'El nombre es requerido.'; // El nombre no tiene datos
    } else if (!nom) {
        document.getElementsByClassName('errorNombre')[0].innerHTML = 'El nombre debe tener sólo letras.'; // El nombre no cumple con la expresión regular
    } else {
        document.getElementsByClassName('errorNombre')[0].innerHTML = ''; // El mensaje de error se limpia si se corrige o está todo correcto
    };

    if (asunto == '') {
        document.getElementsByClassName('errorAsunto')[0].innerHTML = 'El asunto es requerido.';
    } else if (!asun) {
        document.getElementsByClassName('errorAsunto')[0].innerHTML = 'El asunto debe tener sólo letras.';
    } else {
        document.getElementsByClassName('errorAsunto')[0].innerHTML = '';
    };

    if (mensaje == '') {
        document.getElementsByClassName('errorMensaje')[0].innerHTML = 'El mensaje es requerido.';
    } else if (!mens) {
        document.getElementsByClassName('errorMensaje')[0].innerHTML = 'El mensaje debe tener sólo letras.';
    } else {
        document.getElementsByClassName('errorMensaje')[0].innerHTML = '';
    };

    if ((nom == true) && (asun == true) && (mens == true)) {
        document.getElementsByClassName('resultado')[0].innerHTML = 'Mensaje enviado con éxito !!!'; // Si cumple todas las reglas el mensaje es enviado
    };
})