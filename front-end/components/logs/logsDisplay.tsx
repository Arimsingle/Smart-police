import { LogsStyled } from "../../style/style-component/logsStyled";
import { LogsTimeline } from "./log/logTimeline";
import { Input } from 'antd';
import { Timeline } from 'antd';
import { urlRegisterAPI } from "../logs/logDatas";
import { urlRegisterAPI2 } from "../logs/logDatas";
export const LogsDisplay = ({ show }: any) => {
    const { Search } = Input;
    return (
        <LogsStyled>
            <div className="container-search">
                {show && (<Search
                    placeholder="กรอกแอดเรสของเจ้าหน้าที่ตำรวจที่ต้องการตรวจสอบ"
                    onSearch={value => console.log(value)}
                    style={{ width: 500 }}
                />)}
            </div>
            <div className="text-header">
                ภาพรวมไทม์ไลน์ (อดีต-อนาคต)
            </div>
            <div>
                <Timeline className="timeline-point">
                    <LogsTimeline url={urlRegisterAPI} />
                    <LogsTimeline url={urlRegisterAPI2} />
                    <LogsTimeline url={urlRegisterAPI} />
                    <LogsTimeline url={urlRegisterAPI2} />
                    <LogsTimeline url={urlRegisterAPI2} />
                </Timeline>
            </div>
        </LogsStyled>
    )
}