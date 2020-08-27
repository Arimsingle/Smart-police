const { addData, updateDataArray, readDataByUID } = require('./db');
// const bodyParser = require('body-parser');
const conditionArray = async (collection, uid, data, req, res) => {
    const validator = await readDataByUID(collection, uid
        .slice(2))
        .then((result) => {
            if (result) {
                return true;
            }
            return false;
        }).catch((error) => {
            console.log("Error : ", error);
        })
    switch (validator) {
        case true:
            await updateDataArray(collection, uid
                .slice(2), data.Result[0])
                .then(() => {
                    return res.json({
                        message: `${collection} sucess`,
                        Result: data.Result[0]
                    })
                }).catch((error) => {
                    console.log("Error : ", error);
                })
            break;
        case false:
            await addData(collection, uid
                .slice(2), data)
                .then(() => {
                    return res.json({
                        message: `${collection} sucess`,
                        Result: data.Result[0]
                    })
                }).catch((error) => {
                    console.log("Error : ", error);
                })
            break;
    }
}
module.exports = {
    conditionArray
}
