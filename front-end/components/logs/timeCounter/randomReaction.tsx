
import { useState } from 'react';
import { notification } from 'antd';

const RandomReaction = ({ reaction, setIsAuth, name }: any) => {
    let reactions = ["happy", "happy", "happy"];
    let timeId = 0;
    const [lock, setLock] = useState(true);
    const [auth, setAuth] = useState(false);
    const [counterReactions, setCounterReactions] = useState(["Unknow"]);
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
        // setTimeout(() => {
        //     notification.open({
        //         key,
        //         message: 'New Title',
        //         description: 'New description.',
        //     });
        // }, 1000);
    };
    timeId = setInterval(() => {
        if (counterReactions.length < reactions.length + 30) {
            console.log(reactions[Math.floor(Math.random() * 3)]);
            counterReactions.push(reactions[Math.floor(Math.random() * 3)]);
            setCounterReactions(counterReactions)

            if (reaction === reactions[Math.floor(Math.random() * 3)]) {
                setAuth(true);
            }
        }
        else {
            clearInterval(timeId);
        }
    }, 5000);

    // console.log(counterReactions);
    // console.log(timeId);
    // if (reaction === counterReactions[counterReactions.length - 1]) {
    //     setIsAuth(TransformText(name))
    // }
    // console.log(TransformText(name));
    // console.log(reaction,counterReactions[counterReactions.length - 1]);
    // console.log("reaction", reaction === counterReactions[counterReactions.length - 1]);
    console.log(name, TransformText(name));
    return (
        <div>
            <h5>Random reactions : {counterReactions[counterReactions.length - 1]}</h5>
            {reaction === counterReactions[counterReactions.length - 1] ? setIsAuth(TransformText(name)) : ""}
            {reaction === counterReactions[counterReactions.length - 1] && openNotification()}
            {/* {reaction === counterReactions[counterReactions.length - 1] && setLock(false)}
            {setIsAuth ? <h5>ยังไม่ผ่านการระบุตัวตน</h5> : <h5>ผ่านการระบุตัวตนเเล้ว</h5>} */}
        </div>
    )

}

export default RandomReaction;
