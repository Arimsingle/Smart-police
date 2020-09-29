export const DesSwitch = (des: any) => {
    switch (des) {
        case "PoliceRegister":
            return "การสมัครสมาชิกของเจ้าหน้าที่ตำรวจ";
        case "BanditRegister":
            return "การบันทึกข้อมูลของผู้กระทำผิดกฎหมาย";
        case "Supervisor":
            return "การบันทึกดูแลสำนักงานตำรวจ";
        default:
            return 'ไม่พบรายการ';
    }
}