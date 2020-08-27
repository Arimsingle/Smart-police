const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const { tranferData } = require('../services/rawTx');
const { addData, updateData } = require('../services/db');
module.exports = function setSupervisor({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/supervisor', async (req, res) => {
        let TopicArray = [];
        try {
            // templete of setPortfolio method
            const police_temp = await contract_Police.methods.setSupervisor(req.body._supervisor);
            // encode to be abi data
            const dataEncode = await police_temp.encodeABI();
            // get gas for send transaction
            const gas = await police_temp.estimateGas({ from: dotenv.parsed.ACCOUNT });
            // get eth coin to buy gas
            const ethBalance = await web3.eth.getBalance(dotenv.parsed.ACCOUNT);
            if (ethBalance < gas) {
                return res.json({
                    message: "Not enough eth coin"
                })
            }
            // round of address transaction
            const nonce = await web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT);
            // Data to sign transaction
            const rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
            // private key
            const privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex');
            const tx = new Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            // sign & send transaction
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                .on('receipt', (result) => {
                    for (let i = 0; i < result.logs[0].topics.length; i++) {
                        TopicArray.push(result.logs[0].topics[i]);
                    }
                });
            // data interface
            let supervisor = await {
                from: dotenv.parsed.ACCOUNT.slice(2),
                to: req.body._supervisor.slice(2)
            }
            // Data to encript buffer upload to ipfs 
            const bufferSupervisor = await Buffer.from(JSON.stringify(supervisor));
            const ipfsUri = await ipfs.add(bufferSupervisor, { recusive: true });
            supervisor.ipfsUri = `https://ipfs.infura.io/ipfs/${ipfsUri.path}`;
            await addData('Supervisor', req.body._supervisor.slice(2), supervisor)
                .then(async () => {
                    await updateData('Police', req.body._supervisor.slice(2), supervisor)
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