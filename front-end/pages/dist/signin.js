"use strict";
exports.__esModule = true;
var font_1 = require("../font-config/font");
var link_1 = require("next/link");
var formSignin_1 = require("../components/form/formSignin");
var formStyled_1 = require("../style/style-component/formStyled");
var ai_1 = require("react-icons/ai");
var path_image_1 = require("../path/images/path-image");
var SignIn = function () {
    return (React.createElement(formStyled_1.FormStyled, null,
        React.createElement("div", { className: "form-container" },
            React.createElement(link_1["default"], { href: "/" },
                React.createElement("a", { className: "close-btn-signin" },
                    React.createElement(ai_1.AiOutlineHome, null))),
            React.createElement("div", { className: "form-content-left" },
                React.createElement("img", { className: "form-img", src: path_image_1.maleSvg, alt: "spaceship" })),
            React.createElement(formSignin_1.FormSignin, null),
            React.createElement("style", { jsx: true, global: true }, font_1["default"]))));
};
exports["default"] = SignIn;
