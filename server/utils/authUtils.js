require('dotenv').config()
const jwt = require('jsonwebtoken');
const jwtConfig = require('../middlewares/configJWT');

// функция генирации токена, принимает в себя полезную нагрузку

const generateTokens = (payload) => ({
  accessToken: jwt.sign({ payload }, process.env.SIGNATURE_ACCESS, {
    expiresIn: jwtConfig.access.expiresIn,
  }),
  refreshToken: jwt.sign({ payload }, process.env.SIGNATURE_REFRESH, {
    expiresIn: jwtConfig.refresh.expiresIn,
  }),
});

module.exports = generateTokens;
