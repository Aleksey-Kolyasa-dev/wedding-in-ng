'use strict';
const { Project } = require('../models/project.model');
const customError = require('../utils/errors');
// const moment = require('moment');
// const { User } = require('../models/user.model');

exports.getCurrency = async (req, res, next) => {
	const { id } = req.params;
	try {
		const _project = await Project.findById(id);
		const response = {
			nationalMoney: _project.nationalMoney,
			currencyIndex: _project.currencyIndex,
		};
		res.json(response);
	} catch (err) {
		next(customError(`Not found! \ Не найдено!`, 404));
	}
};

exports.setCurrency = async (req, res, next) => {
	const { nationalMoney, currencyIndex } = req.body;

	if (!nationalMoney || isNaN(currencyIndex)) {
		return next(customError(`Invalid Data! \ Ошибка валидации`, 406));
	}

	try {
		const _project = await Project.findById(req.params['id']);

		_project.nationalMoney = nationalMoney;
		_project.currencyIndex = currencyIndex;

		await _project.save();

		res.sendStatus(200);
	} catch (err) {
		next(customError(`Not found! \ Не найдено!`, 404));
	}
};
