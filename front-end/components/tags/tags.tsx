import { LogsDisplay } from "../logs/logsDisplay";
import { TagsStyled } from "../../style/style-component/tagsStyled";
import { Tabs } from 'antd';
export const Tags = () => {
    const { TabPane } = Tabs;
    const handleChange = (key: any) => {
        console.log(key);
    }
    return (
        <TagsStyled>
            <div className="container-tags">
                <Tabs defaultActiveKey="1" onChange={(key) => handleChange(key)} type="card">
                    <TabPane tab="ข้อมูลเจ้าหน้าที่ตำรวจ" key="1">
                        <LogsDisplay />
                    </TabPane>
                    <TabPane tab="ข้อมูลของนักโทษ" key="2">
                        Content of Tab Pane 2
                </TabPane>
                    <TabPane tab="สถานะ" key="3">
                        Content of Tab Pane 3
                </TabPane>
                </Tabs>
            </div>
        </TagsStyled>
    )
}