require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

const mainRouter = require('./routes/main.routes');
const orderCreate = require('./routes/orderCreate');

const app = express();

expressConfig(app);

app.use('/', mainRouter);
app.use('/order', orderCreate);

app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(3000, () => console.log('server started at 3000'));
