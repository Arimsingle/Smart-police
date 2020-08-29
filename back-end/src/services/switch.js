const { addData, updateDataArray, readDataByUID } = require('./db');
const conditionSwitch = async (collection, uid, data, dataObj, nameDoc) => {
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
                .slice(2), dataObj, nameDoc)
                .catch((error) => {
                    console.log("Error : ", error);
                })
            break;
        case false:
            await addData(collection, uid
                .slice(2), data)
                .catch((error) => {
                    console.log("Error : ", error);
                })
            break;
    }
}
module.exports = {
    conditionSwitch
}
