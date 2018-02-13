const express = require('express');
const path = require('path');
const chalk = require('chalk');
const api = require('./routes/api');
const logger = require('morgan');
const fileUpload = require('express-fileupload');
const { config } = require('./config');
// const favicon = require('serve-favicon');

// Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(logger('dev'));

// View engine setup
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// Routes
app.use('/api', api);

// Static Folder
app.use(express.static(path.join(__dirname, config.statics)));
// app.use(favicon(path.join(__dirname, config.statics, 'favicon.ico')));

// Server
// app.set('port', config.ip, config.port);
app.listen(config.port, function () {
	console.log(`${chalk.green(`App is running at `)} http://${config.host}:${config.port} ${chalk.green('on')} ${chalk.magenta.bold(`${config.env.toUpperCase()}`)} ${chalk.green('mode.')}`);
});

// error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500);
res.send(err.message || 'Server Error');
});
