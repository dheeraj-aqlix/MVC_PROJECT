const express = require('express');
const user = require('./routes/user')
const app = express()
app.use(express.json())
app.use('/user', user)

module.exports = app;