export const TitleSwitch = (title: any) => {
    switch (title) {
        case "PoliceRegister":
            return "การสมัครสมาชิก";
        case "BanditRegister":
            return "การบันทึกข้อมูล";
        case "Supervisor":
            return "ผู้ดูแลสำนักงานตำรวจ";
        default:
            return 'ไม่พบรายการ';
    }
}