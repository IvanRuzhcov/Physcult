'use strict';
const {
  User,
  Post,
  UserPostTrainingData,
  Comment,
  Like,
  TrainingData,
} = require('../models');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        password: await bcrypt.hash('1234', 5),
        avatar_img:
          'https://psv4.userapi.com/c909618/u126590865/docs/d48/025d0b36decf/tsekulin_s_fonom.png?extra=Xt7mjXDlJA_WaC-tDNfsZk6EVIvZpEvCAD8sPw-0RvBUvLEuvCIb575cdnoZXpgm9Gp7Zhgl_fnm8eeVaHPewmkp6uwIj9sr-528IUC6HAixO8NNpPc1ONXQzQzjXLr8ynDN4vlIflpei2BKl9B2HwRY',
        name: 'Анатолий',
        surname: 'Цекулин',
        nick: '@tsekulin',
        gender: 'Мужской',
        telephone: '+71111111113',
        email: 'tse@gmail.com',
        date_of_birth: '17.12.2000',
      },
    ]);

    await Post.bulkCreate([
      {
        user_id_post: 3,
        photo_post: [
          'https://sun9-50.userapi.com/impg/IrFSHRRGh0C1fjrIbzKbRMi1Sr02T6I46ukdRw/Sa1EdWUSKYU.jpg?size=1440x1655&quality=95&sign=a9dbc9c94a7d505be8be837fe061f87f&type=album',
          'https://sun9-12.userapi.com/impg/2Prc2g0zFQoEO9YjDsEIa0eSxPxn---ozENKGQ/SzE0oVuvBNs.jpg?size=1146x768&quality=96&sign=cb95c6a0a22334e57b13ef8cb7c6ffac&type=album',
        ],
        description:
          'Вышел на небольшую прогулочку ',
      },
      
    ]);


    await TrainingData.bulkCreate([
      {
        distance: 37.04,
        pace: 5/35,
        time: '3ч. 26мин.',
        calories: 950,
      },
    ]);

    await UserPostTrainingData.bulkCreate([
      {
        training_data_id: 4,
        user_post_id: 4,
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
    await Post.destroy({ truncate: { cascade: true } });
    await TrainingData.destroy({ truncate: { cascade: true } });
    await UserPostTrainingData.destroy({ truncate: { cascade: true } });
  }
};
