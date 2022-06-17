const React = require('react');
const Layout = require('./templates/Layout');
const Order = require('./orders/Order');

module.exports = function Main({ user, orders }) {
  return (
    <Layout>
      <div id="orderList">
        {user
          && orders
          && orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
    </Layout>
  );
};
