const cron = require('node-cron');

const Trip = require('../api/models/model-trip');

exports.cleanupEmptyTrips = cron.schedule('10 1 * * *', async () => {
	try {
    await Trip.deleteMany({ user_id: { $exists: true, $size: 0 } });
    
    const date = new Date();
    const formattedDate = date.toLocaleTimeString();

    console.log(`${formattedDate} - Trips with no user_ids were deleted!!!`);
	} catch (error) {
		console.log(error);
	}
});
