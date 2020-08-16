const mongoose = require('mongoose');

const db = process.env.MONGODB_URI || 'mongodb://localhost/mdgym';

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		console.log('Database connected ...');
	} catch (error) {
		console.log(`Error ${error.message}`);
		process.exit(1);
	}
};

module.exports = connectDB;