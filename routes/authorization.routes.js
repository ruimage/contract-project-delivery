const router = require('express').Router();
const ReactDOMServer = require('react-dom/server');
const React = require('react');

const bcrypt = require('bcrypt');
const Login = require('../views/auth/Login');
const Error = require('../views/templates/Error');
const Registr = require('../views/auth/Registration');

const { User } = require('../db/models');

router.get('/register', async (req, res) => {
  const reg = React.createElement(Registr, {});
  const html = ReactDOMServer.renderToStaticMarkup(reg);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/register', async (req, res) => {
  const {
    firstName, lastName, email, password,
  } = req.body;
  const existingUser = await User.findOne({ where: { email } });
  if (existingUser) {
    res.send('Такой пользователь уже есть');
    return;
  }

  try {
    const user = await User.create({
      firstName,
      lastName,
      email,
      password: await bcrypt.hash(password, 10),
    });
    req.session.userId = user.id;
    res.redirect('/');
  } catch (error) {
    const errorPage = React.createElement(Error, {
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
    const html = ReactDOMServer.renderToStaticMarkup(errorPage);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
});

router.get('/login', async (req, res) => {
  const log = React.createElement(Login, {});
  const html = ReactDOMServer.renderToStaticMarkup(log);
  res.write('<!DOCTYPE html>');
  res.end(html);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.userId = user.id;
      res.redirect('/');
    } else {
      res.status(400).json({
        message:
          'Неверное имя пользователя или пароль. Проверьте правильность введенных данных.',
      });
    }
  } catch (error) {
    const errorPage = React.createElement(Error, {
      message: 'Не удалось получить записи из базы данных.',
      error: {},
    });
    const html = ReactDOMServer.renderToStaticMarkup(errorPage);
    res.write('<!DOCTYPE html>');
    res.end(html);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
