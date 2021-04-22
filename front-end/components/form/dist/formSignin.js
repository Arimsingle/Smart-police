"use strict";
exports.__esModule = true;
exports.FormSignin = void 0;
var useForm_1 = require("./useForm");
var validateInfo_1 = require("./validateInfo");
var link_1 = require("next/link");
exports.FormSignin = function (_a) {
    var submitForm = _a.submitForm;
    var _b = useForm_1.UseForm(submitForm, validateInfo_1.Validaor, "edit here" //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ), handleChange = _b.handleChange, handleSubmit = _b.handleSubmit, values = _b.values, errors = _b.errors;
    return (React.createElement("div", { className: "form-content-right" },
        React.createElement("form", { onSubmit: handleSubmit, className: "form", noValidate: true },
            React.createElement("h1", { className: "text-top" }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A\u0E02\u0E2D\u0E07\u0E42\u0E04\u0E23\u0E07\u0E07\u0E32\u0E19 Smart Police"),
            React.createElement("div", { className: "form-inputs" },
                React.createElement("label", { className: "form-label" },
                    "\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C ",
                    errors.email && React.createElement("span", null,
                        "*",
                        errors.email)),
                React.createElement("input", { className: "form-input", type: "email", name: "email", placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E2D\u0E35\u0E40\u0E21\u0E25\u0E25\u0E4C\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13", value: values.email, onChange: handleChange })),
            React.createElement("div", { className: "form-inputs" },
                React.createElement("label", { className: "form-label" },
                    "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19 ",
                    errors.password && React.createElement("span", null,
                        "*",
                        errors.password)),
                React.createElement("input", { className: "form-input", type: "password", name: "password", placeholder: "\u0E01\u0E23\u0E2D\u0E01\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19\u0E02\u0E2D\u0E07\u0E04\u0E38\u0E13", value: values.password, onChange: handleChange })),
            React.createElement("button", { className: "form-input-btn", type: "submit" }, "\u0E25\u0E07\u0E0A\u0E37\u0E48\u0E2D\u0E40\u0E02\u0E49\u0E32\u0E43\u0E0A\u0E49"),
            React.createElement("span", { className: "form-input-login" },
                "\u0E17\u0E48\u0E32\u0E19\u0E22\u0E31\u0E07\u0E44\u0E21\u0E48\u0E21\u0E35\u0E1A\u0E31\u0E0D\u0E0A\u0E35? \u0E2A\u0E21\u0E31\u0E04\u0E23",
                React.createElement(link_1["default"], { href: "/signup" },
                    React.createElement("a", null, "\u0E17\u0E35\u0E48\u0E19\u0E35\u0E49"))))));
};
