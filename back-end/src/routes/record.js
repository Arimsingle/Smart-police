const crypto = require('../utils/cryptography');
const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const { conditionSwitch } = require('../services/switch');
const { findPrivateKey } = require('../services/privatekey');
const { sendSignTransaction } = require('../services/sendSign');

module.exports = function ipfsFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/record', async (req, res) => {
        // find private key in database 
        let data = "";
        let topics = [];
        console.log(req.body.supervisor);
        const PrivateKey = await findPrivateKey('PoliceInfo', req.body.supervisor.slice(2), res).then((result) => {
            return result;
        });
        try {
            // _PublicInfo ข้อมูลของคดี
            const record_temp = await contract_Police.methods.setHistoryBandit(
                req.body.supervisor,
                req.body.bandit,
                req.body.publicInfo);
            const serializedTx = await sendSignTransaction({
                templete: record_temp,
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
            console.log(serializedTx);
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
                police: decodedHistoty._admin,
                bandit: decodedHistoty._bandit,
                publicInfo: decodedHistoty._publicInfo
            }
            const bufferBanditHistory = await Buffer.from(JSON.stringify({ BanditHistoryData: banditHistoryData }));
            const ipfsUri = await ipfs.add(bufferBanditHistory, { recusive: true });
            banditHistoryData.ipfsUri = `https://ipfs.infura.io/ipfs/${ipfsUri.path}`;

            ////////////////////////////////////////////////////IPSF//////////////////////////////////////////////////
            const ipfs_temp = await contract_Police.methods.addIpfs(req.body.supervisor, banditHistoryData.ipfsUri);
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
            console.log(serializedTx_ipfs);
            await web3.eth.sendSignedTransaction('0x' + serializedTx_ipfs.toString('hex')).catch((error) => console.log(error))
            ////////////////////////////////////////////////////IPSF//////////////////////////////////////////////////


            let recordBanditData = {
                supervisor: decodedRecord._supervisor,
                bandit: decodedRecord._bandit
            }



            const bufferRecordBandit = await Buffer.from(JSON.stringify({ BanditHistoryData: recordBanditData }));
            const ipfsUriRecord = await ipfs.add(bufferRecordBandit, { recusive: true });
            recordBanditData.ipfsUriRecord = `https://ipfs.infura.io/ipfs/${ipfsUriRecord.path}`;
            ////////////////////////////////////////////////////IPSF//////////////////////////////////////////////////
            const ipfs_temp_record = await contract_Police.methods.addIpfs(req.body.supervisor, recordBanditData.ipfsUriRecord);
            const serializedTx_ipfs_record = await sendSignTransaction({
                templete: ipfs_temp_record,
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
            await web3.eth.sendSignedTransaction('0x' + serializedTx_ipfs_record.toString('hex')).catch((error) => console.log(error))
            ////////////////////////////////////////////////////IPSF//////////////////////////////////////////////////
            console.log(serializedTx_ipfs_record);

            await conditionSwitch('Decode', req.body.bandit, {
                BanditHistory:
                    [
                        banditHistoryData
                    ] //data
            }, banditHistoryData, 'BanditHistory').then(async () => {
                await conditionSwitch('Decode', req.body.supervisor, {
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