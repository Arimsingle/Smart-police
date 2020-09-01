const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
// const dateTime = require('node-datetime');
const crypto = require('../utils/cryptography');
const { Register, addData } = require('../services/db');
const { tranferData } = require('../services/rawTx');
const { findPrivateKey } = require('../services/privatekey');
const { sendSignTransaction } = require('../services/sendSign');
require('node-datetime-thai');
module.exports = function ipfsFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/bandit/register', async (req, res) => {
        const Now = new Date();
        // variable to use subcriber function
        let data = "";
        let topics = [];
        // Create account
        const _Account = web3.eth.accounts.create();
        // encrypt private key
        const _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, "Police");
        const PrivateKey = await findPrivateKey('PoliceInfo', req.body._police.slice(2), res).then((result) => {
            return result;
        });
        try {
            // data 
            let dataBandit = await {
                Name: req.body._name,
                Surname: req.body._surname,
                Type: req.body._type,
                Email: req.body._email,
                Rank: req.body._rank,
                imageUrl: req.body._imageUrl,
                Date: Now.toThaiString(3),
                Account: _Account.address.slice(2),
                Police: req.body._police,
                Private: {
                    PrivateKey: JSON.stringify(_EncryptedPrivateKey)
                }
            };
            // Data to be buffer
            const bufferBandit = await Buffer.from(JSON.stringify(dataBandit));
            const ipfsUri = await ipfs.add(bufferBandit, { recusive: true });
            dataBandit.ipfsUri = `https://ipfs.infura.io/ipfs/${ipfsUri.path}`;
            const bandit_temp = await contract_Police.methods.Bandit_Info(_Account.address, dataBandit.ipfsUri);
            // use sendSignTransaction function
            const serializedTx = await sendSignTransaction({
                templete: bandit_temp,
                from: req.body._police,
                contract: dotenv.parsed.CONTRACT_ADDRESS,
                PrivateKey: JSON.parse(PrivateKey),
                password: req.body._password,
                res: res,
                web3: web3,
                Tx: Tx
            }).then((result) => {
                return result;
            })
            // sendSignedTransaction to blockcahin
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                .on('receipt', async (result) => {
                    data = result.logs[0].data;
                    for (let i = 1; i < result.logs[0].topics.length + 1; i++) {
                        topics.push(result.logs[0].topics[i]);
                    }
                });
            // input data to decode
            let decodedData = await web3.eth.abi.decodeLog([
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
            await Register("BanditInfo", dataBandit).then(async () => {
                await addData('Decode', dataBandit.Account,
                    {
                        BanditRegister:
                        {
                            _bandit: decodedData._bandit,
                            _publicInfo: decodedData._publicInfo
                        }
                    }).then(() => {
                        return res.json({
                            message: 'Register sucess',
                            Result: dataBandit
                        })
                    });
            });
        } catch (error) {
            console.log("Error : ", error);
        }
    });
}