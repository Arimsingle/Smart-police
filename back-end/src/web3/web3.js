const Web3 = require("web3");
const dotenv = require("dotenv").config({ path: "../../.env" });
const web3 = new Web3(
  new Web3.providers.WebsocketProvider(`
    ws://${dotenv.parsed.LOCALHOST}:${dotenv.parsed.PRIVATE_PORT_WS}
`)
);
module.exports = { web3 };
