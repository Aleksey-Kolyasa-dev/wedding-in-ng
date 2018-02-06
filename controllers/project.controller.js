'use strict';
const moment = require('moment');
const { Project } = require('../models/project.model');
const customError = require('../utils/errors');

exports.newProject = async (req, res, next) => {
	const { fiance, fiancee } = req.body;
	try {
		const _project = new Project({
			fiance,
			fiancee,
			created: moment.now(),
		});

		const newProject = await _project.save();

		res.json(newProject);
	} catch (err) {
		next(customError(`User not found! \ Пользователь не найден!`, 404));
	}
};


exports.getProject = async (req, res, next) => {
	const { id } = req.params;
	try {
		const _project = await Project.findOne({ _id: id });
		res.json(_project);
	} catch (err) {
		return next(customError(`Project not found! \ Проект не найден!`, 404));
	}
};
