'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserPostTrainingData extends Model {
    
    static associate({Post,TrainingData}) {
      this.belongsTo(Post , { foreignKey: 'user_post_id' })
      this.belongsTo(TrainingData , { foreignKey: 'training_data_id' })
    }
  }
  UserPostTrainingData.init({
    training_data_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Posts',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    user_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TrainingData',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'UserPostTrainingData',
  });
  return UserPostTrainingData;
};