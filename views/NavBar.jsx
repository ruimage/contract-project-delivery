const React = require('react');

const { Context } = require('../middlewares/reactSsr');

module.exports = function NavBar({ user }) {
  return (
    <div className="d-flex flex-grow-2">
      <a
        className="btn btn-outline-dark"
        href={user ? '/profile' : '/auth/register'}
      >
        {user ? user.firstName : 'Регистрация'}
      </a>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <a
        className="btn btn-outline-dark"
        href={user ? '/auth/logout' : '/auth/login'}
      >
        {user ? 'Выйти' : 'Войти'}
      </a>
    </div>
  );
};
