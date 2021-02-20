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
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref2 = Object(C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        var result;
        return C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_8___default()("http://localhost:8080/podcast?access_token=".concat(tokenCode));

              case 2:
                result = _context2.sent;
                setPodcast(result.data);

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
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
      lineNumber: 67,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, _this);
};

_s(Home, "qB5YH6swmiHH/FArMVe27KHGUqw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2tlbiIsInF1ZXJ5Iiwic3BvdGlmeUFwaSIsIlNwb3RpZnkiLCJ0b2tlbkNvZGUiLCJhY2Nlc3NfdG9rZW4iLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicG9kY2FzdCIsInNldFBvZGNhc3QiLCJ1c2VFZmZlY3QiLCJwb2RjYXN0cyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaERhdGEiLCJyZXN1bHQiLCJkYXRhIiwic2V0QWNjZXNzVG9rZW4iLCJnZXRNZSIsInJlc05hbWUiLCJkaXNwbGF5X25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHRixNQUFNLENBQUNHLEtBQXJCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLElBQUlDLHlEQUFKLEVBQW5CO0FBQ0EsTUFBTUMsU0FBUyxHQUFHSixLQUFLLENBQUNLLFlBQXhCOztBQUppQixrQkFLT0Msc0RBQVEsQ0FBNEIsSUFBNUIsQ0FMZjtBQUFBLE1BS1ZDLElBTFU7QUFBQSxNQUtKQyxPQUxJOztBQUFBLG1CQU1hRixzREFBUSxDQUFDLEVBQUQsQ0FOckI7QUFBQSxNQU1WRyxPQU5VO0FBQUEsTUFNREMsVUFOQzs7QUFRakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFFBQVE7QUFBQSxnVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDVEMsNENBQUssQ0FDUkMsR0FERyxzREFDK0NWLFNBRC9DLEdBRUhXLElBRkcsQ0FFRSxVQUFDQyxHQUFELEVBQVM7QUFDYkMseUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0FOLDRCQUFVLENBQUNNLEdBQUQsQ0FBVjtBQUNELGlCQUxHLENBRFM7O0FBQUE7QUFPZkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZVCxPQUFaLEVBQXFCLFdBQXJCOztBQVBlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVJHLFFBQVE7QUFBQTtBQUFBO0FBQUEsT0FBZDs7QUFTQUEsWUFBUTtBQUNULEdBWFEsRUFXTixFQVhNLENBQVQ7QUFhQUQseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTVEsU0FBUztBQUFBLGlWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0tOLDRDQUFLLHNEQUNzQlQsU0FEdEIsRUFEVjs7QUFBQTtBQUNWZ0Isc0JBRFU7QUFJaEJWLDBCQUFVLENBQUNVLE1BQU0sQ0FBQ0MsSUFBUixDQUFWOztBQUpnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFURixTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBT0FBLGFBQVM7QUFDVixHQVRRLEVBU04sRUFUTSxDQUFUOztBQVlBLE1BQUksT0FBT2YsU0FBUCxJQUFvQixRQUF4QixFQUFrQztBQUNoQ2EsV0FBTyxDQUFDQyxHQUFSLENBQVlkLFNBQVosRUFBdUIsV0FBdkI7QUFDRCxHQUZELE1BRU87QUFDTCxXQUFPLDBCQUFQO0FBQ0QsR0FyQ2dCLENBc0NqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FGLFlBQVUsQ0FBQ29CLGNBQVgsQ0FBMEJsQixTQUExQjtBQUVBRixZQUFVLENBQUNxQixLQUFYLEdBQW1CUixJQUFuQixDQUF3QixVQUFDQyxHQUFELEVBQVM7QUFDL0JDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0EsUUFBTVEsT0FBTyxHQUFHUixHQUFHLENBQUNTLFlBQXBCO0FBQ0FqQixXQUFPLENBQUNnQixPQUFELENBQVA7QUFDQVAsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQUcsQ0FBQ1MsWUFBaEI7QUFDRCxHQUxEO0FBT0Esc0JBQ0UscUVBQUMsK0RBQUQ7QUFBVyxVQUFNLEVBQUMsT0FBbEI7QUFBQSwyQkFDRSxxRUFBQyx5REFBRDtBQUFRLFVBQUksRUFBRWxCO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBOUREOztHQUFNVixJO1VBQ1dFLHFEOzs7S0FEWEYsSTtBQWdFU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS4wOTM4NmEwMWM4OWU0MjJmYWIzMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgU3BvdGlmeSBmcm9tIFwic3BvdGlmeS13ZWItYXBpLWpzXCI7XHJcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRva2VuID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHNwb3RpZnlBcGkgPSBuZXcgU3BvdGlmeSgpO1xyXG4gIGNvbnN0IHRva2VuQ29kZSA9IHRva2VuLmFjY2Vzc190b2tlbjtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcclxuICBjb25zdCBbcG9kY2FzdCwgc2V0UG9kY2FzdF0gPSB1c2VTdGF0ZSh7fSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwb2RjYXN0cyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgYXdhaXQgYXhpb3NcclxuICAgICAgICAuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwODAvcG9kY2FzdD9hY2Nlc3NfdG9rZW49JHt0b2tlbkNvZGV9YClcclxuICAgICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgc2V0UG9kY2FzdChyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICBjb25zb2xlLmxvZyhwb2RjYXN0LCBcInBvb2RjYXN0c1wiKTtcclxuICAgIH07XHJcbiAgICBwb2RjYXN0cygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MoXHJcbiAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wb2RjYXN0P2FjY2Vzc190b2tlbj0ke3Rva2VuQ29kZX1gLFxyXG4gICAgICApO1xyXG4gICAgICBzZXRQb2RjYXN0KHJlc3VsdC5kYXRhKTtcclxuICAgIH07XHJcbiBcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGlmICh0eXBlb2YgdG9rZW5Db2RlID09IFwic3RyaW5nXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuQ29kZSwgXCJ0b2tlbkNvZGVcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiBcIlRva2VuIGFjY2VzcyBub3QgZ3JhbnRlZFwiO1xyXG4gIH1cclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgY29uc3QgcG9kY2FzdHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgLy8gICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcclxuICAvLyAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3BvZGNhc3Q/YWNjZXNzX3Rva2VuPSR7dG9rZW5Db2RlfWBcclxuICAvLyAgICAgKTtcclxuICAvLyAgICAgc2V0UG9kY2FzdChyZXN1bHQuZGF0YSk7XHJcbiAgLy8gICB9O1xyXG4gIC8vICAgY29uc29sZS5sb2cocG9kY2FzdHMsIFwicG9kY2FzdHMgZGlkIG1vdW50XCIpO1xyXG4gIC8vIH0sIFtdKTtcclxuICAvLyBjb25zb2xlLmxvZyhnZXRQb2RjYXN0cyk7XHJcbiAgc3BvdGlmeUFwaS5zZXRBY2Nlc3NUb2tlbih0b2tlbkNvZGUpO1xyXG5cclxuICBzcG90aWZ5QXBpLmdldE1lKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgY29uc3QgcmVzTmFtZSA9IHJlcy5kaXNwbGF5X25hbWU7XHJcbiAgICBzZXROYW1lKHJlc05hbWUpO1xyXG4gICAgY29uc29sZS5sb2cocmVzLmRpc3BsYXlfbmFtZSk7XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGhlaWdodD1cIjEwMHZoXCI+XHJcbiAgICAgIDxOYXZCYXIgbmFtZT17bmFtZX0gLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9