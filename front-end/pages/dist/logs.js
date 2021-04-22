"use strict";
exports.__esModule = true;
var tags_1 = require("../components/tags/tags");
var NavBar_1 = require("../components/nav-bar/NavBar");
var font_1 = require("../font-config/font");
var Logs = function () {
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(NavBar_1.NavBar, null),
            React.createElement(tags_1.Tags, null)),
        React.createElement("style", { jsx: true, global: true }, font_1["default"])));
};
exports["default"] = Logs;
