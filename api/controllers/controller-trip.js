const Trip = require('../models/model-trip');

exports.createTrip = async (req, res) => {
	const request = req.body;

	try {
		const query = {
			user_id: request.user_id,
			title: request.title,
			firstDay: request.firstDay,
			lastDay: request.lastDay,
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

		await trip.save();

		return res.status(201).json({
			message: 'Trip created',
		});
	} catch (error) {
		console.log(error);
	}
};
