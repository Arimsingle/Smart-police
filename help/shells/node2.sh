geth --datadir node2/ --syncmode 'full' --port 30312 --http --http.addr 'localhost' --http.port 8502 --http.corsdomain "*" --http.api 'personal,debug,eth,net,web3,txpool,miner' --ws --ws.addr 'localhost' --ws.port 8547 --ws.origins '*' --ws.api 'personal,admin,eth,net,web3,miner,txpool,debug' --bootnodes 'enode://76580efa8387e4d09787f0398e0d567bbc26d8b286e0c2fdf37dc17e1f3e26d081b2959dcf003f3da660649dbc24b8364dccac49c8eb09160ef22f06ccac7ff7@127.0.0.1:0?discport=30310' --networkid 1515 --miner.gasprice '0' --unlock '0x040dE01186f3420B36361a0EdfFdd4176f3b523D' --mine --ipcdisable --allow-insecure-unlock