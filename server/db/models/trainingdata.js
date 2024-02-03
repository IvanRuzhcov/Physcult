'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TrainingData extends Model {
   
    static associate({UserPostTrainingData}) {
     this.hasMany(UserPostTrainingData, {foreignKey: 'training_data_id'})
    }
  }
  TrainingData.init({
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pace: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    time: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'TrainingData',
  });
  return TrainingData;
};