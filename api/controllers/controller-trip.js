const Trip = require('../models/model-trip');
const User = require('../models/model-user');

exports.createTrip = async (req, res) => {
	const request = req.body;

	try {
		const query = {
			user_id: request.user_id,
			title: request.title,
			firstDay: request.firstDay,
			lastDay: request.lastDay,
			// TODO: Find the way to store countries in DB
			// countries:
			baseCurrency: request.baseCurrency,
			additionalCurrencies: request.additionalCurrencies,
			budget: request.budget,
			imageUrl: request.imageUrl
		};

		//TODO:
		// Add a way to let more users get assigned to the same trip

		let user = await User.findById(query.user_id);

		if (user) {
			const trip = new Trip(query);
			user.trip_id.push(trip.id);

			await user.save();
			await trip.save();

			return res.status(201).json({
				message: 'Trip created',
			});
		} else {
			return res.status(401).json({
				status: 401,
				message: 'User not found'
			});
		}

	} catch (error) {
		// TODO: Add proper error handling
		res.status(500).json({
			status: 500,
			message: 'Something went wrong'
		});
	}
};
