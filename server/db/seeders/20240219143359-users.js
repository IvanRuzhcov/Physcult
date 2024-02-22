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
  async up() {
    await User.bulkCreate([
      {
        password: await bcrypt.hash('1234', 5),
        avatar_img:
          '/images/malyshko.png',
        name: 'Дмитрий',
        surname: 'Малышко',
        nick: 'malyshko',
        gender: 'Мужской',
        telephone: '+71111111111',
        email: 'mal@gmail.com',
        date_of_birth: '17.12.2000',
      },
    ]);

    await Post.bulkCreate([
      {
        user_id_post: 1,
        photo_post: [
          '/postImg/photo_post_malyshko_1.png',
          '/postImg/map_malyshko.jpg'
        ],
        description:
          'Сегодня впервые вместе с семьей на лыжах, даже малыш открыл для себя этот веселый вид активности!',
      },
      {
        user_id_post: 1,
        photo_post: [
          '/postImg/photo_post_malyshko_2.jpg',
          '/postImg/map_malyshko.jpg',
        ],
        description:
          'Летом, в солнечном танце с ветром, мы бегали и стреляли, воплощая дух летнего ',
      },
    ]);
    

    await TrainingData.bulkCreate([
      {
        distance: '19,69',
        pace: '5:19',
        time: '1ч. 44мин.',
        calories: 400,
      },
      {
        distance: '14,81',
        pace: '5:27',
        time: '1ч. 20мин.',
        calories: 340,
      },
    ]);

    await UserPostTrainingData.bulkCreate([
      {
        training_data_id: 1,
        user_post_id: 1,
      },
      {
        training_data_id: 2,
        user_post_id: 2,
      },
    ]);
  },

  async down() {
    await User.destroy({ truncate: { cascade: true } });
    await Post.destroy({ truncate: { cascade: true } });
    await TrainingData.destroy({ truncate: { cascade: true } });
    await UserPostTrainingData.destroy({ truncate: { cascade: true } });
  },
};
