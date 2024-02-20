'use strict';
const {Like , Comment} = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up () {
  // await Comment.bulkCreate([
  //     {
  //       user_id: 2 ,
  //       post_id: 1,
  //       comment: 'Какие вы молодцы!',
  //     },
  //     {
  //       user_id: 3,
  //       post_id: 1,
  //       comment: 'Молодцы что растите новое поколение биатлонистов!',
  //     },
  //     {
  //       user_id: 4,
  //       post_id: 1 ,
  //       comment: 'Какие вы молодцы !',
  //     },
  //     {
  //       user_id: 2,
  //       post_id: 2,
  //       comment: 'Какие вы молодцы !',
  //     },
  //     {
  //       user_id: 3,
  //       post_id: 1,
  //       comment: 'Какие вы молодцы !',
  //     },
  //     {
  //       user_id: 3,
  //       post_id: 1,
  //       comment: 'Какие вы молодцы !',
  //     },
      

  //   ]);

    // await Like.bulkCreate([
    //   {
    //     user_id: 1,
    //     post_id: 1,
    //   },
      // {
      //   user_id: 2,
      //   post_id: 1,
      // },
      // {
      //   user_id: 3,
      //   post_id: 1,
      // },
      // {
      //   user_id: 4,
      //   post_id: 1,
      // },
      // {
      //   user_id: 5,
      //   post_id: 1,
      // },
      // {
      //   user_id: 6,
      //   post_id: 1,
      // },
      // {
      //   user_id: 1,
      //   post_id: 2,
      // },
      // {
      //   user_id: 2,
      //   post_id: 2,
      // },
      // {
      //   user_id: 3,
      //   post_id: 2,
      // },
      // {
      //   user_id: 4,
      //   post_id: 2,
      // },
      // {
      //   user_id: 5,
      //   post_id: 2,
      // },
      // {
      //   user_id: 6,
      //   post_id: 2,
      // },
      // {
      //   user_id: 1,
      //   post_id: 3,
      // },
      // {
      //   user_id: 2,
      //   post_id: 3,
      // },
      // {
      //   user_id: 3,
      //   post_id: 3,
      // },
      // {
      //   user_id: 4,
      //   post_id: 3,
      // },
      // {
      //   user_id: 5,
      //   post_id: 3,
      // },
      // {
      //   user_id: 6,
      //   post_id: 3,
      // },
      // {
      //   user_id: 1,
      //   post_id: 4,
      // },
      // {
      //   user_id: 2,
      //   post_id: 4,
      // },
      // {
      //   user_id: 3,
      //   post_id: 4,
      // },
      // {
      //   user_id: 4,
      //   post_id: 4,
      // },
      // {
      //   user_id: 5,
      //   post_id: 4,
      // },
      // {
      //   user_id: 6,
      //   post_id: 4,
      // },
      // {
      //   user_id: 1,
      //   post_id: 5,
      // },
      // {
      //   user_id: 2,
      //   post_id: 5,
      // },
      // {
      //   user_id: 3,
      //   post_id: 5,
      // },
      // {
      //   user_id: 4,
      //   post_id: 5,
      // },
      // {
      //   user_id: 5,
      //   post_id: 5,
      // },
      // {
      //   user_id: 6,
      //   post_id: 5,
      // },
      // {
      //   user_id: 1,
      //   post_id: 6,
      // },
      // {
      //   user_id: 2,
      //   post_id: 6,
      // },
      // {
      //   user_id: 3,
      //   post_id: 6,
      // },
      // {
      //   user_id: 4,
      //   post_id: 6,
      // },
      // {
      //   user_id: 5,
      //   post_id: 6,
      // },
      // {
      //   user_id: 6,
      //   post_id: 6,
      // },
    // ]);
  },

  async down (queryInterface, Sequelize) {
    await Comment.destroy({ truncate: { cascade: true } });
    await Like.destroy({ truncate: { cascade: true } });
  }
};
