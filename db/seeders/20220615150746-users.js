const bcrypt = require('bcrypt');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      id: 4,
      firstName: 'Леха',
      lastName: 'Кукушкин',
      email: 'lexa.kukushkin@mail.ru',
      password: await bcrypt.hash('user', 6),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      firstName: 'Людмила',
      lastName: 'Плющкина',
      email: 'luda.plukha@mail.ru',
      password: await bcrypt.hash('user', 6),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 1,
      firstName: 'anton',
      lastName: 'anton',
      email: 'anton@anton.ru',
      password: await bcrypt.hash('123456', 6),
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
