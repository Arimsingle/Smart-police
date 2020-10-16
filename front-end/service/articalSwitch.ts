export const ArticalSwitch = (des: any) => {
    switch (des) {
        case "PoliceRegister":
            return "ข้อมูลประวัติส่วนตัวของเจ้าหน้าที่ตำรวจ";
        case "BanditRegister":
            return "ข้อมูลประวัติส่วนตัวของผู้กระทำผิดกฎหมาย";
        case "Supervisor":
            return "ข้อมูลการบันทึกดูแลสำนักงานตำรวจ";
        default:
            return 'ไม่พบรายการ';
    }
}