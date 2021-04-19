"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var antd_1 = require("antd");
var styled_components_1 = require("styled-components");
var antd_2 = require("antd");
var antd_3 = require("antd");
var antd_4 = require("antd");
var setTranStyled_1 = require("../../style/style-component/setTranStyled");
var TextArea = antd_2.Input.TextArea;
var Transaction_Styled = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .dasdboard-img {\n    width: 50%;\n    height: auto;\n  }\n"], ["\n  .dasdboard-img {\n    width: 50%;\n    height: auto;\n  }\n"])));
var SetTransaction = function (_a) {
    var SetkeySelect = _a.SetkeySelect;
    var _b = react_1.useState(""), admin = _b[0], setAdmin = _b[1];
    var _c = react_1.useState(""), supervisor = _c[0], setSuperviser = _c[1];
    var _d = react_1.useState(""), password = _d[0], setPassword = _d[1];
    var _e = react_1.useState(""), bandit = _e[0], setBandit = _e[1];
    var _f = react_1.useState(""), publicInfo = _f[0], setPublicInfo = _f[1];
    var _g = react_1.useState(""), police = _g[0], setPolice = _g[1];
    var _h = react_1.useState(""), portfolio = _h[0], setPortfolio = _h[1];
    var _j = react_1.useState(""), name = _j[0], setName = _j[1];
    var _k = react_1.useState(""), surname = _k[0], setSername = _k[1];
    var _l = react_1.useState(""), phone = _l[0], setPhone = _l[1];
    var _m = react_1.useState(""), email = _m[0], setEmail = _m[1];
    var _o = react_1.useState(""), address = _o[0], setAdress = _o[1];
    var _p = react_1.useState(false), status = _p[0], setStatus = _p[1];
    var openNotificationWithIcon = function () {
        antd_4.notification["success"]({
            message: "บันทึกข้อมูลเสร็จสิ้น",
            description: "การบันทึกข้อมูลเสร็จสิ้น สามารถไปดูข้อมูลได้ที่หน้าแสดงไทม์ไลน์"
        });
        setStatus(false);
    };
    var RecordBandit = function (valueRegister) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(valueRegister);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/record", valueRegister)
                            .then(function (result) {
                            console.log(result);
                            console.log(result.statusText);
                            setStatus(result.statusText);
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 2:
                    _a.sent();
                    setSuperviser("");
                    setPassword("");
                    setBandit("");
                    setPublicInfo("");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var RegisterBandit = function (valueRegister) { return __awaiter(void 0, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log(valueRegister);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/bandit/register", valueRegister)
                            .then(function (result) {
                            console.log(result);
                            setStatus(result.statusText);
                            setName("");
                            setSername("");
                            setPhone("");
                            setEmail("");
                            setPolice("");
                            setPassword("");
                            setAdress("");
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var PortFolioPolice = function (valuePortfolio) { return __awaiter(void 0, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/portfolio", valuePortfolio)
                            .then(function (result) {
                            console.log(result);
                            setStatus(result.statusText);
                            setSuperviser("");
                            setPassword("");
                            setPolice("");
                            setPortfolio("");
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var GiveSuperviser = function (valueSuperviser) { return __awaiter(void 0, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/supervisor", valueSuperviser)
                            .then(function (result) {
                            console.log(result);
                            setStatus(result.statusText);
                            setSuperviser("");
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 3];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    }); };
    var setTransactionJSX = [
        {
            key: "1",
            jsx: (react_1["default"].createElement(antd_1.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E2A\u0E48\u0E27\u0E19\u0E15\u0E31\u0E27\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E01\u0E23\u0E30\u0E17\u0E33\u0E1C\u0E34\u0E14\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22")),
                react_1["default"].createElement(Transaction_Styled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/bandit.svg", alt: "bandit", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { placeholder: "\u0E0A\u0E37\u0E48\u0E2D", value: name, onChange: function (e) {
                            setName(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { placeholder: "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25", value: surname, onChange: function (e) {
                            setSername(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { placeholder: "\u0E40\u0E1A\u0E2D\u0E23\u0E4C\u0E42\u0E17\u0E23\u0E28\u0E31\u0E1E\u0E17\u0E4C", value: phone, onChange: function (e) {
                            setPhone(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { type: "email", placeholder: "\u0E2D\u0E35\u0E40\u0E21\u0E25", value: email, onChange: function (e) {
                            setEmail(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { placeholder: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", value: police, onChange: function (e) {
                            setPolice(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { type: "password", placeholder: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 (Police)", value: password, onChange: function (e) {
                            setPassword(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(TextArea, { rows: 4, placeholder: "\u0E17\u0E35\u0E48\u0E2D\u0E22\u0E39\u0E48 \u0E1A\u0E49\u0E32\u0E19\u0E40\u0E25\u0E02\u0E17\u0E35\u0E48 \u0E2B\u0E21\u0E39\u0E48 \u0E15\u0E33\u0E1A\u0E25 \u0E2D\u0E33\u0E40\u0E40\u0E20\u0E2D \u0E08\u0E31\u0E07\u0E2B\u0E27\u0E31\u0E14", value: address, onChange: function (e) {
                            setAdress(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_3.Button, { type: "primary", onClick: function () {
                            RegisterBandit({
                                name: name,
                                surname: surname,
                                phone: phone,
                                email: email,
                                police: police,
                                password: password,
                                address: address
                            });
                        } }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"))))
        },
        {
            key: "2",
            jsx: (react_1["default"].createElement(antd_1.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E23\u0E32\u0E22\u0E07\u0E32\u0E19\u0E1C\u0E39\u0E49\u0E01\u0E23\u0E30\u0E17\u0E33\u0E1C\u0E34\u0E14\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22")),
                react_1["default"].createElement(Transaction_Styled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/bandit_.svg", alt: "bandit", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { placeholder: "\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setSuperviser(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { type: "password", placeholder: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19", onChange: function (e) {
                            setPassword(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { placeholder: "\u0E1C\u0E39\u0E49\u0E01\u0E23\u0E30\u0E17\u0E33\u0E1C\u0E34\u0E14\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22 (Address)", onChange: function (e) {
                            setBandit(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(TextArea, { rows: 4, placeholder: "\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E2B\u0E23\u0E37\u0E2D\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14", onChange: function (e) {
                            setPublicInfo(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_3.Button, { type: "primary", onClick: function () {
                            RecordBandit({ supervisor: supervisor, password: password, bandit: bandit, publicInfo: publicInfo });
                        } }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"))))
        },
        {
            key: "3",
            jsx: (react_1["default"].createElement(antd_1.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08")),
                react_1["default"].createElement(Transaction_Styled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/resume_police.svg", alt: "police", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { placeholder: "\u0E1C\u0E39\u0E49\u0E14\u0E39\u0E41\u0E25\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setSuperviser(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { type: "password", placeholder: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19", onChange: function (e) {
                            setPassword(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { placeholder: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setPolice(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(TextArea, { rows: 4, placeholder: "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E02\u0E2D\u0E07\u0E1C\u0E25\u0E07\u0E32\u0E19", onChange: function (e) {
                            setPortfolio(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_3.Button, { type: "primary", onClick: function () {
                            PortFolioPolice({ supervisor: supervisor, password: password, police: police, portfolio: portfolio });
                        } }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"))))
        },
        {
            key: "4",
            jsx: (react_1["default"].createElement(antd_1.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E01\u0E33\u0E2B\u0E19\u0E14\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32\u0E15\u0E33\u0E23\u0E27\u0E08")),
                react_1["default"].createElement(Transaction_Styled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/superviser_police.svg", alt: "coin", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Input, { placeholder: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setSuperviser(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_3.Button, { type: "primary", onClick: function () { return GiveSuperviser({ supervisor: supervisor }); } }, "\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25"))))
        },
    ];
    return (react_1["default"].createElement(setTranStyled_1.SetTranStyle, null,
        react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
            setTransactionJSX.map(function (index) {
                console.log(index.key, SetkeySelect);
                return index.key === SetkeySelect && index.jsx;
            }),
            status && openNotificationWithIcon())));
};
exports["default"] = SetTransaction;
var templateObject_1;
