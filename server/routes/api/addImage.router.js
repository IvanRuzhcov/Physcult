const imageRouter = require('express').Router();
const { User } = require('../../db/models');
const fileMiddleware = require('../../middlewares/file');

imageRouter.post(
  '/upload',
  fileMiddleware.single('avatar'),
  async (req, res) => {
    try {
      if (req.file) {
        console.log('-->', req.file);

        if (res.locals.user) {
          const user = await User.findOne({
            where: { id: res.locals.user.id },
          });
          if (user) {
            await user.update({
              avatar_img: req.file.path,
            });
            console.log('Изображение успешно добавлено в базу данных.');
          } else {
            console.log('Пользователь не найден.');
          }
        }
      }
    } catch (error) {
      console.error(error);
      res.status(500).send('Ошибка загрузки изображения.');
    }
  }
);

module.exports = imageRouter;
