const aliasColors = {};

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setupSocketHandlers(io) {
    io.on('connection', (socket) => {
        console.log('User connected');

        // Almacenamos alias del usuario
        socket.on('set alias', (requestedAlias) => {
            let alias = requestedAlias;
            let count = 1;

            // Verificar si el alias ya existe
            while (aliasColors[alias]) {
                alias = `${requestedAlias}(${count})`;
                count++;
            }

            aliasColors[alias] = getRandomColor();
            io.emit('update users', Object.keys(aliasColors));
            socket.emit('color', aliasColors[alias]);
            socket.emit('set alias success', alias);
        });

        socket.on('chat message', ({ alias, message }) => {
            const timestamp = new Date().toLocaleTimeString();
            const messageWithTimestamp = { alias, message, timestamp, color: aliasColors[alias] };
            io.emit('chat message', messageWithTimestamp);
        });

        socket.on('disconnect', () => {
            console.log('User disconnected');
        });
    });
}

module.exports = { setupSocketHandlers };
