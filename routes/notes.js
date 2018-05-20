'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/notes.controller');

Router.get('/:projectId/:category/:subCategory', ctrl.getNotes);
Router.post('/:projectId', ctrl.newNote);
Router.delete('/:projectId/:noteId', ctrl.removeNote);
// Router.put('/budget/currency/:id', ctrl.setCurrency);


module.exports = Router;
