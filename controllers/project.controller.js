'use strict';
const moment = require('moment');
const { Project } = require('../models/project.model');
const { User } = require('../models/user.model');
const { Note } = require('../models/note.model');
const customError = require('../utils/errors');

exports.newProject = async (req, res, next) => {
	const { fiance, fiancee, budgetGenPlanUsd, weddingDate, email, telephone, notes } = req.body;

	if (!fiance || !fiancee || !budgetGenPlanUsd || !weddingDate) {
		return next(customError(`Invalid Data! \ Ошибка валидации`, 406));
	}

	try {
		const _project = new Project({
			fiance,
			fiancee,
			budgetGenPlanUsd,
			weddingDate,
			email: email || '---',
			telephone: telephone || '---',
			notes: notes || '---',
			created: moment.now(),
		});
		const newProject = await _project.save();

		// Add project to User
		const _user = await User.findById(req.user._id);
		_user.projects.push(newProject._id);
		await _user.save();

		res.json(newProject);
	} catch (err) {
		next(customError(`Create New Project Failed! \ Не удалось создать проект!`, 406));
	}
};

exports.getUserProjects = async (req, res, next) => {
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

exports.updateProject = async (req, res, next) => {
	const { id } = req.params;
	const { fiance, fiancee, budgetGenPlanUsd, weddingDate } = req.body;

	if (!fiance || !fiancee || !budgetGenPlanUsd || !weddingDate) {
		return next(customError(`Invalid Data! \ Ошибка валидации`, 406));
	}

	try {
		const _project = await Project.findByIdAndUpdate(id, req.body, { new: true });
		res.json(_project);
	} catch (err) {
		return next(err);
	}
};

exports.removeProject = async (req, res, next) => {
	const { id } = req.params;
	try {
		// Remove Project from User Projects List
		const _user = await User.findById(req.user._id);
		_user.projects.splice(_user.projects.indexOf(id), 1);
		await _user.save();

		// Remove All Linked Notes
		const _project = await Project.findById(id);
		await Note.remove({ _id: { $in: _project.notesList } });

		// Remove Project
		await Project.remove({ _id: id });

		res.json('ok');
	} catch (err) {
		return next(err);
	}
};
