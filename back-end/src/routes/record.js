const crypto = require('../utils/cryptography');
const { conditionSwitch } = require('../services/switch');
const { tranferData } = require('../services/rawTx');
const { findPrivateKey } = require('../services/privatekey');
module.exports = function ipfsFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/record', async (req, res) => {
        // find private key in database 
        let data = "";
        // let data2 = "";
        let topics = [];
        // let topics2 = [];
        //ตอนนี้ใช้ collecion police ไปก่อน
        const PrivateKey = await findPrivateKey('PoliceInfo', req.body._supervisor.slice(2), res).then((result) => {
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
            /////////////////////////////////////////////////////////////
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                .on('receipt', async (result) => {
                    data = result.logs[1].data;
                    for (let i = 0; i < result.logs.length; i++) {
                        topics.push(result.logs[0].topics[i + 1]);
                    }
                });
            let decodedHistoty = await web3.eth.abi.decodeLog([
                {
                    "indexed": true,
                    "name": "_admin",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_bandit",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "name": "_publicInfo",
                    "type": "string"
                }
            ], data, topics);
            let decodedRecord = await web3.eth.abi.decodeLog([
                {
                    "indexed": true,
                    "name": "_supervisor",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "name": "_bandit",
                    "type": "address"
                }
            ], data, topics);
            let banditHistoryData = {
                _police: decodedHistoty._admin,
                _bandit: decodedHistoty._bandit,
                _publicInfo: decodedHistoty._publicInfo
            }
            let recordBanditData = {
                _supervisor: decodedRecord._supervisor,
                _bandit: decodedRecord._bandit
            }
            await conditionSwitch('Decode', req.body._bandit, {
                BanditHistory:
                    [
                        banditHistoryData
                    ] //data
            }, banditHistoryData, 'BanditHistory').then(async () => {
                await conditionSwitch('Decode', req.body._supervisor, {
                    RecordBandit:
                        [
                            recordBanditData
                        ] //data
                }, recordBanditData, 'RecordBandit')
            }).then(() => {
                return res.json({
                    message: "Set historyBandit & recordBandit success :)",
                    historyBandit: banditHistoryData,
                    recordBandit: recordBanditData
                });
            });

        } catch (error) {
            console.log(error);
        }
    });
}