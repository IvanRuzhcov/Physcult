'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post, Comment, Like }) {
      this.hasMany(Post, { foreignKey: 'user_id_post' });
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.hasMany(Like, { foreignKey: 'user_id' });
    }
  }
  User.init(
    {
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      avatar_img: {
        type: DataTypes.TEXT,
      },
      name: {
        type: DataTypes.TEXT,
      },
      surname:{
        type: DataTypes.TEXT,
      },
      nick: {
        type: DataTypes.TEXT,
        unique: true,
      },
      surname: {
        type: DataTypes.TEXT,
      },
      gender: {
        type: DataTypes.TEXT,
      },
      telephone: {
        type: DataTypes.TEXT,
        unique: true,
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      date_of_birth: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
