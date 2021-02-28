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
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/icons */ "@chakra-ui/icons");
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__);

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
  } = Object(_utils_useFetch__WEBPACK_IMPORTED_MODULE_6__["useFetch"])(tokenCode);

  if (!loading) {
    const sortedStudents = data.sort((a, b) => b.date > a.date ? 1 : -1);
    console.log(sortedStudents); // console.log(data);
    // data.map((episode: Episode) => {
    //   const e = episode.date;
    //   const newDate = new Date(e);
    //   console.log(newDate, typeof(newDate))
    // })
  }

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
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
      p: 4,
      children: "Table with your latest Spotfy podcasts"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }, undefined), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Box"], {
      alignContent: "center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
        children: ["Loading", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__["SpinnerIcon"], {
          m: 4
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Table"], {
      colorScheme: "grey",
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
            lineNumber: 83,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Podcast"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Episode"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Date"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Th"], {
            children: "Play Podcast"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tbody"], {
        children: data.map((episode, index) => {
          // console.log(shows);
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Tr"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
              maxW: 100,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Img"], {
                width: "64px",
                height: "64px",
                src: episode.img
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
              maxW: 400,
              children: episode.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
              children: episode.dateString
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__["Td"], {
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
                    lineNumber: 109,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 103,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 102,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 19
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 17
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9EYXJrTW9kZVN3aXRjaC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTmF2QmFyLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaG9tZS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3VzZUZldGNoLnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBjaGFrcmEtdWkvaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9MaW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzcG90aWZ5LXdlYi1hcGktanNcIiJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJwcm9wcyIsImNvbG9yTW9kZSIsInVzZUNvbG9yTW9kZSIsImJnQ29sb3IiLCJsaWdodCIsImRhcmsiLCJjb2xvciIsIkRhcmtNb2RlU3dpdGNoIiwidG9nZ2xlQ29sb3JNb2RlIiwiaXNEYXJrIiwiTmF2QmFyIiwibmFtZSIsImJvZHkiLCJ1bmRlZmluZWQiLCJIb21lIiwicm91dGVyIiwidXNlUm91dGVyIiwidG9rZW4iLCJxdWVyeSIsInNwb3RpZnlBcGkiLCJTcG90aWZ5Iiwic2V0TmFtZSIsInVzZVN0YXRlIiwidG9rZW5Db2RlIiwiYWNjZXNzX3Rva2VuIiwiZGF0YSIsImxvYWRpbmciLCJ1c2VGZXRjaCIsInNvcnRlZFN0dWRlbnRzIiwic29ydCIsImEiLCJiIiwiZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VFZmZlY3QiLCJzZXRBY2Nlc3NUb2tlbiIsImdldE1lIiwidGhlbiIsInJlcyIsInJlc05hbWUiLCJkaXNwbGF5X25hbWUiLCJtYXAiLCJlcGlzb2RlIiwiaW5kZXgiLCJpbWciLCJkYXRlU3RyaW5nIiwidXJsIiwic2V0RGF0YSIsInNldExvYWRpbmciLCJmZXRjaGRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwiZGF0YVJlc3BvbnNlIiwianNvbiIsIm15RGF0YSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJpZERhdGEiLCJzaG93IiwiaWQiLCJmZXRjaEVwaXNvZGVzRGF0YSIsImFyciIsInB1c2giLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FB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WUQsR0FiUSxFQWFOLENBQUMxQyxTQUFELENBYk0sQ0FBVDtBQWVBLFNBQU87QUFBRUUsUUFBRjtBQUFRQztBQUFSLEdBQVA7QUFDRCxDQXJETSxDOzs7Ozs7Ozs7OztBQ0xQLDZDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLGtEOzs7Ozs7Ozs7OztBQ0FBLCtDIiwiZmlsZSI6InBhZ2VzL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9ob21lLnRzeFwiKTtcbiIsImltcG9ydCB7IEZsZXgsIHVzZUNvbG9yTW9kZSB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSAocHJvcHM6IGFueSkgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSB9ID0gdXNlQ29sb3JNb2RlKClcblxuICBjb25zdCBiZ0NvbG9yID0geyBsaWdodDogJ2dyYXkuNTAnLCBkYXJrOiAnZ3JheS45MDAnIH1cblxuICBjb25zdCBjb2xvciA9IHsgbGlnaHQ6ICdibGFjaycsIGRhcms6ICd3aGl0ZScgfVxuICByZXR1cm4gKFxuICAgIDxGbGV4XG4gICAgICBkaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAgYWxpZ25JdGVtcz1cImNlbnRlclwiXG4gICAgICBqdXN0aWZ5Q29udGVudD1cImZsZXgtc3RhcnRcIlxuICAgICAgYmc9e2JnQ29sb3JbY29sb3JNb2RlXX1cbiAgICAgIGNvbG9yPXtjb2xvcltjb2xvck1vZGVdfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gIClcbn1cbiIsImltcG9ydCB7IHVzZUNvbG9yTW9kZSwgU3dpdGNoIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcblxuZXhwb3J0IGNvbnN0IERhcmtNb2RlU3dpdGNoID0gKCkgPT4ge1xuICBjb25zdCB7IGNvbG9yTW9kZSwgdG9nZ2xlQ29sb3JNb2RlIH0gPSB1c2VDb2xvck1vZGUoKVxuICBjb25zdCBpc0RhcmsgPSBjb2xvck1vZGUgPT09ICdkYXJrJ1xuICByZXR1cm4gKFxuICAgIDxTd2l0Y2hcbiAgICAgIGNvbG9yPVwiZ3JlZW5cIlxuICAgICAgaXNDaGVja2VkPXtpc0Rhcmt9XG4gICAgICBvbkNoYW5nZT17dG9nZ2xlQ29sb3JNb2RlfVxuICAgIC8+XG4gIClcbn1cbiIsImltcG9ydCB7IEZsZXgsIEJveCwgTGluaywgVGV4dCwgSGVhZGluZyB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L0xpbmtcIjtcclxuaW1wb3J0IHsgRGFya01vZGVTd2l0Y2ggfSBmcm9tIFwiLi9EYXJrTW9kZVN3aXRjaFwiO1xyXG5pbnRlcmZhY2UgTmF2QmFyUHJvcHMge1xyXG4gIG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBOYXZCYXI6IFJlYWN0LkZDPE5hdkJhclByb3BzPiA9ICh7IG5hbWUgfSkgPT4ge1xyXG4gIGxldCBib2R5ID0gbnVsbDtcclxuICBpZiAobmFtZSAhPT0gbnVsbCB8fCB1bmRlZmluZWQpIHtcclxuICAgIGJvZHkgPSAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEZsZXggcD17NH0+XHJcbiAgICAgICAgICA8Qm94IG1sPXtcImF1dG9cIn0+XHJcbiAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjI0cHhcIj5cclxuICAgICAgICAgICAgICBIZWxsbywge25hbWV9XHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvRmxleD5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBib2R5ID0gKFxyXG4gICAgICA8RmxleCBwPXs0fT5cclxuICAgICAgICA8Qm94IG1sPXtcImF1dG9cIn0+XHJcbiAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwiMjRweFwiPlxyXG4gICAgICAgICAgICAgIFNpZ24gdXNpbmcgeW91ciBzcG90aWZ5IGFjY291bnRcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGbGV4IHBvc2l0aW9uPVwic3RpY2t5XCIgdG9wPXswfSB6SW5kZXg9ezF9IGJnPVwiIzU4QzE4NFwiIHA9ezR9IHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICA8RmxleCBmbGV4PXsxfSBtPVwiYXV0b1wiIGFsaWduPVwiY2VudGVyXCIgbWF4Vz17ODAwfT5cclxuICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxMaW5rPlxyXG4gICAgICAgICAgICA8SGVhZGluZyB0ZXh0Q29sb3I9XCJ3aGl0ZVwiPlNwb3RpZnlQb2RjYXN0QXBwPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTmV4dExpbms+XHJcbiAgICAgICAgPEJveCBtcj17NH0gbWw9e1wiYXV0b1wifT5cclxuICAgICAgICAgIHtib2R5fVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICAgIDxEYXJrTW9kZVN3aXRjaCAvPlxyXG4gICAgICA8L0ZsZXg+XHJcbiAgICA8L0ZsZXg+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgU3BvdGlmeSBmcm9tIFwic3BvdGlmeS13ZWItYXBpLWpzXCI7XHJcbmltcG9ydCB7IE5hdkJhciB9IGZyb20gXCIuLi9jb21wb25lbnRzL05hdkJhclwiO1xyXG5pbXBvcnQgeyB1c2VGZXRjaCB9IGZyb20gXCIuLi91dGlscy91c2VGZXRjaFwiO1xyXG5pbXBvcnQge1xyXG4gIEJveCxcclxuICBCdXR0b24sXHJcbiAgSGVhZGluZyxcclxuICBJbWcsXHJcbiAgVGFibGUsXHJcbiAgVGJvZHksXHJcbiAgVGQsXHJcbiAgVGgsXHJcbiAgVGhlYWQsXHJcbiAgVHIsXHJcbiAgRmxleCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5pbXBvcnQgeyBFcGlzb2RlIH0gZnJvbSBcIi4uL3R5cGVzL0VwaXNvZGVcIjtcclxuaW1wb3J0IHsgU3Bpbm5lckljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xyXG5pbXBvcnQgeyBFeHRlcm5hbExpbmtJY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucydcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCJcclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB0b2tlbiA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBzcG90aWZ5QXBpID0gbmV3IFNwb3RpZnkoKTtcclxuXHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZD4obnVsbCk7XHJcblxyXG4gIGNvbnN0IHRva2VuQ29kZSA9IHRva2VuLmFjY2Vzc190b2tlbiBhcyBzdHJpbmc7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nIH0gPSB1c2VGZXRjaCh0b2tlbkNvZGUpO1xyXG5cclxuICBpZiAoIWxvYWRpbmcpIHtcclxuXHRcclxuICAgIGNvbnN0IHNvcnRlZFN0dWRlbnRzID0gZGF0YS5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gYi5kYXRlID4gYS5kYXRlID8gMTogLTEpO1xyXG4gICAgY29uc29sZS5sb2coc29ydGVkU3R1ZGVudHMpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vIGRhdGEubWFwKChlcGlzb2RlOiBFcGlzb2RlKSA9PiB7XHJcbiAgICAvLyAgIGNvbnN0IGUgPSBlcGlzb2RlLmRhdGU7XHJcbiAgICAvLyAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShlKTtcclxuICAgIC8vICAgY29uc29sZS5sb2cobmV3RGF0ZSwgdHlwZW9mKG5ld0RhdGUpKVxyXG4gICAgLy8gfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHRva2VuQ29kZSA9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRva2VuQ29kZSwgXCJ0b2tlbkNvZGVcIik7XHJcblxyXG4gICAgICBzcG90aWZ5QXBpLnNldEFjY2Vzc1Rva2VuKHRva2VuQ29kZSk7XHJcbiAgICAgIHNwb3RpZnlBcGkuZ2V0TWUoKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgIC8vIHNldHRpbmcgdXAgbmFtZSBvbiBuYXZiYXJcclxuICAgICAgICBjb25zdCByZXNOYW1lID0gcmVzLmRpc3BsYXlfbmFtZTtcclxuICAgICAgICBzZXROYW1lKHJlc05hbWUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kaXNwbGF5X25hbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCBbdG9rZW5Db2RlXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGhlaWdodD1cIjEwMDB2aFwiPlxyXG4gICAgICA8TmF2QmFyIG5hbWU9e25hbWV9IC8+XHJcbiAgICAgIDxIZWFkaW5nIHA9ezR9PlRhYmxlIHdpdGggeW91ciBsYXRlc3QgU3BvdGZ5IHBvZGNhc3RzPC9IZWFkaW5nPlxyXG4gICAgICA8YnI+PC9icj5cclxuICAgICAge2xvYWRpbmcgPyAoXHJcbiAgICAgICAgPEJveCBhbGlnbkNvbnRlbnQ9XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxIZWFkaW5nPlxyXG4gICAgICAgICAgICBMb2FkaW5nXHJcbiAgICAgICAgICAgIDxTcGlubmVySWNvbiBtPXs0fSAvPlxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxUYWJsZVxyXG4gICAgICAgICAgY29sb3JTY2hlbWU9XCJncmV5XCJcclxuICAgICAgICAgIHA9ezR9XHJcbiAgICAgICAgICBjb2xvcj1cIndoaXRlXCJcclxuICAgICAgICAgIGZvbnRTaXplPVwiMjRweFwiXHJcbiAgICAgICAgICBtYXhXPVwiNjAlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGhlYWQ+XHJcbiAgICAgICAgICAgIDxUcj5cclxuICAgICAgICAgICAgICA8VGg+SWQ8L1RoPlxyXG4gICAgICAgICAgICAgIDxUaD5Qb2RjYXN0PC9UaD5cclxuICAgICAgICAgICAgICA8VGg+RXBpc29kZTwvVGg+XHJcbiAgICAgICAgICAgICAgPFRoPkRhdGU8L1RoPlxyXG4gICAgICAgICAgICAgIDxUaD5QbGF5IFBvZGNhc3Q8L1RoPlxyXG4gICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgPC9UaGVhZD5cclxuICAgICAgICAgIDxUYm9keT5cclxuICAgICAgICAgICAge2RhdGEubWFwKChlcGlzb2RlOiBFcGlzb2RlLCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2hvd3MpO1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VHI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZD57aW5kZXggKyAxfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUZCBtYXhXPXsxMDB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWcgd2lkdGg9XCI2NHB4XCIgaGVpZ2h0PVwiNjRweFwiIHNyYz17ZXBpc29kZS5pbWd9PjwvSW1nPlxyXG4gICAgICAgICAgICAgICAgICA8L1RkPlxyXG4gICAgICAgICAgICAgICAgICA8VGQgbWF4Vz17NDAwfT57ZXBpc29kZS5uYW1lfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUZD57ZXBpc29kZS5kYXRlU3RyaW5nfTwvVGQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUZD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtlcGlzb2RlLnVybH0gaXNFeHRlcm5hbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yU2NoZW1lPVwid2hhdHNhcHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQTEFZIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RXh0ZXJuYWxMaW5rSWNvbiBteD1cIjJweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGQ+XHJcbiAgICAgICAgICAgICAgICA8L1RyPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9UYm9keT5cclxuICAgICAgICA8L1RhYmxlPlxyXG4gICAgICApfVxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsImltcG9ydCB7IEVwaXNvZGUgfSBmcm9tIFwiLi8uLi90eXBlcy9FcGlzb2RlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XHJcbi8vIGltcG9ydCBTcG90aWZ5V2ViQXBpIGZyb20gXCJzcG90aWZ5LXdlYi1hcGktanNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VGZXRjaCA9ICh0b2tlbkNvZGU6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXTogYW55ID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIC8vIGNvbnN0IFtzaG93cywgc2V0U2hvd3NdOiBhbnkgPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8gY29uc3Qgc3BvdGlmeUFwaSA9IG5ldyBTcG90aWZ5V2ViQXBpKCk7XHJcbiAgY29uc3QgZmV0Y2hkYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcclxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9wb2RjYXN0P2FjY2Vzc190b2tlbj0ke3Rva2VuQ29kZX1gXHJcbiAgICApO1xyXG4gICAgY29uc3QgZGF0YVJlc3BvbnNlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgLy8gY29uc3QgaXRlbSA9IGRhdGFSZXNwb25zZS5yZXN1bHRzWzBdO1xyXG4gICAgY29uc3QgbXlEYXRhID0gT2JqZWN0LmtleXMoZGF0YVJlc3BvbnNlKS5tYXAoKGtleSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YVJlc3BvbnNlW2tleV07XHJcbiAgICB9KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG15RGF0YVswXS5zaG93LmlkKVxyXG4gICAgY29uc3QgaWREYXRhID0gbXlEYXRhLm1hcCgoZGF0YSkgPT4ge1xyXG4gICAgICByZXR1cm4gZGF0YS5zaG93LmlkIGFzIHN0cmluZztcclxuICAgIH0pO1xyXG4gICAgLy8gY29uc29sZS5sb2coaWREYXRhLCBcImlkRGF0YVwiKTtcclxuICAgIC8vIGdldHRpbmcgbGlzdCB0aGF0IGNvbnRhaW5zIG5hbWVzIG9mIHRoZSBzaG93c1xyXG4gICAgLy8gY29uc3Qgc2hvd3NMaXN0OiBhbnlbXSA9IFtdO1xyXG4gICAgLy8gc3BvdGlmeUFwaS5nZXRTaG93cyhpZERhdGEpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgLy8gICByZXMuc2hvd3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgLy8gICAgIHNob3dzTGlzdC5wdXNoKGVsZW1lbnQubmFtZSBhcyBzdHJpbmcpO1xyXG4gICAgLy8gICB9KTtcclxuICAgIC8vIH0pO1xyXG4gICAgLy8gc2V0U2hvd3Moc2hvd3NMaXN0KTtcclxuICAgIHJldHVybiBpZERhdGE7XHJcbiAgfTtcclxuICBjb25zdCBmZXRjaEVwaXNvZGVzRGF0YSA9IGFzeW5jIChpZDogc3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3BvZGNhc3RFcGlzb2Rlcz9hY2Nlc3NfdG9rZW49JHt0b2tlbkNvZGV9JmlkPSR7aWR9YFxyXG4gICAgKTtcclxuICAgIGNvbnN0IGRhdGFSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgIHJldHVybiBkYXRhUmVzcG9uc2U7XHJcbiAgfTtcclxuICBjb25zdCBhcnI6IGFueVtdID0gW107XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoZGF0YSgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICByZXMubWFwKChpZCwgaW5kZXgpID0+IHtcclxuICAgICAgICBmZXRjaEVwaXNvZGVzRGF0YShpZCkudGhlbigoZXBpc29kZTogRXBpc29kZSkgPT4ge1xyXG4gICAgICAgICAgYXJyLnB1c2goZXBpc29kZSk7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiA0OCkge1xyXG4gICAgICAgICAgICBzZXREYXRhKGFycik7XHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSwgW3Rva2VuQ29kZV0pO1xyXG5cclxuICByZXR1cm4geyBkYXRhLCBsb2FkaW5nIH07XHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGFrcmEtdWkvaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L0xpbmtcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGF0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3BvdGlmeS13ZWItYXBpLWpzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=