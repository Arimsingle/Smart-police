geth --datadir node1/ --syncmode 'full' --port 30311 --http --http.addr 'localhost' --http.port 8501 --http.corsdomain "*" --http.api 'personal,debug,eth,net,web3,txpool,miner' --ws --ws.addr 'localhost' --ws.port 8546 --ws.origins '*' --ws.api 'personal,admin,eth,net,web3,miner,txpool,debug' --bootnodes 'enode://95b8ee4b272637788a766c702035c9d26a02dcaf59626bc0438b27f3378873b6955280d1fbe6dc334ad38f52865730e7c2b576153731a49a66128fd44c0821f9@127.0.0.1:0?discport=30310' --networkid 1515 --miner.gasprice '1' --unlock '0x9a8e57752a2B5b5A5c3DddFCbDA3E25907b930E2' --mine --ipcdisable --allow-insecure-unlock