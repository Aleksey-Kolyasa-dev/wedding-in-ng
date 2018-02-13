'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/auth.controller');

Router.post('/register', ctrl.register);
Router.post('/login', ctrl.login);

module.exports = Router;
