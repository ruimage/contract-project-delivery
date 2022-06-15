const multer = require('multer');

const store = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'img/');
  },
  filename(req, file, cb) {
    cb(null, `${new Date().toString()}-${file.originalname}`);
  },
});
const types = ['img/png', 'img/jpeg', 'img/jpg'];

const fileCheck = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
module.exports = multer({ store, fileCheck });
