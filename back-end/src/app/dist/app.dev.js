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
  web3: web3
});

router.route('/supervisor').post(function _callee(req, res) {
  var police_temp, dataEncode, gas, ethBalance, nonce, rawTx, privateKey, tx, serializedTx;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(contract_Police.methods.setSupervisor(req.body._supervisor));

        case 3:
          police_temp = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(police_temp.encodeABI());

        case 6:
          dataEncode = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(police_temp.estimateGas({
            from: dotenv.parsed.ACCOUNT
          }));

        case 9:
          gas = _context.sent;
          _context.next = 12;
          return regeneratorRuntime.awrap(web3.eth.getBalance(dotenv.parsed.ACCOUNT));

        case 12:
          ethBalance = _context.sent;

          if (!(ethBalance < gas)) {
            _context.next = 15;
            break;
          }

          return _context.abrupt("return", res.json({
            message: "Not enough eth coin"
          }));

        case 15:
          _context.next = 17;
          return regeneratorRuntime.awrap(web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT));

        case 17:
          nonce = _context.sent;
          rawTx = {
            chainId: web3.utils.numberToHex(1515),
            nonce: web3.utils.numberToHex(nonce),
            //web3.utils.toHex
            gasPrice: web3.utils.numberToHex(gas),
            gasLimit: '0x2DC6C0',
            to: dotenv.parsed.CONTRACT_ADDRESS,
            value: web3.utils.numberToHex(0),
            data: dataEncode
          };
          privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex');
          tx = new Tx(rawTx);
          tx.sign(privateKey);
          serializedTx = tx.serialize();
          _context.next = 25;
          return regeneratorRuntime.awrap(web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', console.log));

        case 25:
          return _context.abrupt("return", res.json({
            status: 200,
            message: 'set supervisor success',
            from: dotenv.parsed.ACCOUNT.toString(),
            to: req.body._supervisor.toString()
          }));

        case 28:
          _context.prev = 28;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 31:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 28]]);
});
router.route('/history').post(function _callee2(req, res) {
  var police_temp;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(contract_Police.methods.setHistoryBandit());

        case 3:
          police_temp = _context2.sent;
          _context2.next = 9;
          break;

        case 6:
          _context2.prev = 6;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 9:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
app.use("*", function (req, res) {
  return res.status(404).send('404 Not found');
});
app.listen(dotenv.parsed.PORT, function () {
  return console.log("Server is running ".concat(dotenv.parsed.PORT));
});