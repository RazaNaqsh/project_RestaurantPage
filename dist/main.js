/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./imgs/Mythril.png */ \"./src/imgs/Mythril.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Great+Vibes&family=Marck+Script&family=Nunito:wght@400;700;900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tbox-sizing: border-box;\\n}\\nbody {\\n\\tbackground-color: #1e293b;\\n\\tcolor: #86efac;\\n\\tfont-family: \\\"marck script\\\", cursive;\\n\\toverflow: hidden;\\n}\\n\\n/* Header section (used by all) */\\n.content__header {\\n\\tdisplay: flex;\\n\\tjustify-content: space-around;\\n\\talign-items: center;\\n}\\n.header__title {\\n\\tmargin-top: 1.5rem;\\n\\tfont-weight: 700;\\n\\tfont-family: \\\"Great Vibes\\\", cursive;\\n\\tfont-size: 4rem;\\n\\tletter-spacing: 5px;\\n\\tposition: relative;\\n\\tanimation: slide-down 350ms ease-in-out 1 normal;\\n}\\n.header__title::after {\\n\\tcontent: \\\"\\\";\\n\\tposition: absolute;\\n\\ttop: -20px;\\n\\tmargin-left: 5px;\\n\\tbackground-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n\\tbackground-size: 120px;\\n\\tbackground-repeat: no-repeat;\\n\\twidth: 140px;\\n\\theight: 250px;\\n\\tanimation: slide-down 350ms ease-in-out 1 normal;\\n}\\n\\n@keyframes slide-down {\\n\\t0% {\\n\\t\\ttransform: translateY(-1000px);\\n\\t}\\n\\t100% {\\n\\t\\ttransform: translateY(0);\\n\\t}\\n}\\n.header__nav ul {\\n\\tdisplay: flex;\\n\\tgap: 2rem;\\n}\\n.header__nav ul li {\\n\\tlist-style-type: none;\\n\\tfont-size: 1.5rem;\\n\\tfont-family: \\\"marck script\\\", cursive;\\n\\tletter-spacing: 2px;\\n\\tcursor: pointer;\\n\\ttransition: all 150ms ease-in-out;\\n\\tanimation: slide-left 350ms ease-in-out 1 normal;\\n}\\nli:hover {\\n\\ttransform: scale(1.1);\\n\\tcolor: #818cf8;\\n}\\n@keyframes slide-left {\\n\\t0% {\\n\\t\\ttransform: translateX(1000px);\\n\\t}\\n\\t100% {\\n\\t\\ttransform: translateX(0);\\n\\t}\\n}\\n.header__nav a {\\n\\ttext-decoration: none;\\n\\tcolor: inherit;\\n}\\n\\n/* Initial page stylings */\\n.main {\\n\\tdisplay: flex;\\n\\talign-items: center;\\n\\tgap: 3rem;\\n\\tfont-family: \\\"marck script\\\", cursive;\\n}\\n.main__challe {\\n\\theight: 800px;\\n\\tmargin-left: 3rem;\\n\\tanimation: slide-in 350ms ease-in-out 1 normal;\\n}\\n@keyframes slide-in {\\n\\t0% {\\n\\t\\topacity: 0;\\n\\t\\ttransform: translateX(-1000px);\\n\\t}\\n\\t30% {\\n\\t\\topacity: 0;\\n\\t}\\n\\t100% {\\n\\t\\topacity: 1;\\n\\t\\ttransform: translateX(0);\\n\\t}\\n}\\n.main__textSection {\\n\\theight: 25rem;\\n\\tpadding: 1rem;\\n\\tanimation: fade-in 350ms ease-in-out 1 normal;\\n}\\n\\n.main__title {\\n\\tfont-size: 3rem;\\n\\tcolor: #a5b4fc;\\n}\\n@keyframes fade-in {\\n\\t0% {\\n\\t\\topacity: 0;\\n\\t\\tvisibility: hidden;\\n\\t}\\n\\n\\t100% {\\n\\t\\topacity: 1;\\n\\t}\\n}\\n.main__text {\\n\\tfont-size: 1.5rem;\\n\\tcolor: #fda4af;\\n}\\n\\n/* menu page stylings */\\n.menu__main {\\n\\tdisplay: flex;\\n}\\n.menu__textSection {\\n\\twidth: 50vw;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\t/* margin-left: 4rem; */\\n\\tmargin-right: 1rem;\\n\\tmargin-left: 15%;\\n}\\n.menu__textSection__title {\\n\\tmargin-top: 8rem;\\n\\ttext-align: right;\\n\\tcolor: #c4b5fd;\\n\\tanimation: fade-in 350ms ease-in-out 1 normal;\\n}\\n.menu__textMainTitle {\\n\\tfont-size: 2rem;\\n\\tpadding-top: 1rem;\\n\\tanimation: fade-in 350ms ease-in-out 1 normal;\\n}\\n.menu__gridContainer {\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(2, 1fr);\\n\\tgrid-template-rows: repeat(2, 1fr);\\n\\tmin-height: 60vh;\\n\\tgap: 1rem;\\n}\\n\\n.gridItem {\\n\\tborder: 1px solid #818cf8;\\n\\tborder-radius: 5px;\\n\\tanimation: scale-up 350ms ease-in-out 1 normal;\\n\\theight: 30vh;\\n\\twidth: 20vw;\\n\\toverflow: hidden;\\n}\\n.menu-img {\\n\\twidth: 100%;\\n\\theight: 70%;\\n\\tobject-fit: cover;\\n\\tobject-position: center;\\n}\\n.gridItem__Desc {\\n\\tmargin-top: 5%;\\n\\tletter-spacing: 2px;\\n\\ttext-align: center;\\n}\\n\\n@keyframes scale-up {\\n\\t0% {\\n\\t\\ttransform: scale(0);\\n\\t}\\n\\t100% {\\n\\t\\ttransform: scale(1);\\n\\t}\\n}\\n.menu__hugh {\\n\\tmargin-top: 2rem;\\n\\theight: 83vh;\\n\\tanimation: slide-left 350ms ease-in-out 1 normal;\\n}\\n\\n/* contact page styling */\\n.contact__main {\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tmargin-top: 2rem;\\n\\tfont-size: 2rem;\\n\\tcolor: #99f6e4;\\n}\\n\\n.contact__textSection--left {\\n\\theight: 30vh;\\n\\tmax-width: 20vw;\\n\\ttext-align: right;\\n\\tanimation: fade-in 350ms ease-in-out 1 normal;\\n}\\n.contact__catt {\\n\\tmargin: 5rem 1rem 0;\\n\\theight: 70vh;\\n\\tanimation: slide-up 350ms ease-in-out 1 normal;\\n}\\n@keyframes slide-up {\\n\\t0% {\\n\\t\\ttransform: translateY(1000px);\\n\\t}\\n\\t100% {\\n\\t\\ttransform: translateY(0);\\n\\t}\\n}\\n\\n.contact__textSection--right {\\n\\theight: 30vh;\\n\\tmax-width: 20vw;\\n\\tcolor: #c4b5fd;\\n\\tanimation: fade-in 350ms ease-in-out 1 normal;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://eslintprettier/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://eslintprettier/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://eslintprettier/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://eslintprettier/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://eslintprettier/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://eslintprettier/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://eslintprettier/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://eslintprettier/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://eslintprettier/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://eslintprettier/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://eslintprettier/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contactPageLoad)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _imgs_catt_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/catt.png */ \"./src/imgs/catt.png\");\n\n\n\nfunction contactPageLoad() {\n\t(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\tconst content = document.getElementById(\"content\");\n\n\t// contact-main\n\tconst contactMain = document.createElement(\"main\");\n\tcontactMain.classList.add(\"contact__main\");\n\tcontent.append(contactMain);\n\n\t// contact-textSectionLeft\n\tconst contactTextSectionLeft = document.createElement(\"section\");\n\tcontactTextSectionLeft.classList.add(\"contact__textSection--left\");\n\tcontactMain.append(contactTextSectionLeft);\n\n\tconst leftText = document.createElement(\"h3\");\n\tleftText.classList.add(\"contact__text--left\");\n\tcontactTextSectionLeft.append(leftText);\n\tleftText.textContent = \"Dont break anything in here!\";\n\n\t// catt-img\n\tconst catt = new Image();\n\tcatt.src = _imgs_catt_png__WEBPACK_IMPORTED_MODULE_1__;\n\tcatt.classList.add(\"contact__catt\");\n\tcontactMain.append(catt);\n\n\t// contact-textSectionRight\n\tconst contactTextSectionRight = document.createElement(\"section\");\n\tcontactTextSectionRight.classList.add(\"contact__textSection--right\");\n\tcontactMain.append(contactTextSectionRight);\n\n\tconst righText = document.createElement(\"h3\");\n\trighText.classList.add(\"contact__text--right\");\n\tcontactTextSectionRight.append(righText);\n\trighText.textContent = \"Else you wont get to be inside the next time!\";\n}\n\n//  text idea - , dont ever come again human!... but on second thoughts.. you can come if master challe allows it\n\n\n//# sourceURL=webpack://eslintprettier/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ headerLoader)\n/* harmony export */ });\nfunction headerLoader() {\n\tconst content = document.getElementById(\"content\");\n\n\t// header\n\tconst header = document.createElement(\"header\");\n\theader.classList.add(\"content__header\");\n\tcontent.append(header);\n\t// header-title\n\tconst headerTitle = document.createElement(\"h1\");\n\theaderTitle.textContent = \"Challe Fen Challe\";\n\theaderTitle.classList.add(\"header__title\");\n\theader.append(headerTitle);\n\n\t// header-nav\n\tconst navBar = document.createElement(\"nav\");\n\tnavBar.classList.add(\"header__nav\");\n\theader.append(navBar);\n\n\tconst ul = document.createElement(\"ul\");\n\tnavBar.append(ul);\n\tconst listArray = [\"Home\", \"Menu\", \"Contact\"];\n\tfor (let i = 0; i < listArray.length; i += 1) {\n\t\tconst li = document.createElement(\"li\");\n\t\tli.innerHTML = `<a href=\"\" class =${listArray[i]}>${listArray[i]}</a>`;\n\t\tul.append(li);\n\t}\n}\n\n\n//# sourceURL=webpack://eslintprettier/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialpage */ \"./src/initialpage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n(0,_initialpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nfunction linkPage() {\n\tconst home = document.querySelector(\".Home\");\n\tconst menu = document.querySelector(\".Menu\");\n\tconst contact = document.querySelector(\".Contact\");\n\n\tfunction removeContentElements() {\n\t\tconst content = document.querySelector(\"#content\");\n\t\tlet child = content.lastElementChild;\n\t\twhile (child) {\n\t\t\tcontent.removeChild(child);\n\t\t\tchild = content.lastElementChild;\n\t\t}\n\t}\n\tfunction loadHomePage(e) {\n\t\te.preventDefault();\n\t\tremoveContentElements();\n\t\t(0,_initialpage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\t\tlinkPage();\n\t}\n\tfunction loadMenuPage(e) {\n\t\te.preventDefault();\n\t\tremoveContentElements();\n\t\t(0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t\tlinkPage();\n\t}\n\tfunction loadContactPage(e) {\n\t\te.preventDefault();\n\t\tremoveContentElements();\n\t\t(0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\t\tlinkPage();\n\t}\n\n\thome.addEventListener(\"click\", loadHomePage);\n\tmenu.addEventListener(\"click\", loadMenuPage);\n\tcontact.addEventListener(\"click\", loadContactPage);\n}\n\nlinkPage();\n\n\n//# sourceURL=webpack://eslintprettier/./src/index.js?");

/***/ }),

/***/ "./src/initialpage.js":
/*!****************************!*\
  !*** ./src/initialpage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ intialLoad)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _imgs_Challe_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/Challe.png */ \"./src/imgs/Challe.png\");\n\n\n\nfunction intialLoad() {\n\t(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\tconst content = document.getElementById(\"content\");\n\t// main\n\tconst main = document.createElement(\"main\");\n\tmain.classList.add(\"main\");\n\tcontent.append(main);\n\n\t// main-challe\n\tconst challe = new Image();\n\tchalle.src = _imgs_Challe_png__WEBPACK_IMPORTED_MODULE_1__;\n\tchalle.classList.add(\"main__challe\");\n\tmain.append(challe);\n\n\t// main-textSection\n\tconst mainTextSection = document.createElement(\"section\");\n\tmainTextSection.classList.add(\"main__textSection\");\n\tmain.append(mainTextSection);\n\n\t// main-title\n\tconst maintitle = document.createElement(\"h2\");\n\tmainTextSection.append(maintitle);\n\tmaintitle.classList.add(\"main__title\");\n\tmaintitle.textContent = \"Welcome to the Warrior Fairy Restaurant~\";\n\n\t// main-textContent\n\tconst mainPara = document.createElement(\"p\");\n\tmainPara.classList.add(\"main__text\");\n\tmainTextSection.append(mainPara);\n\tmainPara.textContent = \"Would you like some sugar silver?\";\n}\n\n\n//# sourceURL=webpack://eslintprettier/./src/initialpage.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuPageLoad)\n/* harmony export */ });\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _imgs_hugh_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/hugh.png */ \"./src/imgs/hugh.png\");\n\n\n\nfunction menuPageLoad() {\n\t(0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\tconst content = document.getElementById(\"content\");\n\n\t//  menu-main\n\tconst menuMain = document.createElement(\"main\");\n\tmenuMain.classList.add(\"menu__main\");\n\tcontent.append(menuMain);\n\n\t//  menu-textContent\n\tconst menuTextSection = document.createElement(\"section\");\n\tmenuTextSection.classList.add(\"menu__textSection\");\n\tmenuMain.append(menuTextSection);\n\n\t//  titles\n\tconst menuTextSectionTitle = document.createElement(\"h2\");\n\tmenuTextSectionTitle.classList.add(\"menu__textSection__title\");\n\tmenuTextSection.append(menuTextSectionTitle);\n\tmenuTextSectionTitle.textContent = \"What would you like to eat..?\";\n\n\tconst menuTextMainTitle = document.createElement(\"h1\");\n\tmenuTextMainTitle.classList.add(\"menu__textMainTitle\");\n\tmenuTextSection.append(menuTextMainTitle);\n\tmenuTextMainTitle.textContent = \"The Menu~\";\n\n\t// menu-grid\n\tconst menuGridContainer = document.createElement(\"div\");\n\tmenuGridContainer.classList.add(\"menu__gridContainer\");\n\tmenuTextSection.append(menuGridContainer);\n\n\t// grid-items\n\tconst menuItems = [\n\t\t{\n\t\t\tname: \"item1\",\n\t\t\tsrc: \"https://media.istockphoto.com/id/1161805849/photo/strawberry-vanilla-chocolate-ice-cream-with-waffle-cone-on-marble-stone-backgrounds.jpg?s=612x612&w=0&k=20&c=BXObHKE0gbA2autsMZGFeEmK2xGKYdJBbM1_ig0Boyk=\",\n\t\t},\n\t\t{\n\t\t\tname: \"item2\",\n\t\t\tsrc: \"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/homemade-ice-cream-recipe.jpg\",\n\t\t},\n\t\t{\n\t\t\tname: \"item3\",\n\t\t\tsrc: \"https://www.allrecipes.com/thmb/P59TgUCXtQbv69dHRlZduE38xs8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/453291-five-ingredient-ice-cream-Alberta-Rose-4x3-1-4c9ec10ac4ab4e828615e81aa608dd6b.jpg\",\n\t\t},\n\t\t{\n\t\t\tname: \"item4\",\n\t\t\tsrc: \"https://upload.wikimedia.org/wikipedia/commons/2/2e/Ice_cream_with_whipped_cream%2C_chocolate_syrup%2C_and_a_wafer_%28cropped%29.jpg\",\n\t\t},\n\t];\n\n\tfor (let i = 0; i < menuItems.length; i += 1) {\n\t\tconst gridItem = document.createElement(\"div\");\n\t\tgridItem.classList.add(\"gridItem\");\n\t\tmenuGridContainer.append(gridItem);\n\n\t\tconst itemImg = document.createElement(\"img\");\n\t\titemImg.src = `${menuItems[i].src}`;\n\t\titemImg.classList.add(\"menu-img\");\n\t\tgridItem.append(itemImg);\n\n\t\tconst itemDesc = document.createElement(\"h2\");\n\t\titemDesc.classList.add(\"gridItem__Desc\");\n\t\titemDesc.textContent = `${menuItems[i].name}`;\n\t\tgridItem.append(itemDesc);\n\t}\n\t//  menu-hugh\n\tconst hugh = new Image();\n\thugh.src = _imgs_hugh_png__WEBPACK_IMPORTED_MODULE_1__;\n\thugh.classList.add(\"menu__hugh\");\n\tmenuMain.append(hugh);\n}\n\n\n//# sourceURL=webpack://eslintprettier/./src/menu.js?");

/***/ }),

/***/ "./src/imgs/Challe.png":
/*!*****************************!*\
  !*** ./src/imgs/Challe.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"b297ea6265f7ee85b849.png\";\n\n//# sourceURL=webpack://eslintprettier/./src/imgs/Challe.png?");

/***/ }),

/***/ "./src/imgs/Mythril.png":
/*!******************************!*\
  !*** ./src/imgs/Mythril.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4b195e4b3af616a3df9d.png\";\n\n//# sourceURL=webpack://eslintprettier/./src/imgs/Mythril.png?");

/***/ }),

/***/ "./src/imgs/catt.png":
/*!***************************!*\
  !*** ./src/imgs/catt.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"692fcffb9afa574baaac.png\";\n\n//# sourceURL=webpack://eslintprettier/./src/imgs/catt.png?");

/***/ }),

/***/ "./src/imgs/hugh.png":
/*!***************************!*\
  !*** ./src/imgs/hugh.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"39d986376356d40fa5cd.png\";\n\n//# sourceURL=webpack://eslintprettier/./src/imgs/hugh.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;