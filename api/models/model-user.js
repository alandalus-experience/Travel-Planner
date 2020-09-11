const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
  // For later use, if user request a deletion but if there is a recovery period
  isDeleted: {
    type: Boolean,
    required: true,
    unique: false,
    trim: false,
    default: false,
  },
  // For later use, if by any chance we will make it a subscription model and they suspend their account
  isSuspended: {
    type: Boolean,
    required: true,
    default: false
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: [6, 'Email must be at least 6 charcters long'],
  },
  // Timestamp
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false,
  },
  // For later use, if we go with token route
  lastLogin: {
    type: String,
  },
})

const User = mongoose.model('user', userSchema)

module.exports = User