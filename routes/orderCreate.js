const React = require('react');
const ReactDOMServer = require('react-dom/server');
const multer = require('multer');
const orderCreate = require('../views/orders/OrderCreate');
const takePic = require('../middlewares/takePic');

const upload = multer({ storage });
