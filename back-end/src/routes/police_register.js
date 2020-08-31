const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const crypto = require('../utils/cryptography');
const { sendSignTransaction } = require('../services/sendSign');
const { Register, addData } = require('../services/db');
const { tranferCoin, tranferData } = require('../services/rawTx');
require('node-datetime-thai');
module.exports = function ipfsFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/police/register', async (req, res) => {
        var Now = new Date();
        // variable to use subcriber function
        let data = "";
        let topics = [];
        // Create account
        const _Account = web3.eth.accounts.create();
        // encrypt private key
        const _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body._Password);
        // encrypt password
        const _EncryptedPassword = crypto.encrypt(req.body._Password, "Admin");
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
                Name: req.body._Name,
                Surname: req.body._Surname,
                Type: req.body._Type,
                Email: req.body._Email,
                Rank: req.body._Rank,
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

            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            const police_temp = await contract_Police.methods.PoliceInfo(_Account.address, dataPolice.ipfsUri);
            //Fixing for perfomance
            const { serializedTx } = await sendSignTransaction({
                templete: police_temp,
                from: _Account.address,
                contract: dotenv.parsed.CONTRACT_ADDRESS,
                PrivateKey: _EncryptedPrivateKey
            })

            const dataEncode = await police_temp.encodeABI();
            const gas = await police_temp.estimateGas({ from: _Account.address });
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
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                .on('receipt', async (result) => {
                    data = result.logs[0].data;
                    // console.log(result.logs[0].topics);
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
            await Register('PoliceInfo', dataPolice).then(async () => {
                await addData('Decode', dataPolice.Account,
                    {
                        PoliceRegister:
                        {
                            _police: decodedData._police,
                            _publicInfo: decodedData._publicInfo
                        }
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