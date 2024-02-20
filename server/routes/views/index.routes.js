const routes = require('express').Router();

const registrationRoutes = require('../api/registration.routes');
const authorizationRoutes = require('../api/authorization.router');
const verificationRoutes = require('../api/verification.router')
const updataRouter = require('../api/update.router')
const imageRouter = require('../api/addImage.router')
const initPostRouter = require('../api/initPost.router')
const initSubscriptionRouter = require('../api/initSubscription.router')

routes.use('/register', registrationRoutes);
routes.use('/authentication', authorizationRoutes);
routes.use('/verification', verificationRoutes);
routes.use('/updata', updataRouter);
routes.use('/api', imageRouter);
routes.use('/', initPostRouter);
routes.use('/', initSubscriptionRouter);

module.exports = routes;
