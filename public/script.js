const socket = io();
let alias;
const aliasColors = {};

// Evento para establecer el alias
document.getElementById('aliasForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alias = document.getElementById('aliasInput').value; // Obtener el alias del input
    document.getElementById('aliasInput').value = ''; // Limpiar el campo de alias
    document.getElementById('aliasForm').style.display = 'none'; // Ocultar el formulario de alias

    // Emitir el alias al servidor
    socket.emit('set alias', alias);
});

// Manejo del formulario de chat
const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (input.value && alias) { // Asegurarse de que haya un mensaje y un alias
        const message = input.value; // Solo el mensaje
        socket.emit('chat message', { alias, message }); // Enviar el mensaje con alias
        input.value = ''; // Limpiar el campo de mensaje
    }
});

// Escuchar mensajes del servidor
socket.on('chat message', function({ alias, message, timestamp, color }) {
    const item = document.createElement('li');
    
    // Aplicar color al alias
    const aliasSpan = document.createElement('span');
    aliasSpan.textContent = alias;
    aliasSpan.style.color = color; // Usar el color recibido
    aliasSpan.style.fontWeight = 'bold';
    
    // Crear el mensaje con el alias y la hora
    const messageText = document.createTextNode(`: ${message}`);
    const timestampSpan = document.createElement('span');
    timestampSpan.textContent = ` ${timestamp}`;
    timestampSpan.classList.add('timestamp');
    
    // Añadir los elementos al contenedor del mensaje
    item.appendChild(aliasSpan);
    item.appendChild(messageText);
    item.appendChild(timestampSpan);
    
    document.getElementById('messages').appendChild(item);
});

// "Escuchar" la lista de usuarios conectados
socket.on('update users', function(users) {
    const usersList = document.getElementById('users');
    usersList.innerHTML = ''; // Limpiar la lista

    users.forEach(user => {
        const userItem = document.createElement('li');
        userItem.textContent = user;

        // Usar el color de alias almacenado
        userItem.style.color = aliasColors[user];

        usersList.appendChild(userItem);
    });
});

// "Escuchar" el color del alias
socket.on('color', function(color) {
    aliasColors[alias] = color; // Almacenar el color para este alias
});