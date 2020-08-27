// const IPFS = require('ipfs-http-client');
// const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const crypto = require('../utils/cryptography');
const { readDataByUID } = require('../services/db');
const { conditionSwitch } = require('../services/switch');
const { tranferData } = require('../services/rawTx');
module.exports = function portfolioFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/portfolio', async (req, res) => {
        // find private key in database 
        const { Private: { PrivateKey } } = await readDataByUID('Police', req.body._police.slice(2));
        if (!PrivateKey) {
            return res.json({
                message: "Your account does not exits Please register :D"
            });
        }

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
                })
            }
            // round of address transaction 
            const nonce = await web3.eth.getTransactionCount(req.body._police);
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
            await conditionSwitch('Portfolio', req.body._police, {
                Result: [
                    {
                        from: req.body._supervisor.slice(2),
                        to: req.body._police.slice(2),
                        portfolio: req.body._portfolio
                    }
                ] //data
            }, res);

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