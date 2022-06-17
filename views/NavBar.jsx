const React = require('react');

module.exports = function NavBar({ user, title }) {
  return (

    <nav className=" bg-warning w-100 p-2">
      <form className="d-flex ">

        <div className="text-dark flex-grow-1 fw-bold text-decoration-none fs-2">
          <a type="submit" href="/">
            <img src="/img/logo.png" width="100" alt=" " />
          </a>
        </div>
        <div>
          <h3 className="title">{title || ''}</h3>
        </div>
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
      </form>
    </nav>

  );
};
