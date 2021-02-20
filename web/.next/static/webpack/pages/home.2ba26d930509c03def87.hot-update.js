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
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useFetch */ "./src/utils/useFetch.ts");


var _jsxFileName = "C:\\Users\\szymo\\gitRepo\\spotify_webapp\\web\\src\\pages\\home.tsx",
    _this = undefined,
    _s = $RefreshSig$();






 // const useFetch = (tokenCode: string) => {
//   console.log(tokenCode);
//   const [data, setData] = useState({});
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     const fetchdata = async () => {
//       const response = await fetch(
//         `http://localhost:8080/podcast?access_token=${tokenCode}`
//       );
//       const dataResponse = await response.json();
//       // const item = dataResponse.results[0];
//       const myData = Object.keys(dataResponse).map(key => {
//         return dataResponse[key];
//       });
//       // console.log(myData[0].show.id)
//       const idData = myData.map(data => {
//         return data.show.id as string;
//       })
//       console.log(idData, 'idData')
//       setData(idData);
//       console.log(dataResponse);
//     };
//     fetchdata();
//   }, [tokenCode]);
//   return { data, loading };
// };

var Home = function Home() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var token = router.query;
  var spotifyApi = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4___default.a();
  var tokenCode = token.access_token;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      name = _useState[0],
      setName = _useState[1]; // const {data, loading} = useFetch(tokenCode)


  var _useFetch = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_6__["useFetch"])(tokenCode),
      data = _useFetch.data;

  var ids = Object.values(data);
  console.log(ids);

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
  spotifyApi.getShows(ids).then(function (res) {
    console.log(res.shows[3].name);
  });
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    height: "100vh",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__["NavBar"], {
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

_s(Home, "UqU2tZUJXsq+FVl1dt6d7cPsDFo=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], _utils_useFetch__WEBPACK_IMPORTED_MODULE_6__["useFetch"]];
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

/***/ }),

/***/ "./src/utils/useFetch.ts":
/*!*******************************!*\
  !*** ./src/utils/useFetch.ts ***!
  \*******************************/
/*! exports provided: useFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetch", function() { return useFetch; });
/* harmony import */ var C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



var _s = $RefreshSig$();


var useFetch = function useFetch(tokenCode) {
  _s();

  console.log(tokenCode);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchdata = /*#__PURE__*/function () {
      var _ref = Object(C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response, dataResponse, myData, idData;
        return C_Users_szymo_gitRepo_spotify_webapp_web_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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
                  return data.show.id;
                });
                console.log(idData, 'idData');
                setData(idData);
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

_s(useFetch, "+2Aek85bYeV0JwBHRmtAxqiaVyE=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Iiwid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvdXNlRmV0Y2gudHMiXSwibmFtZXMiOlsiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsInRva2VuIiwicXVlcnkiLCJzcG90aWZ5QXBpIiwiU3BvdGlmeSIsInRva2VuQ29kZSIsImFjY2Vzc190b2tlbiIsInVzZVN0YXRlIiwibmFtZSIsInNldE5hbWUiLCJ1c2VGZXRjaCIsImRhdGEiLCJpZHMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb25zb2xlIiwibG9nIiwic2V0QWNjZXNzVG9rZW4iLCJnZXRNZSIsInRoZW4iLCJyZXMiLCJyZXNOYW1lIiwiZGlzcGxheV9uYW1lIiwiZ2V0U2hvd3MiLCJzaG93cyIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImZldGNoZGF0YSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YVJlc3BvbnNlIiwibXlEYXRhIiwia2V5cyIsIm1hcCIsImtleSIsImlkRGF0YSIsInNob3ciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLEtBQUssR0FBR0YsTUFBTSxDQUFDRyxLQUFyQjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyx5REFBSixFQUFuQjtBQUNBLE1BQU1DLFNBQVMsR0FBR0osS0FB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QUFDYSxNQUFELENBQVA7QUFDQXZCLHVCQUFPLENBQUNDLEdBQVIsQ0FBWWlCLFlBQVo7O0FBZmdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVRKLFNBQVM7QUFBQTtBQUFBO0FBQUEsT0FBZjs7QUFpQkFBLGFBQVM7QUFDVixHQW5CUSxFQW1CTixDQUFDeEIsU0FBRCxDQW5CTSxDQUFUO0FBb0JBLFNBQU87QUFBRU0sUUFBSSxFQUFKQSxJQUFGO0FBQVFlLFdBQU8sRUFBUEE7QUFBUixHQUFQO0FBQ0QsQ0F6Qkk7O0dBQU1oQixRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuMmJhMjZkOTMwNTA5YzAzZGVmODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IFNwb3RpZnkgZnJvbSBcInNwb3RpZnktd2ViLWFwaS1qc1wiO1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gXCIuLi91dGlscy91c2VGZXRjaFwiO1xyXG5cclxuLy8gY29uc3QgdXNlRmV0Y2ggPSAodG9rZW5Db2RlOiBzdHJpbmcpID0+IHtcclxuLy8gICBjb25zb2xlLmxvZyh0b2tlbkNvZGUpO1xyXG4vLyAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuLy8gICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgY29uc3QgZmV0Y2hkYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4vLyAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvcG9kY2FzdD9hY2Nlc3NfdG9rZW49JHt0b2tlbkNvZGV9YFxyXG4vLyAgICAgICApO1xyXG4vLyAgICAgICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbi8vICAgICAgIC8vIGNvbnN0IGl0ZW0gPSBkYXRhUmVzcG9uc2UucmVzdWx0c1swXTtcclxuLy8gICAgICAgY29uc3QgbXlEYXRhID0gT2JqZWN0LmtleXMoZGF0YVJlc3BvbnNlKS5tYXAoa2V5ID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gZGF0YVJlc3BvbnNlW2tleV07XHJcbi8vICAgICAgIH0pO1xyXG4vLyAgICAgICAvLyBjb25zb2xlLmxvZyhteURhdGFbMF0uc2hvdy5pZClcclxuLy8gICAgICAgY29uc3QgaWREYXRhID0gbXlEYXRhLm1hcChkYXRhID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gZGF0YS5zaG93LmlkIGFzIHN0cmluZztcclxuLy8gICAgICAgfSlcclxuLy8gICAgICAgY29uc29sZS5sb2coaWREYXRhLCAnaWREYXRhJylcclxuLy8gICAgICAgc2V0RGF0YShpZERhdGEpO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhUmVzcG9uc2UpO1xyXG4vLyAgICAgfTtcclxuLy8gICAgIGZldGNoZGF0YSgpO1xyXG4vLyAgIH0sIFt0b2tlbkNvZGVdKTtcclxuLy8gICByZXR1cm4geyBkYXRhLCBsb2FkaW5nIH07XHJcbi8vIH07XHJcblxyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRva2VuID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHNwb3RpZnlBcGkgPSBuZXcgU3BvdGlmeSgpO1xyXG4gIGNvbnN0IHRva2VuQ29kZSA9IHRva2VuLmFjY2Vzc190b2tlbiBhcyBzdHJpbmc7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbCk7XHJcbiAgLy8gY29uc3Qge2RhdGEsIGxvYWRpbmd9ID0gdXNlRmV0Y2godG9rZW5Db2RlKVxyXG4gIGNvbnN0IHsgZGF0YSB9ID0gdXNlRmV0Y2godG9rZW5Db2RlKTtcclxuXHJcbiAgY29uc3QgaWRzID0gT2JqZWN0LnZhbHVlcyhkYXRhIGFzIHN0cmluZyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKGlkcyk7XHJcbiAgaWYgKHR5cGVvZiB0b2tlbkNvZGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgY29uc29sZS5sb2codG9rZW5Db2RlLCBcInRva2VuQ29kZVwiKTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIFwiVG9rZW4gYWNjZXNzIG5vdCBncmFudGVkXCI7XHJcbiAgfVxyXG5cclxuICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuQ29kZSk7XHJcblxyXG4gIHNwb3RpZnlBcGkuZ2V0TWUoKS50aGVuKChyZXMpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBjb25zdCByZXNOYW1lID0gcmVzLmRpc3BsYXlfbmFtZTtcclxuICAgIHNldE5hbWUocmVzTmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuZGlzcGxheV9uYW1lKTtcclxuICB9KTtcclxuICBzcG90aWZ5QXBpLmdldFNob3dzKGlkcykudGhlbigocmVzKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhyZXMuc2hvd3NbM10ubmFtZSk7XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBoZWlnaHQ9XCIxMDB2aFwiPlxyXG4gICAgICA8TmF2QmFyIG5hbWU9e25hbWV9IC8+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUZldGNoID0gKHRva2VuQ29kZTogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbkNvZGUpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaGRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvcG9kY2FzdD9hY2Nlc3NfdG9rZW49JHt0b2tlbkNvZGV9YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZGF0YVJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIC8vIGNvbnN0IGl0ZW0gPSBkYXRhUmVzcG9uc2UucmVzdWx0c1swXTtcclxuICAgICAgICBjb25zdCBteURhdGEgPSBPYmplY3Qua2V5cyhkYXRhUmVzcG9uc2UpLm1hcChrZXkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGRhdGFSZXNwb25zZVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG15RGF0YVswXS5zaG93LmlkKVxyXG4gICAgICAgIGNvbnN0IGlkRGF0YSA9IG15RGF0YS5tYXAoZGF0YSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YS5zaG93LmlkIGFzIHN0cmluZztcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGlkRGF0YSwgJ2lkRGF0YScpXHJcbiAgICAgICAgc2V0RGF0YShpZERhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZXNwb25zZSk7XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoZGF0YSgpO1xyXG4gICAgfSwgW3Rva2VuQ29kZV0pO1xyXG4gICAgcmV0dXJuIHsgZGF0YSwgbG9hZGluZyB9O1xyXG4gIH07Il0sInNvdXJjZVJvb3QiOiIifQ==