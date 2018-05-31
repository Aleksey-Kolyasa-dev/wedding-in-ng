'use strict';
const { Project } = require('../models/project.model');
const { Note } = require('../models/note.model');
const customError = require('../utils/errors');
const moment = require('moment');

exports.getNotes = async (req, res, next) => {
	const { projectId } = req.params;
	const { category, subCategory } = req.query;
	try {
		await Project.findById(projectId)
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
		const _project = await Project.findById(req.params['projectId']);

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

		res.json(newNote);
	} catch (err) {
		next(err);
	}
};

exports.removeNote = async (req, res, next) => {
	const { projectId, noteId } = req.params;

	try {
		await Note.remove({ _id: noteId });
		const _project = await Project.findById(projectId);
		const index = _project.notesList.indexOf(noteId);
		_project.notesList.splice(index, 1);
		_project.save();
		res.json(_project.notesList);
	} catch (err) {
		next(err);
	}
};
