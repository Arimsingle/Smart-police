"use strict";

var IPFS = require('ipfs-http-client');

var ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

var crypto = require('../utils/cryptography');

var _require = require('../services/service'),
    addData = _require.addData;

module.exports = function ipfsFunction(_ref) {
  var router = _ref.router,
      web3 = _ref.web3,
      Tx = _ref.Tx,
      contract_Police = _ref.contract_Police,
      dotenv = _ref.dotenv;
  router.post('/register', function _callee2(req, res) {
    var transactionHash, _Account, _EncryptedPrivateKey, _EncryptedPassword, nonceTransfer, rawTx, privateKey, tx, serializedTx, dataPolice, bufferPolice, ipfsUri, police_temp, dataEncode, gas, ethBalance, nonce, _rawTx, decryptedPrivateKey, _privateKey, _tx, _serializedTx;

    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            transactionHash = [];
            _Account = web3.eth.accounts.create();
            _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body._Password);
            _EncryptedPassword = crypto.encrypt(req.body._Password, "Admin");
            _context2.prev = 4;
            _context2.next = 7;
            return regeneratorRuntime.awrap(web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT));

          case 7:
            nonceTransfer = _context2.sent;
            rawTx = {
              nonce: web3.utils.numberToHex(nonceTransfer),
              gasPrice: web3.utils.numberToHex(web3.utils.toWei('10', 'gwei')),
              gasLimit: web3.utils.numberToHex(21000),
              to: _Account.address,
              value: web3.utils.numberToHex(web3.utils.toWei('1', 'ether'))
            };
            privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex');
            tx = new Tx(rawTx);
            tx.sign(privateKey);
            serializedTx = tx.serialize();
            _context2.next = 15;
            return regeneratorRuntime.awrap(web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', function _callee(result) {
              return regeneratorRuntime.async(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      transactionHash.push(result.transactionHash); // console.log(result);

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              });
            }));

          case 15:
            _context2.next = 20;
            break;

          case 17:
            _context2.prev = 17;
            _context2.t0 = _context2["catch"](4);
            console.log(_context2.t0);

          case 20:
            _context2.prev = 20;
            _context2.next = 23;
            return regeneratorRuntime.awrap({
              Name: req.body._Name,
              Surname: req.body._Surname,
              Type: req.body._Type,
              Email: req.body._Email,
              Rank: req.body._Rank,
              imageUrl: req.body._imageUrl,
              Portfolio: req.body._Portfolio,
              TransactionHash: transactionHash,
              Account: _Account.address.substring(2),
              Private: {
                PrivateKey: JSON.stringify(_EncryptedPrivateKey),
                Password: JSON.stringify(_EncryptedPassword)
              }
            });

          case 23:
            dataPolice = _context2.sent;
            _context2.next = 26;
            return regeneratorRuntime.awrap(Buffer.from(JSON.stringify(dataPolice)));

          case 26:
            bufferPolice = _context2.sent;
            _context2.next = 29;
            return regeneratorRuntime.awrap(ipfs.add(bufferPolice, {
              recusive: true
            }));

          case 29:
            ipfsUri = _context2.sent;
            dataPolice.ipfsUri = ipfsUri.path;
            _context2.next = 33;
            return regeneratorRuntime.awrap(contract_Police.methods.PoliceInfo(_Account.address, dataPolice.ipfsUri));

          case 33:
            police_temp = _context2.sent;
            _context2.next = 36;
            return regeneratorRuntime.awrap(police_temp.encodeABI());

          case 36:
            dataEncode = _context2.sent;
            _context2.next = 39;
            return regeneratorRuntime.awrap(police_temp.estimateGas({
              from: _Account.address
            }));

          case 39:
            gas = _context2.sent;
            _context2.next = 42;
            return regeneratorRuntime.awrap(web3.eth.getBalance(_Account.address));

          case 42:
            ethBalance = _context2.sent;

            if (!(ethBalance < gas)) {
              _context2.next = 45;
              break;
            }

            return _context2.abrupt("return", res.json({
              message: "Not enough eth coin"
            }));

          case 45:
            _context2.next = 47;
            return regeneratorRuntime.awrap(web3.eth.getTransactionCount(_Account.address));

          case 47:
            nonce = _context2.sent;
            _rawTx = {
              chainId: web3.utils.numberToHex(1515),
              nonce: web3.utils.numberToHex(nonce),
              gasPrice: web3.utils.numberToHex(gas),
              gasLimit: '0x2DC6C0',
              to: dotenv.parsed.CONTRACT_ADDRESS,
              value: web3.utils.numberToHex(0),
              data: dataEncode
            };
            decryptedPrivateKey = crypto.decrypt(_EncryptedPrivateKey, req.body._Password).slice(2);
            console.log(decryptedPrivateKey);
            _privateKey = Buffer.from(decryptedPrivateKey, 'hex');
            _tx = new Tx(_rawTx);

            _tx.sign(_privateKey);

            _serializedTx = _tx.serialize();
            _context2.next = 57;
            return regeneratorRuntime.awrap(web3.eth.sendSignedTransaction('0x' + _serializedTx.toString('hex')).on('receipt', function (result) {
              transactionHash.push(result.transactionHash); // console.log(result);
            }));

          case 57:
            _context2.next = 59;
            return regeneratorRuntime.awrap(addData(dataPolice));

          case 59:
            return _context2.abrupt("return", res.send({
              message: "Success",
              Infomation: dataPolice
            }));

          case 62:
            _context2.prev = 62;
            _context2.t1 = _context2["catch"](20);
            console.log(_context2.t1);

          case 65:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[4, 17], [20, 62]]);
  });
}; //https://ipfs.infura.io/ipfs/