const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mongopractice', {
});

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String
});

module.exports = mongoose.model('User', userSchema); // Naming convention for models typically use uppercase for the first letter
