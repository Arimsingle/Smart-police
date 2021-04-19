const { readDataByUID } = require('../services/db');
const findPrivateKey = async (collection, account, res) => {
    try {
        const { Private: { PrivateKey } } = await readDataByUID(collection, account);
        return PrivateKey;
    } catch (error) {
        return res.json({
            Error: "Not have police account"
        })
    }

}
module.exports = {
    findPrivateKey
}