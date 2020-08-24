"use strict";

var abi = [{
  "inputs": [],
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "_police",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "string",
    "name": "_publicInfo",
    "type": "string"
  }],
  "name": "_PoliceInfo",
  "type": "event"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_Police",
    "type": "address"
  }, {
    "internalType": "string",
    "name": "_PublicInfo",
    "type": "string"
  }],
  "name": "PoliceInfo",
  "outputs": [{
    "internalType": "bool",
    "name": "sucess",
    "type": "bool"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "_supervisor",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "_bandit",
    "type": "address"
  }],
  "name": "_RecorderBandit",
  "type": "event"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_Supervisor",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "_Bandit",
    "type": "address"
  }, {
    "internalType": "string",
    "name": "_PublicInfo",
    "type": "string"
  }],
  "name": "setHistoryBandit",
  "outputs": [{
    "internalType": "bool",
    "name": "sucess",
    "type": "bool"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "_admin",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "_bandit",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "string",
    "name": "_publicInfo",
    "type": "string"
  }],
  "name": "_SetHistoryBandit",
  "type": "event"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_Supervisor",
    "type": "address"
  }],
  "name": "setSupervisor",
  "outputs": [{
    "internalType": "bool",
    "name": "sucess",
    "type": "bool"
  }],
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "internalType": "address",
    "name": "_admin",
    "type": "address"
  }, {
    "indexed": true,
    "internalType": "address",
    "name": "_supervisor",
    "type": "address"
  }],
  "name": "_SetSupervisor",
  "type": "event"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_Bandit",
    "type": "address"
  }],
  "name": "getCertifierBandit",
  "outputs": [{
    "components": [{
      "internalType": "address",
      "name": "certifier",
      "type": "address"
    }, {
      "internalType": "string",
      "name": "certifierPublicInfo",
      "type": "string"
    }],
    "internalType": "struct Smart_Police.Certifier[]",
    "name": "",
    "type": "tuple[]"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_Recorder",
    "type": "address"
  }],
  "name": "getClaim",
  "outputs": [{
    "internalType": "bool",
    "name": "sucess",
    "type": "bool"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_Certifier",
    "type": "address"
  }, {
    "internalType": "address",
    "name": "_Bandit",
    "type": "address"
  }],
  "name": "getHistoryBanditArray",
  "outputs": [{
    "components": [{
      "internalType": "string",
      "name": "publicInfo",
      "type": "string"
    }],
    "internalType": "struct Smart_Police.Bandit[]",
    "name": "",
    "type": "tuple[]"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_Police",
    "type": "address"
  }],
  "name": "getPoliceInfo",
  "outputs": [{
    "components": [{
      "internalType": "string",
      "name": "publicInfo",
      "type": "string"
    }],
    "internalType": "struct Smart_Police.Police",
    "name": "",
    "type": "tuple"
  }],
  "stateMutability": "view",
  "type": "function"
}, {
  "inputs": [{
    "internalType": "address",
    "name": "_Recorder",
    "type": "address"
  }],
  "name": "getRecorderBandit",
  "outputs": [{
    "internalType": "address[]",
    "name": "",
    "type": "address[]"
  }],
  "stateMutability": "view",
  "type": "function"
}];
module.exports = {
  abi: abi
};