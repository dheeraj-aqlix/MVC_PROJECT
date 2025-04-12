const bycrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const bycryptHash = (password) => {
    return bycrypt.hashSync(password, 10)
}

const bycryptCompare = (password, hash) => {
    return bycrypt.compareSync(password, hash);
}

const jwtSign = async (payload) => {
    return await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })
}

const verify = async (token) => {
    console.log("token in helper", token)
    return  await jwt.verify(token, process.env.JWT_SECRET);
}

module.exports = { bycryptHash, bycryptCompare, jwtSign, verify }