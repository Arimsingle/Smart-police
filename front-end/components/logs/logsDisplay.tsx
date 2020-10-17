import { LogsStyled } from "../../style/style-component/logsStyled";
import { LogsTimeline } from "./log/logTimeline";
import { Input } from 'antd';
import { Timeline } from 'antd';
import { useEffect, useState } from 'react';
import { FetchAPI } from "../logs/log/fetchAPI";
import { Result, Button, Modal, Tag } from 'antd';
import { useRouter } from 'next/router';
import FaceDetect from "../faceApi/faceDetect";
export const LogsDisplay = ({ show, content }: any) => {
    const [valueObj, setValueObj] = useState<any>({});
    // const router = useRouter()

    useEffect(() => {
        const fetchDataAsync = async () => {
            const apiValues = await FetchAPI("Ipfs", { account: "0xa68fa2a78Ee81580F2E2c6b251FA636d6cdd3385" }).then((res: any) => {
                return res;
            })
            apiValues && setValueObj(apiValues);
        }
        fetchDataAsync();
    }, [valueObj]);
    // console.log(valueObj);
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
                        // <Button type="primary" onClick={() => router.push('/')}>Back Home</Button> //back to main page
                        />)
                    }
                </Timeline>
            </div>
        </LogsStyled>
    )
}