'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/notes.controller');

Router.get('/:id/:category/:subCategory', ctrl.getNotes);
Router.post('/:id/:category/:subCategory', ctrl.newNote);
// Router.put('/budget/currency/:id', ctrl.setCurrency);


module.exports = Router;
