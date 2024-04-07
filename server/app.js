require('dotenv').config();
const express = require('express');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');
const serverConfig = require('./config/serverConfig');
const setupSocketEvents = require('./routes/socet/chatMessage');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const indexRouter = require('./routes/views/index.routes');

app.use('/images', express.static(path.join(__dirname, 'images')));
serverConfig(app);


app.all('/socket.io/*', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:4003' }); // Замените на ваш порт сервера веб-сокетов
});
// Добавление WebSocket-сервера к вашему Express-приложению
app.io = io;

app.use('/', indexRouter);

setupSocketEvents(io)

const PORT = process.env.PORT ?? 4002;

server.listen(PORT, () => {
  console.log(`Сервер тренируется на ${PORT} порту`);
});
