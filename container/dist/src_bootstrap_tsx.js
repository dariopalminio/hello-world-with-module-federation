/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcontainer"] = self["webpackChunkcontainer"] || []).push([["src_bootstrap_tsx"],{

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var app1_AppOne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app1/AppOne */ \"webpack/container/remote/app1/AppOne\");\n/* harmony import */ var app1_AppOne__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(app1_AppOne__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ContextProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ContextProvider */ \"./src/ContextProvider.tsx\");\n\n\n\n\nfunction App() {\n    var user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_ContextProvider__WEBPACK_IMPORTED_MODULE_3__.UserContext).user;\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ContextProvider__WEBPACK_IMPORTED_MODULE_3__.default, { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", { children: \"Micro Frontends with Module Federation, React and Typescript\" }, void 0), \"Hello world from Container App.\", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((app1_AppOne__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0)] }, void 0) }, void 0));\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack://container/./src/App.tsx?");

/***/ }),

/***/ "./src/ContextProvider.tsx":
/*!*********************************!*\
  !*** ./src/ContextProvider.tsx ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": function() { return /* binding */ UserContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\n\n\n\n;\nvar UserContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({ user: '' });\nvar ContextProvider = function (_a) {\n    var children = _a.children;\n    var _b = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('Daro'), user = _b[0], setUser = _b[1];\n    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(UserContext.Provider, __assign({ value: { user: user } }, { children: children }), void 0));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContextProvider);\n\n\n//# sourceURL=webpack://container/./src/ContextProvider.tsx?");

/***/ }),

/***/ "./src/bootstrap.tsx":
/*!***************************!*\
  !*** ./src/bootstrap.tsx ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\n/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ \"./src/reportWebVitals.ts\");\n\n\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((react__WEBPACK_IMPORTED_MODULE_1___default().StrictMode), { children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_App__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0) }, void 0), document.getElementById('root'));\n// If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\n(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n\n//# sourceURL=webpack://container/./src/bootstrap.tsx?");

/***/ }),

/***/ "./src/reportWebVitals.ts":
/*!********************************!*\
  !*** ./src/reportWebVitals.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar reportWebVitals = function (onPerfEntry) {\n    if (onPerfEntry && onPerfEntry instanceof Function) {\n        __webpack_require__.e(/*! import() */ \"webpack_sharing_consume_default_web-vitals_web-vitals\").then(__webpack_require__.t.bind(__webpack_require__, /*! web-vitals */ \"webpack/sharing/consume/default/web-vitals/web-vitals\", 23)).then(function (_a) {\n            var getCLS = _a.getCLS, getFID = _a.getFID, getFCP = _a.getFCP, getLCP = _a.getLCP, getTTFB = _a.getTTFB;\n            getCLS(onPerfEntry);\n            getFID(onPerfEntry);\n            getFCP(onPerfEntry);\n            getLCP(onPerfEntry);\n            getTTFB(onPerfEntry);\n        });\n    }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (reportWebVitals);\n\n\n//# sourceURL=webpack://container/./src/reportWebVitals.ts?");

/***/ })

}]);