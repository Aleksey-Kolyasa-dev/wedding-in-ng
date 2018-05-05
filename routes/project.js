'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/project.controller');

Router.post('/', ctrl.newProject);
Router.get('/', ctrl.getUserProjects);
Router.get('/:id', ctrl.getProject);
Router.put('/:id', ctrl.updateProject);
Router.delete('/:id', ctrl.removeProject);


module.exports = Router;
