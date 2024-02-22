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
          '/images/lecarev.png',
        name: 'Aлексей',
        surname: 'Лекарев',
        nick: 'lekarev',
        gender: 'Мужской',
        telephone: '+71111111112',
        email: 'lek@gmail.com',
        date_of_birth: '17.12.2000',
      },
    ]);

    await Post.bulkCreate([
      {
        user_id_post: 2,
        photo_post: [
          '/postImg/photo_post_lecatrev_1.png',
          '/postImg/map_lecarev.jpg',
        ],
        description:
          'Сплетя волны под ногами и встречая рассвет на финише, я преодолел дистанцию Ironman, пересекая ленту финиша с поразительным временем.',
      },
      
    ]);
    

    await TrainingData.bulkCreate([
      {
        distance: '7,10',
        pace: '4:54',
        time: '1ч.',
        calories: 450,
      },
    ]);

    await UserPostTrainingData.bulkCreate([
      {
        training_data_id: 3,
        user_post_id: 3,
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
