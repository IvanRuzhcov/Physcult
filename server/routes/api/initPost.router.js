const initPostRouter = require('express').Router();
const {
  Post,
  User,
  UserPostTrainingData,
  TrainingData,
} = require('../../db/models');

initPostRouter.get('/user/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: UserPostTrainingData,
          include: [{ model: TrainingData }],
        },
      ],
      where: {
        user_id_post: res.locals.user.id,
      },
      order: [['createdAt', 'DESC']], // Используйте правильный синтаксис для order
    });
    res.json(posts);
  } catch (error) {
    console.error(error);
  }
});
initPostRouter.get('/posts', async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: UserPostTrainingData,
          include: [{ model: TrainingData }],
        },
      ],
      order: [['createdAt', 'DESC']], // Используйте правильный синтаксис для order
    });
    res.json(posts);
  } catch (error) {
    console.error(error);
  }
});
module.exports = initPostRouter;
