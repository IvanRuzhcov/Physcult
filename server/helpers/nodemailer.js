const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport(
  {
    // адрес почтового сервера — smtp.yandex.ru; - для яндекса меняем smtp.mail.ru на smtp.yandex.ru
    host: 'smtp.yandex.ru',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'PanettoneRacit@yandex.ru',
      pass: 'dhbnlcmlmfpgxmjv',

      // потом нужно Создайте пароль приложения в яндексе на почте и вставит в сточку выше
    },
  },
  {
    from: 'Leth <PanettoneRacit@yandex.ru>', // ваша почта яндекс
  }
);

const mailer = (message) => {
   transporter.sendMail(message, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Ошибка отправки кода подтверждения');
      } else {
        console.log('Код подтверждения отправлен: ' + info.response);

        confirmationCodes.set(email, code);

        res.status(200).send('Код подтверждения отправлен успешно');
      }
    });
};

module.exports = mailer;
