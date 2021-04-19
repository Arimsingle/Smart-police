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
exports.LogsDisplay = void 0;
var logsStyled_1 = require("../../style/style-component/logsStyled");
var logTimeline_1 = require("./timelines/logTimeline");
var antd_1 = require("antd");
var antd_2 = require("antd");
var react_1 = require("react");
var fetchAPI_1 = require("./timelines/fetchAPI");
var antd_3 = require("antd");
var faceDetect_1 = require("../face-api/faceDetect");
exports.LogsDisplay = function (_a) {
    var show = _a.show, content = _a.content, title = _a.title;
    var _b = react_1.useState({}), valueObj = _b[0], setValueObj = _b[1];
    var _c = react_1.useState("0xf809976b6043059BECA58cae55d98ED8908Cf961"), account = _c[0], setAccount = _c[1];
    var fetchDataAsync = function () { return __awaiter(void 0, void 0, void 0, function () {
        var apiValues, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = title;
                    switch (_a) {
                        case "Ipfs": return [3 /*break*/, 1];
                        case "PoliceRegister": return [3 /*break*/, 3];
                        case "Portfolio": return [3 /*break*/, 5];
                        case "BanditRegister": return [3 /*break*/, 7];
                        case "Supervisor": return [3 /*break*/, 9];
                        case "Record": return [3 /*break*/, 11];
                    }
                    return [3 /*break*/, 13];
                case 1: return [4 /*yield*/, fetchAPI_1.FetchAPI(title, { account: account }).then(function (res) {
                        return res;
                    })];
                case 2:
                    apiValues = _b.sent();
                    apiValues && setValueObj(apiValues);
                    return [3 /*break*/, 14];
                case 3: return [4 /*yield*/, fetchAPI_1.FetchAPI(title, { police: account }).then(function (res) {
                        return res;
                    })];
                case 4:
                    apiValues = _b.sent();
                    apiValues && setValueObj(apiValues);
                    return [3 /*break*/, 14];
                case 5: return [4 /*yield*/, fetchAPI_1.FetchAPI(title, { police: account }).then(function (res) {
                        return res;
                    })];
                case 6:
                    apiValues = _b.sent();
                    apiValues && setValueObj(apiValues);
                    return [3 /*break*/, 14];
                case 7: return [4 /*yield*/, fetchAPI_1.FetchAPI(title, { bandit: account }).then(function (res) {
                        return res;
                    })];
                case 8:
                    apiValues = _b.sent();
                    apiValues && setValueObj(apiValues);
                    return [3 /*break*/, 14];
                case 9: return [4 /*yield*/, fetchAPI_1.FetchAPI(title, { supervisor: account }).then(function (res) {
                        return res;
                    })];
                case 10:
                    apiValues = _b.sent();
                    apiValues && setValueObj(apiValues);
                    return [3 /*break*/, 14];
                case 11: return [4 /*yield*/, fetchAPI_1.FetchAPI(title, { supervisor: account }).then(function (res) {
                        return res;
                    })];
                case 12:
                    apiValues = _b.sent();
                    apiValues && setValueObj(apiValues);
                    return [3 /*break*/, 14];
                case 13:
                    alert("Error");
                    return [3 /*break*/, 14];
                case 14: return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        fetchDataAsync();
    }, [valueObj]);
    var docs = valueObj.doc;
    var keys = valueObj.key;
    var values = valueObj.value;
    var Search = antd_1.Input.Search;
    var _d = react_1.useState(false), visible = _d[0], setVisible = _d[1];
    if (docs == undefined)
        console.log(555555555);
    var showModal = function () {
        setVisible(true);
    };
    var hideModal = function () {
        setVisible(false);
    };
    console.log(valueObj);
    var modal = (React.createElement(antd_3.Modal, { title: "Face Detection", visible: visible, onOk: hideModal, onCancel: hideModal, okText: "Close", cancelText: "Cancle" },
        React.createElement(faceDetect_1["default"], { visible: visible })));
    return (React.createElement(logsStyled_1.LogsStyled, null,
        React.createElement("div", { className: "container-search" }, show && (React.createElement(Search, { placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E41\u0E2D\u0E14\u0E40\u0E23\u0E2A\u0E02\u0E2D\u0E07\u0E40\u0E08\u0E49\u0E32\u0E2B\u0E19\u0E49\u0E32\u0E17\u0E35\u0E48\u0E15\u0E33\u0E23\u0E27\u0E08\u0E17\u0E35\u0E48\u0E15\u0E49\u0E2D\u0E07\u0E01\u0E32\u0E23\u0E15\u0E23\u0E27\u0E08\u0E2A\u0E2D\u0E1A", onSearch: function (value) { return console.log(value); }, style: { width: 500 } }))),
        React.createElement("div", { className: "text-header" }, "\u0E20\u0E32\u0E1E\u0E23\u0E27\u0E21\u0E44\u0E17\u0E21\u0E4C\u0E44\u0E25\u0E19\u0E4C (\u0E2D\u0E14\u0E35\u0E15-\u0E2D\u0E19\u0E32\u0E04\u0E15)"),
        React.createElement("div", null,
            React.createElement(antd_3.Tag, { color: "cyan" }, content)),
        React.createElement("div", null, modal),
        React.createElement("div", { className: "d-flex justify-content-center" },
            React.createElement(antd_2.Timeline, { mode: "left", className: "timeline-point" }, docs && keys && values ? (docs.map(function (doc, index) {
                return (React.createElement("div", { key: index },
                    React.createElement(logTimeline_1.LogsTimeline, { doc: doc, keys: keys[index], values: values[index] })));
            })) : (React.createElement(antd_3.Result, { status: "403", title: "403", subTitle: "Sorry, you are not authorized to access this page.", extra: React.createElement(antd_3.Button, { type: "primary", onClick: showModal }, "Authentication") }))))));
};
