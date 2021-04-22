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
        const _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body.password);
        console.log("-----------------------");
        console.log(dotenv.parsed.PRIVATE_KEY);
        // encrypt password
        const _EncryptedPassword = crypto.encrypt(req.body.password, "Admin");
        // Round of address use transaction
        const nonceTransfer = await web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT);
        console.log(nonceTransfer);
        const rawTx = tranferCoin(nonceTransfer, _Account.address);
        try {
            // decript privatekey
            const privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex');
            console.log(privateKey);
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
                Name: req.body.username,
                Surname: req.body.surname,
                Type: "Police",
                Email: req.body.email,
                Phone: req.body.phone,
                Rank: "STARS",
                Date: Now.toThaiString(3),
                imageUrl: "Loading...",
                Account: _Account.address.slice(2),
                Address: req.body.address,
                Doc: "PoliceRegister",
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
                password: req.body.password,
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

            const ipfs_temp = await contract_Police.methods.addIpfs(_Account.address, dataPolice.ipfsUri);
            const serializedTx_ipfs = await sendSignTransaction({
                templete: ipfs_temp,
                from: _Account.address,
                contract: dotenv.parsed.CONTRACT_ADDRESS,
                PrivateKey: _EncryptedPrivateKey,
                password: req.body.password,
                res: res,
                web3: web3,
                Tx: Tx
            }).then((result) => {
                return result;
            })
            await web3.eth.sendSignedTransaction('0x' + serializedTx_ipfs.toString('hex')).catch((error) => console.log(error))

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
                police: decodedData._police,
                publicInfo: decodedData._publicInfo
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