// routes/chatbotRoutes.js

const express = require('express');
const { getChatResponse } = require('../controllers/chatbot.controller.cjs');
const router = express.Router();

router.post('/chatbot', getChatResponse);
module.exports = router;  