'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Polar extends Model {
    
    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Polar.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      data: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
      token: {
        type: DataTypes.TEXT,
      },
      polar_id: {
        type: DataTypes.INTEGER,
      },
      state: {
        type: DataTypes.TEXT
      },
    },
    {
      sequelize,
      modelName: 'Polar',
    }
  );
  return Polar;
};
