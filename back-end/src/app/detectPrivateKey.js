
const { web3 } = require('../web3/web3');
let a = web3.eth.accounts.decrypt({"address":"a85ffb7c9b646cc0f03bf899e38a1ac950641331","crypto":{"cipher":"aes-128-ctr","ciphertext":"1882701d357654e5d84e0df8e53a1f161b4d80fcb45519ff5772155553bcd780","cipherparams":{"iv":"f69147360e5772ca8fee0bd2e51ee391"},"kdf":"scrypt","kdfparams":{"dklen":32,"n":262144,"p":1,"r":8,"salt":"4cb38006fa9cf846c5f986d87ad2f587c35f50ed662c80968da5522579dcf5a0"},"mac":"a5ee151cf51f2b529cb0d3cf7e12bcc85bb2599e2cbb16e32db92d5fbd4fbffa"},"id":"bcf63650-86ed-4439-bd9f-645b42736491","version":3}, 'psu');
console.log(a);