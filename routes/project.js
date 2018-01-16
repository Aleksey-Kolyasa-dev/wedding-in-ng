'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/project.controller');

Router.post('/', ctrl.newProject);
Router.get('/', ctrl.getAllProjects);
Router.get('/:id', ctrl.getSingleProject);
Router.delete('/:id', ctrl.removeSingleProject);

module.exports = Router;
