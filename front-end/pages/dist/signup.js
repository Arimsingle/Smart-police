"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var formSignup_1 = require("../components/form/formSignup");
var formSuccess_1 = require("../components/form/formSuccess");
var formStyled_1 = require("../style/style-component/formStyled");
var ai_1 = require("react-icons/ai");
var font_1 = require("../font-config/font");
var Form = function () {
    var _a = react_1.useState(false), isSubmitted = _a[0], setIsSubmitted = _a[1];
    var _b = react_1.useState({ message: '', value: '' }), data = _b[0], setData = _b[1];
    var submitForm = function () {
        setIsSubmitted(true);
    };
    return (React.createElement(formStyled_1.FormStyled, null,
        React.createElement("div", { className: 'form-container-signup' },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement("a", { className: 'close-btn' },
                    React.createElement(ai_1.AiOutlineHome, null))),
            !isSubmitted
                ? (React.createElement(formSignup_1.FormSignup, { submitForm: submitForm, setData: setData }))
                : (React.createElement(formSuccess_1.FormSuccsess, { data: data })),
            React.createElement("style", { jsx: true, global: true }, font_1["default"]))));
};
exports["default"] = Form;
