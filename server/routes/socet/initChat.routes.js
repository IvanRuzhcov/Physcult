const chatRouter = require('express').Router();
const { ChatMessage } = require('../../db/models');
const { Op } = require('sequelize');

chatRouter.get('/chat/:id', async (req, res) => {
  const recipient_id = req.params.id;
  const sender_id = res.locals.user.id;

  if (recipient_id && sender_id) {
    const previousMessages = await ChatMessage.findAll({
      where: {
        [Op.or]: [
          { sender_id: sender_id, recipient_id: recipient_id },
          { sender_id: recipient_id, recipient_id: sender_id },

        ],
      },
    });
    res.json(previousMessages);
  }
});

module.exports = chatRouter;
