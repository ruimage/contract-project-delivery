module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Couriers', [{
      name: 'Бага',
      password: '45678',
      phone: '88652473992',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Couriers', null, {});
  },
};
