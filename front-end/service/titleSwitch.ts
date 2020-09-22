export const TitleSwitch = (title: any) => {
    switch (title) {
        case "PoliceRegister":
            return "การสมัครสมาชิก";
        case "BanditRegister":
            return "การบันทึกข้อมูล";
        default:
            return 'ไม่พบรายการ';
    }
}