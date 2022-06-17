const { Router } = require('express');
const takePic = require('../middlewares/takePic');
const OrderCreate = require('../views/orders/OrderCreate');
// const AddPic = require('../views/orders/AddPic');
const { Order } = require('../db/models');

const router = Router();
router.get('/', (req, res) => {
  res.renderComponent(OrderCreate);
});
router.post('/order/:id', takePic.single('orderPic'), async (req, res) => {
  try {
    if (req.file) {
      const order = await Order.create({
        url: req.file.path,
        title: req.body.title,
        courierId: req.params.id,
      });
      res.redirect('/order');
      res.status(200);
    }
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
