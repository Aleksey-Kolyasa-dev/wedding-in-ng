'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/project.controller');

Router.post('/', ctrl.newProject);
Router.get('/', ctrl.getProjects);
Router.get('/:id', ctrl.getProject);

module.exports = Router;
