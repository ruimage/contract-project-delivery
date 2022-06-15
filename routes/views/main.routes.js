const mainRouter = require('express').Router();
const Main = require('../../views/Main');
const Error = require('../../views/Error');

mainRouter.get('/', async (req, res) => {
  // если пользователь залогинен, то в хранилище сессии лежит его userId
  const { userId } = req.session;
  const user = userId && await User.findByPk(userId);

  res.renderComponent(Main, { user });
});

mainRouter.get('/error', (req, res) => {
  res.renderComponent(Error);
});

module.exports = mainRouter;
