'use strict';
// const moment = require('moment');
// const passportJwt = require('../config/passports/passportJwt');
const { User } = require('../models/user.model');
const customError = require('../utils/errors');

exports.getUser = async (req, res, next) => {
	const { id } = req.params;

	User.findOne({ _id: id })
		.select('-password')
		.then((user) => res.json(user))
		.catch((err) => next(customError(`User not found! \ Полььзователь не найден!`, 404)));
};

exports.getCurrentUser = async (req, res, next) => {
	const { _id } = req.user;

	User.findOne({ _id })
		.select('-password')
		.then((user) => res.json(user))
		.catch((err) => next(customError(`User not found! \ Полььзователь не найден!`, 404)));
};


