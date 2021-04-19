"use strict";
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
var antd_2 = require("antd");
var antd_3 = require("antd");
var getTranStyled_1 = require("../../style/style-component/getTranStyled");
var getTranStyled_2 = require("../../style/style-component/getTranStyled");
function GetTransaction(_a) {
    var _this = this;
    var GetkeySelect = _a.GetkeySelect;
    var _b = react_1.useState(""), police = _b[0], setPolice = _b[1];
    var _c = react_1.useState(""), superviser = _c[0], setSuperviser = _c[1];
    var _d = react_1.useState(""), bandit = _d[0], setBandit = _d[1];
    var CheckSuperviser = function (info) { return __awaiter(_this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/claimer", info)
                            .then(function (result) {
                            console.log(result);
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_1 = _a.sent();
                    console.log(error_1);
                    return [3 /*break*/, 4];
                case 3:
                    setSuperviser("");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var CheckInfoPolice = function (info) { return __awaiter(_this, void 0, void 0, function () {
        var error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/policeinfo", info)
                            .then(function (result) {
                            console.log(result);
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_2 = _a.sent();
                    console.log(error_2);
                    return [3 /*break*/, 4];
                case 3:
                    setPolice("");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var CheckPortfolio = function (info) { return __awaiter(_this, void 0, void 0, function () {
        var error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/myportfolio", info)
                            .then(function (result) {
                            console.log(result);
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_3 = _a.sent();
                    console.log(error_3);
                    return [3 /*break*/, 4];
                case 3:
                    setPolice("");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var CheckRecorderPolice = function (info) { return __awaiter(_this, void 0, void 0, function () {
        var error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/historybandit", info)
                            .then(function (result) {
                            console.log(result);
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_4 = _a.sent();
                    console.log(error_4);
                    return [3 /*break*/, 4];
                case 3:
                    setPolice("");
                    setBandit("");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var CheckRecorderPolices = function (info) { return __awaiter(_this, void 0, void 0, function () {
        var error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/recorderBandit", info)
                            .then(function (result) {
                            console.log(result);
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_5 = _a.sent();
                    console.log(error_5);
                    return [3 /*break*/, 4];
                case 3:
                    setPolice("");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var CheckHistory = function (info) { return __awaiter(_this, void 0, void 0, function () {
        var error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/ipfs", info)
                            .then(function (result) {
                            console.log(result);
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_6 = _a.sent();
                    console.log(error_6);
                    return [3 /*break*/, 4];
                case 3:
                    setPolice("");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var CheckBalance = function (info) { return __awaiter(_this, void 0, void 0, function () {
        var error_7;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, 3, 4]);
                    return [4 /*yield*/, axios_1["default"]
                            .post("http://localhost:8000/api/balance", info)
                            .then(function (result) {
                            console.log(result);
                        })["catch"](function (err) {
                            console.log(err);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2:
                    error_7 = _a.sent();
                    console.log(error_7);
                    return [3 /*break*/, 4];
                case 3:
                    setPolice("");
                    return [7 /*endfinally*/];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getTransactionJSX = [
        {
            key: "1",
            jsx: (react_1["default"].createElement(antd_3.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E2A\u0E34\u0E17\u0E18\u0E34\u0E23\u0E30\u0E14\u0E31\u0E1A\u0E2B\u0E31\u0E27\u0E2B\u0E19\u0E49\u0E32")),
                react_1["default"].createElement(getTranStyled_2.TransactionStyled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/boss.svg", alt: "coin", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_1.Input, { placeholder: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setPolice(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Button, { type: "primary", onClick: function () {
                            CheckSuperviser({ superviser: superviser });
                        } }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"))))
        },
        {
            key: "2",
            jsx: (react_1["default"].createElement(antd_3.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E02\u0E2D\u0E07\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08")),
                react_1["default"].createElement(getTranStyled_2.TransactionStyled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/search.svg", alt: "coin", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_1.Input, { placeholder: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setPolice(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Button, { type: "primary", onClick: function () {
                            CheckInfoPolice({ police: police });
                        } }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"))))
        },
        {
            key: "3",
            jsx: (react_1["default"].createElement(antd_3.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E25\u0E07\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08")),
                react_1["default"].createElement(getTranStyled_2.TransactionStyled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/resume.svg", alt: "coin", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_1.Input, { placeholder: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setPolice(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Button, { type: "primary", onClick: function () {
                            CheckPortfolio({ police: police });
                        } }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"))))
        },
        {
            key: "4",
            jsx: (react_1["default"].createElement(antd_3.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E39\u0E49\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E01\u0E23\u0E30\u0E17\u0E33\u0E1C\u0E34\u0E14\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22 (\u0E25\u0E47\u0E2D\u0E04\u0E15\u0E33\u0E23\u0E27\u0E08)")),
                react_1["default"].createElement(getTranStyled_2.TransactionStyled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/stat.svg", alt: "coin", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_1.Input, { placeholder: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setPolice(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_1.Input, { placeholder: "\u0E1C\u0E39\u0E49\u0E01\u0E23\u0E30\u0E17\u0E33\u0E1C\u0E34\u0E14\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22 (Address)", onChange: function (e) {
                            setBandit(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Button, { type: "primary", onClick: function () {
                            CheckRecorderPolices({ certifier: police, bandit: bandit });
                        } }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"))))
        },
        {
            key: "5",
            jsx: (react_1["default"].createElement(antd_3.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1C\u0E39\u0E49\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E02\u0E2D\u0E07\u0E1C\u0E39\u0E49\u0E01\u0E23\u0E30\u0E17\u0E33\u0E1C\u0E34\u0E14\u0E01\u0E0E\u0E2B\u0E21\u0E32\u0E22 (\u0E42\u0E14\u0E22\u0E23\u0E27\u0E21)")),
                react_1["default"].createElement(getTranStyled_2.TransactionStyled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/stat.svg", alt: "coin", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_1.Input, { placeholder: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setPolice(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Button, { type: "primary", onClick: function () {
                            CheckRecorderPolice({ recorder: police });
                        } }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"))))
        },
        {
            key: "6",
            jsx: (react_1["default"].createElement(antd_3.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E1B\u0E23\u0E30\u0E27\u0E31\u0E15\u0E34\u0E01\u0E32\u0E23\u0E1A\u0E31\u0E19\u0E17\u0E36\u0E01\u0E02\u0E49\u0E2D\u0E21\u0E39\u0E25\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14")),
                react_1["default"].createElement(getTranStyled_2.TransactionStyled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/list.svg", alt: "coin", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_1.Input, { placeholder: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setPolice(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Button, { type: "primary", onClick: function () {
                            CheckHistory({ account: police });
                        } }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"))))
        },
        {
            key: "7",
            jsx: (react_1["default"].createElement(antd_3.Card, { className: "card-set-transaction" },
                react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                    react_1["default"].createElement("h5", null, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A\u0E08\u0E33\u0E19\u0E27\u0E19\u0E40\u0E2B\u0E23\u0E35\u0E22\u0E0D")),
                react_1["default"].createElement(getTranStyled_2.TransactionStyled, null,
                    react_1["default"].createElement("div", { className: "d-flex justify-content-center" },
                        react_1["default"].createElement("img", { src: "/static/svg/getCoin.svg", alt: "coin", className: "dasdboard-img" }))),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_1.Input, { placeholder: "\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08 (Address)", onChange: function (e) {
                            setPolice(e.target.value);
                        } })),
                react_1["default"].createElement("div", { className: "mt-1" },
                    react_1["default"].createElement(antd_2.Button, { type: "primary", onClick: function () {
                            CheckBalance({ police: police });
                        } }, "\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A"))))
        },
    ];
    return (react_1["default"].createElement(getTranStyled_1.GetTranStyled, null,
        react_1["default"].createElement("div", { className: "d-flex justify-content-center" }, getTransactionJSX.map(function (index) {
            console.log(index.key, GetkeySelect);
            return index.key === GetkeySelect && index.jsx;
        }))));
}
exports["default"] = GetTransaction;
