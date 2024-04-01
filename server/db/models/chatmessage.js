'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChatMessage extends Model {
   
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'sender_id' });
      this.belongsTo(User, { foreignKey: 'recipient_id' });
    }
  }
  ChatMessage.init(
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sender_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      
      },
      recipient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      
      },
      photo_url: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'ChatMessage',
    }
  );
  return ChatMessage;
};
