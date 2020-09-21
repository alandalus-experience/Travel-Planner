const fetch = require('node-fetch');
const dotenv = require('dotenv');

global.fetch = fetch;

dotenv.config({ path: '../../config/config.env' });

const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY, secret: process.env.UNSPLASH_SECRET_KEY });

const getRandomLocationPhoto = (location) => { 
  unsplash.photos
	.getRandomPhoto({ query: location, orientation: 'landscape', content_filter: 'low' })
	.then(toJson)
	.then((json) => {
		console.log(json);
  });
};

getRandomLocationPhoto('italy');