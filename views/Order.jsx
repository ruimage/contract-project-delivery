const React = require('react');

module.exports = function Order({ order }) {
  const {
    id, title, description, price, sale, linkImg,
  } = order;
  const salePrice = price - price * sale;
  return (
    <div id={`order-${id}`}>
      <img src={`${linkImg}`} alt="" />
      <p id="orderTitle">{title}</p>
      <p id="orderDescription">{description}</p>
      <span id="price">{price}</span>
      <span id="salePrice">{salePrice}</span>
      <form action={`/orders/${id}/accept`} className="order">
        <button id="accept" type="submit">Заказать</button>
      </form>
    </div>
  );
};
