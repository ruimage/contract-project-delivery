const React = require('react');
const Layout = require('./Layout');

function Error() {
  return (
    <Layout>
      <div className="bg-warning">
        <h1 className="mb-1">Произошла какая-то ошибка :(</h1>
      </div>
    </Layout>
  );
}

module.exports = Error;
