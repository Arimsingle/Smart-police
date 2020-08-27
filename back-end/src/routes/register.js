const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const crypto = require('../utils/cryptography');
const { Register } = require('../services/db');
const { tranferCoin, tranferData } = require('../services/rawTx');
const ethABI = require('web3-eth-abi')
module.exports = function ipfsFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/register', async (req, res) => {
        let data = "";
        let topics = [];
        const _Account = web3.eth.accounts.create(); // Create account
        const _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body._Password);
        const _EncryptedPassword = crypto.encrypt(req.body._Password, "Admin");
        try {
            const nonceTransfer = await web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT); // Round of address use transaction
            const rawTx = tranferCoin(nonceTransfer, _Account.address);
            const privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex'); // Decript privatekey
            const tx = new Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')) // Send & sign transaction
        } catch (error) {
            console.log("Error", error);
        }
        try {
            let dataPolice = await {
                Name: req.body._Name,
                Surname: req.body._Surname,
                Type: req.body._Type,
                Email: req.body._Email,
                Rank: req.body._Rank,
                imageUrl: req.body._imageUrl,
                Account: _Account.address.substring(2),
                Supervisor: false,
                Private: {
                    PrivateKey: JSON.stringify(_EncryptedPrivateKey),
                    Password: JSON.stringify(_EncryptedPassword),
                }
            };
            const bufferPolice = await Buffer.from(JSON.stringify(dataPolice)); // Data to be buffer
            const ipfsUri = await ipfs.add(bufferPolice, { recusive: true });
            dataPolice.ipfsUri = `https://ipfs.infura.io/ipfs/${ipfsUri.path}`;
            const police_temp = await contract_Police.methods.PoliceInfo(_Account.address, dataPolice.ipfsUri);
            const dataEncode = await police_temp.encodeABI();
            const gas = await police_temp.estimateGas({ from: _Account.address });
            const ethBalance = await web3.eth.getBalance(_Account.address);
            if (ethBalance < gas) {
                return res.json({
                    message: "Not enough eth coin"
                });
            }
            const nonce = await web3.eth.getTransactionCount(_Account.address);
            const rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
            const decryptedPrivateKey = crypto.decrypt(_EncryptedPrivateKey, req.body._Password).slice(2);
            const privateKey = Buffer.from(decryptedPrivateKey, 'hex');
            const tx = new Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                .on('receipt', async (result) => {
                    for (let i = 1; i < result.logs[0].topics.length + 1; i++) {
                        topics.push(result.logs[0].topics[i]);
                    }
                })
            let decodedData = web3.eth.abi.decodeLog([
                {
                    "type": "address",
                    "name": "_police",
                    "indexed": true,
                },
                {

                    "type": "string",
                    "name": "_publicInfo",
                    "indexed": false,
                }
            ], data, topics)
            await Register('Police', dataPolice).then(() => {
                return res.send({
                    Message: "Register success",
                    Result: dataPolice,
                    Decode: decodedData
                });
            })

        } catch (error) {
            console.log(error);
        }


    });
}