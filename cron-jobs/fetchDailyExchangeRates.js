const cron = require('node-cron');
const fetch = require('node-fetch');

const Rates = require('../api/models/model-rates');

exports.fetchDailyExchangeRates = cron.schedule('0 1 * * *', async () => {
	try {
		const res = await fetch('https://api.exchangeratesapi.io/latest');
		const resJSON = await res.json();
		const rates = new Rates(resJSON);
		await rates.save();
		console.log('Rates have been saved!!!');
	} catch (error) {
		console.log(error);
	}
});
