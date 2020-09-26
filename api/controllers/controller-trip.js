// Models
const Trip = require('../models/model-trip');
const User = require('../models/model-user');
const Country = require('../models/model-country');

// NPM
const fetch = require('node-fetch');
const dotenv = require('dotenv');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

// Configs
dotenv.config({ path: '../../config/config.env' });
global.fetch = fetch;
const unsplash = new Unsplash({
	accessKey: process.env.UNSPLASH_ACCESS_KEY,
	secret: process.env.UNSPLASH_SECRET_KEY
});

// @route POST /trip/create
// @desc Create trip and assign trip_id to user
// @access Private
exports.createTrip = async (req, res) => {
	const request = req.body;

	try {
		// Getting necessary info to use it in the query object
		const imageURL = await addPhotoURL(request.countries);
		const additionalCurrencies = await addAdditionalCurrencies(request.countries, request.baseCurrency);
		
		// Create query object to use for trip creation
		const query = {
			user_id: request.user_id,
			title: request.title,
			firstDay: request.firstDay,
			lastDay: request.lastDay,
			countries: request.countries,
			baseCurrency: request.baseCurrency,
			additionalCurrencies: additionalCurrencies,
			budget: request.budget,
			imageUrl: imageURL
		};
		// Get user based on user_id
		const user = await User.findById(query.user_id);

		if (user) {
			// Create new trip and add trip_id to user trip_id array
			const trip = new Trip(query);
			user.trip_id.push(trip.id);

			await user.save();
			await trip.save();

			// 201 Created
			return res.status(201).json({
				message: 'Trip created and assigned to user'
			});

		} else {
			// 401 Unauthorizes
			return res.status(401).json({
				status: 401,
				message: 'User with this ID was not found'
			});
		}
	} catch (error) {
		// 500 Internal server error
		res.status(500).json({
			status: 500,
			message: error.message
		});
	}
};

// @route POST /trip/gettrips
// @desc Get the trips based on the firebase uid of the user
// @access Private
exports.getTrips = async (req, res) => {
	const request = req.body;

	try {
		const query = {
			user_id: request.uid
		};
		// Get the user and populate the user.trip_id fields with actual data
		await User.findOne({ user_id: query.user_id }).populate('trip_id').exec(function(err, trips) {
			if (trips) {
				res.status(200).json(trips);
			} else {
				// 500 Internal server error
				res.status(500).json({
					status: 500,
					message: err.message
				});
			}
		});
	} catch (error) {
		// 500 Internal server error
		res.status(500).json({
			status: 500,
			message: error.message
		});
	}
};

// @route DELETE /trip/delete
// @desc Delete trip
// @access Private
exports.deleteTrip = async (req, res) => {
	const request = req.body;

	try {
		const query = {
			trip_id: request.trip_id
		};
		// Find the trip and delete it
		await Trip.findByIdAndDelete(query.trip_id, async (err) => {
			if (err) {
				// 500 Internal server error
				res.status(500).json({
					status: 500,
					message: 'Something went wrong'
				});
			} else {
				// If the trip was assigned to a user delete trip_id from the array
				await User.updateMany(
					{ trip_id: { $in: query.trip_id } },
					{ $pull: { trip_id: { $in: query.trip_id } } }
				);
				// 200 OK
				res.status(200).json({
					status: 200,
					message: 'Trip has been deleted'
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

// @route PATCH /trip/adduser
// @desc Add travelers to a trip
// @access Private
exports.addUserToTrip = async (req, res) => {
	const request = req.body;

	try {
		// Add necessary info into query object
		const query = {
			user_id: request.user_id,
			trip_id: request.trip_id
		};

		const user = await User.findById(query.user_id);
		const trip = await Trip.findById(query.trip_id);

		// If we found both run this
		if (user && trip) {

			let isUserAlreadyAssigned = false;
			
			// Check every user_id on a trip to see if the user is already assigned
			trip.user_id.map(user_id => {
				if(String(user_id) === String(user._id)) {
					return isUserAlreadyAssigned = true;
				}
			});

			if(!isUserAlreadyAssigned) {

				user.trip_id.push(query.trip_id);
				trip.user_id.push(query.user_id);

				await user.save();
				await trip.save();

				// 201 Created
				return res.status(201).json({
					status: 201,
					message: 'User successfully added to trip'
				});
			} else {
				// 409 Conflict
				return res.status(409).json({
					status: 409,
					message: 'User is already assigned to this trip'
				});
			}
		}
	} catch (error) {
		// 500 Internal server error
		res.status(500).json({
			status: 500,
			message: 'Something went wrong'
		});
	}
};

// @route PATCH /trip/removeuser
// @desc Remove traveler from a trip
// @access Private
exports.removeUserFromTrip = async (req, res) => {
	const request = req.body;

	try {
		// Add necessary info into query object
		const query = {
			user_id: request.user_id,
			trip_id: request.trip_id
		};

		// Get user and trip
		const trip = await Trip.findById(query.trip_id);
		const user = await User.findById(query.user_id);
		
		// Loop through trips to find the user_id and remove it
		trip.user_id.map(user_id => {
			if (String(user_id) === String(request.user_id)) {
				trip.user_id.splice(trip.user_id.indexOf(user_id), 1);
			}
		});

		// Loop through users to find the trip_id and remove it
		user.trip_id.map(trip_id => {;
			if (String(trip_id) === String(request.trip_id)) {
				user.trip_id.splice(user.trip_id.indexOf(trip_id), 1);
			}
		});

		await trip.save();
		await user.save();
		// 200 OK
		res.status(200).json({
			status: 200,
			message: 'User has been removed from the trip'
		});
	} catch (error) {
		// 500 Internal server error
		res.status(500).json({
			status: 500,
			message: 'Something went wrong',
			error: error
		});
	}
};

// Add additional currencies based on the countries
const addAdditionalCurrencies = async (countries, baseCurrency) => {
	// The array to be populated with currencies from the countries
	const currencies = [];

	try {
		// List the countries that has in the trip to get the currencies later on
		const countryList = await Country.find({ _id: { $in: countries } });

		for (let i = 0; countryList.length > i; i++) {
			countryList[i].currency.forEach((currency) => {
				// Checks if the currency is already in the array or it's the base currency
				if (currencies.includes(currency) || currency === baseCurrency) {
					return;
				}
				currencies.push(currency);
			});
		}
		return currencies;
	} catch (err) {
		console.error(err);
	}
};

// Gets a random image from unsplash to populate the trip imageURL field
const addPhotoURL = async (countries) => {
	try {
		// Get all the countries with given IDs
		const countryList = await Country.find({ _id: { $in: countries } });

		// Get random photo from unsplash with the first country name from the trip
		const URL = await unsplash.photos
			.getRandomPhoto({
				query: countryList[0].name.common,
				orientation: 'landscape',
				// Don't include nudity or violence
				content_filter: 'low'
			})
			.then(toJson)
			.then((json) => {
				// Pick the small size image
				const URL = json.urls.small;
				return URL;
			});
		return URL;
	} catch (error) {
		console.log(error);
	}
};
