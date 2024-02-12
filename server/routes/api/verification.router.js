const verificationRoutes = require('express').Router();
const {User} = require('../../db/models')

verificationRoutes.get('/user', async (req, res) => {
  if (res.locals.user) {
    const user = await User.findOne({
      where: { id: res.locals.user.id },
    });
    res.json({
      isLoggedIn: true,
      user
    });
  }
});

module.exports = verificationRoutes;
