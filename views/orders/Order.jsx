const React = require('react');

module.exports = function Order({ order }) {
  const {
    id, title, description, price, sale, linkImg,
  } = order;
  const salePrice = price - price * sale;
  return (
    <div id={`order-${id}`}>
      <img src={`${linkImg}`} alt="" />
      <p className="orderTitle">{title}</p>
      <p className="orderDescription">{description}</p>
      <span className="price">{price}</span>
      <span className="salePrice">{salePrice}</span>
      <form action={`/orders/${id}/accept`} method="POST" className="order">
        <button className="accept" type="submit">Заказать</button>
      </form>
    </div>
  );
};
