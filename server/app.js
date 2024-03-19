require('dotenv').config();
const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const serverConfig = require('./config/serverConfig');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const indexRouter = require('./routes/views/index.routes');

app.use('/images', express.static(path.join(__dirname, 'images')));
serverConfig(app);


// Добавление WebSocket-сервера к вашему Express-приложению
app.io = io;

app.use('/', indexRouter);

const PORT = process.env.PORT ?? 4002;

server.listen(PORT, () => {
  console.log(`Сервер тренируется на ${PORT} порту`);
});
