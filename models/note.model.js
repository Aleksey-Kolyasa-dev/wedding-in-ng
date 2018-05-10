const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const { config } = require('../config');

const NoteSchema = new Schema({
	category: {
		type: String,
		required: true,
	},
	subCategory: {
		type: String,
		required: true,
	},
	label: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	created: {
		type: Date,
	},
});

exports.Note = mongoose.model(config.db.collections.note, NoteSchema);
