const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const { config } = require('../config');

const ProjectSchema = new Schema({
	fiance: {
		type: String,
		required: true,
	},
	fiancee: {
		type: String,
		required: true,
	},
	budgetGenPlanUsd: {
		type: Number,
		required: true,
	},
	nationalMoney: {
		type: String,
		default: 'NNN',
	},
	currencyIndex: {
		type: Number,
		default: 1,
	},
	weddingDate: {
		type: Date,
		required: true,
	},
	email: {
		type: String,
	},
	telephone: {
		type: String,
	},
	notes: {
		type: String,
	},
	created: {
		type: Date,
	},
	notesList: [
		{
			type: Schema.Types.ObjectId,
			ref: 'note',
		},
	],
});

exports.Project = mongoose.model(config.db.collections.project, ProjectSchema);
