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

router.route('/policeinfo') //List data of a police
.get(function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            contract_Police.methods.getPoliceInfo(req.body._Police).call().then(function (result) {
              res.json({
                massage: "Call success",
                Data: result
              });
            });
          } catch (error) {
            res.json({
              massage: "Call faild",
              Error: error
            });
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.route('/historybandit') //List all history who's certifier record bandit ->station
.get(function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            contract_Police.methods.getHistoryBanditArray(req.body._Certifier, req.body._Bandit).call().then(function (result) {
              res.json({
                massage: "Call success",
                Data: result
              });
            });
          } catch (error) {
            res.json({
              massage: "Call faild",
              Error: error
            });
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
router.route('/certifierbandit') //List who's certifier bandit
.get(function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          try {
            contract_Police.methods.getCertifierBandit(req.body._Bandit).call().then(function (result) {
              res.json({
                massage: "Call success",
                Data: result
              });
            });
          } catch (error) {
            res.json({
              massage: "Call faild",
              Error: error
            });
          }

        case 1:
        case "end":
          return _context3.stop();
      }
    }
  });
});
router.route('/recorderBandit') //List who's record bandit
.get(function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          try {
            contract_Police.methods.getRecorderBandit(req.body._Recorder).call().then(function (result) {
              res.json({
                massage: "Call success",
                Data: result
              });
            });
          } catch (error) {
            res.json({
              massage: "Call faild",
              Error: error
            });
          }

        case 1:
        case "end":
          return _context4.stop();
      }
    }
  });
});
router.route('/claimer') //List who's claimer set by admin
.get(function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          try {
            contract_Police.methods.getClaim(req.body._Recorder).call().then(function (result) {
              res.json({
                massage: "Call success",
                Data: result
              });
            });
          } catch (error) {
            res.json({
              massage: "Call faild",
              Error: error
            });
          }

        case 1:
        case "end":
          return _context5.stop();
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