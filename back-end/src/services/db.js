//https://firebase.google.com/docs/firestore/query-data/get-data
const { db } = require('../database/db');
const admin = require('firebase-admin');
const firebase = require('firebase');
const Register = async (collection, data) => {
    await db.collection(collection).doc(data.Account).set(data);
}
const addData = async (collection, account, data) => {
    await db.collection(collection).doc(account).set(data);
}
const updateDataArray = async (collection, account, data) => {
    await db.collection(collection).doc(account).update({
        Result: firebase.firestore.FieldValue.arrayUnion(
            data
        )
    });

}

const deleteData = async (data) => {
    await db.collection('cities').doc('DC').delete();
}
const readData = async (data) => {
}
const readDataByUID = async (collection, account) => {
    try {
        return await db.collection(collection).doc(account).get().then((result) => {
            if (result) {
                return result.data();
            }
            return false;
        });
    } catch (error) {
        console.log("Error readDataByUID : ", error);
    }

}
const updateData = async (collection, account, data) => {
    await db.collection(collection).doc(account).update({ Supervisor: true });
}
module.exports = {
    Register,
    addData,
    deleteData,
    readData,
    updateData,
    readDataByUID,
    updateDataArray
};