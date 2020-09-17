const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
	user_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'user'
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	tripTitle: {
		type: String,
		required: true
	},
	fromDate: {
		type: Date,
		required: true
	},
	toDate: {
		type: Date,
		required: true
	},
	//Might be good to make it's own schema later on because we might be using it elsewhere too
	countries: {
		type: Array,
		required: true
	},
	baseCurrency: {
		type: String,
		required: true
	},
	additionalCurrencies: {
		type: String
	},
	budget: {
		type: Number
	}
});

const Trip = mongoose.model('trip', tripSchema);

module.exports = Trip;
