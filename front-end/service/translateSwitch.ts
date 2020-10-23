import { titileRegister } from "../components/logs/logDatas";
import { titileRegisterBandit } from "../components/logs/logDatas";
export const TranslateSwitch = (titile: any) => {
    switch (titile) {
        case "PoliceRegister":
            return titileRegister;
        case "BanditRegister":
            return titileRegisterBandit;
        case "Supervisor":
            return "ข้อมูลการบันทึกดูแลสำนักงานตำรวจ";
        default:
            return 'ไม่พบรายการ';
    }
}