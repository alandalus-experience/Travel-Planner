const express = require('express')

const users = require('./user/router-user')

const router = express.Router()

//Everything related to users will be handled by this route
router.use('/users', users)

//Landing page
//FIXME: Has to be changed
router.get('/', (req, res, next) => {
    res.status(200).json({
      status: 200,
      message: 'hello from the index page'
    })
  }
)

// Catch all 404 response
router.all('*', (req, res) => {
  res.status(404).json({
    status: 404,
    message: 'The page you are trying to visit does not exist'
  })
})

module.exports = router