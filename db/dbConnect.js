const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.Mongodburi)
        console.log("db connected")

    } catch (error) {
        console.log("Error in db connect")
    }

}

module.exports = connectDB;