'use strict';
const Router = require('express').Router();
const { isAuthenticated } = require('../config/passports/passportJwt');
const auth = require('./auth');
const user = require('./user');
const project = require('./project');
const budget = require('./budget');

Router.use('/auth', auth);
Router.use('/user', isAuthenticated, user);
Router.use('/project', isAuthenticated, project);
Router.use('/budget', isAuthenticated, budget);


module.exports = Router;
