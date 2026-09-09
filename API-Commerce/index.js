const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 8000

// listen to the port
app.listen(port, () => {
    console.log(`Server started successfully on port ${port}`)
})

app.get('/welcome', (req, res) => {
    res.send('Welcome to Express JS to learn the RESTAPI');
})