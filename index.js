require('dotenv')
const express = require('express')
const app = express()
const port = process.env.SERVER_PORT || 8000

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(port, () => {console.log(`App is online at the: localhost:${port}`);})