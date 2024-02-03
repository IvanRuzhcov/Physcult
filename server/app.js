require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const nodemailer = require('nodemailer');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const indexRouter = require('./routes/views/index.routes');
const getUser = require('./middlewares/getUser');
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Добавление WebSocket-сервера к вашему Express-приложению
app.io = io;

app.use('/', indexRouter);

const PORT = process.env.PORT ?? 4000;

server.listen(PORT, () => {
  console.log(`Сервер тренируется на ${PORT} порту`);
});
