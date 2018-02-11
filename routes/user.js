'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/user.controller');

Router.get('/current', ctrl.getCurrentUser);
Router.get('/:id', ctrl.getUser);

module.exports = Router;
