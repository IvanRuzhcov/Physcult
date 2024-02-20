'use strict';
const {
  Subscription
} = require('../models');
const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await Subscription.bulkCreate([
      
          {
            user_id: 2,
            subscribe_id: 1,
          },
          {
            user_id: 3,
            subscribe_id: 1,
          },
          {
            user_id: 4,
            subscribe_id: 1,
          },
          {
            user_id: 5,
            subscribe_id: 1,
          },
          {
            user_id: 6,
            subscribe_id: 1,
          },
          {
            user_id: 1,
            subscribe_id: 2,
          },
         
          {
            user_id: 3,
            subscribe_id: 2,
          },
          {
            user_id: 4,
            subscribe_id: 2,
          },
          {
            user_id: 5,
            subscribe_id: 2,
          },
          {
            user_id: 6,
            subscribe_id: 2,
          },
          {
            user_id: 1,
            subscribe_id: 3,
          },
          {
            user_id: 2,
            subscribe_id: 3,
          },
         
          {
            user_id: 4,
            subscribe_id: 3,
          },
          {
            user_id: 5,
            subscribe_id: 3,
          },
          {
            user_id: 6,
            subscribe_id: 3,
          },
          {
            user_id: 1,
            subscribe_id: 4,
          },
          {
            user_id: 2,
            subscribe_id: 4,
          },
          {
            user_id: 3,
            subscribe_id: 4,
          },
          
          {
            user_id: 5,
            subscribe_id: 4,
          },
          {
            user_id: 6,
            subscribe_id: 4,
          },
          {
            user_id: 1,
            subscribe_id: 5,
          },
          {
            user_id: 2,
            subscribe_id: 5,
          },
          {
            user_id: 3,
            subscribe_id: 5,
          },
          {
            user_id: 4,
            subscribe_id: 5,
          },
          
          {
            user_id: 6,
            subscribe_id: 5,
          },
          {
            user_id: 1,
            subscribe_id: 6,
          },
          {
            user_id: 2,
            subscribe_id: 6,
          },
          {
            user_id: 3,
            subscribe_id: 6,
          },
          {
            user_id: 4,
            subscribe_id: 6,
          },
          {
            user_id: 5,
            subscribe_id: 6,
          },
          
        ]);

  },

  async down(queryInterface, Sequelize) {
    await Subscription.destroy({ truncate: { cascade: true } });
 
  },
};