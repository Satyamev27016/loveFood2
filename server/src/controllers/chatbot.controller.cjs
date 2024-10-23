// // controllers/chatbotController.js
// const axios = require('axios');

// const API_key = process.env.API_KEY;

// exports.getChatResponse = async (req, res) => {
//     const { message } = req.body;
    
//     if (!message) {
//         return res.status(400).json({ error: 'Message is required.' });
//     }

//     try {
//         const response = await axios.post('https://api.openai.com/v1/chat', {
//             model: 'gpt-3.5-turbo', // Use the desired model
//             messages: [{ role: 'user', content: message }]
//         }, {
//             headers: {
//                 'Authorization': `Bearer ${API_key}`,
//                 'Content-Type': 'application/json'
//             }
//         });

//         res.json({ response:  response.data.choices[0].message.content });
//     } catch (error) {
//         console.error('Error fetching response from OpenAI API:', error.message);
        
//         // Check if the error is due to the API
//         if (error.response) {
//             // The request was made and the server responded with a status code
//             return res.status(error.response.status).json({ error: error.response.data });
//         } else if (error.request) {
//             // The request was made but no response was received
//             return res.status(500).json({ error: 'No response received from OpenAI API.' });
//         } else {
//             // Something happened in setting up the request
//             return res.status(500).json({ error: 'Error setting up request to OpenAI API.' });
//         }
//     }
// };
