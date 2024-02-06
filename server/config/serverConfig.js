const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const { verifyAccessToken } = require('../middlewares/verifyJWT');
const getUser = require('../middlewares/getUser');

const serverConfig = (app) => {
  // парсим формы
  app.use(express.urlencoded({ extended: true }));
  // парсим JSON
  app.use(express.json());
  // подключаем статические файлы
  app.use(express.static(path.join(`${__dirname}`, '../public')));
  // middleware
  app.use(verifyAccessToken);
  
  app.use(getUser);
  // парсим куки
  app.use(cookieParser());
};

module.exports = serverConfig;
