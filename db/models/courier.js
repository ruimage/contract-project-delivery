const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Courier extends Model {
    static associate({ Order }) {
      Courier.hasMany(Order, { foreignKey: 'courierId' });
    }
  }
  Courier.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    phone: {
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
  }, {
    sequelize,
    modelName: 'Courier',
    tableName: 'Couriers',
  });
  return Courier;
};
