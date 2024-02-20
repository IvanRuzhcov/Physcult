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
          'https://psv4.userapi.com/c909618/u126590865/docs/d58/4937bf0606a5/licensed-image.png?extra=uUwVi6AVV3RymYWwD9rTMuKl4jPHf4vtaPEZk2WGpEe5K-7zYT-ml_DQCGjCmsa72S66FS8FcSg4tVWHtTlecms00D008-GFXBJZFMIKZl72WDYWnR2QQlJmxIVhaZ-jsutlGsPWbi3egVt49VL87Yr5',
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
          'https://wisto.ru/wp-content/uploads/a/b/3/ab30e427303d4121b2c3910977a2e3c5.jpeg',
          'https://sun9-77.userapi.com/impg/b5O6z2bIzoSKRXYwD3AlKlD4kpupZ3w4d5tO4w/qjBMDrgsKhQ.jpg?size=1228x826&quality=96&sign=e99d528621710866e900dabdac971c32&type=album',
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

