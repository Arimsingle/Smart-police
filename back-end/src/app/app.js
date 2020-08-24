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
router.route('/something')
    .post(async (req, res) => {

    })
router.route('/history')
    .post(async (req, res) => {
        try {
        } catch (error) {
            console.log(error);
        }

    })


app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(dotenv.parsed.PORT, () => console.log(`Server is running ${dotenv.parsed.PORT}`));