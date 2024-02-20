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
          'https://psv4.userapi.com/c909618/u126590865/docs/d39/d179e6d03839/legkov.png?extra=ZUvz9azRElJVZF17YBGv30-Dq7vMoCAsjJlC_dz3kD0wjh5AKEAF3oXb1Z0TH_WvM7FdtL2Apw5r3fl2mw-se-V_mu-muNzccOjOQHxtmyBnKyjVRaAP2t2Dry4e_uAW9ULvX47PjUgiwkzVIA2g0xIU',
        name: 'Александр',
        surname: 'Легков',
        nick: '@leghov',
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
          'http://vostexpress.info/wp-content/uploads/2023/02/legkov.jpg',
          'https://sun9-77.userapi.com/impg/b5O6z2bIzoSKRXYwD3AlKlD4kpupZ3w4d5tO4w/qjBMDrgsKhQ.jpg?size=1228x826&quality=96&sign=e99d528621710866e900dabdac971c32&type=album',
        ],
        description:
          'Даже без идеальных условий и снега, моя тренировка не знает остановки. Сегодняшний фокус – сила внутри и постоянное стремление к прогрессу.',
      },
    ]);

 

    await TrainingData.bulkCreate([
      {
        distance: 16.34,
        pace: 5/25,
        time: '2ч. 43мин.',
        calories: 550,
      },
    ]);

    await UserPostTrainingData.bulkCreate([
      {
        training_data_id: 8,
        user_post_id: 8,
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
