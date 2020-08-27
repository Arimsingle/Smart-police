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

module.exports = function ipfsFunction(_ref) {
  var router = _ref.router,
      web3 = _ref.web3,
      Tx = _ref.Tx,
      contract_Police = _ref.contract_Police,
      dotenv = _ref.dotenv;
  router.post('/register', function _callee(req, res) {
    var _Account, _EncryptedPrivateKey, _EncryptedPassword, nonceTransfer, rawTx, privateKey, tx, serializedTx, dataPolice, bufferPolice, ipfsUri, police_temp, dataEncode, gas, ethBalance, nonce, _rawTx, decryptedPrivateKey, _privateKey, _tx, _serializedTx;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _Account = web3.eth.accounts.create(); // Create account

            _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body._Password);
            _EncryptedPassword = crypto.encrypt(req.body._Password, "Admin");
            _context.prev = 3;
            _context.next = 6;
            return regeneratorRuntime.awrap(web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT));

          case 6:
            nonceTransfer = _context.sent;
            // Round of address use transaction
            rawTx = tranferCoin(nonceTransfer, _Account.address);
            privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex'); // Decript privatekey

            tx = new Tx(rawTx);
            tx.sign(privateKey);
            serializedTx = tx.serialize();
            _context.next = 14;
            return regeneratorRuntime.awrap(web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')));

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](3);
            console.log("Error", _context.t0);

          case 19:
            _context.prev = 19;
            _context.next = 22;
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

          case 22:
            dataPolice = _context.sent;
            _context.next = 25;
            return regeneratorRuntime.awrap(Buffer.from(JSON.stringify(dataPolice)));

          case 25:
            bufferPolice = _context.sent;
            _context.next = 28;
            return regeneratorRuntime.awrap(ipfs.add(bufferPolice, {
              recusive: true
            }));

          case 28:
            ipfsUri = _context.sent;
            dataPolice.ipfsUri = "https://ipfs.infura.io/ipfs/".concat(ipfsUri.path);
            _context.next = 32;
            return regeneratorRuntime.awrap(contract_Police.methods.PoliceInfo(_Account.address, dataPolice.ipfsUri));

          case 32:
            police_temp = _context.sent;
            _context.next = 35;
            return regeneratorRuntime.awrap(police_temp.encodeABI());

          case 35:
            dataEncode = _context.sent;
            _context.next = 38;
            return regeneratorRuntime.awrap(police_temp.estimateGas({
              from: _Account.address
            }));

          case 38:
            gas = _context.sent;
            _context.next = 41;
            return regeneratorRuntime.awrap(web3.eth.getBalance(_Account.address));

          case 41:
            ethBalance = _context.sent;

            if (!(ethBalance < gas)) {
              _context.next = 44;
              break;
            }

            return _context.abrupt("return", res.json({
              message: "Not enough eth coin"
            }));

          case 44:
            _context.next = 46;
            return regeneratorRuntime.awrap(web3.eth.getTransactionCount(_Account.address));

          case 46:
            nonce = _context.sent;
            _rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
            decryptedPrivateKey = crypto.decrypt(_EncryptedPrivateKey, req.body._Password).slice(2);
            _privateKey = Buffer.from(decryptedPrivateKey, 'hex');
            _tx = new Tx(_rawTx);

            _tx.sign(_privateKey);

            _serializedTx = _tx.serialize();
            _context.next = 55;
            return regeneratorRuntime.awrap(web3.eth.sendSignedTransaction('0x' + _serializedTx.toString('hex')));

          case 55:
            _context.next = 57;
            return regeneratorRuntime.awrap(Register('Police', dataPolice).then(function () {
              return res.send({
                message: "Register success",
                Result: dataPolice
              });
            }));

          case 57:
            _context.next = 62;
            break;

          case 59:
            _context.prev = 59;
            _context.t1 = _context["catch"](19);
            console.log(_context.t1);

          case 62:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[3, 16], [19, 59]]);
  });
}; //https://ipfs.infura.io/ipfs/