const React = require('react');

module.exports = function NavBar() {
  return (
    <div className="d-flex flex-grow-2">
      <a className="btn btn-outline-dark" href="/auth/register">Регистрация</a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a className="btn btn-outline-dark" href="/auth/login">Войти</a>
    </div>
  );
};
