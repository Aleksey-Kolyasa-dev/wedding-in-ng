module.exports = function (message, status) {
	try {
		if (!message) new Error('Error message required!');

		const newError = new Error(message);
		newError.status = status || 404;

		return newError;
	} catch (err) {
		throw err;
	}
};
