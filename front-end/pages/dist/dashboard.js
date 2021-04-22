"use strict";
exports.__esModule = true;
var NavBar_1 = require("../components/nav-bar/NavBar");
var font_1 = require("../font-config/font");
var DashBoard = function () {
    return (React.createElement("div", null,
        React.createElement(NavBar_1.NavBar, null),
        "DASHBOARD",
        React.createElement("style", { jsx: true, global: true }, font_1["default"])));
};
exports["default"] = DashBoard;
