const IPFS = require('ipfs-http-client');
// const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const crypto = require('../utils/cryptography');
const { readDataByUID } = require('../services/db');
const { conditionArray } = require('../services/switch')
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
            const police_temp = await contract_Police.methods.setPortfolio(
                req.body._supervisor,
                req.body._police,
                req.body._portfolio);
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
            console.log(portfolioData);
            console.log(req.body._police);
            await conditionArray('Portfolio', req.body._police, portfolioData, req, res)

            // switch (validator) {
            //     case true:
            //         await updateDataArray('Portfolio', req.body._police
            //             .slice(2), portfolioData.Result[0])
            //             .then(() => {
            //                 return res.json({
            //                     message: 'set portfolio success',
            //                     Result: portfolioData.Result[0]
            //                 })
            //             }).catch((error) => {
            //                 console.log("Error : ", error);
            //             })
            //         break;
            //     case false:
            //         await addData('Portfolio', req.body._police
            //             .slice(2), portfolioData)
            //             .then(() => {
            //                 return res.json({
            //                     message: 'set portfolio success',
            //                     Result: portfolioData.Result[0]
            //                 })
            //             }).catch((error) => {
            //                 console.log("Error : ", error);
            //             })
            //         break;
            // }

        } catch (error) {
            console.log("Error : ", error);
        }
    })
}