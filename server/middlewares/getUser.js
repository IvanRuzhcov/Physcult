const { User } = require('../db/models');

module.exports = async function getUser(req, res, next) {
  try {
    if (res.locals.user) {
      const user = await User.findOne({
        where: { id: res.locals.user.id },
        attributes: ['nick', 'email', 'id'],
      });
      res.locals.user = user;
    }

    next();
  } catch (error) {
    next(error);
  }
};
