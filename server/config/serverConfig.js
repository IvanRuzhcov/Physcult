const express = require('express');
const cookieParser = require('cookie-parser');
const { verifyAccessToken } = require('../middlewares/verifyJWT');
const getUser = require('../middlewares/getUser');

const serverConfig = (app) => {
  // парсим формы
  app.use(express.urlencoded({ extended: true }));
  // парсим JSON
  app.use(express.json());
  app.use(cookieParser());
  app.use(verifyAccessToken);
  app.use(getUser);
  // парсим куки
};

module.exports = serverConfig;
