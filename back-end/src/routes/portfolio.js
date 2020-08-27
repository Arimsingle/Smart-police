const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const crypto = require('../utils/cryptography');
const { addData, readDataByUID, updateDataArray } = require('../services/db');
const { tranferData } = require('../services/rawTx');
module.exports = function portfolioFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/portfolio', async (req, res) => {
        try {
            const { Private: { PrivateKey } } = await readDataByUID('Police', req.body._police.slice(2));
            if (!PrivateKey) {
                return res.json({
                    message: "Your account does not exits Please register"
                })
            }
            const police_temp = await contract_Police.methods.setPortfolio(req.body._supervisor, req.body._police, req.body._portfolio);
            const dataEncode = await police_temp.encodeABI();
            const gas = await police_temp.estimateGas({ from: req.body._supervisor });
            const ethBalance = await web3.eth.getBalance(req.body._supervisor);
            if (ethBalance < gas) {
                return res.json({
                    message: "Not enough eth coin"
                })
            }
            const nonce = await web3.eth.getTransactionCount(req.body._police);
            const rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
            const decryptedPrivateKey = crypto.decrypt(JSON.parse(PrivateKey), req.body._password).slice(2);
            const privateKey = Buffer.from(decryptedPrivateKey, 'hex');
            const tx = new Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
            let portfolioData = await {
                Result: [
                    {
                        from: req.body._supervisor.slice(2),
                        to: req.body._police.slice(2),
                        portfolio: req.body._portfolio
                    }
                ]
            }
            const validator = await await readDataByUID('Portfolio', req.body._police
                .slice(2))
                .then((result) => {
                    if (result) {
                        return true;
                    }
                    return false;
                }).catch((error) => {
                    console.log("Error : ", error);
                })
            if (validator) {
                await updateDataArray('Portfolio', req.body._police
                    .slice(2), portfolioData.Result[0])
                    .then(() => {
                        return res.json({
                            message: 'set portfolio success',
                            Result: portfolioData.Result[0]
                        })
                    }).catch((error) => {
                        console.log("Error : ", error);
                    })
            }
            else {
                await addData('Portfolio', req.body._police
                    .slice(2), portfolioData)
                    .then(() => {
                        return res.json({
                            message: 'set portfolio success',
                            Result: portfolioData.Result[0]
                        })
                    }).catch((error) => {
                        console.log("Error : ", error);
                    })
            }
        } catch (error) {
            console.log("Error : ", error);
        }
    })
}