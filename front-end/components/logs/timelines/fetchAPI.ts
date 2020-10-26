const axios = require('axios');
export const FetchAPI = async (title: any, accountObj: any) => {
    let dataObj_Ipfs: any = {
        doc: [],
        key: [],
        value: []
    };
    let dataObj_PoliceRegister: any = {
        doc: [],
        key: [],
        value: []
    };
    let dataObj_BanditRegister: any = {
        doc: [],
        key: [],
        value: []
    };
    let dataObj_Portfolio: any = {
        doc: [],
        key: [],
        value: []
    };

    try {
        let response;
        switch (title) {
            case 'Ipfs':
                response = await axios.post("http://localhost:8000/api/ipfs", accountObj);
                for (let i = 0; i < response.data.ipfs.length; i++) {
                    // console.log(response.data.ipfs);
                    await axios.get(response.data.ipfs[i]).then((res: any) => {
                        dataObj_Ipfs.doc.push(res.data.Doc);
                        dataObj_Ipfs.key.push(Object.keys(res.data).splice(0, Object.keys(res.data).length - 2));
                        dataObj_Ipfs.value.push(Object.values(res.data).splice(0, Object.keys(res.data).length - 2));
                    })
                }
                return dataObj_Ipfs;
            case 'PoliceRegister':
                response = await axios.post("http://localhost:8000/api/policeinfo", accountObj);
                for (let i = 0; i < response.data.Ipfs.length; i++) {
                    await axios.get(response.data.Ipfs[i]).then((res: any) => {
                        dataObj_PoliceRegister.doc.push(res.data.Doc);
                        dataObj_PoliceRegister.key.push(Object.keys(res.data).splice(0, Object.keys(res.data).length - 2));
                        dataObj_PoliceRegister.value.push(Object.values(res.data).splice(0, Object.keys(res.data).length - 2));
                    })
                }
                return dataObj_PoliceRegister;
            case 'Portfolio':
                response = await axios.post("http://localhost:8000/api/myportfolio", accountObj); //portfolio
                for (let i = 0; i < response.data.portfolio.length; i++) {
                    await axios.get(response.data.portfolio[i][0]).then((res: any) => {
                        dataObj_Portfolio.doc.push(res.data.Doc);
                        dataObj_Portfolio.key.push(Object.keys(res.data));
                        dataObj_Portfolio.value.push(Object.values(res.data));
                    })
                }
                return dataObj_Portfolio;
            case 'BanditRegister':
                response = await axios.post("http://localhost:8000/api/banditinfo", accountObj);
                // console.log(response);
                for (let i = 0; i < response.data.Ipfs.length; i++) {
                    console.log(response.data.Ipfs);
                    await axios.get(response.data.Ipfs[i]).then((res: any) => {
                        console.log(res.data);
                        dataObj_BanditRegister.doc.push(res.data.Doc);
                        dataObj_BanditRegister.key.push(Object.keys(res.data).splice(0, Object.keys(res.data).length - 1));
                        dataObj_BanditRegister.value.push(Object.values(res.data).splice(0, Object.keys(res.data).length - 1));
                    })
                }
                return dataObj_BanditRegister;
            case 'Supervisor':
                response = await axios.post("http://localhost:8000/api/ipfs", accountObj);
                return response.data;
            default:
                console.log('INVALID VALUE');
                return 'INVALID VALUE';
        }
    } catch (error) {
        console.error(error);
    }
}
