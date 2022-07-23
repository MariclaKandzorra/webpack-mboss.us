"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HOME),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/index.js
Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/Header.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/Banner.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/SmallCard.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/MediumCard.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/LargeCard.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/Footer.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());









function HOME({ exploreData , cardsData  }) {
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("title", {
                        children: "Design Event MBOSS.US"
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("link", {
                        rel: "icon",
                        href: "https://i.ibb.co/CM7x3FX/1628329259246.png"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/Header.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/Banner.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {}),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("main", {
                className: "max-w-7xl mx-auto px-8 sm:px-16",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("section", {
                        className: "pt-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                                className: "text-4xl font-semibold pb-4",
                                children: "Explore nearby"
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
                                children: exploreData?.map(({ img , distance , location  })=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/SmallCard.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        img: img,
                                        distance: distance,
                                        location: location
                                    }, img))
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("section", {
                        className: "pt-6",
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                                className: "text-4xl font-semibold py-8",
                                children: "Celebrate Anywhere"
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                className: "flex space-x-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 hover:overflow-contain hidden:overflow-x-scroll p-4 -ml-6",
                                children: cardsData?.map(({ img , title  })=>/*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/MediumCard.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                                        img: img,
                                        title: title
                                    }, img))
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("section", {
                        className: "",
                        children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/LargeCard.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("section", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("br", {}),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("br", {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx(Object(function webpackMissingModule() { var e = new Error("Cannot find module './src/application/components/Footer.js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                className: ""
            })
        ]
    });
};
const getStaticProps = async ()=>{
    const [exploreDataRes, cardsDataRes] = await Promise.all([
        fetch("https://jsonkeeper.com/b/8SGQ"),
        fetch("https://jsonkeeper.com/b/8GCH"), 
    ]);
    const [exploreData, cardsData] = await Promise.all([
        exploreDataRes.json(),
        cardsDataRes.json(), 
    ]);
    return {
        props: {
            exploreData,
            cardsData
        },
        revalidate: 5
    };
};


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(711));
module.exports = __webpack_exports__;

})();