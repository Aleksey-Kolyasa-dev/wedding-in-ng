'use strict';
const Router = require('express').Router();
const ctrl = require('../controllers/dashboard.controller');

Router.get('/budget/currency/:id', ctrl.getCurrency);
Router.put('/budget/currency/:id', ctrl.setCurrency);


module.exports = Router;
