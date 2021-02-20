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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
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
      data = _useFetch.data;

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
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: ["?$", data]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 64,
    columnNumber: 5
  }, _this);
};

_s2(Home, "UqU2tZUJXsq+FVl1dt6d7cPsDFo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2hvbWUudHN4Il0sIm5hbWVzIjpbInVzZUZldGNoIiwidG9rZW5Db2RlIiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiZGF0YSIsInNldERhdGEiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImZldGNoZGF0YSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YVJlc3BvbnNlIiwibXlEYXRhIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImlkRGF0YSIsInNob3ciLCJpZCIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2tlbiIsInF1ZXJ5Iiwic3BvdGlmeUFwaSIsIlNwb3RpZnkiLCJhY2Nlc3NfdG9rZW4iLCJuYW1lIiwic2V0TmFtZSIsInNldEFjY2Vzc1Rva2VuIiwiZ2V0TWUiLCJ0aGVuIiwicmVzIiwicmVzTmFtZSIsImRpc3BsYXlfbmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxTQUFELEVBQXVCO0FBQUE7O0FBQ3RDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsU0FBWjs7QUFEc0Msa0JBRWRHLHNEQUFRLENBQUMsRUFBRCxDQUZNO0FBQUEsTUFFL0JDLElBRitCO0FBQUEsTUFFekJDLE9BRnlCOztBQUFBLG1CQUdSRixzREFBUSxDQUFDLElBQUQsQ0FIQTtBQUFBLE1BRy9CRyxPQUgrQjtBQUFBLE1BR3RCQyxVQUhzQjs7QUFJdENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVM7QUFBQSxnVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNPQyxLQUFLLHNEQUNvQlYsU0FEcEIsRUFEWjs7QUFBQTtBQUNWVyx3QkFEVTtBQUFBO0FBQUEsdUJBSVdBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpYOztBQUFBO0FBSVZDLDRCQUpVO0FBS2hCO0FBQ01DLHNCQU5VLEdBTURDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxZQUFaLEVBQTBCSSxHQUExQixDQUE4QixVQUFBQyxHQUFHLEVBQUk7QUFDbEQseUJBQU9MLFlBQVksQ0FBQ0ssR0FBRCxDQUFuQjtBQUNELGlCQUZjLENBTkMsRUFTaEI7O0FBQ01DLHNCQVZVLEdBVURMLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUFiLElBQUksRUFBSTtBQUNoQyx5QkFBT0EsSUFBSSxDQUFDZ0IsSUFBTCxDQUFVQyxFQUFqQjtBQUNELGlCQUZjLENBVkM7QUFhaEJwQix1QkFBTyxDQUFDQyxHQUFSLENBQVlpQixNQUFaLEVBQW9CLFFBQXBCO0FBQ0FkLHVCQUFPLENBQUNjLE1BQUQsQ0FBUDtBQUNBbEIsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZVyxZQUFaOztBQWZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUSixTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBaUJBQSxhQUFTO0FBQ1YsR0FuQlEsRUFtQk4sQ0FBQ1QsU0FBRCxDQW5CTSxDQUFUO0FBb0JBLFNBQU87QUFBRUksUUFBSSxFQUFKQSxJQUFGO0FBQVFFLFdBQU8sRUFBUEE7QUFBUixHQUFQO0FBQ0QsQ0F6QkQ7O0dBQU1QLFE7O0FBMkJOLElBQU11QixJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNQyxLQUFLLEdBQUdGLE1BQU0sQ0FBQ0csS0FBckI7QUFDQSxNQUFNQyxVQUFVLEdBQUcsSUFBSUMseURBQUosRUFBbkI7QUFDQSxNQUFNNUIsU0FBUyxHQUFHeUIsS0FBSyxDQUFDSSxZQUF4Qjs7QUFKaUIsbUJBS08xQixzREFBUSxDQUE0QixJQUE1QixDQUxmO0FBQUEsTUFLVjJCLElBTFU7QUFBQSxNQUtKQyxPQUxJLGtCQU1qQjs7O0FBTmlCLGtCQU9BaEMsUUFBUSxDQUFDQyxTQUFELENBUFI7QUFBQSxNQU9USSxJQVBTLGFBT1RBLElBUFM7O0FBU2pCLE1BQUksT0FBT0osU0FBUCxJQUFvQixRQUF4QixFQUFrQztBQUNoQ0MsV0FBTyxDQUFDQyxHQUFSLENBQVlGLFNBQVosRUFBdUIsV0FBdkIsRUFEZ0MsQ0FFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDRCxHQU5ELE1BTU87QUFDTCxXQUFPLDBCQUFQO0FBQ0Q7O0FBRUQyQixZQUFVLENBQUNLLGNBQVgsQ0FBMEJoQyxTQUExQjtBQUVBMkIsWUFBVSxDQUFDTSxLQUFYLEdBQW1CQyxJQUFuQixDQUF3QixVQUFDQyxHQUFELEVBQVM7QUFDL0JsQyxXQUFPLENBQUNDLEdBQVIsQ0FBWWlDLEdBQVo7QUFDQSxRQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0UsWUFBcEI7QUFDQU4sV0FBTyxDQUFDSyxPQUFELENBQVA7QUFDQW5DLFdBQU8sQ0FBQ0MsR0FBUixDQUFZaUMsR0FBRyxDQUFDRSxZQUFoQjtBQUNELEdBTEQ7QUFPQSxzQkFDRSxxRUFBQywrREFBRDtBQUFXLFVBQU0sRUFBQyxPQUFsQjtBQUFBLDRCQUNFLHFFQUFDLHlEQUFEO0FBQVEsVUFBSSxFQUFFUDtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUEsdUJBQVExQixJQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBTUQsQ0FsQ0Q7O0lBQU1rQixJO1VBQ1dFLHFELEVBTUV6QixROzs7S0FQYnVCLEk7QUFvQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuNGQ3NWZiNDRiYWMzY2ZlYTE4ZjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcclxuaW1wb3J0IFNwb3RpZnkgZnJvbSBcInNwb3RpZnktd2ViLWFwaS1qc1wiO1xyXG5pbXBvcnQgeyBOYXZCYXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgdXNlRmV0Y2ggPSAodG9rZW5Db2RlOiBzdHJpbmcpID0+IHtcclxuICBjb25zb2xlLmxvZyh0b2tlbkNvZGUpO1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZmV0Y2hkYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvcG9kY2FzdD9hY2Nlc3NfdG9rZW49JHt0b2tlbkNvZGV9YFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgIC8vIGNvbnN0IGl0ZW0gPSBkYXRhUmVzcG9uc2UucmVzdWx0c1swXTtcclxuICAgICAgY29uc3QgbXlEYXRhID0gT2JqZWN0LmtleXMoZGF0YVJlc3BvbnNlKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YVJlc3BvbnNlW2tleV07XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhteURhdGFbMF0uc2hvdy5pZClcclxuICAgICAgY29uc3QgaWREYXRhID0gbXlEYXRhLm1hcChkYXRhID0+IHtcclxuICAgICAgICByZXR1cm4gZGF0YS5zaG93LmlkO1xyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhpZERhdGEsICdpZERhdGEnKVxyXG4gICAgICBzZXREYXRhKGlkRGF0YSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGFSZXNwb25zZSk7XHJcbiAgICB9O1xyXG4gICAgZmV0Y2hkYXRhKCk7XHJcbiAgfSwgW3Rva2VuQ29kZV0pO1xyXG4gIHJldHVybiB7IGRhdGEsIGxvYWRpbmcgfTtcclxufTtcclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9rZW4gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qgc3BvdGlmeUFwaSA9IG5ldyBTcG90aWZ5KCk7XHJcbiAgY29uc3QgdG9rZW5Db2RlID0gdG9rZW4uYWNjZXNzX3Rva2VuIGFzIHN0cmluZztcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcclxuICAvLyBjb25zdCB7ZGF0YSwgbG9hZGluZ30gPSB1c2VGZXRjaCh0b2tlbkNvZGUpXHJcbiAgY29uc3QgeyBkYXRhIH0gPSB1c2VGZXRjaCh0b2tlbkNvZGUpO1xyXG4gIFxyXG4gIGlmICh0eXBlb2YgdG9rZW5Db2RlID09IFwic3RyaW5nXCIpIHtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuQ29kZSwgXCJ0b2tlbkNvZGVcIik7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YoZGF0YSkpO1xyXG4gICAgLy8gZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoZGF0YTogb2JqKSkge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhgJHtrZXl9OiAke3ZhbHVlfWApO1xyXG4gICAgLy8gfVxyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJUb2tlbiBhY2Nlc3Mgbm90IGdyYW50ZWRcIjtcclxuICB9XHJcblxyXG4gIHNwb3RpZnlBcGkuc2V0QWNjZXNzVG9rZW4odG9rZW5Db2RlKTtcclxuXHJcbiAgc3BvdGlmeUFwaS5nZXRNZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGNvbnN0IHJlc05hbWUgPSByZXMuZGlzcGxheV9uYW1lO1xyXG4gICAgc2V0TmFtZShyZXNOYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kaXNwbGF5X25hbWUpO1xyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBoZWlnaHQ9XCIxMDB2aFwiPlxyXG4gICAgICA8TmF2QmFyIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgIDxkaXY+PyR7ZGF0YX08L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9