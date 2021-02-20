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
    _s = $RefreshSig$(),
    _this = undefined,
    _s2 = $RefreshSig$();







var useFetch = function useFetch(tokenCode) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchdata = /*#__PURE__*/function () {
      var _ref = Object(C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var response, dataResponse;
        return C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch( // `http://localhost:8080/podcast?access_token=${tokenCode}`
                tokenCode);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                dataResponse = _context.sent;
                setData(dataResponse);
                setLoading(false);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchdata() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchdata();
  }, []);
  return {
    data: data,
    loading: loading
  };
};

_s(useFetch, "Wy1U1MeUUYvDlT7N+uvWi2fu5GQ=");

var Home = function Home() {
  _s2();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var token = router.query;
  var spotifyApi = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_6___default.a();
  var tokenCode = token.access_token;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      name = _useState3[0],
      setName = _useState3[1]; // const {data, loading} = useFetch(tokenCode)


  var _useFetch = useFetch('https://api.randomuser.me'),
      data = _useFetch.data,
      loading = _useFetch.loading;

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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_7__["NavBar"], {
      name: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "loading...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 18
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, _this);
};

_s2(Home, "L2OFIkhh0c1s0HSxaUcXFUi77qc=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], useFetch];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbInVzZUZldGNoIiwidG9rZW5Db2RlIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2hkYXRhIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhUmVzcG9uc2UiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwidG9rZW4iLCJxdWVyeSIsInNwb3RpZnlBcGkiLCJTcG90aWZ5IiwiYWNjZXNzX3Rva2VuIiwibmFtZSIsInNldE5hbWUiLCJjb25zb2xlIiwibG9nIiwic2V0QWNjZXNzVG9rZW4iLCJnZXRNZSIsInRoZW4iLCJyZXMiLCJyZXNOYW1lIiwiZGlzcGxheV9uYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUlBLElBQU1BLFFBQVEsR0FBRSxTQUFWQSxRQUFVLENBQUNDLFNBQUQsRUFBdUI7QUFBQTs7QUFBQSxrQkFDYkMsc0RBQVEsRUFESztBQUFBLE1BQzlCQyxJQUQ4QjtBQUFBLE1BQ3hCQyxPQUR3Qjs7QUFBQSxtQkFFUEYsc0RBQVEsQ0FBQyxJQUFELENBRkQ7QUFBQSxNQUU5QkcsT0FGOEI7QUFBQSxNQUVyQkMsVUFGcUI7O0FBR3JDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxTQUFTO0FBQUEsZ1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDT0MsS0FBSyxFQUMxQjtBQUNBUix5QkFGMEIsQ0FEWjs7QUFBQTtBQUNWUyx3QkFEVTtBQUFBO0FBQUEsdUJBS1dBLFFBQVEsQ0FBQ0MsSUFBVCxFQUxYOztBQUFBO0FBS1ZDLDRCQUxVO0FBTWhCUix1QkFBTyxDQUFDUSxZQUFELENBQVA7QUFDQU4sMEJBQVUsQ0FBQyxLQUFELENBQVY7O0FBUGdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRFLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFTQUEsYUFBUztBQUNWLEdBWFEsRUFXTixFQVhNLENBQVQ7QUFZQSxTQUFPO0FBQUNMLFFBQUksRUFBSkEsSUFBRDtBQUFPRSxXQUFPLEVBQVBBO0FBQVAsR0FBUDtBQUNELENBaEJEOztHQUFNTCxROztBQXFCTixJQUFNYSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csS0FBckI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUMseURBQUosRUFBbkI7QUFDQSxNQUFNbEIsU0FBUyxHQUFHZSxLQUFLLENBQUNJLFlBQXhCOztBQUppQixtQkFLT2xCLHNEQUFRLENBQTRCLElBQTVCLENBTGY7QUFBQSxNQUtWbUIsSUFMVTtBQUFBLE1BS0pDLE9BTEksa0JBTWpCOzs7QUFOaUIsa0JBT090QixRQUFRLENBQUMsMkJBQUQsQ0FQZjtBQUFBLE1BT1ZHLElBUFUsYUFPVkEsSUFQVTtBQUFBLE1BT0pFLE9BUEksYUFPSkEsT0FQSTs7QUFTakIsTUFBSSxPQUFPSixTQUFQLElBQW9CLFFBQXhCLEVBQWtDO0FBQ2hDc0IsV0FBTyxDQUFDQyxHQUFSLENBQVl2QixTQUFaLEVBQXVCLFdBQXZCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTywwQkFBUDtBQUNEOztBQUVEaUIsWUFBVSxDQUFDTyxjQUFYLENBQTBCeEIsU0FBMUI7QUFFQWlCLFlBQVUsQ0FBQ1EsS0FBWCxHQUFtQkMsSUFBbkIsQ0FBd0IsVUFBQ0MsR0FBRCxFQUFTO0FBQy9CTCxXQUFPLENBQUNDLEdBQVIsQ0FBWUksR0FBWjtBQUNBLFFBQU1DLE9BQU8sR0FBR0QsR0FBRyxDQUFDRSxZQUFwQjtBQUNBUixXQUFPLENBQUNPLE9BQUQsQ0FBUDtBQUNBTixXQUFPLENBQUNDLEdBQVIsQ0FBWUksR0FBRyxDQUFDRSxZQUFoQjtBQUNELEdBTEQ7QUFPQSxzQkFDRSxxRUFBQywrREFBRDtBQUFXLFVBQU0sRUFBQyxPQUFsQjtBQUFBLDRCQUNFLHFFQUFDLHlEQUFEO0FBQVEsVUFBSSxFQUFFVDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHaEIsT0FBTyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILGdCQUE0QjtBQUFBLGdCQUFNRjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQTlCRDs7SUFBTVUsSTtVQUNXRSxxRCxFQU1TZixROzs7S0FQcEJhLEk7QUFnQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuZGE5MjY3NmI1YzNjZWJhNWIyZmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IFNwb3RpZnkgZnJvbSBcInNwb3RpZnktd2ViLWFwaS1qc1wiO1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmNvbnN0IHVzZUZldGNoPSAodG9rZW5Db2RlOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaGRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgLy8gYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wb2RjYXN0P2FjY2Vzc190b2tlbj0ke3Rva2VuQ29kZX1gXHJcbiAgICAgICAgdG9rZW5Db2RlXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgc2V0RGF0YShkYXRhUmVzcG9uc2UpO1xyXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICBmZXRjaGRhdGEoKTtcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIHtkYXRhLCBsb2FkaW5nfTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9rZW4gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qgc3BvdGlmeUFwaSA9IG5ldyBTcG90aWZ5KCk7XHJcbiAgY29uc3QgdG9rZW5Db2RlID0gdG9rZW4uYWNjZXNzX3Rva2VuIGFzIHN0cmluZztcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcclxuICAvLyBjb25zdCB7ZGF0YSwgbG9hZGluZ30gPSB1c2VGZXRjaCh0b2tlbkNvZGUpXHJcbiAgY29uc3Qge2RhdGEsIGxvYWRpbmd9ID0gdXNlRmV0Y2goJ2h0dHBzOi8vYXBpLnJhbmRvbXVzZXIubWUnKVxyXG5cclxuICBpZiAodHlwZW9mIHRva2VuQ29kZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbkNvZGUsIFwidG9rZW5Db2RlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJUb2tlbiBhY2Nlc3Mgbm90IGdyYW50ZWRcIjtcclxuICB9XHJcblxyXG4gIHNwb3RpZnlBcGkuc2V0QWNjZXNzVG9rZW4odG9rZW5Db2RlKTtcclxuXHJcbiAgc3BvdGlmeUFwaS5nZXRNZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGNvbnN0IHJlc05hbWUgPSByZXMuZGlzcGxheV9uYW1lO1xyXG4gICAgc2V0TmFtZShyZXNOYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kaXNwbGF5X25hbWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBoZWlnaHQ9XCIxMDB2aFwiPlxyXG4gICAgICA8TmF2QmFyIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgIHtsb2FkaW5nID8gPGRpdj5sb2FkaW5nLi4uLjwvZGl2PiA6IDxkaXY+e2RhdGF9PC9kaXY+fVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=