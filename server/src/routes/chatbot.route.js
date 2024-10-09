// routes/chatbotRoutes.js

const express = require('express');
const { getChatResponse } = require('../controllers/chatbotController');
const router = express.Router();

router.post('/chat', getChatResponse);

module.exports = router;
