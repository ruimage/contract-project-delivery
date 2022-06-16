const mainRouter = require('express').Router();
const Main = require('../views/Main');
const Error = require('../views/templates/Error');
const { Order } = require('../db/models');

mainRouter.get('/', async (req, res) => {
  // если пользователь залогинен, то в хранилище сессии лежит его userId
  const orders = await Order.findAll();
  res.renderComponent(Main, { orders });
});

mainRouter.get('/error', (req, res) => {
  res.renderComponent(Error);
});

module.exports = mainRouter;
