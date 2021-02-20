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

  if (tokenCode !== null) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3VzZUZldGNoLnRzIl0sIm5hbWVzIjpbInVzZUZldGNoIiwidG9rZW5Db2RlIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidXNlRWZmZWN0IiwiZmV0Y2hkYXRhIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJkYXRhUmVzcG9uc2UiLCJteURhdGEiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwiaWREYXRhIiwic2hvdyIsImlkIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsU0FBRCxFQUF1QjtBQUFBOztBQUMzQztBQUQyQyxrQkFFbkJDLHNEQUFRLENBQUMsRUFBRCxDQUZXO0FBQUEsTUFFcENDLElBRm9DO0FBQUEsTUFFOUJDLE9BRjhCOztBQUFBLG1CQUdiRixzREFBUSxDQUFDLElBQUQsQ0FISztBQUFBLE1BR3BDRyxPQUhvQztBQUFBLE1BRzNCQyxVQUgyQjs7QUFJM0MsTUFBR0wsU0FBUyxLQUFLLElBQWpCLEVBQXVCO0FBQ25CTSwyREFBUyxDQUFDLFlBQU07QUFDWixVQUFNQyxTQUFTO0FBQUEsa1ZBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFDT0MsS0FBSyxzREFDb0JSLFNBRHBCLEVBRFo7O0FBQUE7QUFDVlMsMEJBRFU7QUFBQTtBQUFBLHlCQUlXQSxRQUFRLENBQUNDLElBQVQsRUFKWDs7QUFBQTtBQUlWQyw4QkFKVTtBQUtoQjtBQUNNQyx3QkFOVSxHQU1EQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsWUFBWixFQUEwQkksR0FBMUIsQ0FBOEIsVUFBQUMsR0FBRyxFQUFJO0FBQ2xELDJCQUFPTCxZQUFZLENBQUNLLEdBQUQsQ0FBbkI7QUFDRCxtQkFGYyxDQU5DLEVBU2hCOztBQUNNQyx3QkFWVSxHQVVETCxNQUFNLENBQUNHLEdBQVAsQ0FBVyxVQUFBYixJQUFJLEVBQUk7QUFDaEMsMkJBQU9BLElBQUksQ0FBQ2dCLElBQUwsQ0FBVUMsRUFBakI7QUFDRCxtQkFGYyxDQVZDO0FBYWhCQyx5QkFBTyxDQUFDQyxHQUFSLENBQVlKLE1BQVosRUFBb0IsUUFBcEI7QUFDQWQseUJBQU8sQ0FBQ2MsTUFBRCxDQUFQO0FBQ0FHLHlCQUFPLENBQUNDLEdBQVIsQ0FBWVYsWUFBWjs7QUFmZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBSDs7QUFBQSx3QkFBVEosU0FBUztBQUFBO0FBQUE7QUFBQSxTQUFmOztBQWlCQUEsZUFBUztBQUNWLEtBbkJNLEVBbUJKLENBQUNQLFNBQUQsQ0FuQkksQ0FBVDtBQW9CRSxXQUFPO0FBQUVFLFVBQUksRUFBSkEsSUFBRjtBQUFRRSxhQUFPLEVBQVBBO0FBQVIsS0FBUDtBQUNMLEdBdEJELE1BdUJLLE9BQU8sb0JBQVA7QUFDTixDQTVCSTs7R0FBTUwsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ob21lLmU5MzZmZTE1ZGQyMDY4OGU2YjEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmV0Y2ggPSAodG9rZW5Db2RlOiBzdHJpbmcpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRva2VuQ29kZSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGlmKHRva2VuQ29kZSAhPT0gbnVsbCkge1xyXG4gICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZldGNoZGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wb2RjYXN0P2FjY2Vzc190b2tlbj0ke3Rva2VuQ29kZX1gXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc3QgaXRlbSA9IGRhdGFSZXNwb25zZS5yZXN1bHRzWzBdO1xyXG4gICAgICAgICAgICAgIGNvbnN0IG15RGF0YSA9IE9iamVjdC5rZXlzKGRhdGFSZXNwb25zZSkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVJlc3BvbnNlW2tleV07XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobXlEYXRhWzBdLnNob3cuaWQpXHJcbiAgICAgICAgICAgICAgY29uc3QgaWREYXRhID0gbXlEYXRhLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnNob3cuaWQgYXMgc3RyaW5nO1xyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coaWREYXRhLCAnaWREYXRhJylcclxuICAgICAgICAgICAgICBzZXREYXRhKGlkRGF0YSk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YVJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZmV0Y2hkYXRhKCk7XHJcbiAgICAgICAgICB9LCBbdG9rZW5Db2RlXSk7XHJcbiAgICAgICAgICByZXR1cm4geyBkYXRhLCBsb2FkaW5nIH07XHJcbiAgICB9XHJcbiAgICBlbHNlIHJldHVybiAnVG9rZW4gbm90IHByb3ZpZGVkJztcclxuICB9OyJdLCJzb3VyY2VSb290IjoiIn0=