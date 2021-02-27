export const TitleSwitch = (title: any) => {
    // console.log(title);
    
    switch (title) {
        case "PoliceRegister":
            return "การสมัครสมาชิก";
        case "BanditRegister":
            return "การบันทึกข้อมูลประวัติส่วนตัว";
        case "Portfolio":
            return "ผลงาน";
        case "Supervisor":
            return "ผู้ดูแลสำนักงานตำรวจ";
        default:
            return 'ไม่พบรายการ';
    }
}