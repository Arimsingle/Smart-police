//decode
//ยังไม่ได้ใช้
const sendSignTransaction = async (templeteObj) => {
    try {
        // templeteObj.templete
        const dataEncode = await templeteObj.templete.encodeABI();
        const gas = await templete.estimateGas({ from: templeteObj.from });
        const ethBalance = await web3.eth.getBalance(templeteObj.from);
        if (ethBalance < gas) {
            return res.json({
                message: "Not enough eth coin"
            });
        }
        const nonce = await web3.eth.getTransactionCount(templeteObj.from);
        const rawTx = tranferData(nonce, gas, dataEncode, templeteObj.contract);
        const decryptedPrivateKey = crypto.decrypt(templeteObj.PrivateKey, req.body._Password).slice(2);
        const privateKey = Buffer.from(decryptedPrivateKey, 'hex');
        const tx = new Tx(rawTx);
        tx.sign(privateKey);
        const serializedTx = tx.serialize();
        return serializedTx;
    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    sendSignTransaction
}