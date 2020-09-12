const User = require('../models/model-user')

exports.registerUser = async (req, res) => {

  const request = req.body;
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
        return res.status(409).json({
          status: 409,
          message: 'The email address is already in use by another account',
        })
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Something went wrong',
    })
  }
}

exports.loginUser = async (req, res) => {

  const request = req.body;
  console.log(request)

  try {
    const query = {
      email: request.email,
    }

    const isExistingUser = await User.findOne({email: query.email})

    if (isExistingUser) {
      res.status(200).json({
        status: 200,
        message: 'You are logged in!!!'
      })
    }

  } catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Something went wrong',
    })
  }
}