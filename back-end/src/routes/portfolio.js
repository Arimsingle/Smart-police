// const IPFS = require('ipfs-http-client');
// const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const crypto = require('../utils/cryptography');
const { conditionSwitch } = require('../services/switch');
const { tranferData } = require('../services/rawTx');
const { findPrivateKey } = require('../services/privatekey');
module.exports = function portfolioFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/portfolio', async (req, res) => {
        // find private key in database 
        const PrivateKey = await findPrivateKey('PoliceInfo', req.body._supervisor.slice(2), res).then((result) => {
            return result;
        });
        try {
            // templete of setPortfolio method
            const police_temp = await contract_Police.methods.setPortfolio(
                req.body._supervisor,
                req.body._police,
                req.body._portfolio);
            // encode to be abi data
            const dataEncode = await police_temp.encodeABI();
            // get gas for send transaction
            const gas = await police_temp.estimateGas({
                from: req.body._supervisor
            });
            // get eth coin to buy gas
            const ethBalance = await web3.eth.getBalance(req.body._supervisor);
            if (ethBalance < gas) {
                return res.json({
                    message: "Not enough eth coin"
                });
            }
            // round of address transaction 
            const nonce = await web3.eth.getTransactionCount(req.body._supervisor);
            // Data to sign transaction
            const rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
            // decript private key
            const decryptedPrivateKey = crypto.decrypt(JSON.parse(PrivateKey), req.body._password).slice(2);
            // real private key
            const privateKey = Buffer.from(decryptedPrivateKey, 'hex');
            const tx = new Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            // sign & send transaction
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
            // call condition function
            await conditionSwitch('Decode', req.body._police, {
                PolicePortfolio:
                    [
                        {
                            from: req.body._supervisor.slice(2),
                            to: req.body._police.slice(2),
                            portfolio: req.body._portfolio
                        }
                    ] //data
            }, {
                from: req.body._supervisor.slice(2),
                to: req.body._police.slice(2),
                portfolio: req.body._portfolio
            }, "PolicePortfolio").then(() => {
                return res.json({
                    message: "Set portfolio success",
                    Portfolio: {
                        from: req.body._supervisor.slice(2),
                        to: req.body._police.slice(2),
                        portfolio: req.body._portfolio
                    }
                })
            })
        } catch (error) {
            return res.json({
                message: "Call method faild",
                info: "Only Supervisor use this method",
                Error: error,
            })
        }
    })
}