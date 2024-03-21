const publishingRouter = require('express').Router();
const {
  Polar,
  Post,
  UserPostTrainingData,
  TrainingData,
} = require('../../db/models');
const fileMiddleware = require('../../middlewares/filePost');
const {
  formatDuration,
  formatDurationTime,
  convertDecimalTime,
} = require('../../helpers/formatDuration');

publishingRouter.post(
  '/publishing',
  fileMiddleware.array('postImg', 10),
  async (req, res) => {
    try {
      const { id, description } = req.body;
      let mus = [];
      mus.push(req.files);

      const polarData = await Polar.findOne({
        where: { user_id: res.locals.user.id },
      });
      const data = polarData.data.filter((el) => el.id === Number(id));

      if (!data) {
        return res.status(404).json({ error: 'Данные не найдены' });
      }
      //   Создать пост
      let photo;
      if (req.files) {
        photo = req.files.map((el) => el.path.replace(/^public/, ''));
      }
      const post = await Post.create({
        user_id_post: res.locals.user.id,
        description: description,
        photo_post: photo, // Сохраняем пути к файлам
      });

      const minuts = formatDuration(data[0]['duration']);
      const dtn = data[0].distance / 1000;
      const pace = convertDecimalTime((minuts / dtn).toFixed(2));

      const distance = `${(data[0].distance / 1000).toFixed(2)}`.replace(
        '.',
        ','
      );

      // Создать связанные данные тренировки
      // Создать данные тренировки
      const createdTrainingData = await TrainingData.create({
        distance: distance,
        time: formatDurationTime(data[0].duration),
        pace: pace,
        calories: data[0].calories,
        gpx: data[0].gpx,
      });

      // Создать связь между постом и данными тренировки
      await UserPostTrainingData.create({
        training_data_id: createdTrainingData.id,
        user_post_id: post.id,
      });

      return res.status(201).json({ message: 'Пост успешно создан' });
    } catch (error) {
      console.error('Ошибка при создании поста', error);
      return res.status(500).json({ error: 'Внутренняя ошибка сервера' });
    }
  }
);

module.exports = publishingRouter;
