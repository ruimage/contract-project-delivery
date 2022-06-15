const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Couriers', [{
      id: 1,
      name: 'Бага',
      password: await bcrypt.hash('courier', 6),
      phone: '88652473992',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      name: 'Маришка',
      password: await bcrypt.hash('courier', 6),
      phone: '82152473992',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Couriers', null, {});
  },
};
