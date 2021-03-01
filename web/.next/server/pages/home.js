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
/* harmony import */ var _DarkModeSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DarkModeSwitch */ "./src/components/DarkModeSwitch.tsx");


var _jsxFileName = "C:\\Users\\szymo\\gitRepo\\spotify_webapp\\web\\src\\components\\NavBar.tsx";

 // import NextLink from "next/Link";


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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        href: "/",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
          textColor: "white",
          children: "SpotifyPodcastApp"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__["Box"], {
        mr: 4,
        ml: "auto",
        children: body
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DarkModeSwitch__WEBPACK_IMPORTED_MODULE_3__["DarkModeSwitch"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\szymo\\gitRepo\\spotify_webapp\\web\\src\\pages\\home.tsx";











const Home = () => {
  const colorMode = Object(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["useColorMode"])();
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
  } = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_6__["useFetch"])(tokenCode);

  if (!loading) {
    const sortedPodcasts = data.sort((a, b) => b.date > a.date ? 1 : -1);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (typeof tokenCode == "string") {
      spotifyApi.setAccessToken(tokenCode);
      spotifyApi.getMe().then(res => {
        // setting up name on navbar
        const resName = res.display_name;
        setName(resName);
        console.log(res.display_name);
      });
    }
  }, [tokenCode]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Container__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    height: "750vh",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_5__["NavBar"], {
      name: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
      p: 4,
      children: "Table with your latest Spotfy podcasts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, undefined), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Box"], {
      alignContent: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
        children: ["Loading", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__["SpinnerIcon"], {
          m: 4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"], {
      colorScheme: "whatsapp",
      p: 4,
      color: "white",
      fontSize: "24px",
      maxW: "60%",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Thead"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tr"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Id"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Podcast"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Episode"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Play Podcast"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tbody"], {
        children: data.map((episode, index) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tr"], {
            children: [colorMode.colorMode === "dark" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
                maxW: 100,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Img"], {
                  width: "64px",
                  height: "64px",
                  src: episode.img
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
                maxW: 400,
                children: episode.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
                children: episode.dateString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 23
              }, undefined)]
            }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
                color: "black",
                children: index + 1
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
                maxW: 100,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Img"], {
                  width: "64px",
                  height: "64px",
                  src: episode.img
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 25
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 98,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
                maxW: 400,
                color: "black",
                children: episode.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 23
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
                color: "black",
                children: episode.dateString
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 23
              }, undefined)]
            }, void 0, true), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Link"], {
                href: episode.url,
                isExternal: true,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Button"], {
                  color: "white",
                  colorScheme: "whatsapp",
                  size: "lg",
                  children: ["PLAY", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__["ExternalLinkIcon"], {
                    mx: "2px"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 111,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 109,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 108,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 17
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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


const useFetch = tokenCode => {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const fetchdata = async () => {
    const response = await fetch(`http://localhost:8080/podcast?access_token=${tokenCode}`);
    const dataResponse = await response.json();
    const myData = Object.keys(dataResponse).map(key => {
      return dataResponse[key];
    });
    const idData = myData.map(data => {
      return data.show.id;
    });
    return idData;
  };

  const fetchEpisodesData = async id => {
    const response = await fetch(`http://localhost:8080/podcastEpisodes?access_token=${tokenCode}&id=${id}`);
    const dataResponse = await response.json();
    return dataResponse;
  };

  const arr = [];
  var lp = 0;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (tokenCode) {
      fetchdata().then(res => {
        res.map(id => {
          fetchEpisodesData(id).then(episode => {
            arr.push(episode);
            lp++;

            if (res.length == lp) {
              setData(arr);
              setLoading(false);
              Object(path__WEBPACK_IMPORTED_MODULE_1__["resolve"])();
            }
          });
        });
      });
    }
  }, [tokenCode]);
  return {
    data,
    loading
  };
};

/***/ }),

/***/ "@chakra-ui/icons":
/*!***********************************!*\
  !*** external "@chakra-ui/icons" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@chakra-ui/react");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3VzZUZldGNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzcG90aWZ5LXdlYi1hcGktanNcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJwcm9wcyIsImNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZSIsImJnQ29sb3IiLCJsaWdodCIsImRhcmsiLCJjb2xvciIsIkRhcmtNb2RlU3dpdGNoIiwidG9nZ2xlQ29sb3JNb2RlIiwiaXNEYXJrIiwiTmF2QmFyIiwibmFtZSIsImJvZHkiLCJ1bmRlZmluZWQiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwidG9rZW4iLCJxdWVyeSIsInNwb3RpZnlBcGkiLCJTcG90aWZ5Iiwic2V0TmFtZSIsInVzZVN0YXRlIiwidG9rZW5Db2RlIiwiYWNjZXNzX3Rva2VuIiwiZGF0YSIsImxvYWRpbmciLCJ1c2VGZXRjaCIsInNvcnRlZFBvZGNhc3RzIiwic29ydCIsImEiLCJiIiwiZGF0ZSIsInVzZUVmZmVjdCIsInNldEFjY2Vzc1Rva2VuIiwiZ2V0TWUiLCJ0aGVuIiwicmVzIiwicmVzTmFtZSIsImRpc3BsYXlfbmFtZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJlcGlzb2RlIiwiaW5kZXgiLCJpbWciLCJkYXRlU3RyaW5nIiwidXJsIiwic2V0RGF0YSIsInNldExvYWRpbmciLCJmZXRjaGRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YVJlc3BvbnNlIiwianNvbiIsIm15RGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJpZERhdGEiLCJzaG93IiwiaWQiLCJmZXRjaEVwaXNvZGVzRGF0YSIsImFyciIsImxwIiwicHVzaCIsImxlbmd0aCIsInJlc29sdmUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFFTyxNQUFNQSxTQUFTLEdBQUlDLEtB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QUFDQSxNQUFJQyxFQUFFLEdBQUcsQ0FBVDtBQUNBL0IseURBQVMsQ0FBQyxNQUFNO0FBQ2QsUUFBSVYsU0FBSixFQUFlO0FBQ2IyQixlQUFTLEdBQUdkLElBQVosQ0FBa0JDLEdBQUQsSUFBUztBQUN4QkEsV0FBRyxDQUFDSyxHQUFKLENBQVNtQixFQUFELElBQVE7QUFDZEMsMkJBQWlCLENBQUNELEVBQUQsQ0FBakIsQ0FBc0J6QixJQUF0QixDQUE0Qk8sT0FBRCxJQUFzQjtBQUMvQ29CLGVBQUcsQ0FBQ0UsSUFBSixDQUFTdEIsT0FBVDtBQUNBcUIsY0FBRTs7QUFDRixnQkFBSTNCLEdBQUcsQ0FBQzZCLE1BQUosSUFBY0YsRUFBbEIsRUFBc0I7QUFDcEJoQixxQkFBTyxDQUFDZSxHQUFELENBQVA7QUFDQWQsd0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDQWtCLGtFQUFPO0FBQ1I7QUFDRixXQVJEO0FBU0QsU0FWRDtBQVdELE9BWkQ7QUFhRDtBQUNGLEdBaEJRLEVBZ0JOLENBQUM1QyxTQUFELENBaEJNLENBQVQ7QUFrQkEsU0FBTztBQUFFRSxRQUFGO0FBQVFDO0FBQVIsR0FBUDtBQUNELENBN0NNLEM7Ozs7Ozs7Ozs7O0FDSlAsNkM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2hvbWUudHN4XCIpO1xuIiwiaW1wb3J0IHsgRmxleCwgdXNlQ29sb3JNb2RlIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IChwcm9wczogYW55KSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuXG4gIGNvbnN0IGJnQ29sb3IgPSB7IGxpZ2h0OiAnZ3JheS41MCcsIGRhcms6ICdncmF5LjkwMCcgfVxuXG4gIGNvbnN0IGNvbG9yID0geyBsaWdodDogJ2JsYWNrJywgZGFyazogJ3doaXRlJyB9XG4gIHJldHVybiAoXG4gICAgPEZsZXhcbiAgICAgIGRpcmVjdGlvbj1cImNvbHVtblwiXG4gICAgICBhbGlnbkl0ZW1zPVwiY2VudGVyXCJcbiAgICAgIGp1c3RpZnlDb250ZW50PVwiZmxleC1zdGFydFwiXG4gICAgICBiZz17YmdDb2xvcltjb2xvck1vZGVdfVxuICAgICAgY29sb3I9e2NvbG9yW2NvbG9yTW9kZV19XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKVxufVxuIiwiaW1wb3J0IHsgdXNlQ29sb3JNb2RlLCBTd2l0Y2ggfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuXG5leHBvcnQgY29uc3QgRGFya01vZGVTd2l0Y2ggPSAoKSA9PiB7XG4gIGNvbnN0IHsgY29sb3JNb2RlLCB0b2dnbGVDb2xvck1vZGUgfSA9IHVzZUNvbG9yTW9kZSgpXG4gIGNvbnN0IGlzRGFyayA9IGNvbG9yTW9kZSA9PT0gJ2RhcmsnXG4gIHJldHVybiAoXG4gICAgPFN3aXRjaFxuICAgICAgY29sb3I9XCJncmVlblwiXG4gICAgICBpc0NoZWNrZWQ9e2lzRGFya31cbiAgICAgIG9uQ2hhbmdlPXt0b2dnbGVDb2xvck1vZGV9XG4gICAgLz5cbiAgKVxufVxuIiwiaW1wb3J0IHsgRmxleCwgQm94LCBMaW5rLCBUZXh0LCBIZWFkaW5nIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xyXG5pbXBvcnQgeyBEYXJrTW9kZVN3aXRjaCB9IGZyb20gXCIuL0RhcmtNb2RlU3dpdGNoXCI7XHJcbmludGVyZmFjZSBOYXZCYXJQcm9wcyB7XHJcbiAgbmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHsgbmFtZSB9KSA9PiB7XHJcbiAgbGV0IGJvZHkgPSBudWxsO1xyXG4gIGlmIChuYW1lICE9PSBudWxsIHx8IHVuZGVmaW5lZCkge1xyXG4gICAgYm9keSA9IChcclxuICAgICAgPD5cclxuICAgICAgICA8RmxleCBwPXs0fT5cclxuICAgICAgICAgIDxCb3ggbWw9e1wiYXV0b1wifT5cclxuICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwiMjRweFwiPlxyXG4gICAgICAgICAgICAgIEhlbGxvLCB7bmFtZX1cclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9GbGV4PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDxGbGV4IHA9ezR9PlxyXG4gICAgICAgIDxCb3ggbWw9e1wiYXV0b1wifT5cclxuICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCIyNHB4XCI+XHJcbiAgICAgICAgICAgICAgU2lnbiB1c2luZyB5b3VyIHNwb3RpZnkgYWNjb3VudFxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvRmxleD5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZsZXggcG9zaXRpb249XCJzdGlja3lcIiB0b3A9ezB9IHpJbmRleD17MX0gYmc9XCIjNThDMTg0XCIgcD17NH0gd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgIDxGbGV4IGZsZXg9ezF9IG09XCJhdXRvXCIgYWxpZ249XCJjZW50ZXJcIiBtYXhXPXs4MDB9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgPEhlYWRpbmcgdGV4dENvbG9yPVwid2hpdGVcIj5TcG90aWZ5UG9kY2FzdEFwcDwvSGVhZGluZz5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8Qm94IG1yPXs0fSBtbD17XCJhdXRvXCJ9PlxyXG4gICAgICAgICAge2JvZHl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPERhcmtNb2RlU3dpdGNoIC8+XHJcbiAgICAgIDwvRmxleD5cclxuICAgIDwvRmxleD5cclxuICApO1xyXG59O1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBTcG90aWZ5IGZyb20gXCJzcG90aWZ5LXdlYi1hcGktanNcIjtcclxuaW1wb3J0IHsgTmF2QmFyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2QmFyXCI7XHJcbmltcG9ydCB7IHVzZUZldGNoIH0gZnJvbSBcIi4uL3V0aWxzL3VzZUZldGNoXCI7XHJcbmltcG9ydCB7XHJcbiAgQm94LFxyXG4gIEJ1dHRvbixcclxuICBIZWFkaW5nLFxyXG4gIEltZyxcclxuICBUYWJsZSxcclxuICBUYm9keSxcclxuICBUZCxcclxuICBUaCxcclxuICBUaGVhZCxcclxuICBUcixcclxuICB1c2VDb2xvck1vZGUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuaW1wb3J0IHsgRXBpc29kZSB9IGZyb20gXCIuLi90eXBlcy9FcGlzb2RlXCI7XHJcbmltcG9ydCB7IFNwaW5uZXJJY29uIH0gZnJvbSBcIkBjaGFrcmEtdWkvaWNvbnNcIjtcclxuaW1wb3J0IHsgRXh0ZXJuYWxMaW5rSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5jb25zdCBIb21lID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNvbG9yTW9kZSA9IHVzZUNvbG9yTW9kZSgpO1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHRva2VuID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IHNwb3RpZnlBcGkgPSBuZXcgU3BvdGlmeSgpO1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ+KG51bGwpO1xyXG5cclxuICBjb25zdCB0b2tlbkNvZGUgPSB0b2tlbi5hY2Nlc3NfdG9rZW4gYXMgc3RyaW5nO1xyXG5cclxuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcgfSA9IHVzZUZldGNoKHRva2VuQ29kZSk7XHJcblxyXG4gIGlmICghbG9hZGluZykge1xyXG4gICAgY29uc3Qgc29ydGVkUG9kY2FzdHMgPSBkYXRhLnNvcnQoKGE6IGFueSwgYjogYW55KSA9PlxyXG4gICAgICBiLmRhdGUgPiBhLmRhdGUgPyAxIDogLTFcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiB0b2tlbkNvZGUgPT0gXCJzdHJpbmdcIikge1xyXG4gICAgICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuQ29kZSk7XHJcbiAgICAgIHNwb3RpZnlBcGkuZ2V0TWUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvLyBzZXR0aW5nIHVwIG5hbWUgb24gbmF2YmFyXHJcbiAgICAgICAgY29uc3QgcmVzTmFtZSA9IHJlcy5kaXNwbGF5X25hbWU7XHJcbiAgICAgICAgc2V0TmFtZShyZXNOYW1lKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGlzcGxheV9uYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSwgW3Rva2VuQ29kZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBoZWlnaHQ9XCI3NTB2aFwiPlxyXG4gICAgICA8TmF2QmFyIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgIDxIZWFkaW5nIHA9ezR9PlRhYmxlIHdpdGggeW91ciBsYXRlc3QgU3BvdGZ5IHBvZGNhc3RzPC9IZWFkaW5nPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPEJveCBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgICAgICBMb2FkaW5nXHJcbiAgICAgICAgICAgIDxTcGlubmVySWNvbiBtPXs0fSAvPlxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJ3aGF0c2FwcFwiXHJcbiAgICAgICAgICBwPXs0fVxyXG4gICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICBmb250U2l6ZT1cIjI0cHhcIlxyXG4gICAgICAgICAgbWF4Vz1cIjYwJVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRoZWFkPlxyXG4gICAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgICAgPFRoPklkPC9UaD5cclxuICAgICAgICAgICAgICA8VGg+UG9kY2FzdDwvVGg+XHJcbiAgICAgICAgICAgICAgPFRoPkVwaXNvZGU8L1RoPlxyXG4gICAgICAgICAgICAgIDxUaD5EYXRlPC9UaD5cclxuICAgICAgICAgICAgICA8VGg+UGxheSBQb2RjYXN0PC9UaD5cclxuICAgICAgICAgICAgPC9Ucj5cclxuICAgICAgICAgIDwvVGhlYWQ+XHJcbiAgICAgICAgICA8VGJvZHk+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcCgoZXBpc29kZTogRXBpc29kZSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgICAgICAgIHtjb2xvck1vZGUuY29sb3JNb2RlID09PSBcImRhcmtcIiA/IChcclxuICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRkPntpbmRleCArIDF9PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBtYXhXPXsxMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHdpZHRoPVwiNjRweFwiIGhlaWdodD1cIjY0cHhcIiBzcmM9e2VwaXNvZGUuaW1nfT48L0ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGQgbWF4Vz17NDAwfT57ZXBpc29kZS5uYW1lfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGQ+e2VwaXNvZGUuZGF0ZVN0cmluZ308L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGQgY29sb3I9XCJibGFja1wiPntpbmRleCArIDF9PC9UZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZCBtYXhXPXsxMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW1nIHdpZHRoPVwiNjRweFwiIGhlaWdodD1cIjY0cHhcIiBzcmM9e2VwaXNvZGUuaW1nfT48L0ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGQgbWF4Vz17NDAwfSBjb2xvcj1cImJsYWNrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtlcGlzb2RlLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRkIGNvbG9yPVwiYmxhY2tcIj57ZXBpc29kZS5kYXRlU3RyaW5nfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgIDxUZD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtlcGlzb2RlLnVybH0gaXNFeHRlcm5hbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJ3aGl0ZVwiIGNvbG9yU2NoZW1lPVwid2hhdHNhcHBcIiBzaXplPVwibGdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUExBWVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rSWNvbiBteD1cIjJweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9UYm9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCB7IEVwaXNvZGUgfSBmcm9tIFwiLi8uLi90eXBlcy9FcGlzb2RlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRmV0Y2ggPSAodG9rZW5Db2RlOiBzdHJpbmcpID0+IHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV06IGFueSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hkYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wb2RjYXN0P2FjY2Vzc190b2tlbj0ke3Rva2VuQ29kZX1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YVJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgY29uc3QgbXlEYXRhID0gT2JqZWN0LmtleXMoZGF0YVJlc3BvbnNlKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YVJlc3BvbnNlW2tleV07XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGlkRGF0YSA9IG15RGF0YS5tYXAoKGRhdGEpID0+IHtcclxuICAgICAgcmV0dXJuIGRhdGEuc2hvdy5pZCBhcyBzdHJpbmc7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBpZERhdGE7XHJcbiAgfTtcclxuICBjb25zdCBmZXRjaEVwaXNvZGVzRGF0YSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3BvZGNhc3RFcGlzb2Rlcz9hY2Nlc3NfdG9rZW49JHt0b2tlbkNvZGV9JmlkPSR7aWR9YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhUmVzcG9uc2U7XHJcbiAgfTtcclxuICBjb25zdCBhcnI6IGFueVtdID0gW107XHJcbiAgdmFyIGxwID0gMDtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHRva2VuQ29kZSkge1xyXG4gICAgICBmZXRjaGRhdGEoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICByZXMubWFwKChpZCkgPT4ge1xyXG4gICAgICAgICAgZmV0Y2hFcGlzb2Rlc0RhdGEoaWQpLnRoZW4oKGVwaXNvZGU6IEVwaXNvZGUpID0+IHtcclxuICAgICAgICAgICAgYXJyLnB1c2goZXBpc29kZSk7XHJcbiAgICAgICAgICAgIGxwKys7XHJcbiAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoID09IGxwKSB7XHJcbiAgICAgICAgICAgICAgc2V0RGF0YShhcnIpO1xyXG4gICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sIFt0b2tlbkNvZGVdKTtcclxuXHJcbiAgcmV0dXJuIHsgZGF0YSwgbG9hZGluZyB9O1xyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3BvdGlmeS13ZWItYXBpLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=