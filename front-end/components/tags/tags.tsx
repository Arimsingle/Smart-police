import { LogCardDisplay } from "../logs/logCard";
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
                        <LogCardDisplay titile="ข้อมูลเจ้าหน้าที่ตำรวจ" />
                    </TabPane>
                    <TabPane tab="ข้อมูลของนักโทษ" key="2">
                        <LogCardDisplay titile="ข้อมูลผู้กระทำผิดกฎหมาย"/>
                    </TabPane>
                </Tabs>
            </div>
        </TagsStyled>
    )
}