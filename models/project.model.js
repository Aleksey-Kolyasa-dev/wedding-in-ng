const mongoose = require('../config/mongoose');
const Schema = mongoose.Schema;
const { config } = require('../config');

const ProjectSchema = new Schema({
	fiance: {
		type: 'string',
	},
	fiancee: {
		type: 'string',
	},
});

exports.Project = mongoose.model(config.db.collections.project, ProjectSchema);
