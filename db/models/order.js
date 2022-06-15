'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Order.init({
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    linkImg: DataTypes.TEXT,
    price: DataTypes.FLOAT,
    sale: DataTypes.FLOAT,
    cordN: DataTypes.FLOAT,
    cordW: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};