const fetch = require('node-fetch');
const dotenv = require('dotenv');

global.fetch = fetch;

dotenv.config({ path: '../../config/config.env' });

const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;

const unsplash = new Unsplash({ accessKey: process.env.UNSPLASH_ACCESS_KEY, secret: process.env.UNSPLASH_SECRET_KEY });

exports.getRandomLocationPhoto = (location) => { 
  unsplash.photos
	.getRandomPhoto({ query: location, orientation: 'landscape', content_filter: 'low' })
	.then(toJson)
	.then((json) => {
    const URL = json.urls.small;
    console.log('The URL sent from unsplash: ', URL);
    return URL;
  });
};