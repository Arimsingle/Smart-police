const axios = require('axios');
/////////////////////////////////////////////////////////
export const logCardDatas = [
    {
        key: 'overview',
        tab: 'ภาพรวม',
    },
    {
        key: 'register',
        tab: 'สมัครสมาชิก',
    },
    {
        key: 'portfolio',
        tab: 'ผลงานที่ได้ทำ',
    },
    {
        key: 'authentication',
        tab: 'ระบุตัวตน',
    },
];
/////////////////////////////////////////////////////////
export const contentOverview: any = {
    show: false,
    content: "ภาพรวม",
    title: "Ipfs",
}
export const contentRegister: any = {
    show: true,
    content: "สมัครสมาชิก",
    title: "PoliceRegister"
}
export const contentPortfolio: any = {
    show: true,
    content: "ผลงานที่ได้",
    title: "Portfolio"
}
//ยังไม่ได้ใช้
export const contentEthereum: any = {
    show: true,
    content: "เหรียญ",
    title: "Balance"
}
/////////////////////////////////////////////////////////
export const titileRegister = ["ชื่อ", "นามสกุล", "ประเภท", "อีเมลล์", "เบอร์โทรศัพท์", "ระดับ", "วันที่สมัคร", "รูปภาพ", "บัญชีผู้ใช้", "ที่อยู่", "สิทธิพิเศษ"]
export const titileRegisterBandit = ["ชื่อ", "นามสกุล", "ประเภท", "อีเมลล์", "เบอร์โทรศัพท์", "รูปภาพ", "วันที่สมัคร", "ที่อยู่", "บัญชีผู้ใช้", "ตำรวจ"]
export const urlSupervisor = {
    title: "หัวหน้า",
    keys: ["ชื่อ", "นามสกุล", "ประเภท", "อีเมลล์", "เบอร์โทรศัพท์", "ระดับ", "วันที่สมัคร", "รูปภาพ", "รหัสผู้ใช้", "ที่อยู่", "สิทธิพิเศษ"],
    url: "https://ipfs.infura.io/ipfs/QmZG4MAa64RnkcXvxZ4rzqm9yHVy1MGoHWJB3d56n7BYqH"
}
export const Register = async (url: any) => {
    try {
        const response = await axios.get(url);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
