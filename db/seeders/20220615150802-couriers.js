const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Couriers',
      [
        {
          id: 1,
          firstName: 'Бага',
          lastName: 'Багирович',
          email: 'bagira@baga.ru',
          password: await bcrypt.hash('courier', 6),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          firstName: 'Фернандо',
          lastName: 'Макиарелли',
          email: 'fernando@makia.ru',
          password: await bcrypt.hash('courier', 6),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Couriers', null, {});
  },
};
