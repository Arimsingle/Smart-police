"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var font_1 = require("../font-config/font");
var NavBar_1 = require("../components/nav-bar/NavBar");
var styled_components_1 = require("styled-components");
// import { dataImg_background } from "../public/static/images/data/bg_svg";
var react_1 = require("react");
var parallax_1 = require("@react-spring/parallax");
var antd_1 = require("antd");
var fa_1 = require("react-icons/fa");
var react_spring_1 = require("react-spring");
var contactStyled_1 = require("../style/style-component/contact/contactStyled");
var spring_effect_1 = require("../style/spring/spring_effect");
require("aos/dist/aos.css");
var ArrowAnimation = styled_components_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @keyframes changeY {\n    0% {\n      transform: translateY(-10%);\n      opacity: 0%;\n    }\n    50% {\n      transform: translateY(-20%);\n      opacity: 50%;\n    }\n    100% {\n      transform: translateY(50%);\n      opacity: 100%;\n    }\n  }\n  .arrow {\n    font-size: 10px;\n    animation-duration: 1s;\n    animation-name: changeY;\n    animation-iteration-count: infinite;\n    animation-direction: alternate-reverse;\n  }\n  .stick {\n    margin-top: -55px;\n  }\n  .arrow:hover {\n    cursor: pointer;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @keyframes changeY {\n    0% {\n      transform: translateY(-10%);\n      opacity: 0%;\n    }\n    50% {\n      transform: translateY(-20%);\n      opacity: 50%;\n    }\n    100% {\n      transform: translateY(50%);\n      opacity: 100%;\n    }\n  }\n  .arrow {\n    font-size: 10px;\n    animation-duration: 1s;\n    animation-name: changeY;\n    animation-iteration-count: infinite;\n    animation-direction: alternate-reverse;\n  }\n  .stick {\n    margin-top: -55px;\n  }\n  .arrow:hover {\n    cursor: pointer;\n  }\n"])));
var Contact = function () {
    var _a = react_1.useState(0), offsetY = _a[0], setOffsetY = _a[1];
    var ref = react_1.useRef();
    react_1.useEffect(function () {
        window.addEventListener("scroll", function () {
            return setOffsetY(window.pageYOffset);
        });
    }, []);
    // console.log("offsetY => ", offsetY);
    var svgGroup = (React.createElement("div", null,
        React.createElement("div", { className: "arrow" },
            React.createElement("svg", { width: "135", height: "78", viewBox: "0 0 735 678", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M357.188 520.421L216.203 379.598C209.403 372.806 209.403 361.795 216.203 355.004L232.647 338.579C239.435 331.799 250.436 331.786 257.24 338.55L369.5 450.155L481.759 338.55C488.563 331.786 499.565 331.799 506.353 338.579L522.796 355.004C529.596 361.795 529.596 372.807 522.796 379.598L381.812 520.421C375.012 527.212 363.988 527.212 357.188 520.421Z", fill: "#DBDBDB" }))),
        React.createElement("div", { className: "arrow stick" },
            React.createElement("svg", { width: "135", height: "78", viewBox: "0 0 735 678", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
                React.createElement("path", { d: "M357.188 520.421L216.203 379.598C209.403 372.806 209.403 361.795 216.203 355.004L232.647 338.579C239.435 331.799 250.436 331.786 257.24 338.55L369.5 450.155L481.759 338.55C488.563 331.786 499.565 331.799 506.353 338.579L522.796 355.004C529.596 361.795 529.596 372.807 522.796 379.598L381.812 520.421C375.012 527.212 363.988 527.212 357.188 520.421Z", fill: "#DBDBDB" })))));
    var url = function (name, wrap) {
        if (wrap === void 0) { wrap = false; }
        return (wrap ? "url(" : "") + "https://awv3node-homepage.surge.sh/build/assets/" + name + ".svg" + (wrap ? ")" : "");
    };
    var setImg = function (path) { return "/static/images/" + path; };
    return (React.createElement(contactStyled_1.ContactStyled, null,
        React.createElement(parallax_1.Parallax, { ref: ref, pages: 3 },
            React.createElement(NavBar_1.NavBar, null),
            React.createElement(parallax_1.ParallaxLayer, { offset: 0, speed: 1, style: { backgroundColor: "#3b3a50" } }),
            React.createElement(parallax_1.ParallaxLayer, { offset: 0, speed: 1.2, factor: 1, style: {
                    backgroundImage: url("stars", true),
                    backgroundSize: "cover"
                } }),
            React.createElement(parallax_1.ParallaxLayer, { offset: 0.1, speed: -0.8 },
                React.createElement("div", { className: "profile" },
                    React.createElement("p", { className: "text-picture" }, "PROGRAMER"))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 0.16, speed: -0.8 },
                React.createElement("div", { className: "profile" },
                    React.createElement("img", { src: setImg("object/profile1.jpg"), style: { display: "block", width: "25%" } }))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 0.7, speed: -0.8, onClick: function () { return ref.current.scrollTo(0.5); } },
                React.createElement(ArrowAnimation, null,
                    React.createElement("img", { src: setImg("object/arrow-down-sign-to-navigate.png"), className: "arrow", style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "3%",
                            cursor: "pointer"
                        } }))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 1, speed: 1.5, factor: 2, style: { backgroundColor: "#2E294E" } }),
            React.createElement(parallax_1.ParallaxLayer, { offset: 1, speed: 1.2, factor: 1, style: {
                    backgroundImage: url("stars", true),
                    backgroundSize: "cover"
                } }),
            React.createElement(parallax_1.ParallaxLayer, { offset: 0.92, speed: 1 },
                React.createElement("div", { className: "profile" },
                    React.createElement("p", { className: "text-picture" }, "ABOUT ME"))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 0.98, speed: 0.8 },
                React.createElement("div", { className: "profile text-picture" },
                    React.createElement("p", null, "Infomation"),
                    React.createElement("div", null,
                        React.createElement(react_spring_1.animated.div, { style: spring_effect_1.FuncArrowAnimation(-10, 1, 0, 1000) },
                            React.createElement(antd_1.Card, { title: React.createElement(fa_1.FaUserTie, { className: "text-picture", style: { color: "black" } }), bordered: true },
                                React.createElement("div", { style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "start"
                                    } },
                                    React.createElement("pre", { className: "card-user" }, "Name: Arim Cheberahim "),
                                    React.createElement("pre", { className: "card-user" }, "ID: 6035512059"),
                                    React.createElement("pre", { className: "card-user" }, "University: PSU PHUKET"))))))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 1.5, speed: 0.8 },
                React.createElement("div", { className: "profile text-picture" },
                    React.createElement("p", null, "Social"),
                    React.createElement("div", { className: "size-icon" },
                        React.createElement("div", { style: { marginRight: "1rem" } },
                            React.createElement(react_spring_1.animated.div, { style: spring_effect_1.FuncArrowAnimation(-10, 1, 0, 1000) },
                                React.createElement(antd_1.Card, { style: { width: "100%" }, className: "card" },
                                    React.createElement("span", { className: "icon" },
                                        React.createElement("a", { href: "https://www.w3schools.com", target: "_blank", style: { textDecoration: "none", color: "#3b5998" } },
                                            React.createElement(fa_1.FaFacebook, null),
                                            " Facebook"))))),
                        React.createElement("div", { style: { marginRight: "1rem" } },
                            React.createElement(react_spring_1.animated.div, { style: spring_effect_1.FuncArrowAnimation(-10, 1, 0, 1000) },
                                React.createElement(antd_1.Card, { style: { width: "100%" }, className: "card" },
                                    React.createElement("span", { className: "icon" },
                                        React.createElement("a", { href: "https://www.w3schools.com", target: "_blank", style: { textDecoration: "none", color: "#DD2A7B" } },
                                            React.createElement(fa_1.FaInstagram, null),
                                            " Instagram"))))),
                        React.createElement("div", null,
                            React.createElement(react_spring_1.animated.div, { style: spring_effect_1.FuncArrowAnimation(-10, 1, 0, 1000) },
                                React.createElement(antd_1.Card, { style: { width: "100%" }, className: "card" },
                                    React.createElement("span", { className: "icon" },
                                        React.createElement("a", { href: "https://www.w3schools.com", target: "_blank", style: { textDecoration: "none", color: "#8134AF" } },
                                            React.createElement(fa_1.FaGithub, null),
                                            " Github")))))))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 2.6, speed: 2, factor: 3, style: { backgroundColor: "#011638" } }),
            React.createElement(parallax_1.ParallaxLayer, { offset: 2.6, speed: 1.2, factor: 3, style: {
                    backgroundImage: url("stars", true),
                    backgroundSize: "cover"
                } }),
            React.createElement(parallax_1.ParallaxLayer, { offset: 2, speed: 1 },
                React.createElement("div", { className: "profile" },
                    React.createElement("p", { className: "text-picture" }, "ADVISOR"))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 2.2, speed: 1 },
                React.createElement("div", { className: "profile" },
                    React.createElement("img", { src: setImg("object/profile3.jpg"), style: { display: "block", width: "25%" } }))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 0.03, speed: -0.9, style: { pointerEvents: "none", opacity: 0.1 } },
                React.createElement("img", { src: url("cloud"), style: { display: "block", width: "10%", marginLeft: "15%" } })),
            React.createElement(parallax_1.ParallaxLayer, { offset: 0.05, speed: -1.2, style: { pointerEvents: "none", opacity: 0.1 } },
                React.createElement("img", { src: url("cloud"), style: { display: "block", width: "10%", marginLeft: "5%" } })),
            React.createElement(parallax_1.ParallaxLayer, { offset: 0.05, speed: -1, style: { pointerEvents: "none", opacity: 0.1 } },
                React.createElement("img", { src: url("cloud"), style: { display: "block", width: "10%", marginLeft: "85%" } })),
            React.createElement(parallax_1.ParallaxLayer, { offset: 3, speed: 1, factor: 3, style: { backgroundColor: "#000e24" } }),
            React.createElement(parallax_1.ParallaxLayer, { offset: 4, speed: 1 },
                React.createElement("div", { className: "bg-clound" },
                    React.createElement("img", { src: setImg("object/night (1).png"), style: {
                            display: "block",
                            width: "70%",
                            opacity: "30%"
                        } }))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 2.6, speed: 1.2, factor: 3, style: {
                    backgroundImage: url("stars", true),
                    backgroundSize: "cover"
                } }),
            React.createElement(parallax_1.ParallaxLayer, { offset: 3.05, speed: 1 },
                React.createElement("div", { className: "profile" },
                    React.createElement("p", { className: "text-picture" }, "ABOUT ME"))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 2.9, speed: 0.75 },
                React.createElement("div", { className: "profile text-picture" },
                    React.createElement("p", null, "Infomation"),
                    React.createElement("div", null,
                        React.createElement(react_spring_1.animated.div, { style: spring_effect_1.FuncArrowAnimation(-10, 1, 0, 1000) },
                            React.createElement(antd_1.Card, { title: React.createElement(fa_1.FaUserTie, { className: "text-picture", style: { color: "black" } }), bordered: true },
                                React.createElement("div", { style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-start",
                                        alignItems: "start"
                                    } },
                                    React.createElement("pre", { className: "card-user" }, "Name: Noppon Cheberahim "),
                                    React.createElement("pre", { className: "card-user" }, "ID: - "),
                                    React.createElement("pre", { className: "card-user" }, "University: PSU PHUKET"))))))),
            React.createElement(parallax_1.ParallaxLayer, { offset: 3.2, speed: 0.6 },
                React.createElement("div", { className: "profile text-picture" },
                    React.createElement("p", null, "Social"),
                    React.createElement("div", { className: "size-icon" },
                        React.createElement("div", { style: { marginRight: "1rem" } },
                            React.createElement(react_spring_1.animated.div, { style: spring_effect_1.FuncArrowAnimation(-10, 1, 0, 1000) },
                                React.createElement(antd_1.Card, { style: { width: "100%" }, className: "card" },
                                    React.createElement("span", { className: "icon" },
                                        React.createElement("a", { href: "https://www.w3schools.com", target: "_blank", style: { textDecoration: "none", color: "#3b5998" } },
                                            React.createElement(fa_1.FaFacebook, null),
                                            " Facebook"))))),
                        React.createElement("div", { style: { marginRight: "1rem" } },
                            React.createElement(react_spring_1.animated.div, { style: spring_effect_1.FuncArrowAnimation(-10, 1, 0, 1000) },
                                React.createElement(antd_1.Card, { style: { width: "100%" }, className: "card" },
                                    React.createElement("span", { className: "icon" },
                                        React.createElement("a", { href: "https://www.w3schools.com", target: "_blank", style: { textDecoration: "none", color: "#DD2A7B" } },
                                            React.createElement(fa_1.FaInstagram, null),
                                            " Instagram"))))),
                        React.createElement("div", null,
                            React.createElement(react_spring_1.animated.div, { style: spring_effect_1.FuncArrowAnimation(-10, 1, 0, 1000) },
                                React.createElement(antd_1.Card, { style: { width: "100%" }, className: "card" },
                                    React.createElement("span", { className: "icon" },
                                        React.createElement("a", { href: "https://www.w3schools.com", target: "_blank", style: { textDecoration: "none", color: "#8134AF" } },
                                            React.createElement(fa_1.FaGithub, null),
                                            " Github"))))))))),
        React.createElement("style", { jsx: true, global: true }, font_1["default"]))
    // <ContactStyled>
    //   <Parallax ref={ref} pages={1.8} scrolling="false">
    //     <NavBar />
    //     <ParallaxLayer
    //       offset={0}
    //       speed={1}
    //       style={{ backgroundColor: "#3b3a50" }}
    //     />
    //     <ParallaxLayer
    //       offset={1}
    //       speed={2}
    //       style={{ backgroundColor: "#2E294E" }}
    //     />
    //     <ParallaxLayer
    //       offset={2}
    //       speed={2}
    //       factor={3}
    //       style={{ backgroundColor: "#011638" }}
    //     />
    //     <ParallaxLayer
    //       offset={0}
    //       speed={1.2}
    //       factor={3}
    //       style={{
    //         backgroundImage: url("stars", true),
    //         backgroundSize: "cover",
    //       }}
    //     />
    //     <ParallaxLayer
    //       offset={0.03}
    //       speed={-0.5}
    //       style={{ pointerEvents: "none", opacity: 0.1 }}
    //     >
    //       <img
    //         src={url("cloud")}
    //         style={{ display: "block", width: "10%", marginLeft: "15%" }}
    //       />
    //     </ParallaxLayer>
    //     <ParallaxLayer
    //       offset={0.09}
    //       speed={-1.5}
    //       style={{ pointerEvents: "none", opacity: 0.1 }}
    //     >
    //       <img
    //         src={url("cloud")}
    //         style={{ display: "block", width: "15%", marginLeft: "1%" }}
    //       />
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={0.09} speed={-1} className="flex-space-around">
    //       <div style={{ marginTop: "-20%" }}>
    //         <h1 style={{ color: "white", cursor: "pointer" }}>
    //           <div className="space-icon-text">
    //             <FaUserTie style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsFullName()}>
    //               Arim Cheberahim
    //             </animated.div>
    //           </div>
    //         </h1>
    //         <h1 style={{ color: "white" }}>
    //           <div className="space-icon-text">
    //             <FaPhoneSquareAlt style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsPhone()}>0936783698</animated.div>
    //           </div>
    //         </h1>
    //         <h1 style={{ color: "white" }}>
    //           <div className="space-icon-text">
    //             <FaMailBulk style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsEmail()}>
    //               s6035512059@phuket.psu.ac.th
    //             </animated.div>
    //           </div>
    //         </h1>
    //         <h1 style={{ color: "white" }}>
    //           <div className="space-icon-text">
    //             <FaFacebook style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsFacebook()}>Facebook</animated.div>
    //           </div>
    //         </h1>
    //         <h1 style={{ color: "white" }}>
    //           <div className="space-icon-text">
    //             <FaInstagram style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsInstagram()}>Instagram</animated.div>
    //           </div>
    //         </h1>
    //         <h1 style={{ color: "white" }}>
    //           <div className="space-icon-text">
    //             <FaGithub style={{ marginRight: "1rem" }} />
    //             <animated.div style={funcPropsGithub()}>Github</animated.div>
    //           </div>
    //         </h1>
    //       </div>
    //       <div>
    //         <img
    //           src="/static/images/object/profile.jpg"
    //           className="position-profile"
    //         />
    //       </div>
    //     </ParallaxLayer>
    //     <ParallaxLayer
    //       offset={0.03}
    //       speed={-1.9}
    //       style={{ pointerEvents: "none", opacity: 0.1 }}
    //     >
    //       <img
    //         src={url("cloud")}
    //         style={{ display: "block", width: "20%", marginLeft: "90%" }}
    //       />
    //     </ParallaxLayer>
    //     <ParallaxLayer offset={1.2} speed={1.5} className="flex-space-around">
    //       <div>
    //         <img src="/static/images/object/profile2.jpg" />
    //       </div>
    //       <div>
    //         <h1>Noppon</h1>
    //         <h1>6035512059</h1>
    //         <h1>PSU PHUKET</h1>
    //       </div>
    //     </ParallaxLayer>
    //   </Parallax>
    //   <style jsx global>
    //     {fontJSX}
    //   </style>
    // </ContactStyled>
    );
};
exports["default"] = Contact;
var templateObject_1;
