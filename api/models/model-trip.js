const mongoose = require('mongoose');
const Country = require('./model-country');

const tripSchema = new mongoose.Schema({
	user_id: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	}],
	createdAt: {
		type: Date,
		default: Date.now()
	},
	title: {
		type: String,
		required: true
	},
	firstDay: {
		type: Date,
		required: true
	},
	lastDay: {
		type: Date,
		required: true
	},
	countries: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: Country,
		}],
	baseCurrency: {
		type: String,
		required: true
	},
	additionalCurrencies: {
		type: Array
	},
	budget: {
		type: Number
	},
	imageUrl: {
		type: String,
	}
});

const Trip = mongoose.model('trip', tripSchema);

module.exports = Trip;
