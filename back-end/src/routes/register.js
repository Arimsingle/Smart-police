const IPFS = require('ipfs-http-client');
const ipfs = new IPFS({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
const crypto = require('../utils/cryptography');
const { addData, deleteData, readData, updateData } = require('../service/service');
module.exports = function ipfsFunction({ router, web3 }) {
    router.post('/policeRegister', async (req, res) => {
        try {
            const _Account = web3.eth.accounts.create();
            const _EncryptedPrivateKey = crypto.encrypt(_Account.privateKey, req.body._Password);
            const _EncryptedPassword = crypto.encrypt(req.body._Password, "Admin");
            const dataPolice = await {
                Name: req.body._Name,
                Surname: req.body._Surname,
                Type: req.body._Type,
                Email: req.body._Email,
                Rank: req.body._Rank,
                imageUrl: req.body._imageUrl,
                Portfolio: req.body._Portfolio,
                Account: _Account.address.substring(2),
                Private: {
                    PrivateKey: JSON.stringify(_EncryptedPrivateKey),
                    Password: JSON.stringify(_EncryptedPassword),
                }
            };
            const bufferPolice = Buffer.from(JSON.stringify(dataPolice));
            const ipfsUri = await ipfs.add(bufferPolice, { recusive: true });
            dataPolice.ipfsUri = ipfsUri.path;
            await addData(dataPolice);
            await res.json(dataPolice);
        } catch (error) {
            console.log("Error", error);
        }
    });
}
//https://ipfs.infura.io/ipfs/