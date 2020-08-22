"use strict";

var IPFS = require('ipfs-http-client');

var ipfs = new IPFS({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https'
});

var _require = require('../service/service'),
    addData = _require.addData,
    deleteData = _require.deleteData,
    readData = _require.readData,
    updateData = _require.updateData; //https://ipfs.infura.io/ipfs/


module.exports = function ipfsFunction(_ref) {
  var router = _ref.router;
  router.post('/policeRegister', function _callee(req, res) {
    var _Account, dataPolice, dataBuffer, ipfsFile;

    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _Account = web3.eth.accounts.create();
            _context.next = 4;
            return regeneratorRuntime.awrap({
              Name: req.body._Name,
              Address: req.body._Address,
              Surname: req.body._Surname,
              Type: req.body._Type,
              Email: req.body._Email,
              Rank: req.body._Rank,
              imageUrl: req.body._imageUrl,
              Portfolio: req.body._Portfolio
            });

          case 4:
            dataPolice = _context.sent;
            dataBuffer = Buffer.from(JSON.stringify(dataPolice));
            _context.next = 8;
            return regeneratorRuntime.awrap(ipfs.add(dataBuffer, {
              recusive: true
            }));

          case 8:
            ipfsFile = _context.sent;
            dataPolice.ipfsFile = ipfsFile.path; // dataPolice.ipfsFile = ipfsFile;

            _context.next = 12;
            return regeneratorRuntime.awrap(addData(dataPolice));

          case 12:
            _context.next = 14;
            return regeneratorRuntime.awrap(res.json(dataPolice));

          case 14:
            _context.next = 18;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 16]]);
  });
};