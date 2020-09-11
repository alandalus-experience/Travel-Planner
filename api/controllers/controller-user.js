const User = require('../models/model-user')
const jwt = require('jsonwebtoken')


exports.registerUser = async (req, res) => {

  const request = req.body.res.user;
  // console.log(request)

  try {
    const query = {
      user_id: request.uid,
      email: request.email,
      emailVerified : request.emailVerified,
      createdAt: request.createdAt,
      lastLogin: request.lastLoginAt,
    }

    const isExistingUser = await User.findOne({email: query.email})

    // Check if user exists in the DB
    if (!isExistingUser) {
      const user = new User(query)

      await user.save()

      return res.status(201).json({
        status: 201,
        data: {
          //FIXME: TO BE REMOVED AFTER TESTING!!!!
          user: user,
        }
      })
    } else {
        return res.status(500).json({
          status: 500,
          message: 'User already exsists',
        })
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Something went wrong',
    })
  }
}