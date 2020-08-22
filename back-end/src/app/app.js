const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const app = express();
const { web3 } = require('../web3/web3');
const { abi } = require('../web3/abi');
const dotenv = require('dotenv').config({ path: '../../.env' });
const contract_Police = new web3.eth.Contract(abi, dotenv.parsed.CONTRACT_ADDRESS);
const Tx = require('ethereumjs-tx');
app.use(cors());
app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended: false }), router);
require('../routes/register')({ router, web3 });
router.route('/supervisor')
    .post(async (req, res) => {
        try {
            const police_temp = await contract_Police.methods.setSupervisor(req.body._supervisor);
            const dataEncode = await police_temp.encodeABI();
            const gas = await police_temp.estimateGas({ from: dotenv.parsed.ACCOUNT });
            const ethBalance = await web3.eth.getBalance(dotenv.parsed.ACCOUNT);
            if (ethBalance < gas) {
                return res.json({
                    message: "Not enough eth coin"
                })
            }
            const nonce = await web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT)
            let rawTx = {
                chainId: web3.utils.numberToHex(1515),
                nonce: web3.utils.numberToHex(nonce), //web3.utils.toHex
                gasPrice: web3.utils.numberToHex(gas),
                gasLimit: '0x2DC6C0',
                to: dotenv.parsed.CONTRACT_ADDRESS,
                value: web3.utils.numberToHex(0),
                data: dataEncode,
            }
            let privateKey = Buffer.from(dotenv.parsed.PRIVATE_KEY, 'hex',);
            let tx = new Tx(rawTx);
            tx.sign(privateKey);
            let serializedTx = tx.serialize();
            await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', console.log);
            return res.json({
                status: 200,
                message: 'set supervisor success',
                from: dotenv.parsed.ACCOUNT.toString(),
                to: req.body._supervisor.toString()
            })
        } catch (error) {
            console.log(error);
        }
    })
router.route('/history')
    .post(async (req, res) => {
        try {
            const police_temp = await contract_Police.methods.setHistoryBandit();
        } catch (error) {
            console.log(error);
        }

    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(dotenv.parsed.PORT, () => console.log(`Server is running ${dotenv.parsed.PORT}`));