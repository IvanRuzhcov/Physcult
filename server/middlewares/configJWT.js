const jwtConfig = {
  access: {
    type: 'access',
    expiresIn: `${1000 * 60 * 60 * 24 * 5}`,
  },
  refresh: {
    type: 'refresh',
    expiresIn: `${1000 * 60 * 60 * 24 * 30}`,
  },
};
module.exports = jwtConfig;
