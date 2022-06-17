require('dotenv').config();
require('@babel/register');
const express = require('express');
const path = require('path');
const expressConfig = require('./config/express');
const authorizationRouter = require('./routes/authorization.routes');
const mainRouter = require('./routes/main.routes');
const orderApiRouter = require('./routes/api/order.routes');
const orderCreate = require('./routes/orderCreate.routes');

const app = express();

expressConfig(app);
app.use(express.json({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/', mainRouter);
app.use('/order', orderCreate);

app.use('/auth', authorizationRouter);
app.use('/api/orders', orderApiRouter);

app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(3000, () => console.log('server started at 3000'));
