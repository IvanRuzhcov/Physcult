const { Polar } = require('../../db/models');

const polarRouter = require('express').Router();
const fetch = require('node-fetch');

// Ваши данные приложения Polar
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

polarRouter.post('/sync', async (req, res) => {
  const code = req.body.code;
  console.log('--->', code);

  if (code) {
    try {
      const credentials = `${client_id}:${client_secret}`;
      const base64Credentials = Buffer.from(credentials).toString('base64');
      const inputBody = {
        grant_type: 'authorization_code',
        code: code,
      };
      const headersToken = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
        Authorization: `Basic ${base64Credentials}`,
      };
      // феч на получение токена
      const tokenResponse = await fetch(
        'https://polarremote.com/v2/oauth2/token',
        {
          method: 'POST',
          body: new URLSearchParams(inputBody),
          headers: headersToken,
        }
      );

      const body = await tokenResponse.json();
      console.log('==--->', body);
      console.log('==--->', body.x_user_id);
      const user_id = res.locals.user.email;

      const registerHeaders = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${body.access_token}`,
        'Cache-Control': 'no-store',
      };

      const registerInputBody = {
        'member-id': user_id,
      };
      // феч на регистрацию
      const registerResponse = await fetch(
        'https://www.polaraccesslink.com/v3/users',
        {
          method: 'POST',
          body: JSON.stringify(registerInputBody),
          headers: registerHeaders,
        }
      );

      if (registerResponse.ok) {
        const register = await registerResponse.json();
        console.log('---=>', register);

        const user = await Polar.findOne({
          where: {
            user_id: res.locals.user.id,
          },
        });
        if (user) {
          // Пользователь найден, обновляем данные
          user.token = body.access_token;
          user.polar_id = body.x_user_id;
          await user.save();
          res.status(200).json(user);
        } else {
          // Пользователь не найден, создаем нового пользователя
          const newUser = await Polar.create({
            user_id: res.locals.user.id,
            token: body.access_token,
            polar_id: body.x_user_id,
          });
          res.status(200).json(newUser);
        }
      } else {
        console.error(
          `Ошибка при регистрации пользователя: ${registerResponse.status}`
        );
      }
    } catch (error) {
      console.error('Ошибка при получении токена доступа:', error);
      res.status(500).send('Ошибка при получении токена доступа');
    }
  }
});


polarRouter.delete('/delete', async (req, res) => {
  const user = await Polar.findOne({ where: { user_id: res.locals.user.id } });

  const userAccessToken = user.token;
  const userId = user.polar_id;

  const headers = {
    Authorization: `Bearer ${userAccessToken}`,
  };

  fetch(`https://www.polaraccesslink.com/v3/users/${userId}`, {
    method: 'DELETE',
    headers: headers,
  }).then(function (deleteResponse) {
    // Проверяем успешность запроса (код состояния 2xx)
    if (deleteResponse.ok) {
      console.log('Пользователь успешно удален');
    } else {
      // Обработка ошибочного ответа
      console.error(
        'Ошибка при удалении пользователя:',
        deleteResponse.statusText
      );
      // Возможно, здесь вам нужно что-то еще сделать, в зависимости от требований вашего приложения
    }
  });
});

module.exports = polarRouter;
