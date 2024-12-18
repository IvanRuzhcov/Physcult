'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate({ User, Comment, Like, UserPostTrainingData }) {
      this.belongsTo(User, { foreignKey: 'user_id_post' });
      this.hasMany(Comment, { foreignKey: 'post_id' });
      this.hasMany(Like, { foreignKey: 'post_id' });
      this.hasMany(UserPostTrainingData, { foreignKey: 'user_post_id' });
    }
  }
  Post.init(
    {
      user_id_post: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      photo_post: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      description: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
