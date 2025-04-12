const User = require('../models/user.model');
const { bycryptCompare, bycryptHash } = require('../utils/helpers');
const singnup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email && !password) {
            return res.status(400).send("Email and password is compulsary");
        }
        const alreadyUser = await User.findOne({ email })
        if (alreadyUser) {
            return res.status(403).send("Email Already exist");
        }
        req.body.password = bycryptHash(req.body.password);
        const result = await User.create(req.body)
        console.log("result", result)
        return res.status(201).send("User created");


    } catch (error) {
        console.log(error);
        return res.status(500).send('Error in Singup')
    }
}

module.exports = { singnup }