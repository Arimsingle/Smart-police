const axios = require('axios');
export const FetchAPI = async (title: any, accountObj: any) => {
    let dataObj: any = {
        doc: [],
        key: [],
        value: []
    };
    try {
        let response;
        switch (title) {
            case 'PoliceRegister':
                response = await axios.post("http://localhost:8000/api/ipfs", accountObj);
                for (let i = 0; i < response.data.length; i++) {
                    await axios.get(response.data).then((res: any) => {
                        console.log(res.data);
                    })
                }
                console.log(response.data);
                return response.data;
            case 'BanditRegister':
                response = await axios.post("http://localhost:8000/api/ipfs", accountObj);
                console.log(response.data);
                return response.data;
            case 'Supervisor':
                response = await axios.post("http://localhost:8000/api/ipfs", accountObj);
                console.log(response.data);
                return response.data;
            case 'Ipfs':
                response = await axios.post("http://localhost:8000/api/ipfs", accountObj);
                for (let i = 0; i < response.data.ipfs.length; i++) {
                    await axios.get(response.data.ipfs[i]).then((res: any) => {
                        console.log(res.data.Doc);
                        dataObj.doc.push(res.data.Doc);
                        dataObj.key.push(Object.keys(res.data));
                        dataObj.value.push(Object.values(res.data));
                    })
                }
                return dataObj;
            default:
                return 'INVALID VALUE';
        }
    } catch (error) {
        console.error(error);
    }
}
