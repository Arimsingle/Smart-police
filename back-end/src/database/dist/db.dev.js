"use strict";

var admin = require('firebase');

var _require = require('./config_fb'),
    firebaseConfig = _require.firebaseConfig;

admin.initializeApp(firebaseConfig);
var db = admin.firestore();
module.exports = {
  db: db
};