const mainRouter = require('express').Router();
const Main = require('../views/Main');
const Profile = require('../views/profile/Profile');
const Error = require('../views/templates/Error');
const { Order, User } = require('../db/models');

mainRouter.get('/', async (req, res) => {
  // если пользователь залогинен, то в хранилище сессии лежит его userId
  const { userId } = req.session;
  const user = userId && (await User.findByPk(userId));
  const orders = await Order.findAll();
  res.renderComponent(Main, { user, orders });
});

mainRouter.get('/error', (req, res) => {
  res.renderComponent(Error);
});

mainRouter.get('/profile', async (req, res) => {
  // если пользователь залогинен, то в хранилище сессии лежит его userId
  const { userId } = req.session;
  const user = userId && (await User.findByPk(userId));
  res.renderComponent(Profile, { user });
});

module.exports = mainRouter;
