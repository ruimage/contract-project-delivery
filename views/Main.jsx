const React = require('react');
const Layout = require('./templates/Layout');
const Order = require('./orders/Order');
const NavBar = require('./NavBar');

module.exports = function Main({ user, orders }) {
  return (
    <Layout>

      <NavBar user={user} title="Заказы" />
      <div id="orderList">
        {user
          && orders
          && orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
      <script defer src="/JS/orders.js" />
    </Layout>
  );
};
