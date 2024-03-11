const webHookRouter = require('express').Router();
const axios = require('axios');

const client_id = process.env.CLIENT_ID;

const client_secret = process.env.CLIENT_SECRET;
webHookRouter.post('/create_webhook/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id)
  const { events } = req.body;
console.log(events)

  const webhookUrl = `http://localhost:4002/acl_webhook/${id}`;

  try {
    const response = await axios.post(
      'https://www.polaraccesslink.com/v3/webhooks',
      {
        url: webhookUrl,
        events,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${Buffer.from(
            `${client_id}:${client_secret}`
          ).toString('base64')}`,
        },
      }
    );

    // Обработка успешного ответа
    console.log(`Webhook created successfully for user ${id}`);
    console.log('Response:', response.data);

    res.status(200).json({ success: true });
  } catch (error) {
    // Обработка ошибок
    console.error('Error creating webhook:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = webHookRouter;


  // const hendelProv = async () => {
  //   try {
  //     const response = await axios.post(
  //       `/polar/create_webhook/${user?.polar_id}`,
  //       {
  //         events: 'EXERCISE', // Укажите события, которые вы хотите отслеживать
  //       },
  //     );

  //     console.log('Webhook creation response:', response.data);
  //   } catch (error) {
  //     console.error('Error creating webhook:', error);
  //   }
  // };