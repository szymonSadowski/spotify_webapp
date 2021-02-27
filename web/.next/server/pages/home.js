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
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__);

var _jsxFileName = "C:\\Users\\szymo\\gitRepo\\spotify_webapp\\web\\src\\pages\\home.tsx";








const Home = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const token = router.query;
  const spotifyApi = new spotify_web_api_js__WEBPACK_IMPORTED_MODULE_4___default.a();
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null);
  const tokenCode = token.access_token;
  const {
    data,
    loading
  } = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_6__["useFetch"])(tokenCode); // if (!loading) {
  //   console.log(data, shows);
  // }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (typeof tokenCode == "string") {
      // console.log(tokenCode, "tokenCode");
      spotifyApi.setAccessToken(tokenCode);
      spotifyApi.getMe().then(res => {
        // console.log(res);
        // setting up name on navbar
        const resName = res.display_name;
        setName(resName);
        console.log(res.display_name);
      });
    }
  }, [tokenCode]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    height: "1000vh",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__["NavBar"], {
      name: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
      p: 4,
      children: "Table with your latest Spotfy podcasts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"], {
      colorScheme: "grey",
      p: 4,
      color: "white",
      fontSize: "24px",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Thead"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tr"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Id"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Podcast"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Episode"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, undefined), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: " loading "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tbody"], {
        children: data.map((episode, index) => {
          // console.log(shows);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tr"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
              maxW: 100,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Img"], {
                src: episode.img
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
              maxW: 400,
              p: 2,
              children: episode.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
              children: episode.date
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 17
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);

 // import SpotifyWebApi from "spotify-web-api-js";

const useFetch = tokenCode => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true); // const [shows, setShows]: any = useState([]);
  // const spotifyApi = new SpotifyWebApi();

  const fetchdata = async () => {
    const response = await fetch(`http://localhost:8080/podcast?access_token=${tokenCode}`);
    const dataResponse = await response.json(); // const item = dataResponse.results[0];

    const myData = Object.keys(dataResponse).map(key => {
      return dataResponse[key];
    }); // console.log(myData[0].show.id)

    const idData = myData.map(data => {
      return data.show.id;
    }); // console.log(idData, "idData");
    // getting list that contains names of the shows
    // const showsList: any[] = [];
    // spotifyApi.getShows(idData).then((res) => {
    //   res.shows.forEach((element) => {
    //     showsList.push(element.name as string);
    //   });
    // });
    // setShows(showsList);

    return idData;
  };

  const fetchEpisodesData = async id => {
    const response = await fetch(`http://localhost:8080/podcastEpisodes?access_token=${tokenCode}&id=${id}`);
    const dataResponse = await response.json();
    return dataResponse;
  };

  const arr = [];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchdata().then(res => {
      res.map((id, index) => {
        fetchEpisodesData(id).then(episode => {
          arr.push(episode);

          if (index > 48) {
            setData(arr);
            setLoading(false);
            Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])();
          }
        });
      });
    });
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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3VzZUZldGNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L0xpbmtcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNwb3RpZnktd2ViLWFwaS1qc1wiIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInByb3BzIiwiY29sb3JNb2RlIiwidXNlQ29sb3JNb2RlIiwiYmdDb2xvciIsImxpZ2h0IiwiZGFyayIsImNvbG9yIiwiRGFya01vZGVTd2l0Y2giLCJ0b2dnbGVDb2xvck1vZGUiLCJpc0RhcmsiLCJOYXZCYXIiLCJuYW1lIiwiYm9keSIsInVuZGVmaW5lZCIsIkhvbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ0b2tlbiIsInF1ZXJ5Iiwic3BvdGlmeUFwaSIsIlNwb3RpZnkiLCJzZXROYW1lIiwidXNlU3RhdGUiLCJ0b2tlbkNvZGUiLCJhY2Nlc3NfdG9rZW4iLCJkYXRhIiwibG9hZGluZyIsInVzZUZldGNoIiwidXNlRWZmZWN0Iiwic2V0QWNjZXNzVG9rZW4iLCJnZXRNZSIsInRoZW4iLCJyZXMiLCJyZXNOYW1lIiwiZGlzcGxheV9uYW1lIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImVwaXNvZGUiLCJpbmRleCIsImltZyIsImRhdGUiLCJzZXREYXRhIiwic2V0TG9hZGluZyIsImZldGNoZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhUmVzcG9uc2UiLCJqc29uIiwibXlEYXRhIiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImlkRGF0YSIsInNob3ciLCJpZCIsImZldGNoRXBpc29kZXNEYXRhIiwiYXJyIiwicHVzaCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFTyxNQUFNQSxTQUFTLEdBQUlDLEtBQUQsSUFBZ0I7QUFDdkMsUUFBTTtBQUFFQztBQUFGLE1BQWdCQyxxRUFBWSxFQUFsQztBQUVBLFFBQU1DLE9BQU8sR0FBRztB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QUNwQyxTQUFELENBYk0sQ0FBVDtBQWVBLFNBQU87QUFBRUUsUUFBRjtBQUFRQztBQUFSLEdBQVA7QUFDRCxDQXJETSxDOzs7Ozs7Ozs7OztBQ0xQLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9ob21lLnRzeFwiKTtcbiIsImltcG9ydCB7IEZsZXgsIHVzZUNvbG9yTW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcblxuICBjb25zdCBiZ0NvbG9yID0geyBsaWdodDogJ2dyYXkuNTAnLCBkYXJrOiAnZ3JheS45MDAnIH1cblxuICBjb25zdCBjb2xvciA9IHsgbGlnaHQ6ICdibGFjaycsIGRhcms6ICd3aGl0ZScgfVxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgYmc9e2JnQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbn1cbiIsImltcG9ydCB7IHVzZUNvbG9yTW9kZSwgU3dpdGNoIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZXhwb3J0IGNvbnN0IERhcmtNb2RlU3dpdGNoID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuICBjb25zdCBpc0RhcmsgPSBjb2xvck1vZGUgPT09ICdkYXJrJ1xuICByZXR1cm4gKFxuICAgIDxTd2l0Y2hcbiAgICAgIGNvbG9yPVwiZ3JlZW5cIlxuICAgICAgaXNDaGVja2VkPXtpc0Rhcmt9XG4gICAgICBvbkNoYW5nZT17dG9nZ2xlQ29sb3JNb2RlfVxuICAgIC8+XG4gIClcbn1cbiIsImltcG9ydCB7IEZsZXgsIEJveCwgTGluaywgVGV4dCwgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuaW1wb3J0IHsgRGFya01vZGVTd2l0Y2ggfSBmcm9tIFwiLi9EYXJrTW9kZVN3aXRjaFwiO1xyXG5pbnRlcmZhY2UgTmF2QmFyUHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7IG5hbWUgfSkgPT4ge1xyXG4gIGxldCBib2R5ID0gbnVsbDtcclxuICBpZiAobmFtZSAhPT0gbnVsbCB8fCB1bmRlZmluZWQpIHtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEZsZXggcD17NH0+XHJcbiAgICAgICAgICA8Qm94IG1sPXtcImF1dG9cIn0+XHJcbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjI0cHhcIj5cclxuICAgICAgICAgICAgICBIZWxsbywge25hbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBib2R5ID0gKFxyXG4gICAgICA8RmxleCBwPXs0fT5cclxuICAgICAgICA8Qm94IG1sPXtcImF1dG9cIn0+XHJcbiAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwiMjRweFwiPlxyXG4gICAgICAgICAgICAgIFNpZ24gdXNpbmcgeW91ciBzcG90aWZ5IGFjY291bnRcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IHBvc2l0aW9uPVwic3RpY2t5XCIgdG9wPXswfSB6SW5kZXg9ezF9IGJnPVwiIzU4QzE4NFwiIHA9ezR9IHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICA8RmxleCBmbGV4PXsxfSBtPVwiYXV0b1wiIGFsaWduPVwiY2VudGVyXCIgbWF4Vz17ODAwfT5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICA8SGVhZGluZyB0ZXh0Q29sb3I9XCJ3aGl0ZVwiPlNwb3RpZnlQb2RjYXN0QXBwPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgPEJveCBtcj17NH0gbWw9e1wiYXV0b1wifT5cclxuICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxEYXJrTW9kZVN3aXRjaCAvPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgU3BvdGlmeSBmcm9tIFwic3BvdGlmeS13ZWItYXBpLWpzXCI7XHJcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gXCIuLi91dGlscy91c2VGZXRjaFwiO1xyXG5pbXBvcnQge1xyXG4gIEhlYWRpbmcsXHJcbiAgSW1nLFxyXG4gIFRhYmxlLFxyXG4gIFRib2R5LFxyXG4gIFRkLFxyXG4gIFRoLFxyXG4gIFRoZWFkLFxyXG4gIFRyLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCB7IEVwaXNvZGUgfSBmcm9tIFwiLi4vdHlwZXMvRXBpc29kZVwiO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0b2tlbiA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBzcG90aWZ5QXBpID0gbmV3IFNwb3RpZnkoKTtcclxuXHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHRva2VuQ29kZSA9IHRva2VuLmFjY2Vzc190b2tlbiBhcyBzdHJpbmc7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VGZXRjaCh0b2tlbkNvZGUpO1xyXG5cclxuICAvLyBpZiAoIWxvYWRpbmcpIHtcclxuICAvLyAgIGNvbnNvbGUubG9nKGRhdGEsIHNob3dzKTtcclxuICAvLyB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHRva2VuQ29kZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VuQ29kZSwgXCJ0b2tlbkNvZGVcIik7XHJcblxyXG4gICAgICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuQ29kZSk7XHJcbiAgICAgIHNwb3RpZnlBcGkuZ2V0TWUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIC8vIHNldHRpbmcgdXAgbmFtZSBvbiBuYXZiYXJcclxuICAgICAgICBjb25zdCByZXNOYW1lID0gcmVzLmRpc3BsYXlfbmFtZTtcclxuICAgICAgICBzZXROYW1lKHJlc05hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kaXNwbGF5X25hbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdG9rZW5Db2RlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGhlaWdodD1cIjEwMDB2aFwiPlxyXG4gICAgICA8TmF2QmFyIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgIDxIZWFkaW5nIHA9ezR9PlRhYmxlIHdpdGggeW91ciBsYXRlc3QgU3BvdGZ5IHBvZGNhc3RzPC9IZWFkaW5nPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAgPFRhYmxlIGNvbG9yU2NoZW1lPVwiZ3JleVwiIHA9ezR9IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjI0cHhcIj5cclxuICAgICAgICA8VGhlYWQ+XHJcbiAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgIDxUaD5JZDwvVGg+XHJcbiAgICAgICAgICAgIDxUaD5Qb2RjYXN0PC9UaD5cclxuICAgICAgICAgICAgPFRoPkVwaXNvZGU8L1RoPlxyXG4gICAgICAgICAgICA8VGg+RGF0ZTwvVGg+XHJcbiAgICAgICAgICA8L1RyPlxyXG4gICAgICAgIDwvVGhlYWQ+XHJcbiAgICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgICA8ZGl2PiBsb2FkaW5nIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8VGJvZHk+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcCgoZXBpc29kZTogRXBpc29kZSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNob3dzKTtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRyPlxyXG4gICAgICAgICAgICAgICAgICA8VGQ+e2luZGV4ICsgMX08L1RkPlxyXG4gICAgICAgICAgICAgICAgICA8VGQgbWF4Vz17MTAwfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1nIHNyYz17ZXBpc29kZS5pbWd9PjwvSW1nPlxyXG4gICAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgICAgICA8VGQgbWF4Vz17NDAwfSBwPXsyfT5cclxuICAgICAgICAgICAgICAgICAgICB7ZXBpc29kZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgICAgICA8VGQ+e2VwaXNvZGUuZGF0ZX08L1RkPlxyXG4gICAgICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvVGJvZHk+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9UYWJsZT5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgeyBFcGlzb2RlIH0gZnJvbSBcIi4vLi4vdHlwZXMvRXBpc29kZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tIFwicGF0aFwiO1xyXG4vLyBpbXBvcnQgU3BvdGlmeVdlYkFwaSBmcm9tIFwic3BvdGlmeS13ZWItYXBpLWpzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmV0Y2ggPSAodG9rZW5Db2RlOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV06IGFueSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAvLyBjb25zdCBbc2hvd3MsIHNldFNob3dzXTogYW55ID0gdXNlU3RhdGUoW10pO1xyXG4gIC8vIGNvbnN0IHNwb3RpZnlBcGkgPSBuZXcgU3BvdGlmeVdlYkFwaSgpO1xyXG4gIGNvbnN0IGZldGNoZGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjgwODAvcG9kY2FzdD9hY2Nlc3NfdG9rZW49JHt0b2tlbkNvZGV9YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIC8vIGNvbnN0IGl0ZW0gPSBkYXRhUmVzcG9uc2UucmVzdWx0c1swXTtcclxuICAgIGNvbnN0IG15RGF0YSA9IE9iamVjdC5rZXlzKGRhdGFSZXNwb25zZSkubWFwKChrZXkpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGFSZXNwb25zZVtrZXldO1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhteURhdGFbMF0uc2hvdy5pZClcclxuICAgIGNvbnN0IGlkRGF0YSA9IG15RGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGEuc2hvdy5pZCBhcyBzdHJpbmc7XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGlkRGF0YSwgXCJpZERhdGFcIik7XHJcbiAgICAvLyBnZXR0aW5nIGxpc3QgdGhhdCBjb250YWlucyBuYW1lcyBvZiB0aGUgc2hvd3NcclxuICAgIC8vIGNvbnN0IHNob3dzTGlzdDogYW55W10gPSBbXTtcclxuICAgIC8vIHNwb3RpZnlBcGkuZ2V0U2hvd3MoaWREYXRhKS50aGVuKChyZXMpID0+IHtcclxuICAgIC8vICAgcmVzLnNob3dzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgIC8vICAgICBzaG93c0xpc3QucHVzaChlbGVtZW50Lm5hbWUgYXMgc3RyaW5nKTtcclxuICAgIC8vICAgfSk7XHJcbiAgICAvLyB9KTtcclxuICAgIC8vIHNldFNob3dzKHNob3dzTGlzdCk7XHJcbiAgICByZXR1cm4gaWREYXRhO1xyXG4gIH07XHJcbiAgY29uc3QgZmV0Y2hFcGlzb2Rlc0RhdGEgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wb2RjYXN0RXBpc29kZXM/YWNjZXNzX3Rva2VuPSR7dG9rZW5Db2RlfSZpZD0ke2lkfWBcclxuICAgICk7XHJcbiAgICBjb25zdCBkYXRhUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICByZXR1cm4gZGF0YVJlc3BvbnNlO1xyXG4gIH07XHJcbiAgY29uc3QgYXJyOiBhbnlbXSA9IFtdO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaGRhdGEoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgcmVzLm1hcCgoaWQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgZmV0Y2hFcGlzb2Rlc0RhdGEoaWQpLnRoZW4oKGVwaXNvZGU6IEVwaXNvZGUpID0+IHtcclxuICAgICAgICAgIGFyci5wdXNoKGVwaXNvZGUpO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gNDgpIHtcclxuICAgICAgICAgICAgc2V0RGF0YShhcnIpO1xyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH0sIFt0b2tlbkNvZGVdKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSwgbG9hZGluZyB9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvTGlua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzcG90aWZ5LXdlYi1hcGktanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==