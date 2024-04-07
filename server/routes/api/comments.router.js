const commentsRouter = require('express').Router();
const { Comment, Post } = require('../../db/models');

commentsRouter.get('/init', async (req, res) => {
  try {

    const comment = await Comment.findAll({});

    res.json(comment);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: `Что-то пошло не так : ${error}` });
  }
});

commentsRouter.post('/add', async (req, res) => {
  try {
    if (!res.locals.user) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
    }

    const { post_id, user_id, comment } = req.body;

    const post = await Post.findOne({ where: { id: post_id } });
    if (!post) {
      return res.status(404).json({ message: 'Пост не найден' });
    }

    await Comment.create({ user_id: res.locals.user.id, post_id: post_id, comment:comment });

    res.status(201).json({ message: 'Лайк успешно добавлен' });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ message: `Что-то пошло не так. Пожалуйста, попробуйте еще раз` });
  }
});

commentsRouter.post('/remove', async (req, res) => {
  try {
    if (!res.locals.user) {
      return res.status(401).json({ message: 'Пользователь не авторизован' });
    }

    const { post_id, user_id, comment } = req.body;

    const post = await Post.findOne({ where: { id: post_id } });
    if (!post) {
      return res.status(404).json({ message: 'Пост не найден' });
    }

    const comments = await Comment.findOne({
      where: {
        user_id: user_id,
        post_id: post_id,
        comment: comment
      },
    });
    console.log(user_id);

    await comments.destroy();

    res.status(201).json({ message: 'Лайк успешно убран' });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: `Что-то пошло не так. Пожалуйста, попробуйте еще раз` });
  }
});

module.exports = commentsRouter;
