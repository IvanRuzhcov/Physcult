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
          '/images/gerbulova.png',
        name: 'Наталья',
        surname: 'Гербулова',
        nick: 'gerbulova',
        gender: 'Женский',
        telephone: '+71111111115',
        email: 'ger@gmail.com',
        date_of_birth: '17.10.1995',
      },
    ]);

    await Post.bulkCreate([
      {
        user_id_post: 5,
        photo_post: [
          'postImg/photo_post_gerbulova_1.jpeg',
          'postImg/map_malyshko.jpg',
        ],
        description:
          'В зоне комфорта нет роста. Сегодня – тренировка: стрельба, бег, и вечная гонка за совершенством. ',
      },
      {
        user_id_post: 5,
        photo_post: [
          'postImg/photo_post_gerbulova_2.jpeg',
          'postImg/map_malyshko.jpg',
        ],
        description:
          'Тренировки не знают погодных ограничений – даже без снега продолжаю покорять свои пределы!',
      },
      
    ]);
  

    await TrainingData.bulkCreate([
      {
        distance: '12,04',
        pace: '4:35',
        time: '1ч. 23мин.',
        calories: 350,
      },
      {
        distance: '17,04',
        pace: '4:35',
        time: '2ч. 23мин.',
        calories: 550,
      },
    ]);

    await UserPostTrainingData.bulkCreate([
      {
        training_data_id: 6,
        user_post_id: 6,
      },
      {
        training_data_id: 7,
        user_post_id: 7,
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


