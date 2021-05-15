// Obtener referencia a botones
let botones = document.querySelectorAll('button');

// Obtener referencia a caja
let caja = document.getElementById('caja').value;

// for (i = 0; i < botones.length; i++) {
//     console.log(botones[i].style.backgroundColor);
//     console.log(botones[i].id);
// }

// Función que pinta la caja
const selCaja = function(evento) {
    // this es el elemento
    // El id que tiene es: this.id
    // El color es: this.style.backgroundColor

    document.getElementById('caja').style.backgroundColor = this.style.backgroundColor
}

// botones es un arreglo así que lo recorremos para detectar el que se selecciona
botones.forEach(boton => {
    //Agregar listener
    boton.addEventListener("click", selCaja);
});