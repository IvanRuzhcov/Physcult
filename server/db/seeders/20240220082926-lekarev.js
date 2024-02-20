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
          'https://psv4.userapi.com/c909218/u126590865/docs/d58/e7c72e4458ac/lekarev.png?extra=lQSjHvoC0yX1d2NPVTDOImPXTj5NOdrbX-bFhsGEt5wp3wzr9eF8X0wse1TuSVBDID31KKQpo30PUDaH1ojBS4rjqu8r-olI84weHXU6XOKNzre4qNRL0qz4GBK7nah-u02ifn_jN4nth-16pzzCI1-o',
        name: 'Aлексей',
        surname: 'Лекарев',
        nick: '@lekarev',
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
          'https://sun9-27.userapi.com/impg/vAmFbUoBPxXZCC1TZErAgiaCccadLlIJtSAsoQ/qA4V8-GAcc0.jpg?size=589x737&quality=96&sign=78b6f656807fa7daf75bc9fc1ab650cd&type=album',
          'https://sun9-77.userapi.com/impg/b5O6z2bIzoSKRXYwD3AlKlD4kpupZ3w4d5tO4w/qjBMDrgsKhQ.jpg?size=1228x826&quality=96&sign=e99d528621710866e900dabdac971c32&type=album',
        ],
        description:
          'Готовы увидеть звезд российского биатлона и лыж в деле?...',
      },
      
    ]);
    

    await TrainingData.bulkCreate([
      {
        distance: 7.10,
        pace: 4/54,
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
