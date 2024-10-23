import React from "react";
import { useState } from "react";
import axios from "axios";




const ChatbootUI = () => {

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: 'user' };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post('/api/v1/Chatboot', { message: input });
            const botMessage = { text: response.data.response, sender: 'bot' };
            setMessages([...messages, userMessage, botMessage]);
        } catch (error) {
            console.error('Error fetching response from server:', error);
        }
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    const handleChange = (e) => {
        setInput(e.target.value);
        console.log("Input updated:", e.target.value);  // Add a log to see the input value change
    };



    return (
        <div className="h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <div className="h-96 overflow-y-scroll border-b mb-4">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`my-2 ${msg.sender === "bot" ? "text-left" : "text-right"
                                }`}
                        >
                            <span
                                className={`inline-block px-4 py-2 rounded-lg ${msg.sender === "bot"
                                    ? "bg-gray-200"
                                    : "bg-blue-500 text-white"
                                    }`}
                            >
                                {msg.text}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="flex items-center">
                    <input
                        className="w-full p-2 border border-gray-300 rounded mr-2 focus:outline-none"
                        value={input}
                        onChange={handleChange} 

                        onKeyDown={handleKeyDown}

                        placeholder="Type a message..."
                    />
                    <button
                        onClick={sendMessage}
                        className="bg-blue-500 text-white px-4 py-2 rounded focus:outline-none"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatbootUI;
