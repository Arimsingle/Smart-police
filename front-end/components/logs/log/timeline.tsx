import { Timeline } from 'antd';
export const TimeLine = () => {
    return (
        <div>
            <Timeline.Item>
                {/* <Card
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
                    </Card> */}
            </Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
            <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
            {/* {contextHolder} */}
        </div>
    )
}