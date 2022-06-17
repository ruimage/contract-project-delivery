const React = require('react');
const Layout = require('./Layout');
const Navbar = require('../NavBar');

function Error() {
  return (
    <Layout>
      <Navbar title="Ошибка" />
      <h1 className="mb-1">Произошла какая-то ошибка :(</h1>
    </Layout>
  );
}

module.exports = Error;
