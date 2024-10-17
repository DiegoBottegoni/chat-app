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
   
## Algunos avances pendientes:

- **Autenticación de usuarios**: *Implementar un* [sistema de registro y autenticación](https://github.com/DiegoBottegoni/users_management) *para garantizar que solo los usuarios registrados puedan acceder al chat.*
- **Persistencia de Mensajes**: *Almacenar los mensajes en una base de datos (como MongoDB) para que los usuarios puedan ver el historial de mensajes cuando vuelven a conectarse.*
- **Estilos y Diseño**: *Mejorar el diseño de la interfaz de usuario para una mejor experiencia visual.*
- **Emojis y Multimedia**: *Permitir el envío de emojis, imágenes o archivos para enriquecer la experiencia de chat.*
- **Canales de Chat**: *Implementar la posibilidad de crear diferentes salas o canales de chat para que los usuarios puedan unirse a discusiones específicas.*
- **Sistema de Notificaciones**: *Añadir notificaciones visuales y/o sonoras para alertar a los usuarios sobre nuevos mensajes.*
- **Modo Oscuro**: *Implementar un modo oscuro para que los usuarios puedan elegir un tema que sea más fácil para la vista en condiciones de poca luz.*
- **Correción en colores de alias**: *En caso de alias duplicados que asigne diferentes colores*
