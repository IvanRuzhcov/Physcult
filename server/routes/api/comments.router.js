const commentsRouter = require('express').Router();
const { Comment } = require('../../db/models');

commentsRouter.post('/comment', async (req, res) => {
  const comment = req.body;

  console.log(comment);

  // Comment.create({
  //     user_id: req.locals.user.user_id,
  //     post_id: comment.post_id,
  //     comment: comment
  // })
});

commentsRouter.get('/comments:id', async (req, res) => {

    
});

module.exports = commentsRouter;
