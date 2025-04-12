const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String, required: true }, // Fix: changed "require" to "required"
  profilepic: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
