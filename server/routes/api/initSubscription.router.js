const initSubscription = require('express').Router();
const { Subscription, User } = require('../../db/models');

initSubscription.get('/subscription', async (req, res) => {
  try {
   
    const subscription = await Subscription.findAll({
      where: { user_id: res.locals.user.id },
    });
    res.json(subscription);
  } catch (error) {
    console.error(error);
  }
});


initSubscription.get('/users', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

module.exports = initSubscription;
