webpackHotUpdate_N_E("pages/home",{

/***/ "./src/pages/home.tsx":
/*!****************************!*\
  !*** ./src/pages/home.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.tsx");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! spotify-web-api-js */ "./node_modules/spotify-web-api-js/src/spotify-web-api.js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.tsx");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "C:\\Users\\szymo\\gitRepo\\spotify_webapp\\web\\src\\pages\\home.tsx",
    _this = undefined,
    _s = $RefreshSig$();








var Home = function Home() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var token = router.query;
  var spotifyApi = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4___default.a();
  var tokenCode = token.access_token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      name = _useState[0],
      setName = _useState[1];

  if (typeof tokenCode == "string") {
    console.log(tokenCode, "tokenCode");
  } else {
    return "Token access not granted";
  }

  axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("localhost:8080/podcast?access_token=".concat(tokenCode)).then(function (res) {
    return res;
  }); // console.log(getPodcasts);

  spotifyApi.setAccessToken(tokenCode);
  spotifyApi.getMe().then(function (res) {
    console.log(res);
    var resName = res.display_name;
    setName(resName);
    console.log(res.display_name);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    height: "100vh",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__["NavBar"], {
      name: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 5
  }, _this);
};

_s(Home, "ahv9Msc75JY4SnRw7Cu+ixvTs7U=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2tlbiIsInF1ZXJ5Iiwic3BvdGlmeUFwaSIsIlNwb3RpZnkiLCJ0b2tlbkNvZGUiLCJhY2Nlc3NfdG9rZW4iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiY29uc29sZSIsImxvZyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsInNldEFjY2Vzc1Rva2VuIiwiZ2V0TWUiLCJyZXNOYW1lIiwiZGlzcGxheV9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csS0FBckI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUMseURBQUosRUFBbkI7QUFDQSxNQUFNQyxTQUFTLEdBQUdKLEtBQUssQ0FBQ0ssWUFBeEI7O0FBSmlCLGtCQUtPQyxzREFBUSxDQUE0QixJQUE1QixDQUxmO0FBQUEsTUFLVkMsSUFMVTtBQUFBLE1BS0pDLE9BTEk7O0FBT2pCLE1BQUksT0FBT0osU0FBUCxJQUFvQixRQUF4QixFQUFrQztBQUNoQ0ssV0FBTyxDQUFDQyxHQUFSLENBQVlOLFNBQVosRUFBdUIsV0FBdkI7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPLDBCQUFQO0FBQ0Q7O0FBQ0RPLDhDQUFLLENBQUNDLEdBQU4sK0NBQWlEUixTQUFqRCxHQUE4RFMsSUFBOUQsQ0FBbUUsVUFBQ0MsR0FBRCxFQUFTO0FBQzFFLFdBQU9BLEdBQVA7QUFDRCxHQUZELEVBWmlCLENBZ0JqQjs7QUFDQVosWUFBVSxDQUFDYSxjQUFYLENBQTBCWCxTQUExQjtBQUVBRixZQUFVLENBQUNjLEtBQVgsR0FBbUJILElBQW5CLENBQXdCLFVBQUNDLEdBQUQsRUFBUztBQUMvQkwsV0FBTyxDQUFDQyxHQUFSLENBQVlJLEdBQVo7QUFDQSxRQUFNRyxPQUFPLEdBQUdILEdBQUcsQ0FBQ0ksWUFBcEI7QUFDQVYsV0FBTyxDQUFDUyxPQUFELENBQVA7QUFDQVIsV0FBTyxDQUFDQyxHQUFSLENBQVlJLEdBQUcsQ0FBQ0ksWUFBaEI7QUFDRCxHQUxEO0FBT0Esc0JBQ0UscUVBQUMsK0RBQUQ7QUFBVyxVQUFNLEVBQUMsT0FBbEI7QUFBQSwyQkFDRSxxRUFBQyx5REFBRDtBQUFRLFVBQUksRUFBRVg7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0EvQkQ7O0dBQU1WLEk7VUFDV0UscUQ7OztLQURYRixJO0FBaUNTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLjk5Njk1NGRmMmM0YmViZjBkMDRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgU3BvdGlmeSBmcm9tIFwic3BvdGlmeS13ZWItYXBpLWpzXCI7XHJcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRva2VuID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHNwb3RpZnlBcGkgPSBuZXcgU3BvdGlmeSgpO1xyXG4gIGNvbnN0IHRva2VuQ29kZSA9IHRva2VuLmFjY2Vzc190b2tlbjtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcclxuXHJcbiAgaWYgKHR5cGVvZiB0b2tlbkNvZGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgY29uc29sZS5sb2codG9rZW5Db2RlLCBcInRva2VuQ29kZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiVG9rZW4gYWNjZXNzIG5vdCBncmFudGVkXCI7XHJcbiAgfVxyXG4gIGF4aW9zLmdldChgbG9jYWxob3N0OjgwODAvcG9kY2FzdD9hY2Nlc3NfdG9rZW49JHt0b2tlbkNvZGV9YCkudGhlbigocmVzKSA9PiB7XHJcbiAgICByZXR1cm4gcmVzO1xyXG4gIH0pO1xyXG5cclxuICAvLyBjb25zb2xlLmxvZyhnZXRQb2RjYXN0cyk7XHJcbiAgc3BvdGlmeUFwaS5zZXRBY2Nlc3NUb2tlbih0b2tlbkNvZGUpO1xyXG5cclxuICBzcG90aWZ5QXBpLmdldE1lKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgY29uc3QgcmVzTmFtZSA9IHJlcy5kaXNwbGF5X25hbWU7XHJcbiAgICBzZXROYW1lKHJlc05hbWUpO1xyXG4gICAgY29uc29sZS5sb2cocmVzLmRpc3BsYXlfbmFtZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGhlaWdodD1cIjEwMHZoXCI+XHJcbiAgICAgIDxOYXZCYXIgbmFtZT17bmFtZX0gLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9