const { tranferData } = require('../services/rawTx');
const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const { addData, updateData } = require('../services/db');
module.exports = function setSupervisor({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/supervisor', async (req, res) => {
        let TopicArray = [];
        try {
            const police_temp = await contract_Police.methods.setSupervisor(req.body._supervisor);
            const dataEncode = await police_temp.encodeABI();
            const gas = await police_temp.estimateGas({ from: dotenv.parsed.ACCOUNT });
            const ethBalance = await web3.eth.getBalance(dotenv.parsed.ACCOUNT);
            if (ethBalance < gas) {
                return res.json({
                    message: "Not enough eth coin"
                })
            }
            const nonce = await web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT);
            const rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
            const privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex');
            const tx = new Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                .on('receipt', (result) => {
                    for (let i = 0; i < result.logs[0].topics.length; i++) {
                        TopicArray.push(result.logs[0].topics[i]);
                    }
                });
            let supervisor = await {
                from: dotenv.parsed.ACCOUNT.slice(2),
                to: req.body._supervisor.slice(2)
            }
            const bufferSupervisor = await Buffer.from(JSON.stringify(supervisor)); // Data to be buffer
            const ipfsUri = await ipfs.add(bufferSupervisor, { recusive: true });
            supervisor.ipfsUri = `https://ipfs.infura.io/ipfs/${ipfsUri.path}`;
            await addData('Supervisor', req.body._supervisor.slice(2), supervisor)
                .then(async () => {
                    await updateData('Police', req.body._supervisor.slice(2), supervisor)
                        .then(() => {
                            return res.json({
                                message: 'set supervisor success',
                                Result: supervisor,
                            })
                        })
                }).catch((error) => {
                    console.log("Error : ", error);
                })
        } catch (error) {
            return res.json({
                message: 'set supervisor faild',
                Error: error,
            })
        }
    })
}
//Azrii Nawong