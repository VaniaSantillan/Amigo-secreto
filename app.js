// Array para almacenamiento de los nombres.
let amigos = [];

// Funcioón para agregar un amigo a la lista.
function agregarAmigo(){

    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    //Para validar si el campo esta vacío.
    if(nombreAmigo === 0){
        alert('Por favor, ingresa un nombre válido');
        return;
    }

}