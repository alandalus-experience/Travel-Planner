const express = require('express')

const { registerUser } = require('../../api/controllers/controller-user')

const router = express.Router()

router
  .route('/register')
  .post(registerUser)

module.exports = router