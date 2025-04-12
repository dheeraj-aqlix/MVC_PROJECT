const express = require('express');
const user = require('./routes/user')
const cors = require('cors')
const app = express()
app.use(express.json())
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use('/user', user)

module.exports = app;