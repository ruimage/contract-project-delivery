const React = require('react');
const Layout = require('../templates/Layout');

module.exports = function Registration() {
  return (
    <Layout>
      <div className="boxReg bg-warning">
        <div className="formReg bg-light">
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
              className="reg-form form-control"
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
              className="reg-form form-control"
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
              className="reg-form form-control"
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
              className="reg-form form-control"
            />
        <fieldset>
          <legend>Выберите тип профиля:</legend>

          <input required type="radio" id="powers1" name="role" value="user" />
          <label htmlFor="powers1">Пользователь</label>

          <input
            required
            type="radio"
            id="powers2"
            name="role"
            value="courier"
          />
          <label htmlFor="powers2">Курьер</label>
        </fieldset>

            <button type="submit" tabIndex="2" className="button-reg btn btn-outline-dark">
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
