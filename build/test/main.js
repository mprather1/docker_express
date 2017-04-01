'use strict';

var _chai = require('chai');

var _chai2 = _interopRequireDefault(_chai);

var _chaiHttp = require('chai-http');

var _chaiHttp2 = _interopRequireDefault(_chaiHttp);

var _server = require('../server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_chai2.default.use(_chaiHttp2.default);

const expect = _chai2.default.expect;

describe('httpervert test', function () {
  it('should get data at /api/home - GET', function (done) {
    _chai2.default.request(_server2.default).get('/api/home').end(function (err, res) {
      console.log(err);
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      done();
    });
  });
});