//https://firebase.google.com/docs/firestore/query-data/get-data
const { db } = require('../database/db');

const addData = async (dataPolice) => {
    await db.collection('Police').doc(dataPolice.Email).set(dataPolice);
}
const deleteData = async (data) => {
    await db.collection('cities').doc('DC').delete();
}
const readData = async (data) => {
}
const updateData = async (data) => {
}
module.exports = {
    addData,
    deleteData,
    readData,
    updateData
};