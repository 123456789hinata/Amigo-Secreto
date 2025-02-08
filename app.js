let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombre = inputAmigo.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    inputAmigo.value = ""; // Limpiar el campo de texto

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;

    // Limpiar la lista de nombres después del sorteo
    amigos = []; // Vaciar el array
    actualizarListaAmigos(); // Actualizar la lista en la interfaz

    // Ocultar el mensaje después de 3 segundos (3000 milisegundos)
    setTimeout(() => {
        resultado.innerHTML = ""; // Limpiar el mensaje
    }, 3000); // 3000 ms = 3 segundos
}