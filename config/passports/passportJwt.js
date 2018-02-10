const passport = require('passport');
const jwt = require('jsonwebtoken');
const jwtStrategy = require('../strategies/jwt');
const { config } = require('../index');
const customError = require('../../utils/errors');

passport.use(jwtStrategy);

exports.signTokenFromUser = async (user) => {
	return await this.signToken({
		_id: user.id || user._id,
		// roles: user.roles,
	});
};

exports.signToken = (data) => {
	return jwt.sign(data, config.auth.secret, {
		expiresIn: config.auth.tokenExpiration,
	});
};

exports.verifyToken = (token) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, config.auth.secret, (err, decodedData) => {
			if (err) {
				err.status = 403;
				reject(err);
			} else {
				resolve(decodedData);
			}
		});
	});
};

exports.isAuthenticated = (req, res, next) => {
	if (typeof req.headers['authorization'] !== 'undefined') {
		const token = req.headers['authorization'].split(' ')[1];

		this.verifyToken(token).then(
			(userData) => {
				req.user = userData;
				next();
			},
			(error) => {
				return next(customError(`Unauthorized, access denied! \ Доступ запрещен!`, 403));
			});
	} else {
		return next(customError(`Unauthorized, access denied! \ Доступ запрещен!`, 403));
	}
};

// exports.authenticate = (type, options = {}) => {
// 	const authOptions = {
// 		failureRedirect: '/error/callback',
// 		session: false,
// 	};
// 	return passport.authenticate(type, Object.assign({}, authOptions, options));
// };

exports.initialize = () => {
	return passport.initialize();
};

