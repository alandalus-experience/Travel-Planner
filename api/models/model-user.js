const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
    unique: true,
    default: false,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minlength: [6, 'Email must be at least 6 charcters long'],
  },
  emailVerified: {
    type: Boolean,
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
  providers: {
    isPassword: {
      type: Boolean,
      required: false,
      default: false
    },
    isGoogle: {
      type: Boolean,
      required: false,
      default: false
    },
    isFacebook: {
      type: Boolean,
      required: false,
      default: false
    }
  }
})

const User = mongoose.model('user', userSchema)

module.exports = User