const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable('Orders', {
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
        defaultValue: 0,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      courierId: {
        allowNull: false,
        defaultValue: 0,
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('Orders');
  },
};
