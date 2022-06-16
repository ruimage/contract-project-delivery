const React = require('react');
const Layout = require('../Layout');

module.exports = function Order() {
  return (
    <Layout>
      <div id="orderNew">
        <form
          action="/orders"
          method="POST"
          className="order"
          encType="multipart/form-data
        "
        >
          <input className="img" name="img" type="file" value="text" placeholder="Загрузить файл" accept='image/png, image/jpg, image/jpeg'/>
          <input className="orderTitle" name="title" value="text" placeholder="Заголовок" />
          <input className="orderDescription" name="description" value="text" placeholder="Описание заказа" />
          <input className="price" name="price" value="number" placeholder="Исходная цена заказа" />
          <input className="salePrice" name="salePrice" value="number" placeholder="Скидка на заказ" />
          <button className="accept" type="submit">Заказать</button>

        </form>
      </div>
    </Layout>
  );
};
