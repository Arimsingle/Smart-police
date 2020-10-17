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
        key: 'report',
        tab: 'บันทึกรายงานนักโทษ',
    },
];
/////////////////////////////////////////////////////////
export const contentOverview: any = {
    show: false,
    content: "ภาพรวม"
}
export const contentRegister: any = {
    show: true,
    content: "สมัครสมาชิก"
}
export const contentPortfolio: any = {
    show: true,
    content: "ผลงานที่ได้"
}
export const contentReport: any = {
    show: true,
    content: "บันทึกรายงานนักโทษ"
}
/////////////////////////////////////////////////////////
export const urlRegisterAPI = {
    title: "ข้อมูลเจ้าหน้าที่ตำรวจ",
    keys: ["ชื่อ", "นามสกุล", "ประเภท", "อีเมลล์", "เบอร์โทรศัพท์", "ระดับ", "วันที่สมัคร", "รูปภาพ", "รหัสผู้ใช้", "ที่อยู่", "สิทธิพิเศษ"],
    url: "https://ipfs.infura.io/ipfs/QmSKJzFEG53PimJMgjp4nMeTrgRJGAvusUByJ8Ab1HgSo8"
}
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
