export const DesSwitch = (des: any) => {
    // console.log(des);
    switch (des) {
        case "PoliceRegister":
            return "การสมัครสมาชิกของเจ้าหน้าที่ตำรวจ";
        case "BanditRegister":
            return "การบันทึกข้อมูลประวัติส่วนตัวของผู้กระทำผิดกฎหมาย";
        case "Portfolio":
            return "ผลงานของเจ้าหน้าที่ตำรวจ";
        case "Supervisor":
            return "การบันทึกดูแลสำนักงานตำรวจ";
        default:
            return 'ไม่พบรายการ';
    }
}