"use strict";

var IPFS = require('ipfs-http-client');

var ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

var crypto = require('../utils/cryptography');

var _require = require('../services/db'),
    Register = _require.Register,
    addData = _require.addData;

var _require2 = require('../services/rawTx'),
    tranferCoin = _require2.tranferCoin,
    tranferData = _require2.tranferData;

module.exports = function ipfsFunction(_ref) {
  var router = _ref.router,
      web3 = _ref.web3,
      Tx = _ref.Tx,
      contract_Police = _ref.contract_Police,
      dotenv = _ref.dotenv;
  router.post('/register', function _callee3(req, res) {
    var data, topics, _Account, _EncryptedPrivateKey, _EncryptedPassword, nonceTransfer, rawTx, privateKey, tx, serializedTx, dataPolice, bufferPolice, ipfsUri, police_temp, dataEncode, gas, ethBalance, nonce, _rawTx, decryptedPrivateKey, _privateKey, _tx, _serializedTx, decodedData;

    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            data = "";
            topics = [];
            _Account = web3.eth.accounts.create(); // Create account

            _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body._Password);
            _EncryptedPassword = crypto.encrypt(req.body._Password, "Admin");
            _context3.prev = 5;
            _context3.next = 8;
            return regeneratorRuntime.awrap(web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT));

          case 8:
            nonceTransfer = _context3.sent;
            // Round of address use transaction
            rawTx = tranferCoin(nonceTransfer, _Account.address);
            privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex'); // Decript privatekey

            tx = new Tx(rawTx);
            tx.sign(privateKey);
            serializedTx = tx.serialize();
            _context3.next = 16;
            return regeneratorRuntime.awrap(web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')));

          case 16:
            _context3.next = 21;
            break;

          case 18:
            _context3.prev = 18;
            _context3.t0 = _context3["catch"](5);
            console.log("Error", _context3.t0);

          case 21:
            _context3.prev = 21;
            _context3.next = 24;
            return regeneratorRuntime.awrap({
              Name: req.body._Name,
              Surname: req.body._Surname,
              Type: req.body._Type,
              Email: req.body._Email,
              Rank: req.body._Rank,
              imageUrl: req.body._imageUrl,
              Account: _Account.address.substring(2),
              Supervisor: false,
              Private: {
                PrivateKey: JSON.stringify(_EncryptedPrivateKey),
                Password: JSON.stringify(_EncryptedPassword)
              }
            });

          case 24:
            dataPolice = _context3.sent;
            _context3.next = 27;
            return regeneratorRuntime.awrap(Buffer.from(JSON.stringify(dataPolice)));

          case 27:
            bufferPolice = _context3.sent;
            _context3.next = 30;
            return regeneratorRuntime.awrap(ipfs.add(bufferPolice, {
              recusive: true
            }));

          case 30:
            ipfsUri = _context3.sent;
            dataPolice.ipfsUri = "https://ipfs.infura.io/ipfs/".concat(ipfsUri.path);
            _context3.next = 34;
            return regeneratorRuntime.awrap(contract_Police.methods.PoliceInfo(_Account.address, dataPolice.ipfsUri));

          case 34:
            police_temp = _context3.sent;
            _context3.next = 37;
            return regeneratorRuntime.awrap(police_temp.encodeABI());

          case 37:
            dataEncode = _context3.sent;
            _context3.next = 40;
            return regeneratorRuntime.awrap(police_temp.estimateGas({
              from: _Account.address
            }));

          case 40:
            gas = _context3.sent;
            _context3.next = 43;
            return regeneratorRuntime.awrap(web3.eth.getBalance(_Account.address));

          case 43:
            ethBalance = _context3.sent;

            if (!(ethBalance < gas)) {
              _context3.next = 46;
              break;
            }

            return _context3.abrupt("return", res.json({
              message: "Not enough eth coin"
            }));

          case 46:
            _context3.next = 48;
            return regeneratorRuntime.awrap(web3.eth.getTransactionCount(_Account.address));

          case 48:
            nonce = _context3.sent;
            _rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
            decryptedPrivateKey = crypto.decrypt(_EncryptedPrivateKey, req.body._Password).slice(2);
            _privateKey = Buffer.from(decryptedPrivateKey, 'hex');
            _tx = new Tx(_rawTx);

            _tx.sign(_privateKey);

            _serializedTx = _tx.serialize();
            _context3.next = 57;
            return regeneratorRuntime.awrap(web3.eth.sendSignedTransaction('0x' + _serializedTx.toString('hex')).on('receipt', function _callee(result) {
              var i;
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      // console.log(result.logs[0].data, [result.logs[0].topics[0], result.logs[0].topics[1]]);
                      data = result.logs[0].data;

                      for (i = 1; i < result.logs[0].topics.length + 1; i++) {
                        topics.push(result.logs[0].topics[i]);
                      }

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            }));

          case 57:
            _context3.next = 59;
            return regeneratorRuntime.awrap(web3.eth.abi.decodeLog([{
              "type": "address",
              "name": "_police",
              "indexed": true
            }, {
              "type": "string",
              "name": "_publicInfo",
              "indexed": false
            }], data, topics));

          case 59:
            decodedData = _context3.sent;
            _context3.next = 62;
            return regeneratorRuntime.awrap(Register('Police', dataPolice).then(function _callee2() {
              return regeneratorRuntime.async(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return regeneratorRuntime.awrap(addData('Decode', _Account.address.slice(2), {
                        Result: {
                          _police: decodedData._police,
                          _publicInfo: decodedData._publicInfo
                        }
                      }).then(function () {
                        return res.json({
                          message: 'Register sucess',
                          Result: dataPolice
                        });
                      }));

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              });
            }));

          case 62:
            _context3.next = 67;
            break;

          case 64:
            _context3.prev = 64;
            _context3.t1 = _context3["catch"](21);
            console.log("Error : ", _context3.t1);

          case 67:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[5, 18], [21, 64]]);
  });
};