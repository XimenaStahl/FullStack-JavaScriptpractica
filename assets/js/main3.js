// Captura el botón
let botonSuma = document.getElementById('btn-sumar');
let botonResta = document.getElementById('btn-restar');

//Función al presionar el botón de Sumar
botonSuma.addEventListener('click', function(event) {
    event.preventDefault();
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
    let total = valor1 + valor2;
    if (total < 0) {
        document.getElementsByClassName('resultado')[0].innerHTML = 0;
    } else {
        document.getElementsByClassName('resultado')[0].innerHTML = total;
    }
});

//Función al presionar el botón de Restar
botonResta.addEventListener('click', function(event) {
    event.preventDefault();
    let valor1 = parseInt(document.getElementById('valor1').value);
    let valor2 = parseInt(document.getElementById('valor2').value);
    let total = valor1 - valor2;
    if (total < 0) {
        document.getElementsByClassName('resultado')[0].innerHTML = 0;
    } else {
        document.getElementsByClassName('resultado')[0].innerHTML = total;
    }
})