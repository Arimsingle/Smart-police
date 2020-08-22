"use strict";

// Nodejs encryption with CTR
var crypto = require('crypto');

var algorithm = 'aes-256-cbc'; //const key = crypto.randomBytes(32);

var iv = crypto.randomBytes(16);

function encrypt(text, password) {
  var key = crypto.createHash('sha256').update(String(password)).digest('base64').substr(0, 32);
  var cipher = crypto.createCipheriv(algorithm, Buffer.from(key), iv);
  var encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher["final"]()]);
  return {
    iv: iv.toString('hex'),
    encryptedData: encrypted.toString('hex')
  };
}

function decrypt(text, password) {
  var key = crypto.createHash('sha256').update(String(password)).digest('base64').substr(0, 32);
  var iv = Buffer.from(text.iv, 'hex');
  var encryptedText = Buffer.from(text.encryptedData, 'hex');
  var decipher = crypto.createDecipheriv(algorithm, Buffer.from(key), iv);
  var decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher["final"]()]);
  return decrypted.toString();
}

module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
};