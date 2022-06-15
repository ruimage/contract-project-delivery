const React = require('react');
const Layout = require('./Layout');
const Order = require('./orders/Order');

function Main({ user, orders }) {
  return (
    <Layout>
      <div id="orderList">{user && (orders && (
        orders.map((order) => <Order key={order.id} order={order} />)))}
      </div>

    </Layout>
  );
}

module.exports = Main;
