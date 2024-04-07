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
      type: DataTypes.TEXT,
      allowNull: false,
    },
    pace: {
      type: DataTypes.TEXT,
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
    gpx:{
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    modelName: 'TrainingData',
  });
  return TrainingData;
};