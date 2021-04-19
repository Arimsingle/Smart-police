"use strict";
exports.__esModule = true;
exports.AuthDisplay = void 0;
var antd_1 = require("antd");
var react_1 = require("react");
var antd_2 = require("antd");
var faceDetect_1 = require("../face-api/faceDetect");
exports.AuthDisplay = function () {
    var _a = react_1.useState(false), visible = _a[0], setVisible = _a[1];
    var _b = react_1.useState(""), isAuth = _b[0], setIsAuth = _b[1];
    var success = function () {
        antd_2.message.success("กำลังเปิดกล้อง กรุณารอสักครู่");
    };
    var showModal = function () {
        success();
        setVisible(true);
    };
    var hideModal = function () {
        setVisible(false);
    };
    var modal = (React.createElement(antd_1.Modal, { title: "Face Recognition", visible: visible, onOk: hideModal, onCancel: hideModal, okText: "Okay", cancelText: "Cancle" },
        React.createElement(faceDetect_1["default"], { visible: visible, setIsAuth: setIsAuth })));
    return (React.createElement("div", null,
        React.createElement("div", null, modal),
        isAuth !== "unknown" && isAuth !== "" ? (React.createElement("div", null,
            React.createElement("div", { className: "d-flex justify-content-center" },
                React.createElement("h5", null, "Secret Data")),
            React.createElement("div", { className: "d-flex justify-content-center" },
                React.createElement("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/nIoQMVTxyd4", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" })))) : (React.createElement(antd_1.Result, { status: "403", title: "403", subTitle: "Sorry, you are not authorized to access this page.", extra: React.createElement(antd_1.Button, { type: "primary", onClick: showModal }, "Authentication") }))));
};
