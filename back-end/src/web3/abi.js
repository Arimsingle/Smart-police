const abi = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_admin",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "supervisor",
        "type": "address"
      }
    ],
    "name": "_SetSupervisor",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "_admin",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "_bandit",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "_publicInfo",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "_privateInfo",
        "type": "string"
      }
    ],
    "name": "_SetHistoryBandit",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_Supervisor",
        "type": "address"
      }
    ],
    "name": "setSupervisor",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_Bandit",
        "type": "address"
      },
      {
        "name": "_PublicInfo",
        "type": "string"
      },
      {
        "name": "_PrivateInfo",
        "type": "string"
      }
    ],
    "name": "setHistoryBandit",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_Certifier",
        "type": "address"
      },
      {
        "name": "_Bandit",
        "type": "address"
      }
    ],
    "name": "getHistoryBanditArray",
    "outputs": [
      {
        "components": [
          {
            "name": "publicInfo",
            "type": "string"
          },
          {
            "name": "privateInfo",
            "type": "string"
          }
        ],
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_Bandit",
        "type": "address"
      }
    ],
    "name": "getCertifierBandit",
    "outputs": [
      {
        "components": [
          {
            "name": "certifier",
            "type": "address"
          },
          {
            "name": "certifierPublicInfo",
            "type": "string"
          },
          {
            "name": "certifierPrivateInfo",
            "type": "string"
          }
        ],
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_Recorder",
        "type": "address"
      }
    ],
    "name": "getRecorderBandit",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];
module.exports = { abi };
