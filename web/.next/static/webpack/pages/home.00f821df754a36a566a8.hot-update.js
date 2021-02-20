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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);




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

  if (typeof tokenCode == "string") {
    console.log(tokenCode, "tokenCode");

    var podcasts = /*#__PURE__*/function () {
      var _ref = Object(C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:8080/podcast?access_token=".concat(tokenCode)).then(function (res) {
                  console.log(res);
                  return res;
                });

              case 2:
                console.log(podcasts, "poodcasts");

              case 3:
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
  } else {
    return "Token access not granted";
  }

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var podcasts = axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:8080/podcast?access_token=".concat(tokenCode)).then(function (res) {
      console.log(res);
      return res;
    });
    return function () {
      console.log(podcasts, 'podcasts did mount');
    };
  }, [tokenCode]); // console.log(getPodcasts);

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
      lineNumber: 49,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 5
  }, _this);
};

_s(Home, "NU6HHPLWAciQlPGaAcrCAD/62Fk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2tlbiIsInF1ZXJ5Iiwic3BvdGlmeUFwaSIsIlNwb3RpZnkiLCJ0b2tlbkNvZGUiLCJhY2Nlc3NfdG9rZW4iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiY29uc29sZSIsImxvZyIsInBvZGNhc3RzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzIiwidXNlRWZmZWN0Iiwic2V0QWNjZXNzVG9rZW4iLCJnZXRNZSIsInJlc05hbWUiLCJkaXNwbGF5X25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRixNQUFNLENBQUNHLEtBQXJCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUlDLHlEQUFKLEVBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSixLQUFLLENBQUNLLFlBQXhCOztBQUppQixrQkFLT0Msc0RBQVEsQ0FBNEIsSUFBNUIsQ0FMZjtBQUFBLE1BS1ZDLElBTFU7QUFBQSxNQUtKQyxPQUxJOztBQU9qQixNQUFJLE9BQU9KLFNBQVAsSUFBb0IsUUFBeEIsRUFBa0M7QUFDaENLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTixTQUFaLEVBQXVCLFdBQXZCOztBQUNBLFFBQU1PLFFBQVE7QUFBQSxnVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDVEMsNENBQUssQ0FBQ0MsR0FBTixzREFBd0RULFNBQXhELEdBQXFFVSxJQUFyRSxDQUEwRSxVQUFDQyxHQUFELEVBQVM7QUFDekZOLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBWjtBQUNBLHlCQUFPQSxHQUFQO0FBQ0QsaUJBSE8sQ0FEUzs7QUFBQTtBQUtqQk4sdUJBQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEVBQXNCLFdBQXRCOztBQUxpQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFSQSxRQUFRO0FBQUE7QUFBQTtBQUFBLE9BQWQ7QUFPRCxHQVRELE1BU087QUFDTCxXQUFPLDBCQUFQO0FBQ0Q7O0FBQ0RLLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1MLFFBQVEsR0FBR0MsNENBQUssQ0FBQ0MsR0FBTixzREFBd0RULFNBQXhELEdBQ2pCVSxJQURpQixDQUNaLFVBQUNDLEdBQUQsRUFBUztBQUNaTixhQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBWjtBQUNBLGFBQU9BLEdBQVA7QUFDRCxLQUpnQixDQUFqQjtBQUtBLFdBQU8sWUFBTTtBQUNYTixhQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBWixFQUFzQixvQkFBdEI7QUFDRCxLQUZEO0FBR0QsR0FUUSxFQVNOLENBQUNQLFNBQUQsQ0FUTSxDQUFULENBbkJpQixDQTZCakI7O0FBQ0FGLFlBQVUsQ0FBQ2UsY0FBWCxDQUEwQmIsU0FBMUI7QUFFQUYsWUFBVSxDQUFDZ0IsS0FBWCxHQUFtQkosSUFBbkIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFTO0FBQy9CTixXQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBWjtBQUNBLFFBQU1JLE9BQU8sR0FBR0osR0FBRyxDQUFDSyxZQUFwQjtBQUNBWixXQUFPLENBQUNXLE9BQUQsQ0FBUDtBQUNBVixXQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBRyxDQUFDSyxZQUFoQjtBQUNELEdBTEQ7QUFPQSxzQkFDRSxxRUFBQywrREFBRDtBQUFXLFVBQU0sRUFBQyxPQUFsQjtBQUFBLDJCQUNFLHFFQUFDLHlEQUFEO0FBQVEsVUFBSSxFQUFFYjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQTVDRDs7R0FBTVYsSTtVQUNXRSxxRDs7O0tBRFhGLEk7QUE4Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuMDBmODIxZGY3NTRhMzZhNTY2YTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IFNwb3RpZnkgZnJvbSBcInNwb3RpZnktd2ViLWFwaS1qc1wiO1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0b2tlbiA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBzcG90aWZ5QXBpID0gbmV3IFNwb3RpZnkoKTtcclxuICBjb25zdCB0b2tlbkNvZGUgPSB0b2tlbi5hY2Nlc3NfdG9rZW47XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbCk7XHJcblxyXG4gIGlmICh0eXBlb2YgdG9rZW5Db2RlID09IFwic3RyaW5nXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuQ29kZSwgXCJ0b2tlbkNvZGVcIik7XHJcbiAgICBjb25zdCBwb2RjYXN0cyA9IGFzeW5jKCkgPT4ge1xyXG4gICAgICBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wb2RjYXN0P2FjY2Vzc190b2tlbj0ke3Rva2VuQ29kZX1gKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZyhwb2RjYXN0cywgXCJwb29kY2FzdHNcIilcclxuICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBcIlRva2VuIGFjY2VzcyBub3QgZ3JhbnRlZFwiO1xyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcG9kY2FzdHMgPSBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wb2RjYXN0P2FjY2Vzc190b2tlbj0ke3Rva2VuQ29kZX1gKS5cclxuICAgIHRoZW4oKHJlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIHJldHVybiByZXM7XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocG9kY2FzdHMsICdwb2RjYXN0cyBkaWQgbW91bnQnKVxyXG4gICAgfVxyXG4gIH0sIFt0b2tlbkNvZGVdKVxyXG4gIC8vIGNvbnNvbGUubG9nKGdldFBvZGNhc3RzKTtcclxuICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuQ29kZSk7XHJcblxyXG4gIHNwb3RpZnlBcGkuZ2V0TWUoKS50aGVuKChyZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBjb25zdCByZXNOYW1lID0gcmVzLmRpc3BsYXlfbmFtZTtcclxuICAgIHNldE5hbWUocmVzTmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGlzcGxheV9uYW1lKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgaGVpZ2h0PVwiMTAwdmhcIj5cclxuICAgICAgPE5hdkJhciBuYW1lPXtuYW1lfSAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=