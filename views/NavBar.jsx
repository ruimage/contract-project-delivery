const React = require('react');

module.exports = function NavBar() {
  return (
    <div className="d-flex flex-grow-2">
      <button type="submit" className="btn btn-outline-dark" href="#">Регистрация</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button type="submit" className="btn btn-outline-dark" href="#">Войти</button>
    </div>
  );
};
