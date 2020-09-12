import React from 'react';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Timeline } from 'antd';
import { LogTimelineStyled } from "../../../style/style-component/logTimelineStyled";
import { Card, Avatar } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

export const LogsTimeline = ({ url }: any) => {
    const { Meta } = Card;
    const [values, setValues] = useState<any>([]);
    const [keys, setKeys] = useState<any>([]);
    useEffect(() => {
        const fetchDataAsync = async () => {
            await axios.get(url.url).then(resp => {
                setKeys(Object.keys(resp.data));
                setValues(Object.values(resp.data));
            })
        }
        fetchDataAsync();
    }, []);

    const config = {
        title: 'ข้อมูลประวัติส่วนตัว',
        content: (
            <LogTimelineStyled>
                <div className="text-in-modal">
                    {
                        keys.map((key: any, index: any) => {
                            return (
                                <div key={index}>
                                    {index !== 11 && (
                                        <p>{url.keys[index]} : {values[index]}</p>
                                    )}
                                </div>
                            )
                        })
                    }
                </div>
            </LogTimelineStyled>
        ),
    };
    const [modal, contextHolder] = Modal.useModal();
    return (
        <LogTimelineStyled>
            <Timeline.Item>
                <Card
                    style={{ width: 300 }}
                    actions={[
                        <EyeOutlined key="see" onClick={() => {
                            modal.info(config);
                        }} />,
                    ]}>
                    <Meta
                        avatar={<Avatar src="https://i.pinimg.com/originals/fb/3f/e7/fb3fe7a71631c34341ea4ccb98cf24b3.png" />}
                        title="สมัครสมาชิกสำเร็จ"
                        description="0x2cC1b8A57341123EE3cF22D6c320153c1a6931a2"
                    />
                </Card>
            </Timeline.Item>
            {contextHolder}
        </LogTimelineStyled >
    )
}