'use strict';
const Router = require('express').Router();
const { isAuthenticated } = require('../config/passports/passportJwt');
const auth = require('./auth');
const user = require('./user');

Router.use('/auth', auth);
Router.use('/user', isAuthenticated, user);


module.exports = Router;
