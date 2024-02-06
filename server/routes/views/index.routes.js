const routes = require('express').Router();

const registrationRoutes = require('../api/registration.routes')

routes.use('/register', registrationRoutes)

module.exports = routes;
