const { ChatMessage } = require('../../db/models'); // Импортируем модель ChatMessage
const { Op } = require('sequelize');

function setupSocketEvents(io) {
  io.on('connection', (socket) => {
    console.log('Client connected');

    // Обработка события отправки сообщения
    socket.on('sendMessage', async ({ content, sender_id, recipient_id }) => {
      try {
        // Создаем новое сообщение в базе данных
        console.log(sender_id);
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

    // Обработка отключения клиента
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}

module.exports = setupSocketEvents;
