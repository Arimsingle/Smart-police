import { Result, Button, Modal } from 'antd';
import { useState } from 'react';
import { message } from 'antd';
import FaceDetect from "../faceApi/faceDetect";
export const AuthDisplay = () => {
    const [visible, setVisible] = useState(false)
    const [isAuth, setIsAuth] = useState("");

    const success = () => {
        message.success('กำลังเปิดกล้อง กรุณารอสักครู่');
    };

    const showModal = () => {
        success();
        setVisible(true);
    };
    const hideModal = () => {
        setVisible(false);
    };
    const modal = (
        <Modal
            title="Face Detection"
            visible={visible}
            onOk={hideModal}
            onCancel={hideModal}
            okText="Close"
            cancelText="Cancle">
            <FaceDetect visible={visible} setIsAuth={setIsAuth} />
        </Modal>
    )
    return (
        <div>
            <div>
                {modal}
            </div>
            {(isAuth !== "unknown" && isAuth !== "") ? (
                <div className="d-flex justify-content-center">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nIoQMVTxyd4" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                </div>
            ) : <Result
                    status="403"
                    title="403"
                    subTitle="Sorry, you are not authorized to access this page."
                    extra={<Button type="primary" onClick={showModal}>Authentication</Button>}
                />
            }

        </div >

    )
}