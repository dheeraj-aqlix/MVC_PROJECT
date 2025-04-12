const User = require('../models/user.model');
const { bycryptCompare, bycryptHash, jwtSign, verify } = require('../utils/helpers');
const singnup = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log('req.file',req.file)
        if (!email && !password && req.file) {
            return res.status(400).send("Email, password and file  is compulsary");
        }
        req.body.profilepic = req.file ? `/uploads/${req.file.filename}` : null
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

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email && !password) {
            return res.status(400).send("Email and password is required");
        }
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).send("User not found");
        }
        const passwordCompare = bycryptCompare(password, user.password);
        if (!passwordCompare) {
            return res.status(401).send("Passowrd not match");
        }
        const jwtpayload = {
            _id: user._id
        }
        const token = await jwtSign(jwtpayload)
        console.log("token", token)
        const Payload = {
            _id: user._id,
            token: token,
        }
        return res.status(200).send(Payload)
    } catch (error) {
        console.log("Error in login", error);
        return res.status(500).send("Error in login");
    }

}

const userList = async (req, res) => {
    try {
        const result = await User.find().select('_id')
        console.log("result", result)
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).send("Error fetching user list");
    }
}

module.exports = { singnup, login, userList }