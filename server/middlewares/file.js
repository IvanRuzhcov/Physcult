const multer = require('multer');


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/'); // указываем папку для сохранения файлов
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  },
});
const storage2 = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/postImg/'); // указываем папку для сохранения файлов
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  },
});

const types = ['image/png', 'image/jpeg', 'image/jpg', 'video/mp4', 'video/mpeg', 'video/quicktime'];


const fileFilter = (req, file, cb) => {
  if (types.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
module.exports = multer({ storage, fileFilter });
