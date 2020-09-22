import { LogsStyled } from "../../style/style-component/logsStyled";
import { LogsTimeline } from "./log/logTimeline";
import { Input } from 'antd';
import { Timeline } from 'antd';
import { useEffect, useState } from 'react';
import { FetchAPI } from "../logs/log/fetchAPI";
export const LogsDisplay = ({ show }: any) => {
    const [valueObj, setValueObj] = useState<any>({});
    useEffect(() => {
        const fetchDataAsync = async () => {
            const apiValues = await FetchAPI("Ipfs", { account: "0xD77BC42A06d7e66B76e51659C163c2015ea8f339" }).then((res: any) => {
                return res;
            })
            setValueObj(apiValues);
        }
        fetchDataAsync();
    }, [valueObj]);
    const docs: any = valueObj.doc;
    const keys: any = valueObj.key;
    const values: any = valueObj.value;
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
            <div className="d-flex justify-content-center">
                <Timeline mode="left" className="timeline-point">
                    {
                        docs && docs.map((doc: any, index: any) => {
                            return (
                                <div key={index}>
                                    <LogsTimeline doc={doc} keys={keys[index]} values={values[index]} />
                                </div>
                            )
                        })
                    }
                </Timeline>
            </div>
        </LogsStyled>
    )
}