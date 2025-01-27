// Array para almacenamiento de los nombres.
let amigos = [];

// Funcioón para agregar un amigo a la lista.
function agregarAmigo(){

    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    //Para validar si el campo esta vacío.
    if(nombreAmigo === 0){
        alert("Por favor, ingresa un nombre válido");
        return;
    }

    //Agrega el nombre a la lista de amigos.
    amigos.push(nombreAmigo);

    //Limpiar el campo de entrada.
    inputAmigo.value = '';

    //Actualizar la lista de amigos en la interfaz.
    actualizarLista();

}

//Función para actualizar la lista de amigos.
function actualizarLista(){

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';

    //Añadir a los amigos a la lista.
    for (let i = 0; i < amigos.length; i++){
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}


//Función para realizar el sorteo aleatorio.
function sorteoAmigo(){

    //Revisión para saber si hay amigos registrados.
    if (amigos.length === 0) {
        alert("No hay amigos registrados");
        return;
    }
    
    // Seleccionar un nombre aleatorio
    let amigoSeleccionado = amigos[Math.floor(Math.random() * amigos.length)];

   // Mostrar el resultado
   let resultado = document.getElementById("resultado");
   resultado.textContent = "¡El amigo secreto es: " + amigoSeleccionado + "!";

    // Ocultar la lista de amigos
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.style.display = 'none';

    // Mostrar el botón para reiniciar el sorteo
    let botonReiniciar = document.getElementById("reiniciar");
    botonReiniciar.style.display = 'block'; // Hacer visible el botón de reinicio
}

// Función para reiniciar el sorteo
function reiniciarSorteo() {
    // Limpiar la lista de amigos y el resultado del sorteo
    amigos = [];
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';
    let resultado = document.getElementById("resultado");
    resultado.textContent = '';

    // Mostrar la lista de amigos nuevamente
    listaAmigos.style.display = 'block';

    // Ocultar el botón de reinicio
    let botonReiniciar = document.getElementById("reiniciar");
    botonReiniciar.style.display = 'none';
}