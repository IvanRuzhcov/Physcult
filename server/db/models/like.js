'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {

    static associate({ User, Post }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Post, { foreignKey: 'post_id' })
    }
  }
  Like.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      post_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Posts',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Like',
    }
  );
  return Like;
};
