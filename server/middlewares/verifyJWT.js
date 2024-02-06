const jwt = require('jsonwebtoken');
require('dotenv').config()
const generateTokens = require('../utils/authUtils');
const configJWT = require('./configJWT');

function verifyRefreshToken(req, res, next) {
  try {
    // достаем токен
    const { refresh } = req.cookies;
    const { user } = jwt.verify(refresh, process.env.SIGNATURE_ACCESS);
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, email: user.email, nick: user.nick },
    });
    res.locals.user = user;
    res
      .cookie(configJWT.refresh.type, refreshToken, {
        maxAge: configJWT.refresh.expiresIn,
        httponly: true,
      })
      .cookie(configJWT.access.type, accessToken, {
        maxAge: configJWT.access.expiresIn,
        httpOnly: true,
      });
    next();
  } catch (error) {
    res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
    next();
  }
}
function verifyAccessToken(req, res, next) {
  try {
    const { assets } = req.cookies;
    const { user } = jwt.verify(assets, process.env.SIGNATURE_REFRESH);
    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}
module.exports = { verifyAccessToken };
