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
            const nonce = await web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT)
            let rawTx = {
                chainId: web3.utils.numberToHex(1515),
                nonce: web3.utils.numberToHex(nonce),
                gasPrice: web3.utils.numberToHex(gas),
                gasLimit: '0x2DC6C0',
                to: dotenv.parsed.CONTRACT_ADDRESS,
                value: web3.utils.numberToHex(0),
                data: dataEncode,
            }
            let privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex',);
            let tx = new Tx(rawTx);
            tx.sign(privateKey);
            let serializedTx = tx.serialize();
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                .on('receipt', (result) => {
                    TopicArray.push(result.logs[0].topics[0]);
                    TopicArray.push(result.logs[0].topics[1]);
                    TopicArray.push(result.logs[0].topics[2]);
                    console.log(result);
                });
            return res.json({
                status: 200,
                message: 'set supervisor success',
                from: dotenv.parsed.ACCOUNT.toString(),
                to: req.body._supervisor.toString()
            })
        } catch (error) {
            console.log(error);
        }
    })
}
//Azrii Nawong