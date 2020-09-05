const express = require('express')

const { createUser } = require('../../api/controllers/controller-user')

const router = express.Router()

router
  .route('/register')
  .post(createUser)

module.exports = router