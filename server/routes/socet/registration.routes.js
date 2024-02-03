const express = require('express');
const registrationRoutes = express.Router();

const nodemailer = require('nodemailer');
const socketIO = require('socket.io');

// const server = require('http').createServer();
// const io = socketIO(server);
// io.on('connection', (socket) => {
//   console.log('Пользователь подключен');
// });

const transporter = nodemailer.createTransport({
  host: 'smtp.yandex.ru',
  port: 465,
  secure: true,
  auth: {
    user: 'PanettoneRacit@yandex.ru',
    pass: 'dhbnlcmlmfpgxmjv',
  },
  from: 'Leth <PanettoneRacit@yandex.ru>',
});

registrationRoutes.post('/sendCode', async (req, res) => {
console.log(req)
res.json('dklfdjfnodwf')
  const { email } = req.body;

  console.log(req.body)
  
  console.log(email); //сюда приходит undefined

  // Генерация случайного 4-х значного кода
  const verificationCode = Math.floor(1000 + Math.random() * 9000);
  try {
    // Отправка кода на указанный email
    const mailOptions = {
      from: 'PanettoneRacit@yandex.ru',
      to: email,
      subject: 'Код подтверждения',
      text: `Ваш код подтверждения: ${verificationCode}`,
    };


    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Ошибка отправки кода подтверждения');
      } else {
        console.log('Код подтверждения отправлен: ' + info.response);
        res.status(200).send('Код подтверждения отправлен успешно');

        // Отправка кода клиенту через Socket.IO
        io.emit('verificationCode', { code: verificationCode, email });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

module.exports = registrationRoutes;
