'use strict';
const {
  User,
  Post,
  UserPostTrainingData,
  TrainingData,
} = require('../models');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await User.bulkCreate([
      {
        password: await bcrypt.hash('1234', 5),
        avatar_img:
          '/images/leghov.png',
        name: 'Александр',
        surname: 'Легков',
        nick: 'leghov',
        gender: 'Мужской',
        telephone: '+71111111116',
        email: 'leg@gmail.com',
        date_of_birth: '17.10.1995',
      },
    ]);

    await Post.bulkCreate([
      {
        user_id_post: 6,
        photo_post: [
          '/postImg/photo_post_leghov_1.jpg',
          '/postImg/map_malyshko.jpg',
        ],
        description:
          'Даже без идеальных условий и снега, моя тренировка не знает остановки. Сегодняшний фокус – сила внутри и постоянное стремление к прогрессу.',
      },
      {
        user_id_post: 6,
        photo_post: [
          '/postImg/photo_post_leghov_2.jpeg',
          '/postImg/map_malyshko.jpg',
        ],
        description:
          'Готовы увидеть звезд российского биатлона и лыж в деле?...',
      },
    ]);

 

    await TrainingData.bulkCreate([
      {
        distance: '16,34',
        pace: '5:25',
        time: '2ч. 43мин.',
        calories: 550,
      },
      {
        distance: '20,34',
        pace: '4:15',
        time: '2ч. 53мин.',
        calories: 550,
      },
    ]);

    await UserPostTrainingData.bulkCreate([
      {
        training_data_id: 8,
        user_post_id: 8,
      },
      {
        training_data_id: 9,
        user_post_id: 9,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await User.destroy({ truncate: { cascade: true } });
    await Post.destroy({ truncate: { cascade: true } });
    await TrainingData.destroy({ truncate: { cascade: true } });
    await UserPostTrainingData.destroy({ truncate: { cascade: true } });
  },
};
