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

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      podcast = _useState2[0],
      setPodcast = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var podcasts = /*#__PURE__*/function () {
      var _ref = Object(C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default.a.get("http://localhost:8080/podcast?access_token=".concat(tokenCode)).then(function (res) {
                  console.log(res);
                  setPodcast(res);
                });

              case 2:
                console.log(podcast, "poodcasts");

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

    podcasts();
  }, []);

  if (typeof tokenCode == "string") {
    console.log(tokenCode, "tokenCode");
  } else {
    return "Token access not granted";
  } // useEffect(() => {
  //   const podcasts = async () => {
  //     const result = await axios.get(
  //       `http://localhost:8080/podcast?access_token=${tokenCode}`
  //     );
  //     setPodcast(result.data);
  //   };
  //   console.log(podcasts, "podcasts did mount");
  // }, []);
  // console.log(getPodcasts);


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
      lineNumber: 55,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2tlbiIsInF1ZXJ5Iiwic3BvdGlmeUFwaSIsIlNwb3RpZnkiLCJ0b2tlbkNvZGUiLCJhY2Nlc3NfdG9rZW4iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicG9kY2FzdCIsInNldFBvZGNhc3QiLCJ1c2VFZmZlY3QiLCJwb2RjYXN0cyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJzZXRBY2Nlc3NUb2tlbiIsImdldE1lIiwicmVzTmFtZSIsImRpc3BsYXlfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csS0FBckI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUMseURBQUosRUFBbkI7QUFDQSxNQUFNQyxTQUFTLEdBQUdKLEtBQUssQ0FBQ0ssWUFBeEI7O0FBSmlCLGtCQUtPQyxzREFBUSxDQUE0QixJQUE1QixDQUxmO0FBQUEsTUFLVkMsSUFMVTtBQUFBLE1BS0pDLE9BTEk7O0FBQUEsbUJBTWFGLHNEQUFRLENBQUMsRUFBRCxDQU5yQjtBQUFBLE1BTVZHLE9BTlU7QUFBQSxNQU1EQyxVQU5DOztBQVFqQkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsUUFBUTtBQUFBLGdWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNUQyw0Q0FBSyxDQUNSQyxHQURHLHNEQUMrQ1YsU0FEL0MsR0FFSFcsSUFGRyxDQUVFLFVBQUNDLEdBQUQsRUFBUztBQUNiQyx5QkFBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQU4sNEJBQVUsQ0FBQ00sR0FBRCxDQUFWO0FBQ0QsaUJBTEcsQ0FEUzs7QUFBQTtBQU9mQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlULE9BQVosRUFBcUIsV0FBckI7O0FBUGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBUkcsUUFBUTtBQUFBO0FBQUE7QUFBQSxPQUFkOztBQVNBQSxZQUFRO0FBQ1QsR0FYUSxFQVdOLEVBWE0sQ0FBVDs7QUFhQSxNQUFJLE9BQU9SLFNBQVAsSUFBb0IsUUFBeEIsRUFBa0M7QUFDaENhLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZCxTQUFaLEVBQXVCLFdBQXZCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTywwQkFBUDtBQUNELEdBekJnQixDQTBCakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBRixZQUFVLENBQUNpQixjQUFYLENBQTBCZixTQUExQjtBQUVBRixZQUFVLENBQUNrQixLQUFYLEdBQW1CTCxJQUFuQixDQUF3QixVQUFDQyxHQUFELEVBQVM7QUFDL0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsUUFBTUssT0FBTyxHQUFHTCxHQUFHLENBQUNNLFlBQXBCO0FBQ0FkLFdBQU8sQ0FBQ2EsT0FBRCxDQUFQO0FBQ0FKLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNNLFlBQWhCO0FBQ0QsR0FMRDtBQU9BLHNCQUNFLHFFQUFDLCtEQUFEO0FBQVcsVUFBTSxFQUFDLE9BQWxCO0FBQUEsMkJBQ0UscUVBQUMseURBQUQ7QUFBUSxVQUFJLEVBQUVmO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBbEREOztHQUFNVixJO1VBQ1dFLHFEOzs7S0FEWEYsSTtBQW9EU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS5hNDEwYTE3ODI3YTdhYjg1M2M1NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgU3BvdGlmeSBmcm9tIFwic3BvdGlmeS13ZWItYXBpLWpzXCI7XHJcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRva2VuID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHNwb3RpZnlBcGkgPSBuZXcgU3BvdGlmeSgpO1xyXG4gIGNvbnN0IHRva2VuQ29kZSA9IHRva2VuLmFjY2Vzc190b2tlbjtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcclxuICBjb25zdCBbcG9kY2FzdCwgc2V0UG9kY2FzdF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwb2RjYXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvcG9kY2FzdD9hY2Nlc3NfdG9rZW49JHt0b2tlbkNvZGV9YClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgc2V0UG9kY2FzdChyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhwb2RjYXN0LCBcInBvb2RjYXN0c1wiKTtcclxuICAgIH07XHJcbiAgICBwb2RjYXN0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKHR5cGVvZiB0b2tlbkNvZGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgY29uc29sZS5sb2codG9rZW5Db2RlLCBcInRva2VuQ29kZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiVG9rZW4gYWNjZXNzIG5vdCBncmFudGVkXCI7XHJcbiAgfVxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBjb25zdCBwb2RjYXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAvLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFxyXG4gIC8vICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvcG9kY2FzdD9hY2Nlc3NfdG9rZW49JHt0b2tlbkNvZGV9YFxyXG4gIC8vICAgICApO1xyXG4gIC8vICAgICBzZXRQb2RjYXN0KHJlc3VsdC5kYXRhKTtcclxuICAvLyAgIH07XHJcbiAgLy8gICBjb25zb2xlLmxvZyhwb2RjYXN0cywgXCJwb2RjYXN0cyBkaWQgbW91bnRcIik7XHJcbiAgLy8gfSwgW10pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGdldFBvZGNhc3RzKTtcclxuICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuQ29kZSk7XHJcblxyXG4gIHNwb3RpZnlBcGkuZ2V0TWUoKS50aGVuKChyZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBjb25zdCByZXNOYW1lID0gcmVzLmRpc3BsYXlfbmFtZTtcclxuICAgIHNldE5hbWUocmVzTmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGlzcGxheV9uYW1lKTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgaGVpZ2h0PVwiMTAwdmhcIj5cclxuICAgICAgPE5hdkJhciBuYW1lPXtuYW1lfSAvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=