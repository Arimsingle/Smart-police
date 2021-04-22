"use strict";
exports.__esModule = true;
exports.NavBar = void 0;
var link_1 = require("next/link");
var cg_1 = require("react-icons/cg");
var gi_1 = require("react-icons/gi");
var NavDatas_1 = require("./NavDatas");
var navbarStyled_1 = require("../../style/style-component/navbarStyled");
var react_1 = require("react");
var NavBar = function () {
    var _a = react_1.useState(false), click = _a[0], setClick = _a[1];
    var handleClick = function () { return setClick(function (state) { return !state; }); };
    return (React.createElement(navbarStyled_1.Navbar.Item, null,
        React.createElement("div", { className: "fixed-navbar" },
            React.createElement(navbarStyled_1.Navbar.Logo, null,
                React.createElement(gi_1.GiPoliceOfficerHead, { className: "police-logo" }),
                " POLICE"),
            React.createElement("div", { className: "menu-icon", onClick: handleClick }, click ? React.createElement(cg_1.CgClose, null) : React.createElement(cg_1.CgMenu, null)),
            React.createElement("div", { style: { display: "flex" } },
                React.createElement("ul", { className: click ? "nav-menu active" : "nav-menu" }, NavDatas_1.NavData.map(function (Data, index) {
                    return (React.createElement("li", { key: index, className: "nav-item" },
                        React.createElement(link_1["default"], { href: Data.url },
                            React.createElement("a", { className: Data.cName }, Data.title))));
                }))))));
};
exports.NavBar = NavBar;
