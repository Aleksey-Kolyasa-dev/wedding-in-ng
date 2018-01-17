'use strict';
const moment = require('moment');
const { Project } = require('../models/project.model');
const { User } = require('../models/user.model');
const customError = require('../utils/errors');

exports.newProject = async (req, res, next) => {
	const { fiance, fiancee, budgetGenPlanUsd, weddingDate, email, telephone, notes } = req.body;
	try {
		const _project = new Project({
			fiance,
			fiancee,
			budgetGenPlanUsd,
			weddingDate,
			email: email || 'empty',
			telephone: telephone || 'empty',
			notes: notes || 'empty',
			created: moment.now(),
		});
		const newProject = await _project.save();

		// Add project to User
		const _user = await User.findById(req.user._id);
		_user.projects.push(newProject._id);
		await _user.save();

		res.json(newProject);
	} catch (err) {
		next(customError(`Create New Project Failed! \ Не удалось создать проект!`, 404));
	}
};

exports.getProjects = async (req, res, next) => {
	const { _id } = req.user;
	try {
		const _user = await User.findById(_id).populate('projects');
		res.json(_user.projects);
	} catch (err) {
		return next(customError(`Projects not found! \ Проекты не найдены!`, 404));
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
