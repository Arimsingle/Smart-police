//decode
//ยังไม่ได้ใช้
const crypto = require('../utils/cryptography');
const { tranferData } = require('../services/rawTx');
const sendSignTransaction = async (templeteObj) => {

    // templeteObj.templete
    try {
        const dataEncode = await templeteObj.templete.encodeABI();
        const gas = await templeteObj.templete.estimateGas({ from: templeteObj.from });
        const ethBalance = await templeteObj.web3.eth.getBalance(templeteObj.from);
        if (ethBalance < gas) {
            return templeteObj.res.json({
                message: "Not enough eth coin"
            });
        }
        const nonce = await templeteObj.web3.eth.getTransactionCount(templeteObj.from);
        const rawTx = tranferData(nonce, gas, dataEncode, templeteObj.contract);
        if (templeteObj.PrivateKey.length !== 64) {
            const decryptedPrivateKey = crypto.decrypt(templeteObj.PrivateKey, templeteObj.password).slice(2);
            const privateKey = Buffer.from(decryptedPrivateKey, 'hex');
            const tx = new templeteObj.Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            return serializedTx;
        }
        else {
            const privateKey = Buffer.from(templeteObj.PrivateKey, 'hex');
            const tx = new templeteObj.Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            return serializedTx;
        }

    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    sendSignTransaction
}