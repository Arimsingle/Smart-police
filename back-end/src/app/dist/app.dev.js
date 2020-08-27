"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var router = express.Router();

var cors = require('cors');

var app = express();

var dotenv = require('dotenv').config({
  path: '../../.env'
});

var contract_Police = new web3.eth.Contract(abi, dotenv.parsed.CONTRACT_ADDRESS);

var Tx = require('ethereumjs-tx');

var _require = require('../web3/web3'),
    web3 = _require.web3;

var _require2 = require('../web3/abi'),
    abi = _require2.abi; // use module


app.use(cors());
app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({
  extended: false
}), router); // import other component

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

require('../routes/record')({
  router: router,
  web3: web3,
  Tx: Tx,
  contract_Police: contract_Police,
  dotenv: dotenv
});

require('../routes/portfolio')({
  router: router,
  web3: web3,
  Tx: Tx,
  contract_Police: contract_Police,
  dotenv: dotenv
}); // List infomation of a police


router.route('/policeinfo').get(function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          contract_Police.methods.getPoliceInfo(req.body._Police).call().then(function (result) {
            return res.json({
              massage: "Call method success",
              Data: result
            });
          });
          _context.next = 7;
          break;

        case 4:
          _context.prev = 4;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.json({
            massage: "Call method faild",
            Error: _context.t0
          }));

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 4]]);
}); // List all history who's certifier record bandit -> like station maybe :D

router.route('/historybandit').get(function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          contract_Police.methods.getHistoryBanditArray(req.body._Certifier, req.body._Bandit).call().then(function (result) {
            return res.json({
              massage: "Call method success",
              Data: result
            });
          });
          _context2.next = 7;
          break;

        case 4:
          _context2.prev = 4;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.json({
            massage: "Call method faild",
            Error: _context2.t0
          }));

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 4]]);
}); // List who's certifier bandit (Certifier[])

router.route('/certifierbandit').get(function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          contract_Police.methods.getCertifierBandit(req.body._Bandit).call().then(function (result) {
            return res.json({
              massage: "Call method success",
              Data: result
            });
          });
          _context3.next = 7;
          break;

        case 4:
          _context3.prev = 4;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.json({
            massage: "Call method faild",
            Error: _context3.t0
          }));

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 4]]);
}); // List who's record bandit (address[])

router.route('/recorderBandit').get(function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          contract_Police.methods.getRecorderBandit(req.body._Recorder).call().then(function (result) {
            return res.json({
              massage: "Call method success",
              recorder: result
            });
          });
          _context4.next = 7;
          break;

        case 4:
          _context4.prev = 4;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.json({
            massage: "Call method faild",
            Error: _context4.t0
          }));

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 4]]);
}); // List status of supervisor (boolean)

router.route('/claimer').get(function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          contract_Police.methods.getClaim(req.body._Supervisor).call().then(function (result) {
            return res.json({
              massage: "Call method success",
              supervisor: result
            });
          });
          _context5.next = 7;
          break;

        case 4:
          _context5.prev = 4;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.json({
            massage: "Call method faild",
            Error: _context5.t0
          }));

        case 7:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 4]]);
}); // List balance

router.route('/balance').get(function _callee6(req, res) {
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(web3.eth.getBalance(req.body._police).then(function (result) {
            return res.json({
              massage: "Call method success",
              balance: result
            });
          }));

        case 3:
          _context6.next = 8;
          break;

        case 5:
          _context6.prev = 5;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.json({
            massage: "Call method faild",
            Error: _context6.t0
          }));

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 5]]);
});
app.use("*", function (req, res) {
  return res.status(404).send(res);
});
app.listen(dotenv.parsed.PORT, function () {
  return console.log("Server is running ".concat(dotenv.parsed.PORT));
});