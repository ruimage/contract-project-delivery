const React = require('react');

module.exports = function Order({ order }) {
  const {
    id, title, description, price, sale, linkImg, userId,
  } = order;
  const salePrice = price - (price * sale / 100);
  return (
    <div id={`order-${id}`} className="orderContainer cardsBox bg-warning" data-client={userId || 0}>
      <div className="cardsForm bg-light">
        <div className="img-cards">
          <img src={`${linkImg}`} alt="" id="img" />
        </div>
        <p className="orderTitle">{title}</p>
        <div className="deckription">
          <p className="orderDescription fw-light fs-6">{description}</p>
        </div>
        <p className="price fw-light fs-6">Обычная цена: {price} ₽</p>
        <p className="salePrice">Моя цена: {salePrice} ₽</p>
      </div>
      <form action={`/api/orders/${id}/accept`} method="POST" className="order">
        <button className="accept btn btn-outline-dark" type="submit">Заказать</button>
      </form>
    </div>
  );
};
