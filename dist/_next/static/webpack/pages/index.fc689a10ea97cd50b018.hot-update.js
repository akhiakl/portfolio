/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/IconSet.tsx":
/*!********************************!*\
  !*** ./components/IconSet.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_akhil_project_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_akhil_project_portfolio_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\nvar IconSet = function IconSet(_ref) {\n  var icons = _ref.icons;\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: icons.map(function (iconItem, i) {\n      var icon = typeof iconItem === 'string' ? \"devicon-\".concat(iconItem) : \"\".concat(iconItem.type, \"-\").concat(iconItem.icon);\n      var title = icon.split('-')[1];\n      var props = {\n        title: title,\n        className: icon,\n        keyParams: \"\".concat(i)\n      };\n\n      if (iconItem.link) {\n        props = _objectSpread(_objectSpread({}, props), {}, {\n          href: (iconItem === null || iconItem === void 0 ? void 0 : iconItem.link) || '/',\n          target: '_blank'\n        });\n      }\n\n      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(iconItem.link ? 'a' : 'i', props);\n    })\n  }, void 0, false);\n};\n\n_c = IconSet;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IconSet);\n\nvar _c;\n\n$RefreshReg$(_c, \"IconSet\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JY29uU2V0LnRzeD84Yjc0Il0sIm5hbWVzIjpbIkljb25TZXQiLCJpY29ucyIsIm1hcCIsImljb25JdGVtIiwiaSIsImljb24iLCJ0eXBlIiwidGl0bGUiLCJzcGxpdCIsInByb3BzIiwiY2xhc3NOYW1lIiwia2V5UGFyYW1zIiwibGluayIsImhyZWYiLCJ0YXJnZXQiLCJjcmVhdGVFbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFjQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLHNCQUNkO0FBQUEsY0FDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsVUFBQ0MsUUFBRCxFQUFXQyxDQUFYLEVBQWlCO0FBQzFCLFVBQU1DLElBQUksR0FDUixPQUFPRixRQUFQLEtBQW9CLFFBQXBCLHFCQUEwQ0EsUUFBMUMsY0FBMERBLFFBQVEsQ0FBQ0csSUFBbkUsY0FBMkVILFFBQVEsQ0FBQ0UsSUFBcEYsQ0FERjtBQUVBLFVBQU1FLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFkO0FBQ0EsVUFBSUMsS0FBMkMsR0FBRztBQUNoREYsYUFBSyxFQUFMQSxLQURnRDtBQUVoREcsaUJBQVMsRUFBRUwsSUFGcUM7QUFHaERNLGlCQUFTLFlBQUtQLENBQUw7QUFIdUMsT0FBbEQ7O0FBS0EsVUFBSUQsUUFBUSxDQUFDUyxJQUFiLEVBQW1CO0FBQ2pCSCxhQUFLLG1DQUFRQSxLQUFSO0FBQWVJLGNBQUksRUFBRSxDQUFBVixRQUFRLFNBQVIsSUFBQUEsUUFBUSxXQUFSLFlBQUFBLFFBQVEsQ0FBRVMsSUFBVixLQUFrQixHQUF2QztBQUE0Q0UsZ0JBQU0sRUFBRTtBQUFwRCxVQUFMO0FBQ0Q7O0FBQ0QsMEJBQU9DLG9EQUFhLENBQUNaLFFBQVEsQ0FBQ1MsSUFBVCxHQUFnQixHQUFoQixHQUFzQixHQUF2QixFQUE0QkgsS0FBNUIsQ0FBcEI7QUFDRCxLQWJBO0FBREgsbUJBRGM7QUFBQSxDQUFoQjs7S0FBTVQsTztBQW1CTiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvSWNvblNldC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlRWxlbWVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgdHlwZSBJY29uVHlwZSA9XG4gIHwge1xuICAgICAgdHlwZTogJ2ljb21vb24nIHwgJ2Rldmljb24nXG4gICAgICBpY29uOiBzdHJpbmdcbiAgICAgIGxpbms/OiBzdHJpbmdcbiAgICB9W11cbiAgfCBzdHJpbmdbXVxuXG5pbnRlcmZhY2UgSWNvblNldFByb3BzIHtcbiAgaWNvbnM6IEljb25UeXBlXG59XG5cbmNvbnN0IEljb25TZXQgPSAoeyBpY29ucyB9OiBJY29uU2V0UHJvcHMpOiBKU1guRWxlbWVudCA9PiAoXG4gIDw+XG4gICAge2ljb25zLm1hcCgoaWNvbkl0ZW0sIGkpID0+IHtcbiAgICAgIGNvbnN0IGljb24gPVxuICAgICAgICB0eXBlb2YgaWNvbkl0ZW0gPT09ICdzdHJpbmcnID8gYGRldmljb24tJHtpY29uSXRlbX1gIDogYCR7aWNvbkl0ZW0udHlwZX0tJHtpY29uSXRlbS5pY29ufWBcbiAgICAgIGNvbnN0IHRpdGxlID0gaWNvbi5zcGxpdCgnLScpWzFdXG4gICAgICBsZXQgcHJvcHM6IFJlYWN0LkFsbEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiA9IHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGNsYXNzTmFtZTogaWNvbixcbiAgICAgICAga2V5UGFyYW1zOiBgJHtpfWAsXG4gICAgICB9XG4gICAgICBpZiAoaWNvbkl0ZW0ubGluaykge1xuICAgICAgICBwcm9wcyA9IHsgLi4ucHJvcHMsIGhyZWY6IGljb25JdGVtPy5saW5rIHx8ICcvJywgdGFyZ2V0OiAnX2JsYW5rJyB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY3JlYXRlRWxlbWVudChpY29uSXRlbS5saW5rID8gJ2EnIDogJ2knLCBwcm9wcylcbiAgICB9KX1cbiAgPC8+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEljb25TZXRcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/IconSet.tsx\n");

/***/ })

});