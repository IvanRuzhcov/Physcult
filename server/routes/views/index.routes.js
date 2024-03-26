const routes = require('express').Router();

const registrationRoutes = require('../api/registration.routes');
const authorizationRoutes = require('../api/authorization.router');
const verificationRoutes = require('../api/verification.router')
const updataRouter = require('../api/update.router')
const imageRouter = require('../api/addImage.router')
const initPostRouter = require('../api/initPost.router')
const initSubscriptionRouter = require('../api/initSubscription.router')
const polarRouter = require('../polar/registerPolar.router')
const initPolarRouter = require('../polar/initPolar.router')
const webHookRouter = require('../polar/webhook.router')
const polarLastDataRouter = require('../polar/polarLastData.router')
const publishingRouter = require('../polar/publishingAWorkout.router')
const likeRouter = require('../api/like.router')
const commentsRouter = require('../api/comments.router')


routes.use('/register', registrationRoutes);
routes.use('/authentication', authorizationRoutes);
routes.use('/verification', verificationRoutes);
routes.use('/updata', updataRouter);
routes.use('/api', imageRouter);
routes.use('/', initPostRouter);
routes.use('/', initSubscriptionRouter);
routes.use('/', likeRouter);
routes.use('/comment', commentsRouter);
routes.use('/polar', polarRouter);
routes.use('/polar', initPolarRouter);
routes.use('/polar', webHookRouter);
routes.use('/polar', polarLastDataRouter);
routes.use('/polar', publishingRouter);

module.exports = routes;
