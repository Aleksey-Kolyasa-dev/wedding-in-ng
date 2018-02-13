const mongoose = require('mongoose');
const chalk = require('chalk');
const { config } = require('./index');

mongoose.connect(config._db);

mongoose.connection.on('connected', function() {
	console.log(chalk.blue.bold(`MongoDB connected to ${config._db}`));
});

mongoose.connection.on('error', function() {
    console.error(chalk.red.bold(`ERROR: Failed to connect to MongoDB!`));
});

mongoose.Promise = global.Promise;

module.exports = mongoose;
