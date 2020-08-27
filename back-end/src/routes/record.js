module.exports = function ipfsFunction({ router, web3, Tx, contract_Police, dotenv }) {
    router.post('/register', async (req, res) => {
        try {
            const police_temp = await contract_Police.methods.setHistoryBandit(req.body._Supervisor, req.body._Bandit, req.body._PublicInfo);
            const dataEncode = await police_temp.encodeABI();
            const gas = await police_temp.estimateGas({ from: dotenv.parsed.ACCOUNT });
            const ethBalance = await web3.eth.getBalance(dotenv.parsed.ACCOUNT);
            if (ethBalance < gas) {
                return res.json({
                    message: "Not enough eth coin"
                })
            }
            const nonce = await web3.eth.getTransactionCount(dotenv.parsed.ACCOUNT);
        } catch (error) {

        }
    });
}