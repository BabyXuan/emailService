/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emailTemplates_WelcomeEmail__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emailTemplates_Html__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_styled_components__);





 // <-- importing ServerStyleSheet

const port = 3000;
const server = __WEBPACK_IMPORTED_MODULE_0_express___default()();
const mailer = __webpack_require__(10);

//entrypoint

server.post('/email', (req, res) => {
    res.set("Content-Type", "application/json");
    // const {email, userName} = req.body;
    const email = "xuan.zhu@healthtap.com";
    const sheet = new __WEBPACK_IMPORTED_MODULE_5_styled_components__["ServerStyleSheet"]();
    const body = Object(__WEBPACK_IMPORTED_MODULE_2_react_dom_server__["renderToString"])(sheet.collectStyles(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__emailTemplates_WelcomeEmail__["a" /* default */], null))); // <-- collecting styles
    const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
    const title = 'Server side Rendering with Styled Components';
    const messageInfo = {
        email,
        fromEmail: "frada.qin+emailjet@healthtap.com",
        fromName: "HealthTap",
        subject: "Welcome to HealthTap"
    };
    mailer.sendEmail(messageInfo, Object(__WEBPACK_IMPORTED_MODULE_4__emailTemplates_Html__["a" /* default */])({ body, styles, title }));
    res.send('{"message":"Email sent."}');
});

//for local testing:
// server.get("/", (req, res) => {
//     console.log("req", req);
//     const sheet = new ServerStyleSheet();
//     const body = renderToString(sheet.collectStyles(<WelcomeEmail />)); // <-- collecting styles
//     const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
//     const title = 'Server side Rendering with Styled Components';
//     res.send(
//         Html({
//             body,
//             styles, // <-- passing the styles to our Html template
//             title
//         })
//     );
// });
server.listen(port);
console.log(`Serving at http://localhost:${port}`);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_styled_components__);







const Content = __WEBPACK_IMPORTED_MODULE_3_styled_components___default.a.div`
    max-width: 640px;
    margin: 0 auto;
    border: 1px solid #ccc;
    background-color: #fff;
    text-align: center;
`;
const WelcomeEmail = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    Content,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__header__["a" /* default */], null),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'This is the content from email body'
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__footer__["a" /* default */], null)
);

/* harmony default export */ __webpack_exports__["a"] = (WelcomeEmail);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__header_css__);






const HeaderContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div`
    text-align: center;
    margin: 50px auto 0;
    height: 50px;
    max-width: 640px;
`;
const Image = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.img`
  width: 114px;
  max-width: 50%;
  margin: 5px auto;
  border-radius: 8px;
`;

const Header = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    HeaderContainer,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Image, { src: 'https://ci6.googleusercontent.com/proxy/OBlkgJi8Rysi-ICnRX8VCEYgxCDIjmbqZRiR4k9cTjkpqtvljtiDsENSUKb_Y9WJNYuSUMNuVYsWnHsd48t5hC20cZfwMUtk7Q5RGAWjZVNPd4jD2oetw-awNfiwKg=s0-d-e1-ft#https://webservices.healthtap.com/imgs/sunrise/healthtap/healthtap_logo.png' })
);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_components___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_components__);




const FooterContainer = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.div`
  text-align: center;
  width: 330px;
  margin: 0 auto;
  color: #aaa;
`;

const Link = __WEBPACK_IMPORTED_MODULE_1_styled_components___default.a.a`
    text-decoration: none!important;
    color: #32c0d4;
`;
const Footer = () => __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    FooterContainer,
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'We\'re only here to help. If you\'d like to no longer receive this type of email, you may always change your',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Link,
            null,
            ' notification preference'
        ),
        ' or ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Link,
            null,
            'unsubscribe.'
        )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        null,
        'Together we\'re healthier HealthTap, ',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            Link,
            null,
            '2465 Latham Street, Suite 300, Mountain View, CA 94040'
        )
    )
);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Html
 * This Html.js file acts as a template that we insert all our generated
 * application strings into before sending it to the client.
 */
const Html = ({ body, styles, title }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      ${styles}
    </head>
    <body style="margin:0">
      <div id="app">${body}</div>
    </body>
  </html>
`;

/* harmony default export */ __webpack_exports__["a"] = (Html);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
//mailer.js is to send email by mailjet


//connect mailjet

const mailjet = __webpack_require__(11).connect('7424f01cfba2096dec4ac26b2c5cc163', '2802ded507d359f077fbf0b0f4d3bc6d');

//send email by email jet
exports.sendEmail = function (messageInfo, emailTemplate) {
    return mailjet.post("send", { version: "v3.1" }).request({
        Messages: [{
            From: { Email: messageInfo.fromEmail, Name: messageInfo.fromName },
            To: [{ Email: messageInfo.email }],
            Subject: messageInfo.subject,
            HTMLPart: emailTemplate
        }]
    });
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("node-mailjet");

/***/ })
/******/ ]);