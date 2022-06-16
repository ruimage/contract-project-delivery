const React = require('react');
const Layout = require('../templates/Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <h1>Регистрация</h1>

      <form method="POST" action="/auth/register">
        <label htmlFor="title-input" className="reg-1">
          Имя:
        </label>
        <input
          required
          id="title-input"
          name="firstName"
          type="text"
          tabIndex="1"
          className="reg-form"
        />

        <label htmlFor="title-input" className="reg-1">
          Фамилия:
        </label>
        <input
          required
          id="title-input"
          name="lastName"
          type="text"
          tabIndex="1"
          className="reg-form"
        />

        <label htmlFor="title-input" className="reg-1">
          Почта email:
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
          Зарегистрироваться
        </button>
      </form>
    </Layout>
  );
};
