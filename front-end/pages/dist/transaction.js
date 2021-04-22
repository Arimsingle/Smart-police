"use strict";
exports.__esModule = true;
var NavBar_1 = require("../components/nav-bar/NavBar");
var font_1 = require("../font-config/font");
var SetTransaction_1 = require("../components/transaction/SetTransaction");
var GetTransaction_1 = require("../components/transaction/GetTransaction");
// import GammaDisplay from "../components/three/gamma";
var antd_1 = require("antd");
var react_1 = require("react");
var bi_1 = require("react-icons/bi");
var bi_2 = require("react-icons/bi");
var setTranStyled_1 = require("../style/style-component/setTranStyled");
var getTranStyled_1 = require("../style/style-component/getTranStyled");
var Option = antd_1.Select.Option;
var Transation = function () {
    var _a = react_1.useState(""), SetkeySelect = _a[0], setKeySelect = _a[1];
    var _b = react_1.useState(""), GetkeySelect = _b[0], getkeySelect = _b[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(NavBar_1.NavBar, null),
        React.createElement(setTranStyled_1.SetTranStyle, null,
            React.createElement("div", { className: "d-flex justify-content-center" },
                React.createElement("h1", null,
                    "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ",
                    React.createElement(bi_1.BiMessageAltEdit, null))),
            React.createElement("div", { className: "d-flex justify-content-center" },
                React.createElement(antd_1.Select, { showSearch: true, style: { width: 500 }, placeholder: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01", optionFilterProp: "children", filterOption: function (input, option) {
                        return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                    }, filterSort: function (optionA, optionB) {
                        return optionA.children
                            .toLowerCase()
                            .localeCompare(optionB.children.toLowerCase());
                    }, onChange: function (value) { return setKeySelect(value); } },
                    React.createElement(Option, { value: "1" }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E01\u0E23\u0E30\u0E17\u0E33\u0E1C\u0E34\u0E14\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22"),
                    React.createElement(Option, { value: "2" }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E39\u0E49\u0E01\u0E23\u0E30\u0E17\u0E33\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22"),
                    React.createElement(Option, { value: "3" }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08"),
                    React.createElement(Option, { value: "4" }, "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E33\u0E23\u0E27\u0E08"))),
            React.createElement("br", null),
            React.createElement(SetTransaction_1["default"], { SetkeySelect: SetkeySelect })),
        React.createElement(getTranStyled_1.GetTranStyled, null,
            React.createElement("div", { className: "d-flex justify-content-center" },
                React.createElement("h1", null,
                    "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25 ",
                    React.createElement(bi_2.BiMessageDetail, null))),
            React.createElement("div", { className: "d-flex justify-content-center" },
                React.createElement(antd_1.Select, { showSearch: true, style: { width: 500 }, placeholder: "\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E23\u0E32\u0E22\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A", optionFilterProp: "children", filterOption: function (input, option) {
                        return option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                    }, filterSort: function (optionA, optionB) {
                        return optionA.children
                            .toLowerCase()
                            .localeCompare(optionB.children.toLowerCase());
                    }, onChange: function (value) { return getkeySelect(value); } },
                    React.createElement(Option, { value: "1" }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32"),
                    React.createElement(Option, { value: "2" }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E02\u0E2D\u0E07\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08"),
                    React.createElement(Option, { value: "3" }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08"),
                    React.createElement(Option, { value: "4" }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E39\u0E49\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E01\u0E23\u0E30\u0E17\u0E33\u0E1C\u0E34\u0E14\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22 (\u0E25\u0E47\u0E2D\u0E04\u0E15\u0E33\u0E23\u0E27\u0E08)"),
                    React.createElement(Option, { value: "5" }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E39\u0E49\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E01\u0E23\u0E30\u0E17\u0E33\u0E1C\u0E34\u0E14\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22 (\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21)"),
                    React.createElement(Option, { value: "6" }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"),
                    React.createElement(Option, { value: "7" }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D"))),
            React.createElement("br", null),
            React.createElement(GetTransaction_1["default"], { GetkeySelect: GetkeySelect })),
        React.createElement("style", { jsx: true, global: true }, font_1["default"])));
};
exports["default"] = Transation;
