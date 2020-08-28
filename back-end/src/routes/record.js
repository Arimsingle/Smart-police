const crypto = require('../utils/cryptography');

const { tranferData } = require('../services/rawTx');
const { findPrivateKey } = require('../services/privatekey');
module.exports = function ipfsFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/record', async (req, res) => {
        // find private key in database 
        //ตอนนี้ใช้ collecion police ไปก่อน
        const PrivateKey = await findPrivateKey('Police', req.body._supervisor.slice(2), res).then((result) => {
            return result;
        });
        // console.log(PrivateKey);
        try {
            // _PublicInfo ข้อมูลของคดี
            const police_temp = await contract_Police.methods.setHistoryBandit(
                req.body._supervisor,
                req.body._bandit,
                req.body._publicInfo);
            const dataEncode = await police_temp.encodeABI();
            const gas = await police_temp.estimateGas({ from: req.body._supervisor });
            const ethBalance = await web3.eth.getBalance(req.body._supervisor);
            if (ethBalance < gas) {
                return res.json({
                    message: "Not enough eth coin"
                })
            }
            const nonce = await web3.eth.getTransactionCount(req.body._supervisor);
            const rawTx = tranferData(nonce, gas, dataEncode, dotenv.parsed.CONTRACT_ADDRESS);
            const decryptedPrivateKey = crypto.decrypt(JSON.parse(PrivateKey), req.body._password).slice(2);
            const privateKey = Buffer.from(decryptedPrivateKey, 'hex');
            const tx = new Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).then(() => {
                return res.json({
                    _supervisor: req.body._supervisor,
                    _bandit: req.body._bandit,
                    _publicInfo: req.body._publicInfo
                })
            })
        } catch (error) {
            console.log(error);
        }
    });
}