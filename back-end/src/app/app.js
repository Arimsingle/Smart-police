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
    .get(async (req, res) => {
        try {
            contract_Police.methods.getPoliceInfo(req.body._police).call().then((result) => {
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
// List all history who's certifier record bandit -> like station maybe :D
router.route('/historybandit')
    .get(async (req, res) => {
        try {
            contract_Police.methods.getHistoryBanditArray(req.body._certifier, req.body._bandit).call().then((result) => {
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
    .get(async (req, res) => {
        try {
            contract_Police.methods.getCertifierBandit(req.body._bandit).call().then((result) => {
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
    .get(async (req, res) => {
        try {
            contract_Police.methods.getRecorderBandit(req.body._recorder).call().then((result) => {
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
    .get(async (req, res) => {
        try {
            contract_Police.methods.getClaim(req.body._supervisor).call().then((result) => {
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
    .get(async (req, res) => {
        try {
            await web3.eth.getBalance(req.body._police).then((result) => {
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
    .get(async (req, res) => {
        try {
            await web3.eth.getIpfs(req.body._police).then((result) => {
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


app.use("*", (req, res) => res.status(404).send(res));
app.listen(dotenv.parsed.PORT, () => console.log(`Server is running ${dotenv.parsed.PORT}`));