'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/budget.controller');

Router.post('/currency', ctrl.setCurrency);
// Router.get('/', ctrl.getUserProjects);
// Router.get('/:id', ctrl.getProject);
// Router.put('/:id', ctrl.updateProject);
// Router.delete('/:id', ctrl.removeProject);


module.exports = Router;
