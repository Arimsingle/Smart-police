const { web3 } = require('../web3/web3');
const tranferCoin = (nonce, account) => {
    const rawTx = { // Data for send to transaction
        chainId: web3.utils.numberToHex(1515),
        nonce: web3.utils.numberToHex(nonce),
        gasPrice: web3.utils.numberToHex(web3.utils.toWei('10', 'gwei')),
        gasLimit: web3.utils.numberToHex(21000),
        to: account,
        value: web3.utils.numberToHex(web3.utils.toWei('1', 'ether')), // Send 1 eth 
    };
    return rawTx;
}
const tranferData = (nonce, gas, dataEncode, contractAddress) => {
    const rawTx = { // Data for send to transaction
        chainId: web3.utils.numberToHex(1515),
        nonce: web3.utils.numberToHex(nonce),
        gasPrice: web3.utils.numberToHex(gas),
        gasLimit: '0x2DC6C0',
        to: contractAddress,
        value: web3.utils.numberToHex(0),
        data: dataEncode,
    };
    return rawTx;
}
module.exports = { tranferCoin, tranferData };