import React from 'react';
import { Timeline } from 'antd';
import { LogTimelineStyled } from "../../../style/style-component/logTimelineStyled";
import { Card, Avatar } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { TitleSwitch } from "../../../service/titleSwitch";
import { DesSwitch } from "../../../service/desSwitch";
import { Tag } from 'antd';
import {
    CheckCircleOutlined,
} from '@ant-design/icons';
export const LogsTimeline = ({ doc, keys, values }: any) => {
    const { Meta } = Card;
    const titleTransalte =
        <div>
            {TitleSwitch(doc)}
            {<Tag style={{ marginLeft: "10px" }} icon={<CheckCircleOutlined />}
                color="success">
                Confirmed
            </Tag>}
        </div>;
    const desTransalte = DesSwitch(doc);
    const config = {
        title: 'ข้อมูลประวัติส่วนตัว',
        content: (
            <LogTimelineStyled>
                <div className="text-in-modal">
                    {
                        keys.map((value: any, index: any) => {
                            return (
                                <div key={index}>
                                    {index < keys.length - 2 && (
                                        <div>
                                            <p>{value}:{values[index]}</p>
                                        </div>
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
                    style={{ width: 500 }}
                    actions={[
                        <EyeOutlined key="see" onClick={() => {
                            modal.info(config)
                        }} />,
                    ]}>
                    <Meta
                        avatar={<Avatar src="https://i.pinimg.com/originals/fb/3f/e7/fb3fe7a71631c34341ea4ccb98cf24b3.png" />}
                        title={titleTransalte}
                        description={desTransalte}
                    />
                </Card>
            </Timeline.Item>
            {contextHolder}
        </LogTimelineStyled >
    )
}