const admin = require("firebase");
const { firebaseConfig } = require("./config_fb");
admin.initializeApp(firebaseConfig);
const db = admin.firestore();

module.exports = { db };
