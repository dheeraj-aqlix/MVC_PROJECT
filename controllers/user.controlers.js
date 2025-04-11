const User = require('../models/user.model');

const singnup = (req, res) => {
    try {
        const { email, password } = req.body;


    } catch (error) {
        console.log(error);
        return res.status(500).send('Error in Singup')
    }
}

module.exports = { singnup }