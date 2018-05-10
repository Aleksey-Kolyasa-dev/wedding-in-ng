'use strict';
const { Project } = require('../models/project.model');
const { Note } = require('../models/note.model');
const customError = require('../utils/errors');
const moment = require('moment');

exports.getNotes = async (req, res, next) => {
	const { id, category, subCategory } = req.params;
	try {
		await Project.findById(id)
			.populate('notesList')
			.then(
				(project) => {
					const filteredNotes = project.notesList.filter(
						(note) => note.category === category && note.subCategory === subCategory
					);
					res.json(filteredNotes);
				});
	} catch (err) {
		next(customError(`Notes not found! \ Заметок не найдено!`, 404));
	}
};

exports.newNote = async (req, res, next) => {
	const { category, subCategory, label, text } = req.body;

	if (!category || !text || !label) {
		return next(customError(`Invalid Data! \ Ошибка валидации`, 406));
	}

	try {
		const _project = await Project.findById(req.params['id']);

		const newNote = await new Note({
			category: category,
			subCategory: subCategory || category,
			label: label,
			text: text,
			created: moment.now(),
		});

		await newNote.save();

		_project.notesList.push(newNote._id);
		_project.save();

		res.sendStatus(200);
	} catch (err) {
		// TODO: check
		// next(customError(`Not found! \ Не найдено!`, 404));
		next(err);
	}
};
