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
          '/images/shipulin.png',
        name: 'Анатолий',
        surname: 'Шипулин',
        nick: 'shipulin',
        gender: 'Мужской',
        telephone: '+71111111114',
        email: 'shi@gmail.com',
        date_of_birth: '21.08.1987',
      },
    ]);

    await Post.bulkCreate([
      {
        user_id_post: 4,
        photo_post: [
          '/postImg/photo_post_shipulin_1.jpeg',
          '/postImg/map_malyshko.jpg'
        ],
        description:
          'Сегодня в фокусе – тренировка стрельбы в биатлоне. Оттачиваю меткость и выносливость, чтобы быть на высоте на следующих соревнованиях! ',
      },
      
    ]);
 

    await TrainingData.bulkCreate([
      {
        distance: '10,04',
        pace: '5:35',
        time: '2ч. 26мин.',
        calories: 550,
      },
    ]);

    await UserPostTrainingData.bulkCreate([
      {
        training_data_id: 5,
        user_post_id: 5,
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

