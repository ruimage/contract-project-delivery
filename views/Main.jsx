const React = require('react');
const Layout = require('./templates/Layout');
const Order = require('./orders/Order');
const NavBar = require('./NavBar');

module.exports = function Main({ user, orders }) {
  return (
    <Layout>
      <nav className=" bg-warning w-100 p-2">
        <form className="d-flex ">
          <div className="text-dark flex-grow-1 fw-bold text-decoration-none fs-2">
            <a type="submit" href="/">
              <img src="/img/logo.png" width="100" alt=" " />
            </a>
          </div>
          <NavBar user={user} />
        </form>
      </nav>
      <div id="orderList">
        {user
          && orders
          && orders.map((order) => <Order key={order.id} order={order} />)}
      </div>
    </Layout>
  );
};
