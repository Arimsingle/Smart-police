const dotenv = require("dotenv").config({ path: "../../.env" });
const firebaseConfig = {
    apiKey: dotenv.parsed.API_KEY,
    authDomain: dotenv.parsed.AUTH_DOMAIN,
    databaseURL: dotenv.parsed.DATABASE_URL,
    projectId: dotenv.parsed.PROJECT_ID,
    storageBucket: dotenv.parsed.STORAGE_BUCKET,
    messagingSenderId: dotenv.parsed.MESSAGING_SENDER_ID,
    appId: dotenv.parsed.APP_ID,
    measurementId: dotenv.parsed.MEASUREMENT_ID
};
// Export Firebase
module.exports = { firebaseConfig }