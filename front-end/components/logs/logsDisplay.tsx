import { LogsStyled } from "../../style/style-component/logsStyled";
import { LogsTimeline } from "./timelines/logTimeline";
import { Input } from 'antd';
import { Timeline } from 'antd';
import { useEffect, useState } from 'react';
import { FetchAPI } from "./timelines/fetchAPI";
import { Result, Button, Modal, Tag } from 'antd';
import FaceDetect from "../faceApi/faceDetect";
export const LogsDisplay = ({ show, content, title }: any) => {
    const [valueObj, setValueObj] = useState<any>({});
    useEffect(() => {

        const fetchDataAsync = async () => {
            let apiValues;
            switch (title) {
                case "PoliceRegister":
                    apiValues = await FetchAPI(title, { police: "0x43Df0F9dc6be1Ec1bCA115Cc19FEc925C7400646" })
                        .then((res: any) => {
                            return res;
                        })
                    apiValues && setValueObj(apiValues);
                    break;
                case "BanditRegister":
                    apiValues = await FetchAPI(title, { bandit: "0x43Df0F9dc6be1Ec1bCA115Cc19FEc925C7400646" })
                        .then((res: any) => {
                            return res;
                        })
                    apiValues && setValueObj(apiValues);
                    break;
                case "Supervisor":
                    apiValues = await FetchAPI(title, { supervisor: "0x43Df0F9dc6be1Ec1bCA115Cc19FEc925C7400646" })
                        .then((res: any) => {
                            return res;
                        })
                    apiValues && setValueObj(apiValues);
                    break;
                case "Ipfs":
                    apiValues = await FetchAPI(title, { account: "0x43Df0F9dc6be1Ec1bCA115Cc19FEc925C7400646" })
                        .then((res: any) => {
                            return res;
                        })
                    apiValues && setValueObj(apiValues);
                    break;
                default:
                    break;
            }
        }
        fetchDataAsync();
    }, [10]);
    const docs: any = valueObj.doc;
    const keys: any = valueObj.key;
    const values: any = valueObj.value;
    const { Search } = Input;
    const [visible, setVisible] = useState(false);

    const showModal = () => {
        setVisible(true);
    };
    const hideModal = () => {
        setVisible(false);
    };
    const modal = (
        <Modal
            title="Face Detection"
            visible={visible}
            onOk={hideModal}
            onCancel={hideModal}
            okText="Close"
            cancelText="Cancle">
            <FaceDetect visible={visible} />
        </Modal>
    )
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
                <Tag color="cyan">{content}</Tag>
            </div>
            <div>
                {modal}
            </div>
            <div className="d-flex justify-content-center">
                <Timeline mode="left" className="timeline-point">
                    {
                        docs ? (docs.map((doc: any, index: any) => {
                            return (
                                <div key={index}>
                                    <LogsTimeline doc={doc} keys={keys[index]} values={values[index]} />
                                </div>
                            )
                        })) : (<Result
                            status="403"
                            title="403"
                            subTitle="Sorry, you are not authorized to access this page."
                            extra={<Button type="primary" onClick={showModal}>Authentication</Button>}
                        />)
                    }
                </Timeline>
            </div>
        </LogsStyled>
    )
}