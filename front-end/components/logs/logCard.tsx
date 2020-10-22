import { LogsStyled } from "../../style/style-component/logsStyled";
import { Card } from 'antd';
import { useState } from "react";
import { LogsDisplay } from "./logsDisplay";
import { LogCardInterface } from "../../interfaces/logCardInterface";
import { logCardDatas } from "./logDatas";
import { contentOverview, contentRegister, contentPortfolio, contentReport } from "./logDatas"
export const LogCardDisplay = ({ titile }: any) => {
    const tabList: LogCardInterface[] = logCardDatas;
    const [state, setState] = useState<any>({
        key: 'overview',
        noTitleKey: 'app',
    });
    const onTabChange = (key: any, type: any) => {
        // console.log(key, type);
        setState({ [type]: key });
    };
    const contentList: any = {
        overview: <LogsDisplay {...contentOverview} />,
        register: <LogsDisplay {...contentRegister} />,
        portfolio: <LogsDisplay {...contentPortfolio} />,
        report: <LogsDisplay {...contentReport} />
    };
    return (
        <LogsStyled>
            <Card
                style={{ width: '100%' }}
                title={titile}
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
