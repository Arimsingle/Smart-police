"use strict";

//https://firebase.google.com/docs/firestore/query-data/get-data
var _require = require('../database/db'),
    db = _require.db;

var addData = function addData(dataPolice) {
  return regeneratorRuntime.async(function addData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db.collection('Police').doc(dataPolice.Email).set(dataPolice));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
};

var deleteData = function deleteData(data) {
  return regeneratorRuntime.async(function deleteData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(db.collection('cities').doc('DC')["delete"]());

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var readData = function readData(data) {
  return regeneratorRuntime.async(function readData$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var updateData = function updateData(data) {
  return regeneratorRuntime.async(function updateData$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports = {
  addData: addData,
  deleteData: deleteData,
  readData: readData,
  updateData: updateData
};