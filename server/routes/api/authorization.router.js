const authorizationRoutes = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Subscription, Post } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const configJWT = require('../../middlewares/configJWT');

authorizationRoutes.post('/user', async (req, res) => {
  const { email, password } = req.body;
  // console.log(req.body);

  try {
    if (!email.length || !password.length) {
      return res
        .status(400)
        .json({ success: false, message: ' Не все поля заполнены' });
    }

    const existingUser = await User.findOne({
      where: { email },
      include: [ { model: Post }]
    });
    if (
      existingUser &&
      (await bcrypt.compare(password, existingUser.password))
    ) {
      const { accessToken, refreshToken } = generateTokens({
        user: {
          id: existingUser.id,
          nick: existingUser.nick,
          email: existingUser.email,
        },
      });

      res.cookie('access', accessToken, {
        maxAge: 1000 * 60 * 60 * 24 * 5,
        httpOnly: true,
      });

      res.cookie('refresh', refreshToken, {
        maxAge: 1000 * 60 * 60 * 24 * 30,
        httpOnly: true,
      });

      return res.status(200).json({
        success: true,
        message: 'Аутентификация успешна',
        existingUser,
      });
    } else {
      // Отправляем ответ об ошибке, если аутентификация не удалась

      return res.status(401).json({
        success: false,
        error: 'Пароли не совпадают или такого пользователя не существует',
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'Failed to subscribe' });
  }
});

authorizationRoutes.post('/logout', (req, res) => {
  res.clearCookie(configJWT.access).clearCookie(configJWT.refresh);
  res.json({ success: true });
});
module.exports = authorizationRoutes;
