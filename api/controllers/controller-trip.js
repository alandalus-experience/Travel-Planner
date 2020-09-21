const mongoose = require('mongoose');

const Trip = require('../models/model-trip');
const User = require('../models/model-user');
const Country = require('../models/model-country');

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
		additionalCurrencies: await addAdditionalCurrencies(request.countries, request.baseCurrency),
		budget: request.budget,
		//TODO: work on the Unsplash image API to get the images based on the country
		imageUrl: request.imageUrl
	};



/*		const additionalCurrencies = await addAdditionalCurrencies(query.countries);
		console.log('currencies after the function call: ', additionalCurrencies);*/

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

exports.addUserToTrip = async (req, res) => {
	const request = req.body;
	const query = {
		user_id: request.user_id,
		trip_id: request.trip_id
	};
	try {
		let user = await User.findById(query.user_id);
		let trip = await Trip.findById(query.trip_id);

		if(user && trip) {
			user.trip_id.push(query.trip_id);
			trip.user_id.push(query.user_id);

			await user.save();
			await trip.save();
		}
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: 'Something went wrong'
		});
	}
};

const addAdditionalCurrencies = async (countries, baseCurrency) => {
	// The array to be populated with currencies from the countries
	const currencies = [];

	try {
		//List the countries that has in the trip to get the currencies later on
		const countryList = await Country.find({ _id: { $in: countries } });

		for (let i = 0; countryList.length > i; i++) {

			countryList[i].currency.forEach((currency) => {
				//Checks if the currency is already in the array or it's the base currency
				if(currencies.includes(currency) || currency === baseCurrency) {
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