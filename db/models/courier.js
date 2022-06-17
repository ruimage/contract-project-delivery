const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Courier extends Model {
    static associate({ Order }) {
      Courier.hasMany(Order, { foreignKey: 'courierId' });
    }
  }
  Courier.init(
    {
      firstName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      lastName: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
   {
    sequelize,
    modelName: 'Courier',
    tableName: 'Couriers',
  });
  return Courier;
};
