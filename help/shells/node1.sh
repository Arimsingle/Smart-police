geth --datadir node1/ --syncmode 'full' --port 30311 --http --http.addr 'localhost' --http.port 8501 --http.corsdomain "*" --http.api 'personal,debug,eth,net,web3,txpool,miner' --ws --ws.addr 'localhost' --ws.port 8546 --ws.origins '*' --ws.api 'personal,admin,eth,net,web3,miner,txpool,debug' --bootnodes 'enode://9f5d687e7a1be85c92609b77594b145d5ca00fde184a2571a15cf31b8a066ce1d911348d54bf29bcfd47916a259a44f25693edbe8a1cafa49912c59bbeaa82c1@127.0.0.1:0?discport=30310' --networkid 1515 --miner.gasprice '1' --unlock '0x07337de547a32B40661230ac6bc6F2EB7b83976E' --mine --ipcdisable --allow-insecure-unlock