import express from "express"
// const express = require('express')
const app = express()

app.get('/', (req, res) =>{
    res.send('hello mister')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port`)
})

export default app;