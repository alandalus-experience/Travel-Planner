const Trip = require('../models/model-trip');
// Models
const User = require('../models/model-user');

// @route POST /user/register
// @desc Register user
// @access Private
exports.registerUser = async (req, res) => {
	const request = req.body;
	console.log(request);
	try {
		const query = {
			user_id: request.uid,
			email: request.email,
			emailVerified: request.emailVerified,
			createdAt: request.createdAt,
			lastLogin: request['lastLoginAt'],
			providers: addProvider(request['providerData'][0]['providerId'])
		};

		let isExistingUser = await User.findOne({ email: query.email });
		
		// Check if user exists in the DB
		if (!isExistingUser) {
			const user = new User(query);

			await user.save();

			// 201 Created
			return res.status(201).json({
				status: 201,
				message: 'User has been created'
			});
		} else {
			// 409 Conflict
			return res.status(409).json({
				status: 409,
				message: 'The email address is already in use by another account'
			});
		}
	} catch (error) {
		// 500 Internal server error
		res.status(500).json({
			status: 500,
			message: 'Something went wrong'
		});
	}
};

// @route POST /user/login
// @desc Login user
// @access Private
exports.loginUser = async (req, res) => {
	const request = req.body;

	try {
		const query = {
			email: request.email,
			emailVerified: request.emailVerified
		};

		const isExistingUser = await User.findOne({ email: query.email });

		if (isExistingUser) {
			// Updates the DB when email gets verified.
			if (isExistingUser.emailVerified !== query.emailVerified) {
				await User.findOneAndUpdate(
					{ email: query.email },
					{ emailVerified: query.emailVerified },
					{ new: true }
				);
				console.log('Email is verified now!');
			}
			// 200 OK
			res.status(200).json({
				status: 200,
				message: 'You are logged in!!!'
			});
		}
	} catch (error) {
		// 500 Internal server error
		res.status(500).json({
			status: 500,
			message: 'Something went wrong'
		});
	}
};

// @route DELETE /user/delete
// @desc Delete user
// @access Private
exports.deleteUser = async (req, res) => {
	const request = req.body;

	try {
		const query = {
			user_id: request.uid
		};

		// Find the user with the specified ID
		await User.findByIdAndDelete(query.user_id, async (err) => {
			if (err) {
				// 500 Internal server error
				res.status(500).json({
					status: 500,
					message: 'Something went wrong'
				});
			} else {
				// If the user was assigned to a trip delete user_id from the array
				await Trip.updateMany(
					{ user_id: { $in: query.user_id } },
					{ $pull: { user_id: { $in: query.user_id } } }
				);
				// 200 OK
				res.status(200).json({
					status: 200,
					message: 'User has been deleted'
				});
			}
		});
	} catch (error) {
		// 500 Internal server error
		res.status(500).json({
			status: 500,
			message: 'Something went wrong'
		});
	}
};

// Change login provider to true based on the request
const addProvider = (provider) => {
	let providers = {};
	providers[provider.split('.')[0]] = true;
	return providers;
};
