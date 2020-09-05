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
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: [8, 'Password must be at least 8 charcters long'],
    maxlength: [100, 'Password cannot exceed 100 characters'],
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
  // For later use, when user requests password recovery this will be the token to match
  resetPasswordToken: {
    type: String,
    default: 'a',
  },
  // For later use, limit time to use password recovery
  resetPasswordExpires: {
    type: Date,
    default: Date.now(),
  },
})

const User = mongoose.model('user', userSchema)

module.exports = User