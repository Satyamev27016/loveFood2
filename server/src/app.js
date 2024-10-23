
import { EventEmitter } from 'events';



import express from "express"
// const express = require('express')
import cors from "cors"
import cookieParser from "cookie-parser"

EventEmitter.defaultMaxListeners = 20;
const app = express();

app.use(cors({
    origin : process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true
}))

app.use(express.json({limit: '50mb'}))
app.use(express.urlencoded({extended: true, limit:"50mb"}))
app.use(express.static('public'))
app.use(cookieParser())


// routes import 

import userRouter from "./routes/user.route.js"
// import chatbotRoutes from "./routes/chatbot.route.cjs"
// routes declareation 
app.use('/api/v1/user', userRouter)

// app.use('/api/v1/Chatboot', chatbotRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port`)
})

export default app;