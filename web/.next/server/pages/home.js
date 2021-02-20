module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/home.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/Container.tsx":
/*!**************************************!*\
  !*** ./src/components/Container.tsx ***!
  \**************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\szymo\\gitRepo\\spotify_webapp\\web\\src\\components\\Container.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const Container = props => {
  const {
    colorMode
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorMode"])();
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900'
  };
  const color = {
    light: 'black',
    dark: 'white'
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], _objectSpread({
    direction: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    bg: bgColor[colorMode],
    color: color[colorMode]
  }, props), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/DarkModeSwitch.tsx":
/*!*******************************************!*\
  !*** ./src/components/DarkModeSwitch.tsx ***!
  \*******************************************/
/*! exports provided: DarkModeSwitch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DarkModeSwitch", function() { return DarkModeSwitch; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\szymo\\gitRepo\\spotify_webapp\\web\\src\\components\\DarkModeSwitch.tsx";

const DarkModeSwitch = () => {
  const {
    colorMode,
    toggleColorMode
  } = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["useColorMode"])();
  const isDark = colorMode === 'dark';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    color: "green",
    isChecked: isDark,
    onChange: toggleColorMode
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/*! exports provided: NavBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBar", function() { return NavBar; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ "next/Link");
/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DarkModeSwitch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DarkModeSwitch */ "./src/components/DarkModeSwitch.tsx");


var _jsxFileName = "C:\\Users\\szymo\\gitRepo\\spotify_webapp\\web\\src\\components\\NavBar.tsx";




const NavBar = ({
  name
}) => {
  let body = null;

  if (name !== null || undefined) {
    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
        p: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
          ml: "auto",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
            color: "white",
            fontSize: "24px",
            children: ["Hello, ", name]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false);
  } else {
    body = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      p: 4,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        ml: "auto",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Text"], {
          color: "white",
          fontSize: "24px",
          children: "Sign using your spotify account"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    position: "sticky",
    top: 0,
    zIndex: 1,
    bg: "#58C184",
    p: 4,
    width: "100%",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
      flex: 1,
      m: "auto",
      align: "center",
      maxW: 800,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_Link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
            textColor: "white",
            children: "SpotifyPodcastApp"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        mr: 4,
        ml: "auto",
        children: body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_4__["DarkModeSwitch"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/pages/home.tsx":
/*!****************************!*\
  !*** ./src/pages/home.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./src/components/Container.tsx");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! spotify-web-api-js */ "spotify-web-api-js");
/* harmony import */ var spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/NavBar */ "./src/components/NavBar.tsx");
/* harmony import */ var _utils_useFetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/useFetch */ "./src/utils/useFetch.ts");

var _jsxFileName = "C:\\Users\\szymo\\gitRepo\\spotify_webapp\\web\\src\\pages\\home.tsx";







const Home = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const token = router.query;
  const spotifyApi = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4___default.a();
  const tokenCode = token.access_token;
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  const {
    data
  } = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_6__["useFetch"])(tokenCode);
  const ids = Object.values(data);

  if (typeof tokenCode == "string") {
    console.log(tokenCode, "tokenCode");
  } else {
    return "Token access not granted";
  }

  spotifyApi.setAccessToken(tokenCode);
  spotifyApi.getMe().then(res => {
    console.log(res);
    const resName = res.display_name;
    setName(resName);
    console.log(res.display_name);
  });

  if (ids.length > 1) {
    spotifyApi.getShows(ids).then(res => {
      setLoading(false);
    });
  } else {
    console.log(loading);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    height: "100vh",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__["NavBar"], {
      name: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: " loading "
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 18
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: "data"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 41
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/utils/useFetch.ts":
/*!*******************************!*\
  !*** ./src/utils/useFetch.ts ***!
  \*******************************/
/*! exports provided: useFetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFetch", function() { return useFetch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useFetch = tokenCode => {
  // console.log(tokenCode);
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({});
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchdata = async () => {
      const response = await fetch(`http://localhost:8080/podcast?access_token=${tokenCode}`);
      const dataResponse = await response.json(); // const item = dataResponse.results[0];

      const myData = Object.keys(dataResponse).map(key => {
        return dataResponse[key];
      }); // console.log(myData[0].show.id)

      const idData = myData.map(data => {
        return data.show.id;
      });
      console.log(idData, 'idData');
      setData(idData);
      console.log(dataResponse);
    };

    fetchdata();
  }, [tokenCode]);
  return {
    data,
    loading
  };
};

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/Link":
/*!****************************!*\
  !*** external "next/Link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/Link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "spotify-web-api-js":
/*!*************************************!*\
  !*** external "spotify-web-api-js" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("spotify-web-api-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3VzZUZldGNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3BvdGlmeS13ZWItYXBpLWpzXCIiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwicHJvcHMiLCJjb2xvck1vZGUiLCJ1c2VDb2xvck1vZGUiLCJiZ0NvbG9yIiwibGlnaHQiLCJkYXJrIiwiY29sb3IiLCJEYXJrTW9kZVN3aXRjaCIsInRvZ2dsZUNvbG9yTW9kZSIsImlzRGFyayIsIk5hdkJhciIsIm5hbWUiLCJib2R5IiwidW5kZWZpbmVkIiwiSG9tZSIsInJvdXRlciIsInVzZVJvdXRlciIsInRva2VuIiwicXVlcnkiLCJzcG90aWZ5QXBpIiwiU3BvdGlmeSIsInRva2VuQ29kZSIsImFjY2Vzc190b2tlbiIsInNldE5hbWUiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGF0YSIsInVzZUZldGNoIiwiaWRzIiwiT2JqZWN0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsInNldEFjY2Vzc1Rva2VuIiwiZ2V0TWUiLCJ0aGVuIiwicmVzIiwicmVzTmFtZSIsImRpc3BsYXlfbmFtZSIsImxlbmd0aCIsImdldFNob3dzIiwic2V0RGF0YSIsInVzZUVmZmVjdCIsImZldGNoZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhUmVzcG9uc2UiLCJqc29uIiwibXlEYXRhIiwia2V5cyIsIm1hcCIsImtleSIsImlkRGF0YSIsInNob3ciLCJpZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVPLE1BQU1BLFNBQVMsR0FBSUMsS0FBRCxJQUFnQjtBQUN2QyxRQUFNO0FBQUVDO0FBQUYsTUFBZ0JDLHFFQUFZLEVBQWxDO0FBRUEsUUFBTUMsT0FBTyxHQUFHO0FBQUVDLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxRQUFJLEVBQUU7QUFBMUIsR0FBaEI7QUFFQSxRQUFNQyxLQUFLLEdBQUc7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QUo0QixDQUs1Qjs7QUFDQSxZQUFNQyxNQUFNLEdBQUduQixNQUFNLENBQUNvQixJQUFQLENBQVlILFlBQVosRUFBMEJJLEdBQTFCLENBQThCQyxHQUFHLElBQUk7QUFDbEQsZUFBT0wsWUFBWSxDQUFDSyxHQUFELENBQW5CO0FBQ0QsT0FGYyxDQUFmLENBTjRCLENBUzVCOztBQUNBLFlBQU1DLE1BQU0sR0FBR0osTUFBTSxDQUFDRSxHQUFQLENBQVd4QixJQUFJLElBQUk7QUFDaEMsZUFBT0EsSUFBSSxDQUFDMkIsSUFBTCxDQUFVQyxFQUFqQjtBQUNELE9BRmMsQ0FBZjtBQUdBdkIsYUFBTyxDQUFDQyxHQUFSLENBQVlvQixNQUFaLEVBQW9CLFFBQXBCO0FBQ0FYLGFBQU8sQ0FBQ1csTUFBRCxDQUFQO0FBQ0FyQixhQUFPLENBQUNDLEdBQVIsQ0FBWWMsWUFBWjtBQUNELEtBaEJEOztBQWlCQUgsYUFBUztBQUNWLEdBbkJRLEVBbUJOLENBQUN2QixTQUFELENBbkJNLENBQVQ7QUFvQkEsU0FBTztBQUFFTSxRQUFGO0FBQVFGO0FBQVIsR0FBUDtBQUNELENBekJJLEM7Ozs7Ozs7Ozs7O0FDRlAsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2hvbWUudHN4XCIpO1xuIiwiaW1wb3J0IHsgRmxleCwgdXNlQ29sb3JNb2RlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IChwcm9wczogYW55KSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuXG4gIGNvbnN0IGJnQ29sb3IgPSB7IGxpZ2h0OiAnZ3JheS41MCcsIGRhcms6ICdncmF5LjkwMCcgfVxuXG4gIGNvbnN0IGNvbG9yID0geyBsaWdodDogJ2JsYWNrJywgZGFyazogJ3doaXRlJyB9XG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxuICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuIiwiaW1wb3J0IHsgdXNlQ29sb3JNb2RlLCBTd2l0Y2ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5leHBvcnQgY29uc3QgRGFya01vZGVTd2l0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG4gIGNvbnN0IGlzRGFyayA9IGNvbG9yTW9kZSA9PT0gJ2RhcmsnXG4gIHJldHVybiAoXG4gICAgPFN3aXRjaFxuICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICBpc0NoZWNrZWQ9e2lzRGFya31cbiAgICAgIG9uQ2hhbmdlPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgLz5cbiAgKVxufVxuIiwiaW1wb3J0IHsgRmxleCwgQm94LCBMaW5rLCBUZXh0LCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5pbXBvcnQgeyBEYXJrTW9kZVN3aXRjaCB9IGZyb20gXCIuL0RhcmtNb2RlU3dpdGNoXCI7XHJcbmludGVyZmFjZSBOYXZCYXJQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgbGV0IGJvZHkgPSBudWxsO1xyXG4gIGlmIChuYW1lICE9PSBudWxsIHx8IHVuZGVmaW5lZCkge1xyXG4gICAgYm9keSA9IChcclxuICAgICAgPD5cclxuICAgICAgICA8RmxleCBwPXs0fT5cclxuICAgICAgICAgIDxCb3ggbWw9e1wiYXV0b1wifT5cclxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwiMjRweFwiPlxyXG4gICAgICAgICAgICAgIEhlbGxvLCB7bmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDxGbGV4IHA9ezR9PlxyXG4gICAgICAgIDxCb3ggbWw9e1wiYXV0b1wifT5cclxuICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCIyNHB4XCI+XHJcbiAgICAgICAgICAgICAgU2lnbiB1c2luZyB5b3VyIHNwb3RpZnkgYWNjb3VudFxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggcG9zaXRpb249XCJzdGlja3lcIiB0b3A9ezB9IHpJbmRleD17MX0gYmc9XCIjNThDMTg0XCIgcD17NH0gd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgIDxGbGV4IGZsZXg9ezF9IG09XCJhdXRvXCIgYWxpZ249XCJjZW50ZXJcIiBtYXhXPXs4MDB9PlxyXG4gICAgICAgIDxOZXh0TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgPExpbms+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHRleHRDb2xvcj1cIndoaXRlXCI+U3BvdGlmeVBvZGNhc3RBcHA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9OZXh0TGluaz5cclxuICAgICAgICA8Qm94IG1yPXs0fSBtbD17XCJhdXRvXCJ9PlxyXG4gICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPERhcmtNb2RlU3dpdGNoIC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBTcG90aWZ5IGZyb20gXCJzcG90aWZ5LXdlYi1hcGktanNcIjtcclxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUZldGNoXCI7XHJcblxyXG5cclxuXHJcbmNvbnN0IEhvbWUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgdG9rZW4gPSByb3V0ZXIucXVlcnk7XHJcbiAgY29uc3Qgc3BvdGlmeUFwaSA9IG5ldyBTcG90aWZ5KCk7XHJcbiAgY29uc3QgdG9rZW5Db2RlID0gdG9rZW4uYWNjZXNzX3Rva2VuIGFzIHN0cmluZztcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkPihudWxsKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCB7IGRhdGEgfSA9IHVzZUZldGNoKHRva2VuQ29kZSk7XHJcbiAgY29uc3QgaWRzID0gT2JqZWN0LnZhbHVlcyhkYXRhIGFzIHN0cmluZyk7XHJcblxyXG5cclxuICBpZiAodHlwZW9mIHRva2VuQ29kZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0b2tlbkNvZGUsIFwidG9rZW5Db2RlXCIpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gXCJUb2tlbiBhY2Nlc3Mgbm90IGdyYW50ZWRcIjtcclxuICB9XHJcblxyXG4gIHNwb3RpZnlBcGkuc2V0QWNjZXNzVG9rZW4odG9rZW5Db2RlKTtcclxuXHJcbiAgc3BvdGlmeUFwaS5nZXRNZSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIGNvbnN0IHJlc05hbWUgPSByZXMuZGlzcGxheV9uYW1lO1xyXG4gICAgc2V0TmFtZShyZXNOYW1lKTtcclxuICAgIGNvbnNvbGUubG9nKHJlcy5kaXNwbGF5X25hbWUpO1xyXG4gIH0pO1xyXG4gICAgaWYoaWRzLmxlbmd0aCA+IDEgKSB7XHJcbiAgICAgIHNwb3RpZnlBcGkuZ2V0U2hvd3MoaWRzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxvYWRpbmcpXHJcbiAgICB9XHJcbiAgXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGhlaWdodD1cIjEwMHZoXCI+XHJcbiAgICAgIDxOYXZCYXIgbmFtZT17bmFtZX0gLz5cclxuICAgICAge2xvYWRpbmcgPyA8ZGl2PiBsb2FkaW5nIDwvZGl2PiA6IDxkaXY+ZGF0YTwvZGl2Pn1cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmV0Y2ggPSAodG9rZW5Db2RlOiBzdHJpbmcpID0+IHtcclxuICAgIC8vIGNvbnNvbGUubG9nKHRva2VuQ29kZSk7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoZGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wb2RjYXN0P2FjY2Vzc190b2tlbj0ke3Rva2VuQ29kZX1gXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgLy8gY29uc3QgaXRlbSA9IGRhdGFSZXNwb25zZS5yZXN1bHRzWzBdO1xyXG4gICAgICAgIGNvbnN0IG15RGF0YSA9IE9iamVjdC5rZXlzKGRhdGFSZXNwb25zZSkubWFwKGtleSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gZGF0YVJlc3BvbnNlW2tleV07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobXlEYXRhWzBdLnNob3cuaWQpXHJcbiAgICAgICAgY29uc3QgaWREYXRhID0gbXlEYXRhLm1hcChkYXRhID0+IHtcclxuICAgICAgICAgIHJldHVybiBkYXRhLnNob3cuaWQgYXMgc3RyaW5nO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coaWREYXRhLCAnaWREYXRhJylcclxuICAgICAgICBzZXREYXRhKGlkRGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YVJlc3BvbnNlKTtcclxuICAgICAgfTtcclxuICAgICAgZmV0Y2hkYXRhKCk7XHJcbiAgICB9LCBbdG9rZW5Db2RlXSk7XHJcbiAgICByZXR1cm4geyBkYXRhLCBsb2FkaW5nIH07XHJcbiAgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3BvdGlmeS13ZWItYXBpLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=