const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      firstName: 'Леха',
      lastName: 'Кукушкин',
      email: 'lexa.kukushkin@mail.ru',
      password: await bcrypt.hash('user', 6),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
