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
/* harmony import */ var C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.tsx");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! spotify-web-api-js */ "./node_modules/spotify-web-api-js/src/spotify-web-api.js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.tsx");




var _jsxFileName = "C:\\Users\\szymo\\gitRepo\\spotify_webapp\\web\\src\\pages\\home.tsx",
    _this = undefined,
    _s = $RefreshSig$();







var Home = function Home() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var token = router.query;
  var spotifyApi = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_6___default.a();
  var tokenCode = token.access_token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      podcast = _useState2[0],
      setPodcast = _useState2[1];

  var podcasts = /*#__PURE__*/function () {
    var _ref = Object(C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response, data;
      return C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch("http://localhost:8080/podcast?access_token=".concat(tokenCode));

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.json();

            case 5:
              data = _context.sent;
              setPodcast(data.data);
              console.log(podcast);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function podcasts() {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    podcasts();
  }, []);

  if (typeof tokenCode == "string") {
    console.log(tokenCode, "tokenCode");
  } else {
    return "Token access not granted";
  }

  spotifyApi.setAccessToken(tokenCode);
  spotifyApi.getMe().then(function (res) {
    console.log(res);
    var resName = res.display_name;
    setName(resName);
    console.log(res.display_name);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    height: "100vh",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__["NavBar"], {
      name: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, _this);
};

_s(Home, "DXKJeE+GA2Cbf+DjP1G6dVTDCw8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2tlbiIsInF1ZXJ5Iiwic3BvdGlmeUFwaSIsIlNwb3RpZnkiLCJ0b2tlbkNvZGUiLCJhY2Nlc3NfdG9rZW4iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicG9kY2FzdCIsInNldFBvZGNhc3QiLCJwb2RjYXN0cyIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzZXRBY2Nlc3NUb2tlbiIsImdldE1lIiwidGhlbiIsInJlcyIsInJlc05hbWUiLCJkaXNwbGF5X25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csS0FBckI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUMseURBQUosRUFBbkI7QUFDQSxNQUFNQyxTQUFTLEdBQUdKLEtBQUssQ0FBQ0ssWUFBeEI7O0FBSmlCLGtCQUtPQyxzREFBUSxDQUE0QixJQUE1QixDQUxmO0FBQUEsTUFLVkMsSUFMVTtBQUFBLE1BS0pDLE9BTEk7O0FBQUEsbUJBTWFGLHNEQUFRLENBQUMsRUFBRCxDQU5yQjtBQUFBLE1BTVZHLE9BTlU7QUFBQSxNQU1EQyxVQU5DOztBQVVqQixNQUFNQyxRQUFRO0FBQUEsOFVBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDUUMsS0FBSyxzREFBK0NSLFNBQS9DLEVBRGI7O0FBQUE7QUFDVFMsc0JBRFM7QUFBQTtBQUFBLHFCQUVJQSxRQUFRLENBQUNDLElBQVQsRUFGSjs7QUFBQTtBQUVUQyxrQkFGUztBQUdmTCx3QkFBVSxDQUFDSyxJQUFJLENBQUNBLElBQU4sQ0FBVjtBQUNBQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlSLE9BQVo7O0FBSmU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUkUsUUFBUTtBQUFBO0FBQUE7QUFBQSxLQUFkOztBQU9BTyx5REFBUyxDQUFDLFlBQU07QUFDZFAsWUFBUTtBQUNULEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBS0EsTUFBSSxPQUFPUCxTQUFQLElBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDWSxXQUFPLENBQUNDLEdBQVIsQ0FBWWIsU0FBWixFQUF1QixXQUF2QjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sMEJBQVA7QUFDRDs7QUFFREYsWUFBVSxDQUFDaUIsY0FBWCxDQUEwQmYsU0FBMUI7QUFFQUYsWUFBVSxDQUFDa0IsS0FBWCxHQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFTO0FBQy9CTixXQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBWjtBQUNBLFFBQU1DLE9BQU8sR0FBR0QsR0FBRyxDQUFDRSxZQUFwQjtBQUNBaEIsV0FBTyxDQUFDZSxPQUFELENBQVA7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVlLLEdBQUcsQ0FBQ0UsWUFBaEI7QUFDRCxHQUxEO0FBT0Esc0JBQ0UscUVBQUMsK0RBQUQ7QUFBVyxVQUFNLEVBQUMsT0FBbEI7QUFBQSwyQkFDRSxxRUFBQyx5REFBRDtBQUFRLFVBQUksRUFBRWpCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBMUNEOztHQUFNVixJO1VBQ1dFLHFEOzs7S0FEWEYsSTtBQTRDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS45Zjc4NWZlZTk5ZjhhNTYwNzMzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgU3BvdGlmeSBmcm9tIFwic3BvdGlmeS13ZWItYXBpLWpzXCI7XHJcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0b2tlbiA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBzcG90aWZ5QXBpID0gbmV3IFNwb3RpZnkoKTtcclxuICBjb25zdCB0b2tlbkNvZGUgPSB0b2tlbi5hY2Nlc3NfdG9rZW47XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbCk7XHJcbiAgY29uc3QgW3BvZGNhc3QsIHNldFBvZGNhc3RdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuXHJcblxyXG4gIGNvbnN0IHBvZGNhc3RzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3BvZGNhc3Q/YWNjZXNzX3Rva2VuPSR7dG9rZW5Db2RlfWApXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgc2V0UG9kY2FzdChkYXRhLmRhdGEpO1xyXG4gICAgY29uc29sZS5sb2cocG9kY2FzdCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHBvZGNhc3RzKCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBcclxuICBpZiAodHlwZW9mIHRva2VuQ29kZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbkNvZGUsIFwidG9rZW5Db2RlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJUb2tlbiBhY2Nlc3Mgbm90IGdyYW50ZWRcIjtcclxuICB9XHJcbiAgXHJcbiAgc3BvdGlmeUFwaS5zZXRBY2Nlc3NUb2tlbih0b2tlbkNvZGUpO1xyXG5cclxuICBzcG90aWZ5QXBpLmdldE1lKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgY29uc3QgcmVzTmFtZSA9IHJlcy5kaXNwbGF5X25hbWU7XHJcbiAgICBzZXROYW1lKHJlc05hbWUpO1xyXG4gICAgY29uc29sZS5sb2cocmVzLmRpc3BsYXlfbmFtZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGhlaWdodD1cIjEwMHZoXCI+XHJcbiAgICAgIDxOYXZCYXIgbmFtZT17bmFtZX0gLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9