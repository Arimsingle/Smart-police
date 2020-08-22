"use strict";

var abi = [{
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_admin",
    "type": "address"
  }, {
    "indexed": true,
    "name": "supervisor",
    "type": "address"
  }],
  "name": "_SetSupervisor",
  "type": "event"
}, {
  "anonymous": false,
  "inputs": [{
    "indexed": true,
    "name": "_admin",
    "type": "address"
  }, {
    "indexed": true,
    "name": "_bandit",
    "type": "address"
  }, {
    "indexed": false,
    "name": "_publicInfo",
    "type": "string"
  }],
  "name": "_SetHistoryBandit",
  "type": "event"
}, {
  "constant": false,
  "inputs": [{
    "name": "_Supervisor",
    "type": "address"
  }],
  "name": "setSupervisor",
  "outputs": [{
    "name": "",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_Police",
    "type": "address"
  }, {
    "name": "_PublicInfo",
    "type": "string"
  }],
  "name": "PoliceInfo",
  "outputs": [{
    "name": "sucess",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": false,
  "inputs": [{
    "name": "_Supervisor",
    "type": "address"
  }, {
    "name": "_Bandit",
    "type": "address"
  }, {
    "name": "_PublicInfo",
    "type": "string"
  }],
  "name": "setHistoryBandit",
  "outputs": [{
    "name": "sucess",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_Police",
    "type": "address"
  }],
  "name": "getPoliceInfo",
  "outputs": [{
    "components": [{
      "name": "publicInfo",
      "type": "string"
    }],
    "name": "",
    "type": "tuple"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_Certifier",
    "type": "address"
  }, {
    "name": "_Bandit",
    "type": "address"
  }],
  "name": "getHistoryBanditArray",
  "outputs": [{
    "components": [{
      "name": "publicInfo",
      "type": "string"
    }],
    "name": "",
    "type": "tuple[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_Bandit",
    "type": "address"
  }],
  "name": "getCertifierBandit",
  "outputs": [{
    "components": [{
      "name": "certifier",
      "type": "address"
    }, {
      "name": "certifierPublicInfo",
      "type": "string"
    }],
    "name": "",
    "type": "tuple[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_Recorder",
    "type": "address"
  }],
  "name": "getRecorderBandit",
  "outputs": [{
    "name": "",
    "type": "address[]"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}, {
  "constant": true,
  "inputs": [{
    "name": "_Recorder",
    "type": "address"
  }],
  "name": "getClaim",
  "outputs": [{
    "name": "sucess",
    "type": "bool"
  }],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
}];
module.exports = {
  abi: abi
};