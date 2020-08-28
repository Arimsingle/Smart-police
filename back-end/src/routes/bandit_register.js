const dateTime = require('node-datetime');
const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const crypto = require('../utils/cryptography');
const { Register } = require('../services/db');
const { tranferData } = require('../services/rawTx');
const { findPrivateKey } = require('../services/privatekey');
const { db } = require('../database/db');
module.exports = function ipfsFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/bandit/register', async (req, res) => {
        // Create account
        const _Account = web3.eth.accounts.create();
        // encrypt private key
        const _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, "Police");
        const PrivateKey = await findPrivateKey('Police', req.body._police.slice(2), res).then((result) => {
            return result;
        });
        try {
            // data 
            let dataBandit = await {
                Name: req.body._Name,
                Surname: req.body._Surname,
                Type: req.body._Type,
                Email: req.body._Email,
                Rank: req.body._Rank,
                imageUrl: req.body._imageUrl,
                Date: dateTime.create().format('Y-m-d H:M:S').toString(),
                Account: _Account.address.slice(2),
                Private: {
                    PrivateKey: JSON.stringify(_EncryptedPrivateKey)
                }
            };
            // Data to be buffer
            const bufferBandit = await Buffer.from(JSON.stringify(dataBandit));
            const ipfsUri = await ipfs.add(bufferBandit, { recusive: true });
            dataBandit.ipfsUri = `https://ipfs.infura.io/ipfs/${ipfsUri.path}`;

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            const police_temp = await contract_Police.methods.Bandit_Info(_Account.address, dataBandit.ipfsUri);
            const dataEncode = await police_temp.encodeABI();
            const gas = await police_temp.estimateGas({ from: req.body._police });
            const ethBalance = await web3.eth.getBalance(req.body._police);
            if (ethBalance < gas) {
                return res.json({
                    message: "Not enough eth coin"
                });
            }
            const nonce = await web3.eth.getTransactionCount(req.body._police);
            const rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
            const decryptedPrivateKey = crypto.decrypt(JSON.parse(PrivateKey), req.body._Password).slice(2);
            const privateKey = Buffer.from(decryptedPrivateKey, 'hex');
            const tx = new Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
            await Register("Bandit", dataBandit);
            return res.json({
                message: "success"
            })
        } catch (error) {
            console.log("Error : ", error);
        }


    });
}