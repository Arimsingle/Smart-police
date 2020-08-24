"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var router = express.Router();

var cors = require('cors');

var app = express();

var _require = require('../web3/web3'),
    web3 = _require.web3;

var _require2 = require('../web3/abi'),
    abi = _require2.abi;

var dotenv = require('dotenv').config({
  path: '../../.env'
});

var contract_Police = new web3.eth.Contract(abi, dotenv.parsed.CONTRACT_ADDRESS);

var Tx = require('ethereumjs-tx');

app.use(cors());
app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({
  extended: false
}), router);

require('../routes/register')({
  router: router,
  web3: web3,
  Tx: Tx,
  contract_Police: contract_Police,
  dotenv: dotenv
});

require('../routes/supervisor')({
  router: router,
  web3: web3,
  Tx: Tx,
  contract_Police: contract_Police,
  dotenv: dotenv
});

router.route('/something').post(function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.route('/history').post(function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {} catch (error) {
            console.log(error);
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.use("*", function (req, res) {
  return res.status(404).send('404 Not found');
});
app.listen(dotenv.parsed.PORT, function () {
  return console.log("Server is running ".concat(dotenv.parsed.PORT));
});