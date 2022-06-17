const React = require('react');
const Layout = require('../templates/Layout');
const NavBar = require('../NavBar');

module.exports = function Profile({ user }) {
  return (
    <Layout>
      <NavBar user={user} />

      <div className="profile">{`Имя  ${user.firstName}`}</div>
      <div className="profile">{`Фамилия ${user.lastName}`}</div>
      <div className="profile">{`Почта ${user.email}`}</div>
    </Layout>
  );
};
