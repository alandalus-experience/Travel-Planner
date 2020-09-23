const mongoose = require('mongoose');

const ratesSchema = new mongoose.Schema({
  rates: Object,
  base: String,
  date: String,
});

const Rates = mongoose.model('rate', ratesSchema);

module.exports = Rates;
