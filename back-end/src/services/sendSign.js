//decode
//ยังไม่ได้ใช้
const sendSignTransaction = async (templete, from, contract, web3, crypto) => {
    try {
        const dataEncode = await templete.encodeABI();
        const gas = await templete.estimateGas({ from: _Account.address });
        const ethBalance = await web3.eth.getBalance(_Account.address);
        if (ethBalance < gas) {
            return res.json({
                message: "Not enough eth coin"
            });
        }
        const nonce = await web3.eth.getTransactionCount(_Account.address);
        const rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
        const decryptedPrivateKey = crypto.decrypt(_EncryptedPrivateKey, req.body._Password).slice(2);
        const privateKey = Buffer.from(decryptedPrivateKey, 'hex');
        const tx = new Tx(rawTx);
        tx.sign(privateKey);
        const serializedTx = tx.serialize();
        await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
            .on('receipt', async (result) => {
                data = result.logs[0].data;
                for (let i = 1; i < result.logs[0].topics.length + 1; i++) {
                    topics.push(result.logs[0].topics[i]);
                }
            })
        let decodedData = await web3.eth.abi.decodeLog([
            {
                "type": "address",
                "name": "_police",
                "indexed": true,
            },
            {

                "type": "string",
                "name": "_publicInfo",
                "indexed": false,
            }
        ], data, topics);
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    sendSignTransaction
}