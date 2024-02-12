const jwt = require('jsonwebtoken');
require('dotenv').config();
const generateTokens = require('../utils/authUtils');
const configJWT = require('./configJWT');

function verifyRefreshToken(req, res, next) {
  console.log(req.cookies);
  try {
    const { refresh } = req.cookies;

    const { payload:{user} } = jwt.verify(refresh, process.env.SIGNATURE_REFRESH);

    console.log('verifyRefreshToken - user:', user);

    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, email: user.email, nick: user.nick },
    });

    res.locals.user = user;

    res
      .cookie(configJWT.refresh.type, refreshToken, {
        maxAge: configJWT.refresh.expiresIn,
        httpOnly: true,
      })
      .cookie(configJWT.access.type, accessToken, {
        maxAge: configJWT.access.expiresIn,
        httpOnly: true,
      });

    next();
  } catch (error) {
    console.log(error);
    res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
    next();
  }
}

function verifyAccessToken(req, res, next) {
  try {
    const { access } = req.cookies;
    const { payload:{user} } = jwt.verify(access, process.env.SIGNATURE_ACCESS);

    res.locals.user = user;
    next();
  } catch (error) {
    verifyRefreshToken(req, res, next);
  }
}
module.exports = { verifyAccessToken };
