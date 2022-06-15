module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        title: 'Вкусный шаверма',
        description: 'Почти свежий шаверма, чуть чуть откусил, угостил друзей, просто вкусна кушать хочется.',
        linkImg: 'https://my.ua/news/cluster/2019-05-29-zelenskii-i-shaurma-v-seti-pokazali-smeshnye-fotozhaby',
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
        linkImg: 'https://www.menslife.com/person/42606-chto-edyat-prezidenty-raznykh-stran.html',
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
