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

polarRouter.post('/auth', async (req, res) => {
  try {
    const user = await Polar.findOne({
      where: {
        user_id: res.locals.user.id,
      },
    });

    if (user) {
      const userAccessToken = user.token;
      const userId = user.polar_id;

      const headersUser = {
        Accept: 'application/json',
        Authorization: `Bearer ${userAccessToken}`,
      };
      const response = await fetch(
        `https://www.polaraccesslink.com/v3/users/${userId}`,
        {
          method: 'GET',
          headers: headersUser,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);

      const headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${userAccessToken}`,
      };

      const postTransactionsResponse = await fetch(
        `https://www.polaraccesslink.com/v3/users/${userId}/exercise-transactions`,
        {
          method: 'POST',
          headers: headers,
        }
      );

      console.log(postTransactionsResponse.status);

      if (postTransactionsResponse.status === 204) {
        return {
          success: false,
          error: 'Нету данных за последние 30 дней ',
        };
      }

      const transactions = await postTransactionsResponse.json();
      console.log('transactions', transactions);

      //Пример transactions
      // {
      //   "transaction-id": 122,
      //   "resource-uri": "https://polaraccesslink.com/v3/users/21/physical-information-transactions/32"
      // }

      const getTransactionsResponse = await fetch(
        transactions['resource-uri'],
        {
          method: 'GET',
          headers: headers,
        }
      );

      console.log(getTransactionsResponse.status);

      if (getTransactionsResponse.status === 404) {
        return {
          success: false,
          error: 'Транзакция с данным идентификатором транзакции не найдена.',
        };
      }

      if (getTransactionsResponse.status === 204) {
        return {
          success: false,
          error: 'Нет контента, когда нет доступных данных.',
        };
      }

      const exercises = await getTransactionsResponse.json();
      console.log('exercises:', exercises);
      // Пример exercises
      // {
      //   "exercises": [
      //     "https://www.polaraccesslink.com/v3/users/12/exercise-transactions/34/exercises/56",
      //     "https://www.polaraccesslink.com/v3/users/12/exercise-transactions/34/exercises/120"
      //   ]
      // }

      const exercisePromises = exercises.exercises.map(async (activityLog) => {
        const exerciseResponse = await fetch(activityLog, {
          method: 'GET',
          headers: headers,
        });
      
        if (exerciseResponse.ok) {
          const exerciseData = await exerciseResponse.json();
      
          // Запрос GPX данных вместе с данными о тренировке
          const gpxResponse = await fetch(`${activityLog}/gpx`, {
            method: 'GET',
            headers: headers,
          });
      
          if (gpxResponse.ok) {
            const gpxData = await gpxResponse.text();
            exerciseData.gpx = gpxData;
          } else {
            console.error(`Ошибка при получении GPX данных: ${gpxResponse.status}`);
          }
      
          return exerciseData;
        }
      });

      const results = await Promise.all(exercisePromises);

      // Пример
      // {
      //   "id": 1937529874,
      //   "upload-time": "2008-10-13T10:40:0.000Z",
      //   "polar-user": "https://www.polaraccesslink/v3/users/1",
      //   "transaction-id": 179879,
      //   "device": "Polar M400",
      //   "device-id": "1111AAAA",
      //   "start-time": "2008-10-13T10:40:02",
      //   "start-time-utc-offset": 180,
      //   "duration": "PT2H44M45S",
      //   "calories": 530,
      //   "distance": 1600.2,
      //   "heart-rate": {
      //     "average": 129,
      //     "maximum": 147
      //   },
      //   "training-load": 143.22,
      //   "sport": "OTHER",
      //   "has-route": true,
      //   "club-id": 999,
      //   "club-name": "Polar Club",
      //   "detailed-sport-info": "RUNNING",
      //   "fat-percentage": 60,
      //   "carbohydrate-percentage": 38,
      //   "protein-percentage": 2,
      //   "running-index": 51,
      //   "training-load-pro": [
      //     {
      //       "date": "2023-01-01",
      //       "cardio-load": 1,
      //       "muscle-load": 1,
      //       "perceived-load": 1,
      //       "cardio-load-interpretation": "UNKNOWN",
      //       "muscle-load-interpretation": "UNKNOWN",
      //       "perceived-load-interpretation": "UNKNOWN",
      //       "user-rpe": "UNKNOWN"
      //     }
      //   ]
      // }

      if (user) {
        // Пользователь найден, обновляем данные

        user.data = user.data.concat(results);
        await user.save();
        res.status(200).json(user);
      }

      console.log('results', results);

      // В теории это сохраняет данные
      const headerPut = {
        Authorization: `Bearer ${userAccessToken}`,
      };

      const putResponse = await fetch(
        `https://www.polaraccesslink.com/v3/users/${userId}/exercise-transactions/${transactions['transaction-id']}`,
        {
          method: 'PUT',
          headers: headerPut,
        }
      );

      if (putResponse.status === 404) {
        return {
          success: false,
          error: 'Транзакция с данным идентификатором транзакции не найдена.',
        };
      }

      if (putResponse.status === 204) {
        return {
          success: false,
          error: 'Нет контента, когда нет доступных данных.',
        };
      }

      const put = await putResponse.json();
      console.log('put', put);
    }
  } catch (error) {
    console.log(error);
  }
});

const deleteCookie = (name, domain) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=${domain}`;
};

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
