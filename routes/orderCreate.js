const React = require('react');
const ReactDOMServer = require('react-dom/server');

const orderCreate = require('express').Router();
const OrderCreate = require('../views/orders/OrderCreate');

orderCreate.get('/', (req, res) => {
  const order = React.createElement(OrderCreate, {});
  const html = ReactDOMServer.renderToStaticMarkup(order);
  res.write('<!DOCTYPE html');
  res.end(html);
});
module.exports = orderCreate;
