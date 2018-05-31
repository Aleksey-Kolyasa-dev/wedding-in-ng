'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/notes.controller');

Router.get('/:projectId', ctrl.getNotes);
Router.post('/:projectId', ctrl.newNote);
Router.delete('/:projectId/:noteId', ctrl.removeNote);


module.exports = Router;
