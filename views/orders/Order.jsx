const React = require('react');

module.exports = function Order({ order }) {
  const {
    id, title, description, price, sale, linkImg,
  } = order;
  const salePrice = price - (price * sale / 100);
  return (
    <div id={`order-${id}`} className="cardsBox bg-warning">
      <div className="cardsForm bg-light">
        <img src={`${linkImg}`} alt="" id="img" />
        <p className="orderTitle">{title}</p>
        <p className="orderDescription fw-light fs-6">{description}</p>
        <p className="price fw-light fs-6">Обычная цена: {price} </p>
        <p className="salePrice">Моя цена: {salePrice}</p>
      </div>
      <form action={`/api/orders/${id}/accept`} method="POST" className="order">
        <button className="accept btn btn-outline-dark" type="submit">Заказать</button>
      </form>
    </div>
  );
};
