//https://firebase.google.com/docs/firestore/query-data/get-data
const { db } = require('../database/db');

const addData = async (data) => {
    await db.collection().doc().set();
}
const deleteData = async (data) => {
    await db.collection('cities').doc('DC').delete();
}
const readData = async (data) => {
}
const updateData = async (data) => {
}