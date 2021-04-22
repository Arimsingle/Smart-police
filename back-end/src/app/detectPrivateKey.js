const { web3 } = require("../web3/web3");
let privateKey = web3.eth.accounts.decrypt(
  {
    address: "ce62103925c6c86459ae8e016946ca776d595b8a",
    crypto: {
      cipher: "aes-128-ctr",
      ciphertext:
        "213fbe96c1f9626b563a3c0db1fef0b4312dc37b48f59b41dee0a2640680937c",
      cipherparams: { iv: "dee4f780191e9644fe76ff73fe11287a" },
      kdf: "scrypt",
      kdfparams: {
        dklen: 32,
        n: 262144,
        p: 1,
        r: 8,
        salt:
          "b98302e3cc0acbbb0c7c010c970692c4cd87b5ef3ff9a1f499b9d3a01f825871",
      },
      mac: "db6aec0da84cc3b2518cdc77f60cc336f615121a517180106ab8673835b849f5",
    },
    id: "a369dcdd-7980-4250-a739-b7ae59bb11de",
    version: 3,
  },
  "psu"
);
console.log(privateKey);
