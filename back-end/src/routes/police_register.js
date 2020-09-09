const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const crypto = require('../utils/cryptography');
const { sendSignTransaction } = require('../services/sendSign');
const { Register, addData } = require('../services/db');
const { tranferCoin } = require('../services/rawTx');
require('node-datetime-thai');
module.exports = function ipfsFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/police/register', async (req, res) => {
        // Date times method
        let Now = new Date();
        // variable to use subcriber function
        let data = "";
        let topics = [];
        // Create account
        const _Account = web3.eth.accounts.create();
        // encrypt private key
        const _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body._password);
        // encrypt password
        const _EncryptedPassword = crypto.encrypt(req.body._password, "Admin");
        // Round of address use transaction
        const nonceTransfer = await web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT);
        const rawTx = tranferCoin(nonceTransfer, _Account.address);
        try {
            // decript privatekey
            const privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex');
            const tx = new Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            // Send & sign transaction
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'));
        } catch (error) {
            console.log("Error", error);
        }
        try {
            // data 
            let dataPolice = await {
                Name: req.body._name,
                Surname: req.body._surname,
                Type: req.body._type,
                Email: req.body._email,
                Phone : req.body._phone,
                Rank: req.body._rank,
                Date: Now.toThaiString(3),
                imageUrl: req.body._imageUrl,
                Account: _Account.address.slice(2),
                Supervisor: false,
                Private: {
                    PrivateKey: JSON.stringify(_EncryptedPrivateKey),
                    Password: JSON.stringify(_EncryptedPassword),
                }
            };
            // Data to be buffer
            const bufferPolice = await Buffer.from(JSON.stringify(dataPolice));
            const ipfsUri = await ipfs.add(bufferPolice, { recusive: true });
            dataPolice.ipfsUri = `https://ipfs.infura.io/ipfs/${ipfsUri.path}`;

            const police_temp = await contract_Police.methods.PoliceInfo(_Account.address, dataPolice.ipfsUri);
            // use sendSignTransaction function
            const serializedTx = await sendSignTransaction({
                templete: police_temp,
                from: _Account.address,
                contract: dotenv.parsed.CONTRACT_ADDRESS,
                PrivateKey: _EncryptedPrivateKey,
                password: req.body._password,
                res: res,
                web3: web3,
                Tx: Tx
            }).then((result) => {
                return result;
            })

            // sign & send transaction to blockchain
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

            let PoliceInfoData = {
                _police: decodedData._police,
                _publicInfo: decodedData._publicInfo
            }

            await Register('PoliceInfo', dataPolice).then(async () => {
                await addData('Decode', dataPolice.Account,
                    {
                        PoliceRegister: PoliceInfoData
                    }).then(() => {
                        return res.json({
                            message: 'Register sucess',
                            Result: dataPolice
                        })
                    });
            });
        } catch (error) {
            console.log("Error : ", error);
        }


    });
}