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

  if (tokenCode) {
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
  } else return 'Token not provided';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3VzZUZldGNoLnRzIl0sIm5hbWVzIjpbInVzZUZldGNoIiwidG9rZW5Db2RlIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2hkYXRhIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhUmVzcG9uc2UiLCJteURhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaWREYXRhIiwic2hvdyIsImlkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUF1QjtBQUFBOztBQUMzQztBQUQyQyxrQkFFbkJDLHNEQUFRLENBQUMsRUFBRCxDQUZXO0FBQUEsTUFFcENDLElBRm9DO0FBQUEsTUFFOUJDLE9BRjhCOztBQUFBLG1CQUdiRixzREFBUSxDQUFDLElBQUQsQ0FISztBQUFBLE1BR3BDRyxPQUhvQztBQUFBLE1BRzNCQyxVQUgyQjs7QUFJM0MsTUFBR0wsU0FBSCxFQUFjO0FBQ1ZNLDJEQUFTLENBQUMsWUFBTTtBQUNaLFVBQU1DLFNBQVM7QUFBQSxrVkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUNPQyxLQUFLLHNEQUNvQlIsU0FEcEIsRUFEWjs7QUFBQTtBQUNWUywwQkFEVTtBQUFBO0FBQUEseUJBSVdBLFFBQVEsQ0FBQ0MsSUFBVCxFQUpYOztBQUFBO0FBSVZDLDhCQUpVO0FBS2hCO0FBQ01DLHdCQU5VLEdBTURDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxZQUFaLEVBQTBCSSxHQUExQixDQUE4QixVQUFBQyxHQUFHLEVBQUk7QUFDbEQsMkJBQU9MLFlBQVksQ0FBQ0ssR0FBRCxDQUFuQjtBQUNELG1CQUZjLENBTkMsRUFTaEI7O0FBQ01DLHdCQVZVLEdBVURMLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUFiLElBQUksRUFBSTtBQUNoQywyQkFBT0EsSUFBSSxDQUFDZ0IsSUFBTCxDQUFVQyxFQUFqQjtBQUNELG1CQUZjLENBVkM7QUFhaEJDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUosTUFBWixFQUFvQixRQUFwQjtBQUNBZCx5QkFBTyxDQUFDYyxNQUFELENBQVA7QUFDQUcseUJBQU8sQ0FBQ0MsR0FBUixDQUFZVixZQUFaOztBQWZnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFIOztBQUFBLHdCQUFUSixTQUFTO0FBQUE7QUFBQTtBQUFBLFNBQWY7O0FBaUJBQSxlQUFTO0FBQ1YsS0FuQk0sRUFtQkosQ0FBQ1AsU0FBRCxDQW5CSSxDQUFUO0FBb0JFLFdBQU87QUFBRUUsVUFBSSxFQUFKQSxJQUFGO0FBQVFFLGFBQU8sRUFBUEE7QUFBUixLQUFQO0FBQ0wsR0F0QkQsTUF1QkssT0FBTyxvQkFBUDtBQUNOLENBNUJJOztHQUFNTCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2hvbWUuMTYyOTJjNTlmZmE2YTJiOTUxNjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGZXRjaCA9ICh0b2tlbkNvZGU6IHN0cmluZykgPT4ge1xyXG4gICAgLy8gY29uc29sZS5sb2codG9rZW5Db2RlKTtcclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgaWYodG9rZW5Db2RlKSB7XHJcbiAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmV0Y2hkYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3BvZGNhc3Q/YWNjZXNzX3Rva2VuPSR7dG9rZW5Db2RlfWBcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgICAvLyBjb25zdCBpdGVtID0gZGF0YVJlc3BvbnNlLnJlc3VsdHNbMF07XHJcbiAgICAgICAgICAgICAgY29uc3QgbXlEYXRhID0gT2JqZWN0LmtleXMoZGF0YVJlc3BvbnNlKS5tYXAoa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhUmVzcG9uc2Vba2V5XTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhteURhdGFbMF0uc2hvdy5pZClcclxuICAgICAgICAgICAgICBjb25zdCBpZERhdGEgPSBteURhdGEubWFwKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEuc2hvdy5pZCBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZERhdGEsICdpZERhdGEnKVxyXG4gICAgICAgICAgICAgIHNldERhdGEoaWREYXRhKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBmZXRjaGRhdGEoKTtcclxuICAgICAgICAgIH0sIFt0b2tlbkNvZGVdKTtcclxuICAgICAgICAgIHJldHVybiB7IGRhdGEsIGxvYWRpbmcgfTtcclxuICAgIH1cclxuICAgIGVsc2UgcmV0dXJuICdUb2tlbiBub3QgcHJvdmlkZWQnO1xyXG4gIH07Il0sInNvdXJjZVJvb3QiOiIifQ==