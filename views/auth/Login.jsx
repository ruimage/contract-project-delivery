/* eslint-disable jsx-a11y/tabindex-no-positive */
const React = require('react');
const Layout = require('../templates/Layout');
const Navbar = require('../NavBar');

module.exports = function Login() {
  return (
    <Layout>
      <Navbar title="Авторизация" />
      <div className="boxLogin bg-warning">
        <div className="formLogin bg-light">
          <h2>Авторизация</h2>
          <form method="POST" action="/auth/login">
            <label htmlFor="title-input" className="reg-1">
              email:
            </label>
            <input
              required
              id="title-input"
              name="email"
              type="email"
              tabIndex="1"
              className="reg-form"
            />
            <label htmlFor="title-input" className="reg-1">
              Пароль:
            </label>
            <input
              required
              id="title-input"
              name="password"
              type="password"
              tabIndex="1"
              className="reg-form"
            />
            <button type="submit" tabIndex="2" className="button-reg accept btn btn-outline-dark">
              Войти
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
