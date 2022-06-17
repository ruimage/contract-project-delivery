const React = require('react');
const Layout = require('../templates/Layout');
const NavBar = require('../NavBar');

module.exports = function Profile({ courier, user }) {
  return (
    <Layout>
      <NavBar user={user} courier={courier} title="Профиль пользователя" />
      <div className="glavn">
        <div className="bg-warning">
          <div className="bg-light">
            <div className="profile">{`Имя: ${user.firstName}`}</div>
            <br />
            <div className="profile">{`Фамилия: ${user.lastName}`}</div>
            <br />
            <div className="profile">{`Почта: ${user.email}`}</div>
            <br />
            <div>Ваши заказы: <a href="profile">просмотр*</a></div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
