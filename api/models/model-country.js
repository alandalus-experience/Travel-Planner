// Super basic schema to start with, still under development but we need to decide the fields that we will need
const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
	altSpellings: {
		type: Array,
	},
	capital: {
	type: String,
	},
	currency: {
		type: Array,
	},
	name: {
		common: String,
	},
	region: {
		type: String,
	},
	subregion: {
		type: String,
	}
});

const Country = mongoose.model('country', countrySchema);

module.exports = Country;