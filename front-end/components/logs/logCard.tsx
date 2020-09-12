import { LogsStyled } from "../../style/style-component/logsStyled";
import { Card } from 'antd';
import { useState } from "react";
import { LogsDisplay } from "./logsDisplay";
import { LogCardInterface } from "../../interfaces/logCardInterface";
import { logCardDatas } from "./logDatas";
export const LogCardDisplay = () => {
    const tabList: LogCardInterface[] = logCardDatas;
    const [state, setState] = useState<any>({
        key: 'myself',
        noTitleKey: 'app',
    });
    const onTabChange = (key: any, type: any) => {
        console.log(key, type);
        setState({ [type]: key });
    };
    const unShowSearch: any = {
        show: true,
    }
    const contentList: any = {
        myself: <LogsDisplay/>,
        others: <LogsDisplay {...unShowSearch}/>
    };
    return (
        <LogsStyled>
            <Card
                style={{ width: '100%' }}
                title="ข้อมูลเจ้าหน้าที่ตำรวจ"
                tabList={tabList}
                activeTabKey={state.key}
                onTabChange={key => {
                    onTabChange(key, 'key');
                }}>
                {contentList[state.key]}
            </Card>
        </LogsStyled>
    )
}
