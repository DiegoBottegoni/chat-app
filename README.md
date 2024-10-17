# chat-app

## Descripción

Esta es una sencilla aplicación de chat en tiempo real construida con Node.js, Express y Socket.io. Permite a los usuarios conectarse, elegir un alias, enviar mensajes y ver una lista de usuarios conectados.

## Características

- **Conexión en tiempo real:** Los mensajes se envían y reciben instantáneamente utilizando Socket.io.
- **Alias personalizados:** Los usuarios pueden elegir un alias único y, si hay duplicados, se agrega un número entre paréntesis.
- **Lista de usuarios en línea:** Muestra la lista de usuarios conectados con sus respectivos colores de alias.
- **Timestamps:** Cada mensaje incluye un timestamp que indica la hora de envío.

## Tecnologías utilizadas

- Node.js, Express, Socket.io, MongoDB, Mongoose, HTML/CSS (para el front-end), dotenv, nodemon.

## Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/tu_usuario/users_management.git
   
2. Navegar a la carpeta del proyecto:

   ```bash
   cd chat-app

3. Instalar las dependencias:

   ```bash
   npm install
   
4. Crear un archivo .env en la raíz del proyecto y agregar tus variables de entorno. Por ejemplo:

   ```bash
   MONGO_URI=tu_uri_mongodb

5. Iniciar el servidor:

   ```bash
   npm run dev
