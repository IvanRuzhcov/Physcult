const routes = require('express').Router();

const registrationRoutes = require('../socet/registration.routes')

routes.use('/register', registrationRoutes)

module.exports = routes;
