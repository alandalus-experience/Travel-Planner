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
		// Check if the user_id corresponds to an existing user
		// Add two-way binding to between the trip and the user
		// Add a way to let more users get assigned to the same trip
		const trip = new Trip(query);

		let user = await User.findById(query.user_id);
		user.trip_id.push(trip.id);

		await user.save();
		await trip.save();
		// await user.save();

		return res.status(201).json({
			message: 'Trip created',
		});
	} catch (error) {
		// TODO: Add proper error handling
		res.status(500).json({
			status: 500,
			message: 'Something went wrong'
		});
	}
};
