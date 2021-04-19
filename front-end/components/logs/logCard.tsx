import { LogsStyled } from "../../style/style-component/logsStyled";
import { Card } from "antd";
import { useState } from "react";
import { LogsDisplay } from "./logsDisplay";
import { AuthDisplay } from "./authDisplay";
import { LogCardInterface } from "../../interfaces/logCardInterface";
import { logCardDatas } from "./logDatas";
import { contentOverview, contentRegister, contentPortfolio } from "./logDatas";

export const LogCardDisplay: React.FC = ({ titile }: any) => {
  const tabList: LogCardInterface[] = logCardDatas;
  const [state, setState] = useState<any>({
    key: "overview",
    noTitleKey: "app",
  });
  const onTabChange = (key: any, type: any) => {
    // console.log(key, type);
    setState({ [type]: key });
    console.log(key);
  };
  const contentList: any = {
    overview: <LogsDisplay {...contentOverview} />,
    register: <LogsDisplay {...contentRegister} />,
    portfolio: <LogsDisplay {...contentPortfolio} />,
    authentication: <AuthDisplay />,
  };
  return (
    <LogsStyled>
      <Card
        style={{ width: "100%" }}
        title={titile}
        tabList={tabList}
        activeTabKey={state.key}
        onTabChange={(key) => {
          onTabChange(key, "key");
        }}
      >
        {contentList[state.key]}
      </Card>
    </LogsStyled>
  );
};
