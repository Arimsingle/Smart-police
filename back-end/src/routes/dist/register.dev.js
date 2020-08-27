"use strict";

var IPFS = require('ipfs-http-client');

var ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

var crypto = require('../utils/cryptography');

var _require = require('../services/db'),
    Register = _require.Register;

var _require2 = require('../services/rawTx'),
    tranferCoin = _require2.tranferCoin,
    tranferData = _require2.tranferData;

var ethABI = require('web3-eth-abi');

module.exports = function ipfsFunction(_ref) {
  var router = _ref.router,
      web3 = _ref.web3,
      Tx = _ref.Tx,
      contract_Police = _ref.contract_Police,
      dotenv = _ref.dotenv;
  router.post('/register', function _callee2(req, res) {
    var data, topics, _Account, _EncryptedPrivateKey, _EncryptedPassword, nonceTransfer, rawTx, privateKey, tx, serializedTx, dataPolice, bufferPolice, ipfsUri, police_temp, dataEncode, gas, ethBalance, nonce, _rawTx, decryptedPrivateKey, _privateKey, _tx, _serializedTx, decodedData;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            data = "";
            topics = [];
            _Account = web3.eth.accounts.create(); // Create account

            _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body._Password);
            _EncryptedPassword = crypto.encrypt(req.body._Password, "Admin");
            _context2.prev = 5;
            _context2.next = 8;
            return regeneratorRuntime.awrap(web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT));

          case 8:
            nonceTransfer = _context2.sent;
            // Round of address use transaction
            rawTx = tranferCoin(nonceTransfer, _Account.address);
            privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex'); // Decript privatekey

            tx = new Tx(rawTx);
            tx.sign(privateKey);
            serializedTx = tx.serialize();
            _context2.next = 16;
            return regeneratorRuntime.awrap(web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')));

          case 16:
            _context2.next = 21;
            break;

          case 18:
            _context2.prev = 18;
            _context2.t0 = _context2["catch"](5);
            console.log("Error", _context2.t0);

          case 21:
            _context2.prev = 21;
            _context2.next = 24;
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
            dataPolice = _context2.sent;
            _context2.next = 27;
            return regeneratorRuntime.awrap(Buffer.from(JSON.stringify(dataPolice)));

          case 27:
            bufferPolice = _context2.sent;
            _context2.next = 30;
            return regeneratorRuntime.awrap(ipfs.add(bufferPolice, {
              recusive: true
            }));

          case 30:
            ipfsUri = _context2.sent;
            dataPolice.ipfsUri = "https://ipfs.infura.io/ipfs/".concat(ipfsUri.path);
            _context2.next = 34;
            return regeneratorRuntime.awrap(contract_Police.methods.PoliceInfo(_Account.address, dataPolice.ipfsUri));

          case 34:
            police_temp = _context2.sent;
            _context2.next = 37;
            return regeneratorRuntime.awrap(police_temp.encodeABI());

          case 37:
            dataEncode = _context2.sent;
            _context2.next = 40;
            return regeneratorRuntime.awrap(police_temp.estimateGas({
              from: _Account.address
            }));

          case 40:
            gas = _context2.sent;
            _context2.next = 43;
            return regeneratorRuntime.awrap(web3.eth.getBalance(_Account.address));

          case 43:
            ethBalance = _context2.sent;

            if (!(ethBalance < gas)) {
              _context2.next = 46;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "Not enough eth coin"
            }));

          case 46:
            _context2.next = 48;
            return regeneratorRuntime.awrap(web3.eth.getTransactionCount(_Account.address));

          case 48:
            nonce = _context2.sent;
            _rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
            decryptedPrivateKey = crypto.decrypt(_EncryptedPrivateKey, req.body._Password).slice(2);
            _privateKey = Buffer.from(decryptedPrivateKey, 'hex');
            _tx = new Tx(_rawTx);

            _tx.sign(_privateKey);

            _serializedTx = _tx.serialize();
            _context2.next = 57;
            return regeneratorRuntime.awrap(web3.eth.sendSignedTransaction('0x' + _serializedTx.toString('hex')).on('receipt', function _callee(result) {
              var i;
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      for (i = 1; i < result.logs[0].topics.length + 1; i++) {
                        topics.push(result.logs[0].topics[i]);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            }));

          case 57:
            decodedData = web3.eth.abi.decodeLog([{
              "type": "address",
              "name": "_police",
              "indexed": true
            }, {
              "type": "string",
              "name": "_publicInfo",
              "indexed": false
            }], data, topics);
            _context2.next = 60;
            return regeneratorRuntime.awrap(Register('Police', dataPolice).then(function () {
              return res.send({
                Message: "Register success",
                Result: dataPolice,
                Decode: decodedData
              });
            }));

          case 60:
            _context2.next = 65;
            break;

          case 62:
            _context2.prev = 62;
            _context2.t1 = _context2["catch"](21);
            console.log(_context2.t1);

          case 65:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[5, 18], [21, 62]]);
  });
};