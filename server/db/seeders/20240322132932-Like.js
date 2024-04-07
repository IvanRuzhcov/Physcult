'use strict';
const { Like } = require('../models');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Like.bulkCreate([
      {
        user_id: 2,
        post_id: 1,
      },
      {
        user_id: 3,
        post_id: 1,
      },
      {
        user_id: 4,
        post_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await Like.destroy({ truncate: { cascade: true } });
  },
};
