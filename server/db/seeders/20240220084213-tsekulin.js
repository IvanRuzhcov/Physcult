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
          '/images/tsekulin.png',
        name: 'Анатолий',
        surname: 'Цекулин',
        nick: 'tsekulin',
        gender: 'Мужской',
        telephone: '+71111111113',
        email: 'Tsekulin@gmail.com',
        date_of_birth: '17.12.2000',
      },
    ]);

    await Post.bulkCreate([
      {
        user_id_post: 3,
        photo_post: [
          '/postImg/photo_post_tsekulin_1.jpeg',
          '/postImg/map_tsekulin.jpg',
        ],
        description:
          'Вышел на небольшую прогулочку ',
      },
      
    ]);


    await TrainingData.bulkCreate([
      {
        distance: '37,04',
        pace: '5:35',
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
