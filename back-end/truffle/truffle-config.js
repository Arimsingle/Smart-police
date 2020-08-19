
const HDWalletProvider = require('truffle-hdwallet-provider');
require('dotenv').config({ path: '../.env' });
module.exports = {
  networks: {
    development: {
      host: process.env.LOCALHOST,     // Localhost (default: none)
      port: process.env.TRUFFLE_PORT,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    private: {
      host: process.env.LOCALHOST,     // Localhost (default: none)
      port: process.env.PRIVATE_PORT,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 0,
      gasPrice: 0,
      websockets: true,
      chainId: '1515'
    },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websockets: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    sokol: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://sokol.poa.network`),
      network_id: process.env.SOKOL_PORT,       // Ropsten's id
      gas: 5500000,
      gasPrice: 1000000000,      // Ropsten has a lower block limit than mainnet
    },
    kovan: {
      provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://kovan.infura.io/v3/${process.env.INFURA_API_LINK}`),
      network_id: process.env.KOVAN_PORT,       // Ropsten's id
      gas: 5500000,        // Ropsten has a lower block limit than mainnet
      confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true,    // Skip dry run before migrations? (default: false for public nets )
      gasPrice: 1000000000,
    },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: false,
          runs: 200
        },
        // evmVersion: "byzantium"
      }
    },
  },
};
