const orderApiRouter = require('express').Router();

const { Order } = require('../../db/models');

orderApiRouter.post('/:order/accept', async (req, res) => {
  // если пользователь залогинен, то в хранилище сессии лежит его userId
  const { userId } = req.session;
  const inApplyedOrder = req.params.order;
  const applyedOrder = await Order.findByPk(inApplyedOrder);

  applyedOrder.userId = userId;
  await applyedOrder.save();

  res.redirect('/');
});

module.exports = orderApiRouter;
