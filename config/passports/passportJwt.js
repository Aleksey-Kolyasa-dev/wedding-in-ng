const passport = require('passport');
const moment = require('moment');
const jwt = require('jsonwebtoken');
const jwtStrategy = require('../strategies/jwt');
const { config } = require('../index');
const customError = require('../../utils/errors');

passport.use(jwtStrategy);

exports.signTokenFromUser = async (user) => {
	return await signToken({
		_id: user.id || user._id,
		// roles: user.roles,
	});
};
/**
 * Sign token
 * @param {object} data for payload
 * @return {String} token
 */
function signToken(data) {
	return jwt.sign(
		data,
		config.auth.secret,
		{
			expiresIn: config.auth.tokenExpiration,
		}
	);
}

exports.isAuthenticated = (req, res, next) => {
	if (typeof req.headers['authorization'] !== 'undefined') {
		const token = req.headers['authorization'].split(' ')[1];

		verifyToken(token).then(
			(userData) => {
				checkTokenExp(req, userData, next);
			},
			(error) => {
				return next(customError(`Unauthorized, access denied! \ Доступ запрещен!`, 401));
			});
	} else {
		return next(customError(`Unauthorized, access denied! \ Доступ запрещен!`, 401));
	}
};

/**
 * Verify token
 * @param {object} token
 * @return {Promise}
 */
function verifyToken(token) {
	return new Promise((resolve, reject) => {
		jwt.verify(token, config.auth.secret, (err, decodedData) => {
			if (err) {
				err.status = 401;
				reject(err);
			} else {
				resolve(decodedData);
			}
		});
	});
}

/**
 * Check for token expiration
 * @param {object} req
 * @param {object} user data
 * @param {function} next
 * @return {Error} if expired
 * @do next() if token is valid
 */
function checkTokenExp(req, user, next) {
	if (user.exp < moment.now()) {
		return next(customError(`Authorization expired! \ Срок авторизации истек!`, 403));
	} else {
		req.user = user;
		next();
	}
}

exports.initialize = () => {
	return passport.initialize();
};

