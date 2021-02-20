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

  console.log(tokenCode);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var fetchdata = /*#__PURE__*/function () {
      var _ref = Object(C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var response, dataResponse, myData, idData;
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
                dataResponse = _context.sent;
                // const item = dataResponse.results[0];
                myData = Object.keys(dataResponse).map(function (key) {
                  return dataResponse[key];
                }); // console.log(myData[0].show.id)

                idData = myData.map(function (data) {
                  idData.push(data.show.id);
                });
                console.log(idData, 'idData');
                setData(dataResponse);
                console.log(dataResponse);

              case 11:
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
  }, [tokenCode]);
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


  var _useFetch = useFetch(tokenCode),
      data = _useFetch.data,
      loading = _useFetch.loading;

  if (typeof tokenCode == "string") {
    console.log(tokenCode, "tokenCode"); // console.log(typeof(data));
    // for (const [key, value] of Object.entries(data: obj)) {
    //   console.log(`${key}: ${value}`);
    // }
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
      lineNumber: 65,
      columnNumber: 7
    }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "loading...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 18
    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: data
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 43
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, _this);
};

_s2(Home, "JIdQ0V1HaMmFOEaKHAwWfCAy3p4=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbInVzZUZldGNoIiwidG9rZW5Db2RlIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImZldGNoZGF0YSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YVJlc3BvbnNlIiwibXlEYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImlkRGF0YSIsInB1c2giLCJzaG93IiwiaWQiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwidG9rZW4iLCJxdWVyeSIsInNwb3RpZnlBcGkiLCJTcG90aWZ5IiwiYWNjZXNzX3Rva2VuIiwibmFtZSIsInNldE5hbWUiLCJzZXRBY2Nlc3NUb2tlbiIsImdldE1lIiwidGhlbiIsInJlcyIsInJlc05hbWUiLCJkaXNwbGF5X25hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUF1QjtBQUFBOztBQUN0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVo7O0FBRHNDLGtCQUVkRyxzREFBUSxFQUZNO0FBQUEsTUFFL0JDLElBRitCO0FBQUEsTUFFekJDLE9BRnlCOztBQUFBLG1CQUdSRixzREFBUSxDQUFDLElBQUQsQ0FIQTtBQUFBLE1BRy9CRyxPQUgrQjtBQUFBLE1BR3RCQyxVQUhzQjs7QUFJdENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVM7QUFBQSxnVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNPQyxLQUFLLHNEQUNvQlYsU0FEcEIsRUFEWjs7QUFBQTtBQUNWVyx3QkFEVTtBQUFBO0FBQUEsdUJBSVdBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpYOztBQUFBO0FBSVZDLDRCQUpVO0FBS2hCO0FBQ01DLHNCQU5VLEdBTURDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxZQUFaLEVBQTBCSSxHQUExQixDQUE4QixVQUFBQyxHQUFHLEVBQUk7QUFDbEQseUJBQU9MLFlBQVksQ0FBQ0ssR0FBRCxDQUFuQjtBQUNELGlCQUZjLENBTkMsRUFTaEI7O0FBQ01DLHNCQVZVLEdBVURMLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUFiLElBQUksRUFBSTtBQUNoQ2Usd0JBQU0sQ0FBQ0MsSUFBUCxDQUFZaEIsSUFBSSxDQUFDaUIsSUFBTCxDQUFVQyxFQUF0QjtBQUNELGlCQUZjLENBVkM7QUFhaEJyQix1QkFBTyxDQUFDQyxHQUFSLENBQVlpQixNQUFaLEVBQW9CLFFBQXBCO0FBQ0FkLHVCQUFPLENBQUNRLFlBQUQsQ0FBUDtBQUNBWix1QkFBTyxDQUFDQyxHQUFSLENBQVlXLFlBQVo7O0FBZmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRKLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFpQkFBLGFBQVM7QUFDVixHQW5CUSxFQW1CTixDQUFDVCxTQUFELENBbkJNLENBQVQ7QUFvQkEsU0FBTztBQUFFSSxRQUFJLEVBQUpBLElBQUY7QUFBUUUsV0FBTyxFQUFQQTtBQUFSLEdBQVA7QUFDRCxDQXpCRDs7R0FBTVAsUTs7QUEyQk4sSUFBTXdCLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxLQUFyQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyx5REFBSixFQUFuQjtBQUNBLE1BQU03QixTQUFTLEdBQUcwQixLQUFLLENBQUNJLFlBQXhCOztBQUppQixtQkFLTzNCLHNEQUFRLENBQTRCLElBQTVCLENBTGY7QUFBQSxNQUtWNEIsSUFMVTtBQUFBLE1BS0pDLE9BTEksa0JBTWpCOzs7QUFOaUIsa0JBT1NqQyxRQUFRLENBQUNDLFNBQUQsQ0FQakI7QUFBQSxNQU9USSxJQVBTLGFBT1RBLElBUFM7QUFBQSxNQU9IRSxPQVBHLGFBT0hBLE9BUEc7O0FBU2pCLE1BQUksT0FBT04sU0FBUCxJQUFvQixRQUF4QixFQUFrQztBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVosRUFBdUIsV0FBdkIsRUFEZ0MsQ0FFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQU5ELE1BTU87QUFDTCxXQUFPLDBCQUFQO0FBQ0Q7O0FBRUQ0QixZQUFVLENBQUNLLGNBQVgsQ0FBMEJqQyxTQUExQjtBQUVBNEIsWUFBVSxDQUFDTSxLQUFYLEdBQW1CQyxJQUFuQixDQUF3QixVQUFDQyxHQUFELEVBQVM7QUFDL0JuQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWtDLEdBQVo7QUFDQSxRQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsWUFBcEI7QUFDQU4sV0FBTyxDQUFDSyxPQUFELENBQVA7QUFDQXBDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZa0MsR0FBRyxDQUFDRSxZQUFoQjtBQUNELEdBTEQ7QUFPQSxzQkFDRSxxRUFBQywrREFBRDtBQUFXLFVBQU0sRUFBQyxPQUFsQjtBQUFBLDRCQUNFLHFFQUFDLHlEQUFEO0FBQVEsVUFBSSxFQUFFUDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHekIsT0FBTyxnQkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILGdCQUE0QjtBQUFBLGdCQUFNRjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFNRCxDQWxDRDs7SUFBTW1CLEk7VUFDV0UscUQsRUFNVzFCLFE7OztLQVB0QndCLEk7QUFvQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuNDExYzU4ZjEwN2YyNmJmMjc5MjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IFNwb3RpZnkgZnJvbSBcInNwb3RpZnktd2ViLWFwaS1qc1wiO1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdXNlRmV0Y2ggPSAodG9rZW5Db2RlOiBzdHJpbmcpID0+IHtcclxuICBjb25zb2xlLmxvZyh0b2tlbkNvZGUpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoZGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3BvZGNhc3Q/YWNjZXNzX3Rva2VuPSR7dG9rZW5Db2RlfWBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgZGF0YVJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAvLyBjb25zdCBpdGVtID0gZGF0YVJlc3BvbnNlLnJlc3VsdHNbMF07XHJcbiAgICAgIGNvbnN0IG15RGF0YSA9IE9iamVjdC5rZXlzKGRhdGFSZXNwb25zZSkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFSZXNwb25zZVtrZXldO1xyXG4gICAgICB9KTtcclxuICAgICAgLy8gY29uc29sZS5sb2cobXlEYXRhWzBdLnNob3cuaWQpXHJcbiAgICAgIGNvbnN0IGlkRGF0YSA9IG15RGF0YS5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgaWREYXRhLnB1c2goZGF0YS5zaG93LmlkKVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhpZERhdGEsICdpZERhdGEnKVxyXG4gICAgICBzZXREYXRhKGRhdGFSZXNwb25zZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGFSZXNwb25zZSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hkYXRhKCk7XHJcbiAgfSwgW3Rva2VuQ29kZV0pO1xyXG4gIHJldHVybiB7IGRhdGEsIGxvYWRpbmcgfTtcclxufTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9rZW4gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qgc3BvdGlmeUFwaSA9IG5ldyBTcG90aWZ5KCk7XHJcbiAgY29uc3QgdG9rZW5Db2RlID0gdG9rZW4uYWNjZXNzX3Rva2VuIGFzIHN0cmluZztcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcclxuICAvLyBjb25zdCB7ZGF0YSwgbG9hZGluZ30gPSB1c2VGZXRjaCh0b2tlbkNvZGUpXHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VGZXRjaCh0b2tlbkNvZGUpO1xyXG4gIFxyXG4gIGlmICh0eXBlb2YgdG9rZW5Db2RlID09IFwic3RyaW5nXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuQ29kZSwgXCJ0b2tlbkNvZGVcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YoZGF0YSkpO1xyXG4gICAgLy8gZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YTogb2JqKSkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG4gICAgLy8gfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJUb2tlbiBhY2Nlc3Mgbm90IGdyYW50ZWRcIjtcclxuICB9XHJcblxyXG4gIHNwb3RpZnlBcGkuc2V0QWNjZXNzVG9rZW4odG9rZW5Db2RlKTtcclxuXHJcbiAgc3BvdGlmeUFwaS5nZXRNZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGNvbnN0IHJlc05hbWUgPSByZXMuZGlzcGxheV9uYW1lO1xyXG4gICAgc2V0TmFtZShyZXNOYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kaXNwbGF5X25hbWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBoZWlnaHQ9XCIxMDB2aFwiPlxyXG4gICAgICA8TmF2QmFyIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgIHtsb2FkaW5nID8gPGRpdj5sb2FkaW5nLi4uLjwvZGl2PiA6IDxkaXY+e2RhdGF9PC9kaXY+fVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=