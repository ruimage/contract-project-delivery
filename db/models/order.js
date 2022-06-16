const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate({ User, Courier }) {
      Order.belongsTo(User, { foreignKey: 'userId' });
      Order.belongsTo(Courier, { foreignKey: 'courierId' });
    }
  }

  Order.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    linkImg: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    sale: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    cordN: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    cordW: {
      allowNull: false,
      type: DataTypes.FLOAT,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      defaultValue: 0,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    courierId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Couriers',
        key: 'id',
      },
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
    modelName: 'Order',
  });
  return Order;
};
