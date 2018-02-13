'use strict';
const Router = require('express').Router();
const auth = require('./auth');

Router.use('/auth', auth);


module.exports = Router;
