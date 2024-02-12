const routes = require('express').Router();

const registrationRoutes = require('../api/registration.routes');
const authorizationRoutes = require('../api/authorization.router');
const verificationRoutes = require('../api/verification.router')
const updataRouter = require('../api/update.router')

routes.use('/register', registrationRoutes);
routes.use('/authentication', authorizationRoutes);
routes.use('/verification', verificationRoutes);
routes.use('/updata', updataRouter);

module.exports = routes;
