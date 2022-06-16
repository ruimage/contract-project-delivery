const React = require('react');
const Layout = require('../templates/Layout');

module.exports = function Order() {
  return (
    <Layout>
      <div
        id="ord"
        className="bg-warning"
        action="/orders"
        method="POST"
        encType="multipart/form-data
        "
      >
        <div>
          Заполни форму
        </div>
        <div id="orderNew" className="bg-light">
          <input
            className="orderTitle form-control"
            name="title"
            placeholder="Заголовок"
            aria-label="readonly input example"
          />
          <br />
          <input className="orderDescription form-control " name="description" placeholder="Описание заказа" />
          <br />
          <input className="price form-control" name="price" placeholder="Исходная цена заказа" />
          <br />
          <input className="salePrice form-control" name="salePrice" placeholder="Скидка на заказ" />
          <br />
          <input
            className="imageLink form-control"
            name="imageLink"
            type="file"
            value="text"
            placeholder="Ссылка на фото заказа"
            accept="image/png, image/jpg, image/jpeg"
          />
          <br />
          <form action="/orders" method="POST" className="order">
            <button className="accept btn btn-outline-dark" type="submit">Отправить</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
