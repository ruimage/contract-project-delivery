const React = require('react');
const Layout = require('../Layout');

module.exports = function Order() {
  return (
    <Layout>
      <div id="orderNew">
        <input
          className="imageLink"
          name="imageLink"
          type="file"
          value="text"
          placeholder="Ссылка на фото заказа"
        />
        <input
          className="orderTitle"
          name="title"
          value="text"
          placeholder="Заголовок"
        />
        <input
          className="orderDescription"
          name="description"
          value="text"
          placeholder="Описание заказа"
        />
        <input
          className="price"
          name="price"
          value="number"
          placeholder="Исходная цена заказа"
        />
        <input
          className="salePrice"
          name="salePrice"
          value="number"
          placeholder="Скидка на заказ"
        />
        <form action="/orders" method="POST" className="order">
          <button className="accept" type="submit">
            Заказать
          </button>
        </form>
      </div>
    </Layout>
  );
};
