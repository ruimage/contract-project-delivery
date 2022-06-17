module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Orders',
      [
        {
          title: 'Шаурма классическая',
          description:
            'Состав: куриное филе, огурцы, помидоры, зелень, лук, соус, лаваш',
          linkImg:
            'https://static.1000.menu/res/640/img/content-v2/05/d8/21554/klassicheskaya-shaurma_1589963797_11_max.jpg',
          price: 150,
          sale: 10,
          cordN: 59.925867,
          cordW: 30.310451,
          courierId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Набор ролов "Сытный"',
          description:
            'Ролл Филадельфия с лососем, Ролл Филадельфия с угрем, 3 суши с лососем, 3 суши с угрем.',
          linkImg: 'http://sensey70.ru/data/catalog/125/dlyadvoih.jpg',
          price: 900,
          sale: 20,
          cordN: 59.926981,
          cordW: 30.31585,
          courierId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Пицца мексиканская 40см',
          description:
            'Острая пицца с куриным филе, фирменным томатным соусом, Моцареллой, шампиньонами, луком, томатами, сладким перцем и перцем "Халапеньо"',
          linkImg:
            'https://papitospizza.ru/wa-data/public/shop/products/27/00/27/images/272/272.750.jpg',
          price: 500,
          sale: 15,
          cordN: 59.926981,
          cordW: 30.31585,
          courierId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Торт морковный',
          description:
            'Морковный торт – подходящее угощение к любому празднику. Его любят за изумительный пряный вкус, гармонично сочетающийся с грецкими орехами',
          linkImg:
            'https://grandkulinar.ru/uploads/posts/2019-04/1555839821_morkovnyj-tort-s-syrnym-kremom.jpg',
          price: 1500,
          sale: 25,
          cordN: 59.926981,
          cordW: 30.31585,
          courierId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'KFC Баскет 25 острых крыльев',
          description: '25 оригинальных острых крыльев в панировке',
          linkImg: 'https://static.pepper.ru/threads/content/3CLqJ/124196.jpg',
          price: 450,
          sale: 10,
          cordN: 59.926981,
          cordW: 30.31585,
          courierId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Лобстреры XXL',
          description:
            'Лобстер, его ещё называют омаром, считается деликатесом. Но как говорят гурманы, по вкусу он мало чем отличается от раков.',
          linkImg:
            'https://i2.wp.com/24smi.org/public/media/2017/11/10/01_FrbQuPr.jpg',
          price: 5000,
          sale: 15,
          cordN: 59.926981,
          cordW: 30.31585,
          courierId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Картошка по-деревенски',
          description:
            'Ароматный, сочный и пряный картофель по-деревенски в духовке станет прекрасным блюдом не только на завтрак, но и на обед или ужин.',
          linkImg:
            'https://nakormi.com/wp-content/uploads/2016/10/kartofel-po-derevenski-v-duhovke-600x400.jpg',
          price: 450,
          sale: 10,
          cordN: 59.926981,
          cordW: 30.31585,
          courierId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Блины со сгущенкой',
          description:
            'Клисический рецепт блинов. Тонкие, в меру сладкие и одни из самых вкусных.',
          linkImg:
            'https://domashnyaya-vypechka.ru/wp-content/uploads/2020/01/Pancakes-with-condensed-milk.jpg',
          price: 400,
          sale: 20,
          cordN: 59.926981,
          cordW: 30.31585,
          courierId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Королевский бургер',
          description:
            'Что может быть лучше бургера? Конечно, королевский бургер!',
          linkImg:
            'https://img.povar.ru/main/21/c8/ab/38/burger_quotcezarquot-635279.jpg',
          price: 450,
          sale: 10,
          cordN: 59.926981,
          cordW: 30.31585,
          courierId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});
  },
};
