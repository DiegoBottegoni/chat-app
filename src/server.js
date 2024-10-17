const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const mongoose = require('mongoose');
require('dotenv').config();
const { setupSocketHandlers } = require('./socketHandlers');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected successfully to MongoDB'))
    .catch(err => console.error('MongoDB connection error', err));

setupSocketHandlers(io);

// Ruta básica
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Correr servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
