geth --datadir node1/ --syncmode 'full' --port 30311 --http --http.addr 'localhost' --http.port 8501 --http.corsdomain "*" --http.api 'personal,debug,eth,net,web3,txpool,miner' --ws --ws.addr 'localhost' --ws.port 8546 --ws.origins '*' --ws.api 'personal,admin,eth,net,web3,miner,txpool,debug' --bootnodes 'enode://76580efa8387e4d09787f0398e0d567bbc26d8b286e0c2fdf37dc17e1f3e26d081b2959dcf003f3da660649dbc24b8364dccac49c8eb09160ef22f06ccac7ff7@127.0.0.1:0?discport=30310' --networkid 1515 --miner.gasprice '1' --unlock '0x2D9B0F491fFa192ac47B5afD512084cea4Bc338A' --mine --ipcdisable --allow-insecure-unlock