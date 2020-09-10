import { LogsStyled } from "../../style/style-component/logsStyled";
import { Timeline } from 'antd';
import { logDatas } from "./logDatas";
import { DatePicker, Space } from 'antd';
import { Input } from 'antd';
export const LogsDisplay = () => {
    const { RangePicker } = DatePicker;
    const { Search } = Input;
    return (
        <LogsStyled>
            <div className="container-logs">
                <Search
                    placeholder="กรอกแอดเรสของเจ้าหน้าที่ตำรวจ"
                    onSearch={value => console.log(value)}
                    style={{ width: 500 }}
                />
            </div>
            <div className="container-logs">
                <Space direction="vertical" size={12}>
                    <RangePicker onChange={(e) => console.log(e)} />
                </Space>
            </div>
            <div className="timeline">
                <Timeline>
                    {
                        logDatas.map((data, index) => {
                            return (
                                <div key={index}>
                                    <Timeline.Item>{data.Topic}</Timeline.Item>
                                </div>
                            )
                        })
                    }
                </Timeline>
            </div>
        </LogsStyled>
    )
}