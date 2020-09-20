const mongoose = require('mongoose');

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.TEST_MONGO_URI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true
		});

		console.log(`MongoDB connected ${conn.connection.host}`);
	} catch (error) {
		console.error(error);
		// eslint-disable-next-line no-process-exit
		process.exit(1);
	}
};

module.exports = connectDB;
