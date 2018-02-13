'use strict';
const { User } = require('../models/user.model');
const customError = require('../utils/errors');

exports.register = async (req, res, next) => {
	const authData = { login, password } = req.body;
	// const test = { login: 'test1', password: 'test2' };
	try {
		const isExists = await User.findOne({ login });
		if (isExists) return next(customError(`Such login already exists, try another one`, 403));

		const _newUser = new User(authData);
		const newUser = await _newUser.save();
		res.json(newUser);
	} catch (err) {
		return next(err);
	}
};


exports.login = async (req, res, next) => {
	const { login, password } = req.body;
	// const login = 'tests1';
	// const password = 'test2';
	try {
		const _user = await User.findOne({ login });
		if (!_user) return next(customError(`User Not Found!`, 404));

		const isMatch = await _user.comparePassword(password);
		if (!isMatch) return next(customError(`Password doesn't match!`, 403));

		res.json('ok');
	} catch (err) {
		return next(err);
	}
};
