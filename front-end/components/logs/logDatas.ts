const axios = require('axios');
export const logCardDatas = [
    {
        key: 'myself',
        tab: 'ภาพรวม',
    },
    {
        key: 'others',
        tab: 'บุคคลอื่น',
    },
];
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
