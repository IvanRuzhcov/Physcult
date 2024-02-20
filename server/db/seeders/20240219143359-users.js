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
          'https://psv4.userapi.com/c909618/u126590865/docs/d43/3ff1e7608408/photo_2023-10-30_21_31_51.png?extra=eIHDVi4cD2ZbRplKMA-HTp5kjH_R1_GUTNCrMO38l3Ck0iq3vkaWifm6bWTRuETKjsbdA6moTrGojUZBLkbYBd55XYog0NR6r07ypCXdtmg9OEfmIh58iLFF0wCz9eoBD8N46srYaZtrVvRozXGm7bYg',
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
          'https://sun9-31.userapi.com/impg/TzfbuDc-skQBRZaTB0KafjDnzQHKjyOZBiOKew/aX8mQvySxEw.jpg?size=960x960&quality=96&sign=f45202bc7aba0dfaa6b424b344b23a84&type=album',
          'https://sun9-77.userapi.com/impg/b5O6z2bIzoSKRXYwD3AlKlD4kpupZ3w4d5tO4w/qjBMDrgsKhQ.jpg?size=1228x826&quality=96&sign=e99d528621710866e900dabdac971c32&type=album',
        ],
        description:
          'Сегодня впервые вместе с семьей на лыжах, даже малыш открыл для себя этот веселый вид активности!',
      },
      {
        user_id_post: 1,
        photo_post: [
          'https://sun9-36.userapi.com/impg/7-9kHx_tmkd7XAHWDS_l8ClLeZCfrEqN7T5YOQ/UTMHYGtcLZo.jpg?size=2560x1700&quality=95&sign=cb12f0fc696ec7f138cd10c5dce8f0b6&type=album',
          'https://sun9-77.userapi.com/impg/b5O6z2bIzoSKRXYwD3AlKlD4kpupZ3w4d5tO4w/qjBMDrgsKhQ.jpg?size=1228x826&quality=96&sign=e99d528621710866e900dabdac971c32&type=album',
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
