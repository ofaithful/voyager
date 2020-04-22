const mongoose = require('mongoose')

// User Schema
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: false
  },
  bio: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    require: false
  },
  email: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: true
  }
})

const User = module.exports = mongoose.model('User', UserSchema)