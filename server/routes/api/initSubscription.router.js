const initSubscription = require('express').Router();
const { Subscription, User } = require('../../db/models');

initSubscription.get('/subscription/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id); // Парсим строку в число

    if (!isNaN(id)) {
      // Проверяем, что id является числом
      const subscription = await Subscription.findAll({
        where: { user_id: id },
      });
      res.json(subscription);
    } else {
      res.status(400).json({ error: 'Invalid user id' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

initSubscription.get('/subscribers/:id', async (req, res) => {
  try {
    const id = parseInt(req.params.id); // Парсим строку в число

    if (!isNaN(id)) {
      // Проверяем, что id является числом
      const subscription = await Subscription.findAll({
        where: { subscribe_id: id },
      });
      res.json(subscription);
    } else {
      res.status(400).json({ error: 'Invalid user id' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

initSubscription.post('/unsubscribe', async (req, res) => {
  try {
    const { subscribe_id } = req.body;

    const existingSubscription = await Subscription.findOne({
      where: { user_id: res.locals.user.id, subscribe_id: subscribe_id },
    });
    if (!existingSubscription) {
      return res
        .status(400)
        .json({ message: 'Вы не подписаны на этого пользователя' });
    }

    await existingSubscription.destroy();

    res
      .status(200)
      .json({ message: 'Вы успешно отписались от этого пользователя' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз' });
  }
});

initSubscription.post('/subscribe', async (req, res) => {
  try {
    const { subscribe_id } = req.body;

    // Проверяем, есть ли уже подписка на указанного пользователя
    const existingSubscription = await Subscription.findOne({
      where: { user_id: res.locals.user.id, subscribe_id: subscribe_id },
    });

    if (existingSubscription) {
      return res
        .status(400)
        .json({ message: 'Вы уже подписаны на этого пользователя' });
    }

    // Создаем новую запись подписки
    await Subscription.create({
      user_id: res.locals.user.id,
      subscribe_id: subscribe_id,
    });

    res.status(201).json({
      message: 'Вы успешно подписались на этого пользователя',
      subscription: existingSubscription,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: 'Что-то пошло не так. Пожалуйста, попробуйте еще раз' });
  }
});

initSubscription.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = initSubscription;
