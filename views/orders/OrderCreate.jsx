const React = require('react');
const Layout = require('../templates/Layout');
const NavBar = require('../NavBar');

module.exports = function Order({ user }) {
  return (
    <Layout>
      <NavBar user={user} title="Создать заказ" />
      <div
        id="ord"
        className="bg-warning"
      >
        <div>
          Заполни форму
        </div>
        <form action="/order" method="POST" className="order">
          <div
            id="orderNew"
            className="bg-light"
          >
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
              name="orderPic"
              type="text"
              value="text"
              placeholder="Ссылка на фото заказа"
            />
            <br />
            <button className="accept btn btn-outline-dark" type="submit">Отправить</button>
          </div>
        </form>
      </div>
    </Layout>
  );
};
