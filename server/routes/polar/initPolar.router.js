const initPolarRoute = require('express').Router();
const { Polar } = require('../../db/models');

initPolarRoute.get('/init', async (req, res) => {
  try {
    const polar = await Polar.findOne({
      where: { user_id: res.locals.user.id },
    });
    res.json(polar);
  } catch (error) {
    console.error(error);
  }
});

module.exports = initPolarRoute;
