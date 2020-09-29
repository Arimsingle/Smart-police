
//Not Decode yet !
const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const { sendSignTransaction } = require('../services/sendSign');
const { addData, updateData } = require('../services/db');
require('node-datetime-thai');
module.exports = function setSupervisor({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/supervisor', async (req, res) => {
        let TopicArray = [];
        let Now = new Date();
        try {
            // templete of setPortfolio method
            const supervisor_temp = await contract_Police.methods
                .setSupervisor(
                    req.body.supervisor
                );
            // use sendSignTransaction function
            const serializedTx = await sendSignTransaction({
                templete: supervisor_temp,
                from: dotenv.parsed.ACCOUNT,
                contract: dotenv.parsed.CONTRACT_ADDRESS,
                PrivateKey: dotenv.parsed.PRIVATE_KEY,
                res: res,
                web3: web3,
                Tx: Tx
            }).then((result) => {
                return result;
            });
            // sign & send transaction to blockchain
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                .on('receipt', (result) => {
                    for (let i = 0; i < result.logs[0].topics.length; i++) {
                        TopicArray.push(result.logs[0].topics[i]);
                    }
                });
            // data interface
            let supervisor = await {
                from: dotenv.parsed.ACCOUNT.slice(2),
                to: req.body.supervisor.slice(2),
                Doc: "Supervisor",
                Date: Now.toThaiString(3),
            }
            
            // Data to encript buffer upload to ipfs 
            const bufferSupervisor = await Buffer.from(JSON.stringify(supervisor));
            const ipfsUri = await ipfs.add(bufferSupervisor, { recusive: true });
            supervisor.ipfsUri = `https://ipfs.infura.io/ipfs/${ipfsUri.path}`;

            const ipfs_temp = await contract_Police.methods.addIpfs(req.body.supervisor, supervisor.ipfsUri);
            const serializedTx_ipfs = await sendSignTransaction({
                templete: ipfs_temp,
                from: dotenv.parsed.ACCOUNT,
                contract: dotenv.parsed.CONTRACT_ADDRESS,
                PrivateKey: dotenv.parsed.PRIVATE_KEY,
                res: res,
                web3: web3,
                Tx: Tx
            }).then((result) => {
                return result;
            })
            await web3.eth.sendSignedTransaction('0x' + serializedTx_ipfs.toString('hex')).catch((error) => console.log(error))

            await addData('Supervisor', req.body.supervisor.slice(2), supervisor)
                .then(async () => {
                    await updateData('PoliceInfo', req.body.supervisor.slice(2), supervisor)
                        .then(() => {
                            return res.json({
                                message: 'set supervisor success',
                                Result: supervisor,
                            });
                        });
                }).catch((error) => {
                    console.log("Error : ", error);
                });
        } catch (error) {
            return res.json({
                message: 'set supervisor faild',
                Error: error,
            });
        }
    });
}