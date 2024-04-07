const express = require('express');
const registrationRoutes = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const {
  verificationCode,
  generateSportsUsername,
} = require('../../helpers/generateRandom');

const mailer = require('../../helpers/nodemailer');
const generateTokens = require('../../utils/authUtils');

const confirmationCodes = new Map();

registrationRoutes.post('/sendCode', async (req, res) => {
  const { email, password, repeatPassword } = req.body;
  let code = verificationCode();

  try {
    const userEmail = await User.findOne({ where: { email } });
    if (userEmail) {
      // Пользователь с таким email уже существует
      console.log('Пользователь с таким email уже существует');
      return res.status(400).json({
        success: false,
        message: 'Пользователь с таким email уже существует',
      });
    }
    if (password !== repeatPassword) {
      return res
        .status(400)
        .json({ success: false, message: 'Пароли не совпадают' });
    } else {
      // Отправка кода на указанный email
      const message = {
        from: 'PanettoneRacit@yandex.ru',
        to: email,
        subject: 'Код подтверждения',
        text: `Ваш код подтверждения: ${code}`,
      };
      confirmationCodes.set(email, code);
      mailer(message, {confirmationCodes , code , email}); // отправка сообщения на почту

      return res
        .status(200)
        .json({ success: true, message: 'Код успешно отправлен на почту' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

registrationRoutes.post('/verifyCode', async (req, res) => {
  const { email, password, verificationCode } = req.body;
  const nick = generateSportsUsername();
  const storedVerificationCode = confirmationCodes.get(email);
  let user;
  try {
    if (
      storedVerificationCode &&
      storedVerificationCode.toString() === verificationCode
    ) {
      user = await User.findOne({ where: { email } });
      const userNick = await User.findOne({ where: { nick } });

      if (!user && !userNick) {
        const hash = await bcrypt.hash(password, 10);
        user = await User.create({
          email,
          password: hash,
          nick: nick,
        });
        const { accessToken, refreshToken } = generateTokens({
          user: { id: user.id, nick: user.nick, email: user.email },
        });

        res.cookie('access', accessToken, {
          maxAge: 1000 * 60 * 60 * 24 * 5,
          httpOnly: true,
        });

        res.cookie('refresh', refreshToken, {
          maxAge: 1000 * 60 * 60 * 24 * 30,
          httpOnly: true,
        });
      }


      res.status(200).json({ success: true, message: 'Регистрация успешна',user });
    } else {
      // Если код не совпадает, отправляем ошибку
      res
        .status(400)
        .json({ success: false, message: 'Неверный код подтверждения' });
    }
  } catch (error) {
    console.error('Ошибка при проверке кода подтверждения:', error);
    res
      .status(500)
      .json({ success: false, message: 'Внутренняя ошибка сервера' });
  }
});

module.exports = registrationRoutes;
