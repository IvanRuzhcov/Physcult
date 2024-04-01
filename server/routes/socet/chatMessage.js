const { ChatMessage } = require('../../db/models'); // Импортируем модель ChatMessage
const { Op } = require('sequelize');

function setupSocketEvents(io) {
  io.on('connection', (socket) => {
    console.log('Client connected');

    // Обработка события отправки сообщения
    socket.on('sendMessage', async ({ content, sender_id, recipient_id }) => {
      try {
        // Создаем новое сообщение в базе данных
        const message = await ChatMessage.create({
          content,
          sender_id,
          recipient_id,
        });
        console.log('New message created:', message);

        // Отправляем сообщение обратно клиенту
        io.emit('message', message);
      } catch (error) {
        console.error('Error creating message:', error);
      }
    });

    socket.on('getPreviousMessages', async ({ recipient_id, sender_id }) => {
      try {
        // Получаем предыдущие сообщения из базы данных
        if (recipient_id && sender_id) {
          const previousMessages = await ChatMessage.findAll({
            where: {
              [Op.or]: [
                { sender_id: sender_id, recipient_id: recipient_id },
                { sender_id: recipient_id, recipient_id: sender_id },
              ],
            },
          });
          // Отправляем предыдущие сообщения клиенту
          socket.emit('previousMessages', previousMessages);
        }
      } catch (error) {
        console.error('Error fetching previous messages:', error);
      }
    });

    // Обработка отключения клиента
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}

module.exports = setupSocketEvents;
