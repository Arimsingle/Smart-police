import { Result, Button, Modal } from "antd";
import { useState } from "react";
import { message } from "antd";
import FaceDetect from "../face-api/faceDetect";

export const AuthDisplay: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<string>("");

  const success = () => {
    message.success("กำลังเปิดกล้อง กรุณารอสักครู่");
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
      title="Face Recognition"
      visible={visible}
      onOk={hideModal}
      onCancel={hideModal}
      okText="Okay"
      cancelText="Cancle"
    >
      <FaceDetect visible={visible} setIsAuth={setIsAuth} />
    </Modal>
  );
  return (
    <div>
      <div>{modal}</div>
      {isAuth !== "unknown" && isAuth !== "" ? (
        <div>
          <div className="d-flex justify-content-center">
            <h5>Secret Data</h5>
          </div>
          <div className="d-flex justify-content-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/nIoQMVTxyd4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      ) : (
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={
            <Button type="primary" onClick={showModal}>
              Authentication
            </Button>
          }
        />
      )}
    </div>
  );
};
