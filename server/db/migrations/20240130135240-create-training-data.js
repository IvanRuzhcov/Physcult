'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TrainingData', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      distance: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      pace: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      time: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      calories: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('TrainingData');
  },
};
