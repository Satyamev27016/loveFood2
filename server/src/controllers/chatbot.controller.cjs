// controllers/chatbotController.js

const axios = require('axios');

exports.getChatResponse = async (req, res) => {
    const { message } = req.body;

    try {
        const response = await axios.post('https://api.gemini.com/chat', {
            message
        }, {
            headers: {
                'Authorization': `Bearer YOUR_GEMINI_API_KEY`,
                'Content-Type': 'application/json'
            }
        });

        res.json({ response: response.data });
    } catch (error) {
        console.error('Error fetching response from Gemini API:', error.message);
        res.status(500).json({ error: 'Failed to communicate with Gemini API' });
    }
};
