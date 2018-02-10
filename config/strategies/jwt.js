const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const { config } = require('../index');
const { User } = require('../../models/user.model');

module.exports = new passportJWT.Strategy(
	{
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: config.auth.secret,
	},
	(jwtPayload, next) => {
		User.findOne({ _id: jwtPayload._id }, (err, user) => {
			if (err) return next(err);
			return next(null, user);
		});
	}
);

