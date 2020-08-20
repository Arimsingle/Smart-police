const abi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_admin",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_bandit",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_publicInfo",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_privateInfo",
        "type": "string"
      }
    ],
    "name": "_SetHistoryBandit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_admin",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "supervisor",
        "type": "address"
      }
    ],
    "name": "_SetSupervisor",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_Police",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_PublicInfo",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_PrivateInfo",
        "type": "string"
      }
    ],
    "name": "PoliceInfo",
    "outputs": [
      {
        "internalType": "bool",
        "name": "sucess",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_Bandit",
        "type": "address"
      }
    ],
    "name": "getCertifierBandit",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "certifier",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "certifierPublicInfo",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "certifierPrivateInfo",
            "type": "string"
          }
        ],
        "internalType": "struct Smart_Police.Certifier[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_Recorder",
        "type": "address"
      }
    ],
    "name": "getClaim",
    "outputs": [
      {
        "internalType": "bool",
        "name": "sucess",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_Certifier",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_Bandit",
        "type": "address"
      }
    ],
    "name": "getHistoryBanditArray",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "publicInfo",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "privateInfo",
            "type": "string"
          }
        ],
        "internalType": "struct Smart_Police.Bandit[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_Police",
        "type": "address"
      }
    ],
    "name": "getPoliceInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "publicInfo",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "privateInfo",
            "type": "string"
          }
        ],
        "internalType": "struct Smart_Police.Police",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_Recorder",
        "type": "address"
      }
    ],
    "name": "getRecorderBandit",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_Supervisor",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_Bandit",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "_PublicInfo",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_PrivateInfo",
        "type": "string"
      }
    ],
    "name": "setHistoryBandit",
    "outputs": [
      {
        "internalType": "bool",
        "name": "sucess",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_Supervisor",
        "type": "address"
      }
    ],
    "name": "setSupervisor",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];
module.exports = { abi };
