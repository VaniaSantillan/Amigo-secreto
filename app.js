// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    // Validación de entrada: Campo vacío
    if (nombreAmigo.length === 0) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }

    // Validación de entrada: Verificar si el nombre contiene solo números
    let esSoloNumeros = true;
    for (let i = 0; i < nombreAmigo.length; i++) {
        let caracter = nombreAmigo.charAt(i);
        // Si encontramos un carácter que no es un número, esSoloNumeros será falso
        if (caracter < '0' || caracter > '9') {
            esSoloNumeros = false;
            break;
        }
    }

    if (esSoloNumeros) {
        alert("Por favor, ingrese un nombre válido (no debe ser solo números).");
        return;
    }

    // Agregar el nombre a la lista de amigos
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';

    // Actualizar la lista de amigos en la interfaz
    actualizarLista();
}

// Función para actualizar la lista visible
function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de agregar los nuevos elementos
    listaAmigos.innerHTML = '';
    
    // Añadir cada amigo a la lista
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    // Verificar que haya al menos un amigo en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
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