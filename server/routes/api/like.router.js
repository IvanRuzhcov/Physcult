const likeRouter = require('express').Router();
const { Like, Post } = require('../../db/models');

likeRouter.get('/init/like', async (req, res) => {
  try {

    const like = await Like.findAll({});

    res.json(like);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Что-то пошло не так : ${error}` });
  }
});

likeRouter.post('/like', async (req, res) => {
  try {
    if (!res.locals.user) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
    }

    const { post_id, user_id } = req.body;

    const post = await Post.findOne({ where: { id: post_id } });
    if (!post) {
      return res.status(404).json({ message: 'Пост не найден' });
    }

    await Like.create({ user_id: res.locals.user.id, post_id: post_id });

    res.status(201).json({ message: 'Лайк успешно добавлен' });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Что-то пошло не так. Пожалуйста, попробуйте еще раз` });
  }
});

likeRouter.post('/remove/like', async (req, res) => {
  try {
    if (!res.locals.user) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
    }

    const { post_id, user_id } = req.body;

    const post = await Post.findOne({ where: { id: post_id } });
    if (!post) {
      return res.status(404).json({ message: 'Пост не найден' });
    }

    const like = await Like.findOne({
      where: {
        user_id: user_id,
        post_id: post_id,
      },
    });
    console.log(user_id);

    console.log(like);

    if (!like) {
      return res.status(404).json({ message: 'Лайк не найден' });
    }
    await like.destroy();

    res.status(201).json({ message: 'Лайк успешно убран' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: `Что-то пошло не так. Пожалуйста, попробуйте еще раз` });
  }
});

module.exports = likeRouter;
