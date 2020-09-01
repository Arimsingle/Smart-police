// const IPFS = require('ipfs-http-client');
// const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const { conditionSwitch } = require('../services/switch');
const { findPrivateKey } = require('../services/privatekey');
require('node-datetime-thai');
module.exports = function portfolioFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/portfolio', async (req, res) => {
        // find private key in database 
        const PrivateKey = await findPrivateKey('PoliceInfo', req.body._supervisor.slice(2), res).then((result) => {
            return result;
        });
        try {

            // templete of setPortfolio method
            const portfolio_temp = await contract_Police.methods.setPortfolio(
                req.body._supervisor,
                req.body._police,
                req.body._portfolio);
            //use sendSignTransaction function
            const serializedTx = await sendSignTransaction({
                templete: portfolio_temp,
                from: req.body._supervisor,
                contract: dotenv.parsed.CONTRACT_ADDRESS,
                PrivateKey: JSON.parse(PrivateKey),
                password: req.body._password,
                res: res,
                web3: web3,
                Tx: Tx
            }).then((result) => {
                return result;
            })
            const portfolioData = {
                from: req.body._supervisor.slice(2),
                to: req.body._police.slice(2),
                portfolio: req.body._portfolio,
                Date: Now.toThaiString(3),
            }
            // sign & send transaction
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
            // call condition function
            await conditionSwitch('Decode', req.body._police, {
                PolicePortfolio:
                    [
                        portfolioData
                    ] //portfolioData
            }, portfolioData, "PolicePortfolio").then(() => {
                return res.json({
                    message: "Set portfolio success",
                    Portfolio: portfolioData
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