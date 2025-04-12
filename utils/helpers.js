const bycrypt = require('bcryptjs');

const bycryptHash = (password) => {
    return bycrypt.hashSync(password, 10)
}

const bycryptCompare = (password, hash) => {
    return bycrypt.compareSync(password, hash);
}

module.exports = { bycryptHash, bycryptCompare}