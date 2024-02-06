const { User } = require('../db/models');

module.exports = async function getUser(req, res, next) {
  // если пользователь залогинен, то в хранилище сессии лежит его userId
  if (res.locals.user) {
    const user = await User.findOne({
      where: { id: res.locals.user.id },
      attributes: ['nick', 'email', 'id'],
    });
    req.locals.user = user
  }

  next();
};
