const { verify } = require('../utils/helpers')
const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        console.log(token)
        if (!token) return res.status(401).send("Access deny token not found");
        const payload = await verify(token);
        console.log(payload)
        if (!payload) return res.status(401).send('Invalid auth Token');
        console.log(payload)
        req.user = payload
        next();

    } catch (error) {
        console.log("Error in middleware",)
    }
}

module.exports = { auth }