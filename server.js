require('dotenv').config();
const app = require('./app')
const connectDB = require('./db/dbConnect');
const PORT = process.env.PORT || 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server running on ${PORT}`)
    })
})