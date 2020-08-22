"use strict";

var IPFS = require('ipfs-http-client');

var ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

var crypto = require('../utils/cryptography');

var _require = require('../service/service'),
    addData = _require.addData,
    deleteData = _require.deleteData,
    readData = _require.readData,
    updateData = _require.updateData;

module.exports = function ipfsFunction(_ref) {
  var router = _ref.router,
      web3 = _ref.web3;
  router.post('/policeRegister', function _callee(req, res) {
    var _Account, _EncryptedPrivateKey, _EncryptedPassword, dataPolice, bufferPolice, ipfsUri;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _Account = web3.eth.accounts.create();
            _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body._Password);
            _EncryptedPassword = crypto.encrypt(req.body._Password, "Admin");
            _context.next = 6;
            return regeneratorRuntime.awrap({
              Name: req.body._Name,
              Surname: req.body._Surname,
              Type: req.body._Type,
              Email: req.body._Email,
              Rank: req.body._Rank,
              imageUrl: req.body._imageUrl,
              Portfolio: req.body._Portfolio,
              Account: _Account.address.substring(2),
              Private: {
                PrivateKey: JSON.stringify(_EncryptedPrivateKey),
                Password: JSON.stringify(_EncryptedPassword)
              }
            });

          case 6:
            dataPolice = _context.sent;
            bufferPolice = Buffer.from(JSON.stringify(dataPolice));
            _context.next = 10;
            return regeneratorRuntime.awrap(ipfs.add(bufferPolice, {
              recusive: true
            }));

          case 10:
            ipfsUri = _context.sent;
            dataPolice.ipfsUri = ipfsUri.path;
            _context.next = 14;
            return regeneratorRuntime.awrap(addData(dataPolice));

          case 14:
            _context.next = 16;
            return regeneratorRuntime.awrap(res.json(dataPolice));

          case 16:
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](0);
            console.log("Error", _context.t0);

          case 21:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 18]]);
  });
}; //https://ipfs.infura.io/ipfs/