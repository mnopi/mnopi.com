"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Mnopi)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "prism-react-renderer/prism"
const prism_namespaceObject = require("prism-react-renderer/prism");
var prism_default = /*#__PURE__*/__webpack_require__.n(prism_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.js



(typeof global !== "undefined" ? global : window).Prism = (prism_default());
__webpack_require__(502);
function Mnopi({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    }));
};


/***/ }),

/***/ 502:
/***/ ((module) => {

module.exports = require("prismjs/components/prism-bash");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(586));
module.exports = __webpack_exports__;

})();