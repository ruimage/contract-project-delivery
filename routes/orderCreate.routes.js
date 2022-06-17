const { Router } = require('express');
const takePic = require('../middlewares/takePic');
const OrderCreate = require('../views/orders/OrderCreate');
// const AddPic = require('../views/orders/AddPic');
const { Order, User } = require('../db/models');
const mailer = require('../config/nodemailer');

const router = Router();
router.get('/', async (req, res) => {
  const { userId } = req.session;

  const user = userId && (await User.findByPk(userId));

  res.renderComponent(OrderCreate, { user });
});
router.post('/', async (req, res) => {
  const {
    title,
    description,
    price,
    salePrice,
    orderPrice,

  } = req.body;
  // if (!email || !offers) return res.sendStatus(400);
  // const maillist = `${req.body.email}, seliverstova.anastasia3@yandex.ru`;
  //
  // const message = {
  //   to: maillist,
  //   subject: 'Поздравляем, Вы успешно оформили заявку на нашем сайте!',
  //   html: `
  //     <h2>Поздравляем, Вы успешно оформили заявку на нашем сайте!</h2>
  //
  //     <i>данные вашей заявки:</i>
  //     <ul>
  //         <li>Ваша почта: ${req.body.email}</li>
  //         <li>Ваши пожелания: ${req.body.offers}</li>
  //         <li>Ваш макет: ${req.body.img}</li>
  //     </ul>
  //
  //     <p>Данное письмо не требует ответа.<p>
  //     <p>Спасибо, что заглянули к нам :).<p>`,
  // };
  // mailer(message);
  res.redirect('/');
});
module.exports = router;
