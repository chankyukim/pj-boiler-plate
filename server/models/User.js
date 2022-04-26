const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  roles: {
    User: {
      type: Number,
      default: 2001,
    },
    Editor: Number,
    Admin: Number,
  },
  image: String,
  refreshToken: String,
  refreshTokenExp: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
