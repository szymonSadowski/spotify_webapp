webpackHotUpdate_N_E("pages/home",{

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

  // console.log(tokenCode);
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
                if (!(tokenCode !== null || undefined)) {
                  _context.next = 13;
                  break;
                }

                _context.next = 3;
                return fetch("http://localhost:8080/podcast?access_token=".concat(tokenCode));

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.json();

              case 6:
                dataResponse = _context.sent;
                // const item = dataResponse.results[0];
                myData = Object.keys(dataResponse).map(function (key) {
                  return dataResponse[key];
                }); // console.log(myData[0].show.id)

                idData = myData.map(function (data) {
                  return data.show.id;
                });
                setData(idData);
                console.log(dataResponse);
                _context.next = 14;
                break;

              case 13:
                setData('Not provided');

              case 14:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3VzZUZldGNoLnRzIl0sIm5hbWVzIjpbInVzZUZldGNoIiwidG9rZW5Db2RlIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2hkYXRhIiwidW5kZWZpbmVkIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhUmVzcG9uc2UiLCJteURhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaWREYXRhIiwic2hvdyIsImlkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUF1QjtBQUFBOztBQUMzQztBQUQyQyxrQkFFbkJDLHNEQUFRLENBQUMsRUFBRCxDQUZXO0FBQUEsTUFFcENDLElBRm9DO0FBQUEsTUFFOUJDLE9BRjhCOztBQUFBLG1CQUdiRixzREFBUSxDQUFDLElBQUQsQ0FISztBQUFBLE1BR3BDRyxPQUhvQztBQUFBLE1BRzNCQyxVQUgyQjs7QUFJM0NDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFNBQVM7QUFBQSxnVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFDYlAsU0FBUyxLQUFLLElBQWQsSUFBc0JRLFNBRFQ7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx1QkFFV0MsS0FBSyxzREFDc0JULFNBRHRCLEVBRmhCOztBQUFBO0FBRU5VLHdCQUZNO0FBQUE7QUFBQSx1QkFLaUJBLFFBQVEsQ0FBQ0MsSUFBVCxFQUxqQjs7QUFBQTtBQUtKQyw0QkFMSTtBQU1WO0FBQ01DLHNCQVBJLEdBT0tDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxZQUFaLEVBQTBCSSxHQUExQixDQUE4QixVQUFBQyxHQUFHLEVBQUk7QUFDbEQseUJBQU9MLFlBQVksQ0FBQ0ssR0FBRCxDQUFuQjtBQUNELGlCQUZjLENBUEwsRUFVVjs7QUFDTUMsc0JBWEksR0FXS0wsTUFBTSxDQUFDRyxHQUFQLENBQVcsVUFBQWQsSUFBSSxFQUFJO0FBQ2hDLHlCQUFPQSxJQUFJLENBQUNpQixJQUFMLENBQVVDLEVBQWpCO0FBQ0QsaUJBRmMsQ0FYTDtBQWNWakIsdUJBQU8sQ0FBQ2UsTUFBRCxDQUFQO0FBQ0FHLHVCQUFPLENBQUNDLEdBQVIsQ0FBWVYsWUFBWjtBQWZVO0FBQUE7O0FBQUE7QUFrQlpULHVCQUFPLENBQUMsY0FBRCxDQUFQOztBQWxCWTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFIOztBQUFBLHNCQUFUSSxTQUFTO0FBQUE7QUFBQTtBQUFBLE9BQWY7O0FBcUJBQSxhQUFTO0FBQ1YsR0F2QlEsRUF1Qk4sQ0FBQ1AsU0FBRCxDQXZCTSxDQUFUO0FBd0JBLFNBQU87QUFBRUUsUUFBSSxFQUFKQSxJQUFGO0FBQVFFLFdBQU8sRUFBUEE7QUFBUixHQUFQO0FBQ0QsQ0E3Qkk7O0dBQU1MLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaG9tZS4wNjgyMmIzOGQyMjZkMTliZTllOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUZldGNoID0gKHRva2VuQ29kZTogc3RyaW5nKSA9PiB7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0b2tlbkNvZGUpO1xyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBjb25zdCBmZXRjaGRhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgaWYodG9rZW5Db2RlICE9PSBudWxsIHx8IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wb2RjYXN0P2FjY2Vzc190b2tlbj0ke3Rva2VuQ29kZX1gXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc3QgaXRlbSA9IGRhdGFSZXNwb25zZS5yZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG15RGF0YSA9IE9iamVjdC5rZXlzKGRhdGFSZXNwb25zZSkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVJlc3BvbnNlW2tleV07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXlEYXRhWzBdLnNob3cuaWQpXHJcbiAgICAgICAgICAgICAgY29uc3QgaWREYXRhID0gbXlEYXRhLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnNob3cuaWQgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgc2V0RGF0YShpZERhdGEpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGFSZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXREYXRhKCdOb3QgcHJvdmlkZWQnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIGZldGNoZGF0YSgpO1xyXG4gICAgfSwgW3Rva2VuQ29kZV0pO1xyXG4gICAgcmV0dXJuIHsgZGF0YSwgbG9hZGluZyB9O1xyXG4gIH07Il0sInNvdXJjZVJvb3QiOiIifQ==