'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Post, Comment, Like, Subscription, Polar,ChatMessage}) {
      
      this.hasMany(Post, { foreignKey: 'user_id_post' });
      this.hasMany(Comment, { foreignKey: 'user_id' });
      this.hasMany(Like, { foreignKey: 'user_id' });
      this.hasMany(Polar, { foreignKey: 'user_id' });

      this.belongsToMany(User, {
        through: Subscription,
        foreignKey: 'user_id',
        otherKey: 'subscribe_id',
        as: 'user',
      });

      this.belongsToMany(User, {
        through: Subscription,
        foreignKey: 'subscribe_id',
        otherKey: 'user_id',
        as: 'subscription',
      });
      this.hasMany(ChatMessage, { foreignKey: 'sender_id' });
      this.hasMany(ChatMessage, { foreignKey: 'recipient_id' });
    }
  }
  User.init(
    {
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      avatar_img: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.TEXT,
      },
      surname: {
        type: DataTypes.TEXT,
      },
      nick: {
        type: DataTypes.TEXT,
        unique: true,
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
