"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var homePages_1 = require("./homePages");
var font_1 = require("../font-config/font");
// import FaceDetect from "../components/faceApi/faceDetect";
var NavBar_1 = require("../components/nav-bar/NavBar");
var Footer_1 = require("../components/footer/Footer");
var bs_1 = require("react-icons/bs");
var styled_components_1 = require("styled-components");
var antd_1 = require("antd");
var IndexPage = function () {
    var CardArrow = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 40px;\n    width: 40px;\n    line-height: 40px;\n    border-radius: 4px;\n    background-color: #1088e9;\n    color: #fff;\n    text-align: center;\n    font-size: 18px;\n  "], ["\n    height: 40px;\n    width: 40px;\n    line-height: 40px;\n    border-radius: 4px;\n    background-color: #1088e9;\n    color: #fff;\n    text-align: center;\n    font-size: 18px;\n  "])));
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(NavBar_1.NavBar, null),
            React.createElement(homePages_1["default"], null),
            React.createElement(Footer_1.Footers, null),
            React.createElement(antd_1.BackTop, null,
                React.createElement(CardArrow, null,
                    React.createElement(bs_1.BsChevronDoubleUp, null)))),
        React.createElement("style", { jsx: true, global: true }, font_1["default"])));
};
exports["default"] = IndexPage;
var templateObject_1;
