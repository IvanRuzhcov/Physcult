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
          'https://psv4.userapi.com/c909618/u126590865/docs/d55/8ab20bd9fda3/IMG_5127.png?extra=fZQacGSY8jNP4PGXaePX_6FiCds5zTWN_VBW_6gx9dgFaeVuF045Fd3K8VoadjKJTM_lgpkk_WiyWP3sce2vcgYxWTcQ9140nRJIGcnrfVoTVRYAqnGW9_tnTF1uWPi6Rx0UQlRh6Exz8Be_nJI0X34z',
        name: 'Наталья',
        surname: 'Гербулова',
        nick: '@gerbulova',
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
          'https://ss.sport-express.ru/userfiles/materials/188/1881915/full.jpg',
          'https://sun9-77.userapi.com/impg/b5O6z2bIzoSKRXYwD3AlKlD4kpupZ3w4d5tO4w/qjBMDrgsKhQ.jpg?size=1228x826&quality=96&sign=e99d528621710866e900dabdac971c32&type=album',
        ],
        description:
          'В зоне комфорта нет роста. Сегодня – тренировка: стрельба, бег, и вечная гонка за совершенством. ',
      },
      {
        user_id_post: 5,
        photo_post: [
          'https://rusbiathlon.ru/foto/253/126686.jpg',
          'https://sun9-77.userapi.com/impg/b5O6z2bIzoSKRXYwD3AlKlD4kpupZ3w4d5tO4w/qjBMDrgsKhQ.jpg?size=1228x826&quality=96&sign=e99d528621710866e900dabdac971c32&type=album',
        ],
        description:
          'Тренировки не знают погодных ограничений – даже без снега продолжаю покорять свои пределы!',
      },
      
    ]);
  

    await TrainingData.bulkCreate([
      {
        distance: 12.04,
        pace: 4/35,
        time: '1ч. 23мин.',
        calories: 350,
      },
      {
        distance: 17.04,
        pace: 4/35,
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


