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
			countries: request.countries,
			baseCurrency: request.baseCurrency,
			//TODO: Based on the countries selected populate the additional currencies to the array
			additionalCurrencies: request.additionalCurrencies,
			budget: request.budget,
			//TODO: work on the Unsplash image API to get the images based on the country
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
