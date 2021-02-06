
import { useState } from 'react';
import { notification } from 'antd';

const RandomReaction = ({ reaction, setIsAuth, name, setPercent }: any) => {
    let reactions: any = ["happy", "sad", "angry", "neutral"];
    let timeId: number = 0;
    const [passArray, setPassArray] = useState<any>([]);
    const [lock, setLock] = useState<any>(true);
    const [stopCounter, setStopCounter] = useState<any>(false);
    const [counterReactions, setCounterReactions] = useState<any>(["Unknow"]);
    const key = 'updatable';
    const TransformText = (text: any) => {
        let str = text.indexOf("(");
        str = text.slice(0, str - 1)
        return str;
    }
    const openNotification = () => {
        notification.open({
            key,
            message: 'การระบุตัวตน',
            description: 'ผ่านการระบุตัวตน',
        });
    };
    const timeOut = () => {
        let random = Math.floor(Math.random() * 3);
        if (counterReactions.length <= reactions.length + 5) {
            reactions[random] && counterReactions.push(reactions[random]);
            setCounterReactions(counterReactions)
            reaction && console.log(reaction);
            reactions[random] && console.log(reactions[random]);
        }
        passArray.lenght >= 3 && setStopCounter(true);
    }
    timeId = setInterval(timeOut, 8000);
    stopCounter && clearInterval(timeId);
    if (reaction === counterReactions[counterReactions.length - 1]) {
        if (passArray) {
            if (passArray[passArray.length - 1] !== reaction) {
                setPassArray([...passArray, reaction]);
                setPercent([...passArray, reaction]);
            }
        }
    }
    return (
        <div>
            <h5>Random reactions : {counterReactions[counterReactions.length - 1] !== "Unknow" && counterReactions[counterReactions.length - 1]}</h5>
            {passArray.length >= 2 ? setIsAuth(TransformText(name)) : ""}
            {passArray.length >= 2 && openNotification()}
        </div>
    )

}

export default RandomReaction;
