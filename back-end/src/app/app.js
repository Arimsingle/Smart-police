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
require('../routes/register')({ router, web3, Tx, contract_Police, dotenv });
require('../routes/supervisor')({ router, web3, Tx, contract_Police, dotenv });

router.route('/policeinfo') //List data of a police
    .get(async (req, res) => {
        try {
            contract_Police.methods.getPoliceInfo(req.body._Police).call().then(result => {
                res.json({
                    massage: "Call success",
                    Data: result
                })
            })
        } catch (error) {
            res.json({
                massage: "Call faild",
                Error: error
            })
        }
    })
router.route('/historybandit') //List all history who's certifier record bandit ->station
    .get(async (req, res) => {
        try {
            contract_Police.methods.getHistoryBanditArray(req.body._Certifier, req.body._Bandit).call().then(result => {
                res.json({
                    massage: "Call success",
                    Data: result
                })
            })
        } catch (error) {
            res.json({
                massage: "Call faild",
                Error: error
            })
        }

    })
router.route('/certifierbandit') //List who's certifier bandit
    .get(async (req, res) => {
        try {
            contract_Police.methods.getCertifierBandit(req.body._Bandit).call().then(result => {
                res.json({
                    massage: "Call success",
                    Data: result
                })
            })
        } catch (error) {
            res.json({
                massage: "Call faild",
                Error: error
            })
        }

    })
router.route('/recorderBandit') //List who's record bandit
    .get(async (req, res) => {
        try {
            contract_Police.methods.getRecorderBandit(req.body._Recorder).call().then(result => {
                res.json({
                    massage: "Call success",
                    Data: result
                })
            })
        } catch (error) {
            res.json({
                massage: "Call faild",
                Error: error
            })
        }

    })
router.route('/claimer') //List who's claimer set by admin
    .get(async (req, res) => {
        try {
            contract_Police.methods.getClaim(req.body._Recorder).call().then(result => {
                res.json({
                    massage: "Call success",
                    Data: result
                })
            })
        } catch (error) {
            res.json({
                massage: "Call faild",
                Error: error
            })
        }

    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(dotenv.parsed.PORT, () => console.log(`Server is running ${dotenv.parsed.PORT}`));