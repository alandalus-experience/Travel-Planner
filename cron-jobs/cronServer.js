const express = require('express');
const dotenv = require('dotenv');
const http = require('http');

const connectDB = require('../config/db');
const fetchDailyExchangeRates = require('./fetchDailyExchangeRates');

dotenv.config({ path: '../config/config.env' });

const httpPort = 3281;

const app = express();
const httpServer = http.createServer(app);

connectDB();

app.use(express.json());
///////////////
// CRON JOBS //
///////////////

// Get daily exchange rates from the API at 01:00
fetchDailyExchangeRates;

httpServer.listen(httpPort, () => {
	console.log(`Cron server is alive on port: ${httpPort} runnign as: ${process.env.NODE_ENVIROMENT}`);
});