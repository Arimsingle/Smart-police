const { web3 } = require("../web3/web3");
let privateKey = web3.eth.accounts.decrypt(
  {
    address: "2d9b0f491ffa192ac47b5afd512084cea4bc338a",
    crypto: {
      cipher: "aes-128-ctr",
      ciphertext:
        "b9e100ab66ebe4a9bb11fb6a0e0f21468a6f2e687b7b0ba0154910c3e569da04",
      cipherparams: { iv: "65526c8373267b9a472425f12ef8b59f" },
      kdf: "scrypt",
      kdfparams: {
        dklen: 32,
        n: 262144,
        p: 1,
        r: 8,
        salt:
          "520f5c5814627d7c0df392a0b9a6292a8852ba727c3a4d65ca46d4fd9c93dbfb",
      },
      mac: "e6bca2db6cfc8f92a0416f771d79a9e7c750fb5235fd51f4a9ba4507a1d2f153",
    },
    id: "a506b919-7a97-4c13-b30e-63349302ad49",
    version: 3,
  },
  "psu"
);
console.log(privateKey);