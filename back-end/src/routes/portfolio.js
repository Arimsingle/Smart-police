const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const { conditionSwitch } = require('../services/switch');
const { findPrivateKey } = require('../services/privatekey');
const { sendSignTransaction } = require('../services/sendSign');
require('node-datetime-thai');
module.exports = function portfolioFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/portfolio', async (req, res) => {
        const Now = new Date();
        // find private key in database 
        const PrivateKey = await findPrivateKey('PoliceInfo', req.body.supervisor.slice(2), res).then((result) => {
            return result;
        });
        try {
            /////////////////////////////////////////////////////////////

            const portfolioData = {
                from: req.body.supervisor.slice(2),
                to: req.body.police.slice(2),
                portfolio: req.body.portfolio,
                Date: Now.toThaiString(3),
                Doc: "Portfolio",
            }

            const bufferPortfolio = await Buffer.from(JSON.stringify(portfolioData));
            const ipfsUri = await ipfs.add(bufferPortfolio, { recusive: true });
            portfolioData.ipfsUri = `https://ipfs.infura.io/ipfs/${ipfsUri.path}`;
            console.log(portfolioData.ipfsUri);
            /////////////////////////////////////////////////////////////
            
            // templete of setPortfolio method
            const portfolio_temp = await contract_Police.methods
                .setPortfolio(
                    req.body.supervisor,
                    req.body.police,
                    portfolioData.ipfsUri
                );
            //use sendSignTransaction function
            const serializedTx = await sendSignTransaction({
                templete: portfolio_temp,
                from: req.body.supervisor,
                contract: dotenv.parsed.CONTRACT_ADDRESS,
                PrivateKey: JSON.parse(PrivateKey),
                password: req.body.password,
                res: res,
                web3: web3,
                Tx: Tx
            }).then((result) => {
                return result;
            })
            // sign & send transaction
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
            // console.log(portfolioData);

            ////////////////////////////////////////////////////IPSF//////////////////////////////////////////////////
            const ipfs_temp = await contract_Police.methods.addIpfs(req.body.supervisor, portfolioData.ipfsUri);
            const serializedTx_ipfs = await sendSignTransaction({
                templete: ipfs_temp,
                from: req.body.supervisor,
                contract: dotenv.parsed.CONTRACT_ADDRESS,
                PrivateKey: JSON.parse(PrivateKey),
                password: req.body.password,
                res: res,
                web3: web3,
                Tx: Tx
            }).then((result) => {
                return result;
            })
            await web3.eth.sendSignedTransaction('0x' + serializedTx_ipfs.toString('hex')).catch((error) => console.log(error))
            ////////////////////////////////////////////////////IPSF//////////////////////////////////////////////////

            // call condition function
            // console.log(req.body.police);
            await conditionSwitch('Decode', req.body.police, {
                PolicePortfolio:
                    [
                        portfolioData
                    ]
            }, portfolioData, "PolicePortfolio").then(() => {
                return res.json({
                    message: "Set portfolio success",
                    Portfolio: portfolioData
                })
            })
        } catch (error) {
            console.log(error);
            return res.json({
                message: "Call method faild",
                info: "Only Supervisor use this method",
                Error: error,
            })
        }
    })
}