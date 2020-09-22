// add change logs
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const cors = require('cors');
const app = express();
const dotenv = require('dotenv').config({ path: '../../.env' });
const { web3 } = require('../web3/web3');
const { abi } = require('../web3/abi');
const contract_Police = new web3.eth.Contract(abi, dotenv.parsed.CONTRACT_ADDRESS);
const Tx = require('ethereumjs-tx');

// use module
app.use(cors());
app.use('/api', bodyParser.json(), router);
app.use('/api', bodyParser.urlencoded({ extended: false }), router);
// import other component
require('../routes/police_register')({ router, web3, Tx, contract_Police, dotenv });
require('../routes/bandit_register')({ router, web3, Tx, contract_Police, dotenv });
require('../routes/supervisor')({ router, web3, Tx, contract_Police, dotenv });
require('../routes/record')({ router, web3, Tx, contract_Police, dotenv });
require('../routes/portfolio')({ router, web3, Tx, contract_Police, dotenv });
// List infomation of a police
router.route('/policeinfo')
    .post(async (req, res) => {
        try {
            contract_Police.methods.getPoliceInfo(req.body.police).call().then((result) => {
                return res.json({
                    massage: "Call method success",
                    Ipfs: result
                })
            })
        } catch (error) {
            return res.json({
                massage: "Call method faild",
                Error: error
            })
        }
    })

router.route('/banditinfo')
    .post(async (req, res) => {
        try {
            contract_Police.methods.getBanditInfo(req.body.bandit).call().then((result) => {
                return res.json({
                    massage: "Call method success",
                    Ipfs: result
                })
            })
        } catch (error) {
            return res.json({
                massage: "Call method faild",
                Error: error
            })
        }
    })
// List all history who's certifier record bandit -> like station maybe :D
router.route('/historybandit')
    .post(async (req, res) => {
        try {
            contract_Police.methods.getHistoryBanditArray(req.body.certifier, req.body._bandit).call().then((result) => {
                return res.json({
                    massage: "Call method success",
                    Data: result
                })
            })
        } catch (error) {
            return res.json({
                massage: "Call method faild",
                Error: error
            })
        }

    })
// List who's certifier bandit (Certifier[])
router.route('/certifierbandit')
    .post(async (req, res) => {
        try {
            contract_Police.methods.getCertifierBandit(req.body.bandit).call().then((result) => {
                return res.json({
                    massage: "Call method success",
                    Data: result
                })
            })
        } catch (error) {
            return res.json({
                massage: "Call method faild",
                Error: error
            })
        }

    })
// List who's record bandit (address[])
router.route('/recorderBandit')
    .post(async (req, res) => {
        try {
            contract_Police.methods.getRecorderBandit(req.body.recorder).call().then((result) => {
                return res.json({
                    massage: "Call method success",
                    recorder: result
                })
            })
        } catch (error) {
            return res.json({
                massage: "Call method faild",
                Error: error
            })
        }

    })
// List status of supervisor (boolean)
router.route('/claimer')
    .post(async (req, res) => {
        try {
            contract_Police.methods.getClaim(req.body.supervisor).call().then((result) => {
                return res.json({
                    massage: "Call method success",
                    supervisor: result
                })
            })
        } catch (error) {
            return res.json({
                massage: "Call method faild",
                Error: error
            })
        }

    })
// List balance
router.route('/balance')
    .post(async (req, res) => {
        try {
            await web3.eth.getBalance(req.body.police).then((result) => {
                return res.json({
                    massage: "Call method success",
                    balance: result
                })
            })
        } catch (error) {
            return res.json({
                massage: "Call method faild",
                Error: error
            })
        }
    })
// List ipfs link
router.route('/ipfs')
    .post(async (req, res) => {
        try {
            await contract_Police.methods.getIpfs(req.body.account).call().then((result) => {
                console.log(result);
                return res.json({
                    massage: "Call method success",
                    ipfs: result
                })
            })
        } catch (error) {
            console.log(error);
            return res.json({
                massage: "Call method faild",
                Error: error
            })
        }
    })


app.use("*", (req, res) => res.status(404).send(res));
app.listen(dotenv.parsed.PORT, () => console.log(`Server is running ${dotenv.parsed.PORT}`));