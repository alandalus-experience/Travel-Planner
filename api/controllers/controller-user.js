const User = require('../models/model-user')

exports.createUser = async (req, res) => {

  //TODO: Implement better error handling

  // Save req.body into request variable so less typing
  const request = req.body

  try {
    //Store request in query variable
    const query = {
      email: request.email.toLowerCase(),
      password: request.password
    }

    // Password check
    if (query.password.length < 8 || query.password.length > 100) {
      return res.status(500).json({
        status: 500,
        message: 'The password should be above 8 and below 100 characters',
      })
    }

    // Check if passwords match
    if (query.password !== request.password2) {
      return res.status(500).json({
        status: 500,
        message: 'The passwords don\'t match',
      })
    }
    
    // Save user
    const isExistingUser = await User.findOne({email: query.email})

    // Check if user exists in the DB
    if (!isExistingUser) {
      const user = new User(query)

      await user.save()

      return res.status(201).json({
        status: 201,
        data: {
          user: user,
        }
      })
    } else {
      return res.status(500).json({
        status: 500,
        message: 'User already exsists',
      })
    }
  }
  // Catch all error handler
  catch (error) {
    res.status(500).json({
      status: 500,
      message: 'Something went wrong',
    })
  }
}