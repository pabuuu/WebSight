
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Health check
app.get('/', (req, res) => {
  res.send('WebSight Messenger Bot is running!');
});

// Webhook verification (Facebook requires this)
app.get('/webhook', (req, res) => {
  const mode = req.query['hub.mode'];
  const token = req.query['hub.verify_token'];
  const challenge = req.query['hub.challenge'];

  if (mode && token === process.env.VERIFY_TOKEN) {
    console.log('Webhook verified!');
    res.status(200).send(challenge);
  } else {
    res.sendStatus(403);
  }
});

// Webhook to receive messages
app.post('/webhook', (req, res) => {
  const body = req.body;

  if (body.object === 'page') {
    body.entry.forEach(entry => {
      const webhookEvent = entry.messaging[0];
      console.log('Received event:', webhookEvent);
    });
    res.status(200).send('EVENT_RECEIVED');
  } else {
    res.sendStatus(404);
  }
});

// API endpoint to send pre-filled message
app.post('/api/send-message', async (req, res) => {
  const { name, email, project, message } = req.body;

  const messageText = `Hi! I'm interested in your services.\n\nName: ${name}\nEmail: ${email}\nProject Type: ${project}\n\nMessage:\n${message}`;

  try {
    const response = await axios.post(
      `https://graph.facebook.com/v18.0/me/messages`,
      {
        recipient: { id: process.env.PAGE_ID },
        message: { text: messageText },
        messaging_type: 'RESPONSE'
      },
      {
        params: { access_token: process.env.PAGE_ACCESS_TOKEN }
      }
    );

    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error('Error sending message:', error.response?.data || error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;