const React = require('react');
const Layout = require('../templates/Layout');
const NavBar = require('../NavBar');

module.exports = function Main({ user, orders }) {
  return (
    <Layout>
      <nav className=" bg-warning w-100 p-2">
        <form className="d-flex ">
          <div className="text-dark flex-grow-1 fw-bold text-decoration-none fs-2">
            <a type="submit" href="/reg">
              <img src="/img/logo.png" width="100" alt=" " />
            </a>
          </div>
          <NavBar user={user} />
        </form>
      </nav>

      <div className="profile">{`Имя  ${user.firstName}`}</div>
      <div className="profile">{`Фамилия ${user.lastName}`}</div>
      <div className="profile">{`Почта ${user.email}`}</div>
    </Layout>
  );
};
