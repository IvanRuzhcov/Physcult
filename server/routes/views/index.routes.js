const routes = require('express').Router();

const registrationRoutes = require('../api/registration.routes');
const authorizationRoutes = require('../api/authorization.router');
const verificationRoutes = require('../api/verification.router')

routes.use('/register', registrationRoutes);
routes.use('/authentication', authorizationRoutes);
routes.use('/verification', verificationRoutes);

module.exports = routes;
