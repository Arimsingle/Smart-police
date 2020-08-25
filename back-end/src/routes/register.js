const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const crypto = require('../utils/cryptography');
const { addData } = require('../services/service');
module.exports = function ipfsFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/register', async (req, res) => {
        let transactionHash = [];
        const _Account = web3.eth.accounts.create();
        const _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body._Password);
        const _EncryptedPassword = crypto.encrypt(req.body._Password, "Admin");
        try {
            const nonceTransfer = await web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT);
            const rawTx = {
                nonce: web3.utils.numberToHex(nonceTransfer),
                gasPrice: web3.utils.numberToHex(web3.utils.toWei('10', 'gwei')),
                gasLimit: web3.utils.numberToHex(21000),
                to: _Account.address,
                value: web3.utils.numberToHex(web3.utils.toWei('1', 'ether')),
            };
            const privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex');
            const tx = new Tx(rawTx);
            tx.sign(privateKey);
            const serializedTx = tx.serialize();
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                .on('receipt', async result => {
                    transactionHash.push(result.transactionHash)
                    // console.log(result);
                });
        } catch (error) {
            console.log(error);
        }
        try {
            let dataPolice = await {
                Name: req.body._Name,
                Surname: req.body._Surname,
                Type: req.body._Type,
                Email: req.body._Email,
                Rank: req.body._Rank,
                imageUrl: req.body._imageUrl,
                Portfolio: req.body._Portfolio,
                TransactionHash: transactionHash,
                Account: _Account.address.substring(2),
                Private: {
                    PrivateKey: JSON.stringify(_EncryptedPrivateKey),
                    Password: JSON.stringify(_EncryptedPassword),
                }
            };
            const bufferPolice = await Buffer.from(JSON.stringify(dataPolice));
            const ipfsUri = await ipfs.add(bufferPolice, { recusive: true });
            dataPolice.ipfsUri = ipfsUri.path;
            const police_temp = await contract_Police.methods.PoliceInfo(_Account.address, dataPolice.ipfsUri);
            const dataEncode = await police_temp.encodeABI();
            const gas = await police_temp.estimateGas({ from: _Account.address });
            const ethBalance = await web3.eth.getBalance(_Account.address);
            if (ethBalance < gas) {
                return res.json({
                    message: "Not enough eth coin"
                });
            }
            const nonce = await web3.eth.getTransactionCount(_Account.address);
            let rawTx = {
                chainId: web3.utils.numberToHex(1515),
                nonce: web3.utils.numberToHex(nonce),
                gasPrice: web3.utils.numberToHex(gas),
                gasLimit: '0x2DC6C0',
                to: dotenv.parsed.CONTRACT_ADDRESS,
                value: web3.utils.numberToHex(0),
                data: dataEncode,
            }
            const decryptedPrivateKey = crypto.decrypt(_EncryptedPrivateKey, req.body._Password).slice(2);
            console.log(decryptedPrivateKey);
            let privateKey = Buffer.from(decryptedPrivateKey, 'hex',);
            let tx = new Tx(rawTx);
            tx.sign(privateKey);
            let serializedTx = tx.serialize();
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
                .on('receipt', (result) => {
                    transactionHash.push(result.transactionHash)
                    // console.log(result);
                });
            await addData(dataPolice);
            return res.send({
                message: "Success",
                Infomation: dataPolice
            });

        } catch (error) {
            console.log(error);
        }


    });
}
//https://ipfs.infura.io/ipfs/