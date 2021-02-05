
import { useState } from 'react';
import { notification } from 'antd';

const RandomReaction = ({ reaction, setIsAuth, name, setPercent }: any) => {
    let reactions = ["happy", "sad", "angry"];
    let timeId = 0;
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
        console.log(counterReactions.length, reactions.length);

        if (counterReactions.length <= reactions.length + 3) {
            // console.log(reactions[Math.floor(Math.random() * 3)]);
            reactions[random] && counterReactions.push(reactions[random]);
            setCounterReactions(counterReactions)
            reaction && console.log(reaction);
            reactions[random] && console.log(reactions[random]);

            // if (reaction === reactions[Math.floor(Math.random() * 3)]) {
            //     setAuth(true);
            // }
        }
        passArray.lenght >= 3 && setStopCounter(true);
    }
    timeId = setInterval(timeOut, 8000);
    stopCounter && clearInterval(timeId);
    // console.log(reaction, reactions[Math.floor(Math.random() * 3)]);
    // console.log(counterReactions);
    // console.log(timeId);
    // if (reaction === counterReactions[counterReactions.length - 1]) {
    //     setIsAuth(TransformText(name))
    // }
    // console.log(TransformText(name));
    // console.log(reaction,counterReactions[counterReactions.length - 1]);
    // console.log("reaction", reaction === counterReactions[counterReactions.length - 1]);

    // console.log(name, TransformText(name));
    // reaction === counterReactions[counterReactions.length - 1] && setPass(pass + 1);
    // const Display = () => {
    //     if (pass >= 3) {
    //         setIsAuth(TransformText(name));
    //         // openNotification();
    //     }
    //     else {
    //         setIsAuth("");
    //     }
    // }
    if (reaction === counterReactions[counterReactions.length - 1]) {
        // passArray.push();
        // passArray !== setPassArray([...passArray, reaction])
        if (passArray) {
            if (passArray[passArray.length - 1] !== reaction) {
                setPassArray([...passArray, reaction]);
                setPercent([...passArray, reaction]);
            }
        }
    }

    console.log(passArray, passArray.length);
    console.log(passArray.length >= 2);

    return (
        <div>
            <h5>Random reactions : {counterReactions[counterReactions.length - 1] !== "Unknow" && counterReactions[counterReactions.length - 1]}</h5>
            {passArray.length >= 2 ? setIsAuth(TransformText(name)) : ""}
            {passArray.length >= 2 && openNotification()}
            {/* {reaction === counterReactions[counterReactions.length - 1] && setLock(false)}
            {setIsAuth ? <h5>ยังไม่ผ่านการระบุตัวตน</h5> : <h5>ผ่านการระบุตัวตนเเล้ว</h5>} */}
        </div>
    )

}

export default RandomReaction;
