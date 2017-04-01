'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _winston = require('winston');

var _winston2 = _interopRequireDefault(_winston);

var _http = require('http');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const options = {
  app: (0, _express2.default)(),
  port: process.env.PORT || 8000,
  environment: process.env.NODE_ENV || 'development',
  logger: _winston2.default
};

const { app, environment, logger, port } = options;

app.use((0, _morgan2.default)('dev'));

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.use('/api', _routes2.default);

const server = (0, _http.Server)(app).listen(port, function () {
  logger.info('Environment:', environment);
  logger.info('Listening on port', port + '...');
});
server.timeout = 12000;

server.on('request', function (req, res) {
  logger.info("processing...");
});

exports.default = server;