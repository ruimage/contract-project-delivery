const React = require('react');
const Layout = require('../templates/Layout');

module.exports = function Login() {
  return (
    <Layout>
      <h1>Авторизация</h1>

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

        <button type="submit" tabIndex="2" className="button-reg">
          Войти
        </button>
      </form>
    </Layout>
  );
};
