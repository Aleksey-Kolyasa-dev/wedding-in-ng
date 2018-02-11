const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const bCrypt = require('bcrypt');
const { config } = require('../config');

const UserSchema = new Schema({
	login: {
		type: 'string',
		required: true,
		unique: true,
	},
	password: {
		type: 'string',
		required: true,
	},
	email: {
		type: 'string',
		required: true,
	},
	name: {
		type: 'string',
	},
	registred: {
		type: 'Date',
	},
});

UserSchema.methods.comparePassword = function(password) {
	return new Promise((resolve, reject) => {
		bCrypt.compare(password, this.password, (err, isMatch) => {
			if (err) {
				reject(err);
			} else {
				resolve(isMatch);
			}
		});
	});
};

UserSchema.pre('save', function(next) {
	// only hash the password if it has been modified (or is new)
	if (!this.isModified('password')) return next();

	// generate a salt
	bCrypt.genSalt(10, (err, salt) => {
		// salt_work_factor
		if (err) return next(err);

		// hash the password using our new salt
		bCrypt.hash(this.password, salt, (err, hash) => {
			if (err) return next(err);

			// override the cleartext password with the hashed one
			this.password = hash;
			next();
		});
	});
});

exports.User = mongoose.model(config.db.collections.user, UserSchema);
