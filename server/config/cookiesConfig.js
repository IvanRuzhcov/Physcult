const jwtConfig = require('../middlewares/configJWT');

const cookiesConfig = {
  refresh: 'refresh',
  access: 'access',
  httpOnly: true,
  maxAgeRefresh: jwtConfig.refresh.expiresIn,
  maxAgeAccess: jwtConfig.access.expiresIn,
};
module.exports= cookiesConfig