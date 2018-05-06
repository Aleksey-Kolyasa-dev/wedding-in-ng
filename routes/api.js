'use strict';
const Router = require('express').Router();
const { isAuthenticated } = require('../config/passports/passportJwt');
const auth = require('./auth');
const user = require('./user');
const project = require('./project');
const dashboard = require('./dashboard');

Router.use('/auth', auth);
Router.use('/user', isAuthenticated, user);
Router.use('/project', isAuthenticated, project);
Router.use('/dashboard', isAuthenticated, dashboard);


module.exports = Router;
