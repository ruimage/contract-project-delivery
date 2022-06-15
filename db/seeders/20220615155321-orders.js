module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        title: 'Вкусный шаверма',
        description: 'Почти свежий шаверма, чуть чуть откусил, угостил друзей, просто вкусна кушать хочется.',
        linkImg: 'https://img.pravda.com/images/doc/3/b/3b87a98---------------------.jpg',
        price: 250,
        sale: 10,
        cordN: 59.925867,
        cordW: 30.310451,
        userId: 4,
        courierId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Закуски для гурмана',
        description: 'Только что приготовили, не смогла дозвониться до клиента, забирай, пока сама не съела.',
        linkImg: 'https://www.menslife.com/upload/images/2019/10/%D0%90%D0%BD%D0%B3%D0%B5%D0%BB%D0%B0%20%D0%9C%D0%B5%D1%80%D0%BA%D0%B5%D0%BB%D1%8C,%20%D1%84%D0%B5%D0%B4%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B8%CC%86%20%D0%BA%D0%B0%D0%BD%D1%86%D0%BB%D0%B5%D1%80%20%D0%93%D0%B5%D1%80%D0%BC%D0%B0%D0%BD%D0%B8%D0%B8.jpg',
        price: 550,
        sale: 5,
        cordN: 59.926981,
        cordW: 30.315850,
        userId: 5,
        courierId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
