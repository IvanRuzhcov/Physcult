const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { verifyAccessToken } = require('../middlewares/verifyJWT');
const getUser = require('../middlewares/getUser');

const serverConfig = (app) => {
  // парсим формы
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static('public'));
  // парсим JSON
  app.use(express.json());
  app.use(cookieParser());
  app.use(verifyAccessToken);
  app.use(getUser);
  // парсим куки
};

module.exports = serverConfig;
