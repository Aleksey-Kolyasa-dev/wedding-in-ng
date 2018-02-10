'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/auth.controller');
const { isAuthenticated } = require('../config/passports/passportJwt');

Router.post('/register', ctrl.register);
Router.post('/login', ctrl.login);
Router.put('/logout/:id', isAuthenticated, ctrl.logout);

Router.put('/test', isAuthenticated, (req, res, next) => {
	console.log('TEST --OK', req.user);
	res.sendStatus(200);
});

module.exports = Router;
