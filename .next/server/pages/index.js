/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/SubscribeButton/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/SubscribeButton/index.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubscribeButton\": function() { return /* binding */ SubscribeButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_stripe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/stripe-js */ \"./src/services/stripe-js.ts\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"./src/components/SubscribeButton/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/home/marcio/\\xC1rea de Trabalho/ig-news/src/components/SubscribeButton/index.tsx\";\n\n\n\n\nfunction SubscribeButton({\n  priceId\n}) {\n  const [session] = (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n\n  async function handleSubscribe() {\n    if (!session) {\n      // se o usuario não estiver logado\n      (0,next_auth_client__WEBPACK_IMPORTED_MODULE_1__.signin)('github');\n      return;\n    }\n\n    try {\n      const response = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.post('/subscribe');\n      const {\n        sessionsId\n      } = response.data;\n      const stripe = await (0,_services_stripe_js__WEBPACK_IMPORTED_MODULE_3__.getStripeJs)();\n      await stripe.redirectToCheckout({\n        sessionId: sessionsId\n      });\n    } catch (error) {\n      alert(error.message);\n    }\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n    type: \"button\",\n    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().subscribeButton),\n    onClick: handleSubscribe,\n    children: \"Subscribe now\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 9\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vaW5kZXgudHN4P2VmMWQiXSwibmFtZXMiOlsiU3Vic2NyaWJlQnV0dG9uIiwicHJpY2VJZCIsInNlc3Npb24iLCJ1c2VTZXNzaW9uIiwiaGFuZGxlU3Vic2NyaWJlIiwic2lnbmluIiwicmVzcG9uc2UiLCJhcGkiLCJzZXNzaW9uc0lkIiwiZGF0YSIsInN0cmlwZSIsImdldFN0cmlwZUpzIiwicmVkaXJlY3RUb0NoZWNrb3V0Iiwic2Vzc2lvbklkIiwiZXJyb3IiLCJhbGVydCIsIm1lc3NhZ2UiLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNTyxTQUFTQSxlQUFULENBQTBCO0FBQUVDO0FBQUYsQ0FBMUIsRUFBNEQ7QUFDL0QsUUFBTSxDQUFFQyxPQUFGLElBQWNDLDREQUFVLEVBQTlCOztBQUVBLGlCQUFlQyxlQUFmLEdBQWdDO0FBQzVCLFFBQUcsQ0FBQ0YsT0FBSixFQUFZO0FBQUU7QUFDVkcsOERBQU0sQ0FBQyxRQUFELENBQU47QUFDQTtBQUNIOztBQUVELFFBQUk7QUFDQSxZQUFNQyxRQUFRLEdBQUcsTUFBTUMsbURBQUEsQ0FBUyxZQUFULENBQXZCO0FBRUEsWUFBTTtBQUFFQztBQUFGLFVBQWlCRixRQUFRLENBQUNHLElBQWhDO0FBRUEsWUFBTUMsTUFBTSxHQUFHLE1BQU1DLGdFQUFXLEVBQWhDO0FBRUEsWUFBTUQsTUFBTSxDQUFDRSxrQkFBUCxDQUEwQjtBQUFDQyxpQkFBUyxFQUFFTDtBQUFaLE9BQTFCLENBQU47QUFDSCxLQVJELENBUUUsT0FBT00sS0FBUCxFQUFjO0FBQ1pDLFdBQUssQ0FBQ0QsS0FBSyxDQUFDRSxPQUFQLENBQUw7QUFDSDtBQUdKOztBQUNELHNCQUNJO0FBQ0EsUUFBSSxFQUFDLFFBREw7QUFFQSxhQUFTLEVBQUVDLDRFQUZYO0FBR0EsV0FBTyxFQUFFYixlQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFTSCIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHNpZ25pbiwgdXNlU2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuaW1wb3J0IHsgYXBpIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJztcbmltcG9ydCB7IGdldFN0cmlwZUpzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc3RyaXBlLWpzJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnO1xuXG5pbnRlcmZhY2UgU3Vic2NyaWJlQnV0dG9uUHJvcHN7XG4gICAgcHJpY2VJZDogc3RyaW5nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU3Vic2NyaWJlQnV0dG9uKCB7IHByaWNlSWQgfTogU3Vic2NyaWJlQnV0dG9uUHJvcHMpe1xuICAgIGNvbnN0IFsgc2Vzc2lvbiBdID0gdXNlU2Vzc2lvbigpO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3Vic2NyaWJlKCl7XG4gICAgICAgIGlmKCFzZXNzaW9uKXsgLy8gc2UgbyB1c3VhcmlvIG7Do28gZXN0aXZlciBsb2dhZG9cbiAgICAgICAgICAgIHNpZ25pbignZ2l0aHViJylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KCcvc3Vic2NyaWJlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgc2Vzc2lvbnNJZCB9ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgY29uc3Qgc3RyaXBlID0gYXdhaXQgZ2V0U3RyaXBlSnMoKTtcblxuICAgICAgICAgICAgYXdhaXQgc3RyaXBlLnJlZGlyZWN0VG9DaGVja291dCh7c2Vzc2lvbklkOiBzZXNzaW9uc0lkfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgIH1cbiAgICByZXR1cm4oXG4gICAgICAgIDxidXR0b24gXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdWJzY3JpYmVCdXR0b259XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1YnNjcmliZX1cbiAgICAgICAgPlxuICAgICAgICBTdWJzY3JpYmUgbm93XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/index.tsx\n");

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; },\n/* harmony export */   \"getStaticProps\": function() { return /* binding */ getStaticProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubscribeButton */ \"./src/components/SubscribeButton/index.tsx\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.module.scss */ \"./src/pages/home.module.scss\");\n/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/marcio/\\xC1rea de Trabalho/ig-news/src/pages/index.tsx\";\n\n/* eslint-disable @next/next/no-img-element */\n\n\n\n\n/**\n * 3 formas de buscar uma informação no next\n * Client-side\n * Server-side (SSR) -> Comentários de um post\n * Static-side (SSG) -> Conteúdos de um Post\n */\n\nfunction Home({\n  product\n}) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n        children: \"Home | ig.news\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentContainer),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hero),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n          children: \"\\uD83D\\uDC4B Hey, Welcome\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n          children: [\"News about the \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: \"React\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 30\n          }, this), \" world\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n          children: [\"Get acess to all publications \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 43\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n            children: [\"for \", product.amount, \" month\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 48\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubscribeButton__WEBPACK_IMPORTED_MODULE_2__.SubscribeButton, {\n          priceId: product.priceId\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n        src: \"/images/avatar.svg\",\n        alt: \"Girl coding\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\nconst getStaticProps = async () => {\n  const price = await _services_stripe__WEBPACK_IMPORTED_MODULE_3__.stripe.prices.retrieve('price_1JGNrCIxrY1DjMmonl0h94wH', {\n    expand: ['product'] //recupera o preço e todas as informações do produto\n\n  });\n  const product = {\n    priceId: price.id,\n    amount: new Intl.NumberFormat('en-US', {\n      style: 'currency',\n      currency: 'USD'\n    }).format(price.unit_amount / 100\n    /*Vem em centavos*/\n    )\n  };\n  return {\n    props: {\n      product\n    },\n    revalidate: 60 * 60 * 24 // 1 minuto, 1 hora, 24 horas\n\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzQxZTAiXSwibmFtZXMiOlsiSG9tZSIsInByb2R1Y3QiLCJzdHlsZXMiLCJhbW91bnQiLCJwcmljZUlkIiwiZ2V0U3RhdGljUHJvcHMiLCJwcmljZSIsInN0cmlwZSIsImV4cGFuZCIsImlkIiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiY3VycmVuY3kiLCJmb3JtYXQiLCJ1bml0X2Ftb3VudCIsInByb3BzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVNlLFNBQVNBLElBQVQsQ0FBYztBQUFFQztBQUFGLENBQWQsRUFBc0M7QUFDbkQsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBSUU7QUFBTSxlQUFTLEVBQUVDLDJFQUFqQjtBQUFBLDhCQUNFO0FBQVMsaUJBQVMsRUFBRUEsK0RBQXBCO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRTtBQUFBLHFEQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGLGVBR0U7QUFBQSxvRUFDZ0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEaEMsZUFDcUM7QUFBQSwrQkFBV0QsT0FBTyxDQUFDRSxNQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRixlQU1FLDhEQUFDLHdFQUFEO0FBQWlCLGlCQUFPLEVBQUVGLE9BQU8sQ0FBQ0c7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQVNFO0FBQUssV0FBRyxFQUFDLG9CQUFUO0FBQThCLFdBQUcsRUFBQztBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQSxrQkFERjtBQWtCRDtBQUVNLE1BQU1DLGNBQThCLEdBQUcsWUFBVTtBQUN0RCxRQUFNQyxLQUFLLEdBQUcsTUFBTUMsb0VBQUEsQ0FBdUIsZ0NBQXZCLEVBQXlEO0FBQzNFQyxVQUFNLEVBQUUsQ0FBQyxTQUFELENBRG1FLENBQ3ZEOztBQUR1RCxHQUF6RCxDQUFwQjtBQUlBLFFBQU1QLE9BQU8sR0FBRztBQUNkRyxXQUFPLEVBQUVFLEtBQUssQ0FBQ0csRUFERDtBQUVkTixVQUFNLEVBQUUsSUFBSU8sSUFBSSxDQUFDQyxZQUFULENBQXNCLE9BQXRCLEVBQThCO0FBQ3BDQyxXQUFLLEVBQUUsVUFENkI7QUFFcENDLGNBQVEsRUFBRTtBQUYwQixLQUE5QixFQUdMQyxNQUhLLENBR0dSLEtBQUssQ0FBQ1MsV0FBTixHQUFvQjtBQUFNO0FBSDdCO0FBRk0sR0FBaEI7QUFPQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMZjtBQURLLEtBREY7QUFJTGdCLGNBQVUsRUFBRSxLQUFLLEVBQUwsR0FBVSxFQUpqQixDQUlvQjs7QUFKcEIsR0FBUDtBQU1ELENBbEJNIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIEBuZXh0L25leHQvbm8taW1nLWVsZW1lbnQgKi9cbmltcG9ydCB7IEdldFN0YXRpY1Byb3BzIH0gZnJvbSAnbmV4dCc7XG5cbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgeyBTdWJzY3JpYmVCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzL1N1YnNjcmliZUJ1dHRvbic7XG5pbXBvcnQgeyBzdHJpcGUgfSBmcm9tICcuLi9zZXJ2aWNlcy9zdHJpcGUnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaG9tZS5tb2R1bGUuc2Nzcyc7XG5cbi8qKlxuICogMyBmb3JtYXMgZGUgYnVzY2FyIHVtYSBpbmZvcm1hw6fDo28gbm8gbmV4dFxuICogQ2xpZW50LXNpZGVcbiAqIFNlcnZlci1zaWRlIChTU1IpIC0+IENvbWVudMOhcmlvcyBkZSB1bSBwb3N0XG4gKiBTdGF0aWMtc2lkZSAoU1NHKSAtPiBDb250ZcO6ZG9zIGRlIHVtIFBvc3RcbiAqL1xuXG5pbnRlcmZhY2UgSG9tZVByb3BzIHtcbiAgcHJvZHVjdDoge1xuICAgIHByaWNlSWQ6IHN0cmluZyxcbiAgICBhbW91bnQ6IG51bWJlcixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgcHJvZHVjdCB9OiBIb21lUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Ib21lIHwgaWcubmV3czwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Q29udGFpbmVyfT5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuaGVyb30+XG4gICAgICAgICAgPHNwYW4+8J+RiyBIZXksIFdlbGNvbWU8L3NwYW4+XG4gICAgICAgICAgPGgxPk5ld3MgYWJvdXQgdGhlIDxzcGFuPlJlYWN0PC9zcGFuPiB3b3JsZDwvaDE+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBHZXQgYWNlc3MgdG8gYWxsIHB1YmxpY2F0aW9ucyA8YnIvPjxzcGFuPmZvciB7cHJvZHVjdC5hbW91bnR9IG1vbnRoPC9zcGFuPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U3Vic2NyaWJlQnV0dG9uIHByaWNlSWQ9e3Byb2R1Y3QucHJpY2VJZH0gLz5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvYXZhdGFyLnN2Z1wiIGFsdD1cIkdpcmwgY29kaW5nXCIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHM6IEdldFN0YXRpY1Byb3BzID0gYXN5bmMoKSA9PntcbiAgY29uc3QgcHJpY2UgPSBhd2FpdCBzdHJpcGUucHJpY2VzLnJldHJpZXZlKCdwcmljZV8xSkdOckNJeHJZMURqTW1vbmwwaDk0d0gnLCB7XG4gICAgZXhwYW5kOiBbJ3Byb2R1Y3QnXSAvL3JlY3VwZXJhIG8gcHJlw6dvIGUgdG9kYXMgYXMgaW5mb3JtYcOnw7VlcyBkbyBwcm9kdXRvXG4gIH0pO1xuXG4gIGNvbnN0IHByb2R1Y3QgPSB7XG4gICAgcHJpY2VJZDogcHJpY2UuaWQsXG4gICAgYW1vdW50OiBuZXcgSW50bC5OdW1iZXJGb3JtYXQoJ2VuLVVTJyx7XG4gICAgICBzdHlsZTogJ2N1cnJlbmN5JyxcbiAgICAgIGN1cnJlbmN5OiAnVVNEJ1xuICAgIH0pLmZvcm1hdCgocHJpY2UudW5pdF9hbW91bnQgLyAxMDApLCAvKlZlbSBlbSBjZW50YXZvcyovKVxuICB9O1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm9kdWN0XG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiA2MCAqIDYwICogMjQgLy8gMSBtaW51dG8sIDEgaG9yYSwgMjQgaG9yYXNcbiAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"api\": function() { return /* binding */ api; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n  baseURL: '/api' //axios aproveita o resto da url atras\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvYXBpLnRzPzBlOWQiXSwibmFtZXMiOlsiYXBpIiwiYXhpb3MiLCJiYXNlVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUdPLE1BQU1BLEdBQUcsR0FBR0MsbURBQUEsQ0FBYTtBQUM1QkMsU0FBTyxFQUFFLE1BRG1CLENBQ1g7O0FBRFcsQ0FBYixDQUFaIiwiZmlsZSI6Ii4vc3JjL3NlcnZpY2VzL2FwaS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcbiAgICBiYXNlVVJMOiAnL2FwaScsIC8vYXhpb3MgYXByb3ZlaXRhIG8gcmVzdG8gZGEgdXJsIGF0cmFzXG59KSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/stripe-js.ts":
/*!***********************************!*\
  !*** ./src/services/stripe-js.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStripeJs\": function() { return /* binding */ getStripeJs; }\n/* harmony export */ });\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stripe/stripe-js */ \"@stripe/stripe-js\");\n/* harmony import */ var _stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__);\n/*integraçao do stripe com o browser */\n\nasync function getStripeJs() {\n  const stripeJs = await (0,_stripe_stripe_js__WEBPACK_IMPORTED_MODULE_0__.loadStripe)(\"pk_test_prbB5EX8na1Q5L8KDGxYexGN00jVBylABd\");\n  return stripeJs;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzP2Q4YWMiXSwibmFtZXMiOlsiZ2V0U3RyaXBlSnMiLCJzdHJpcGVKcyIsImxvYWRTdHJpcGUiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBRU8sZUFBZUEsV0FBZixHQUE0QjtBQUMvQixRQUFNQyxRQUFRLEdBQUcsTUFBTUMsNkRBQVUsQ0FBQ0MsNENBQUQsQ0FBakM7QUFFQSxTQUFPRixRQUFQO0FBQ0giLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvc3RyaXBlLWpzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyppbnRlZ3Jhw6dhbyBkbyBzdHJpcGUgY29tIG8gYnJvd3NlciAqL1xuaW1wb3J0IHsgbG9hZFN0cmlwZSB9IGZyb20gJ0BzdHJpcGUvc3RyaXBlLWpzJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0cmlwZUpzKCl7XG4gICAgY29uc3Qgc3RyaXBlSnMgPSBhd2FpdCBsb2FkU3RyaXBlKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NUUklQRV9QVUJMSUNfS0VZKTtcblxuICAgIHJldHVybiBzdHJpcGVKcztcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/stripe-js.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": function() { return /* binding */ stripe; }\n/* harmony export */ });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_1___default())(process.env.STRIPE_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'Ignews',\n    version: _package_json__WEBPACK_IMPORTED_MODULE_0__.version\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUVPLE1BQU1BLE1BQU0sR0FBRyxJQUFJQywrQ0FBSixDQUNsQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBRE0sRUFFbEI7QUFDSUMsWUFBVSxFQUFFLFlBRGhCO0FBRUlDLFNBQU8sRUFBRTtBQUNMQyxRQUFJLEVBQUUsUUFERDtBQUVMQyxXQUFPQTtBQUZGO0FBRmIsQ0FGa0IsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcbiAgICBwcm9jZXNzLmVudi5TVFJJUEVfS0VZLFxuICAgIHtcbiAgICAgICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxuICAgICAgICBhcHBJbmZvOiB7XG4gICAgICAgICAgICBuYW1lOiAnSWduZXdzJyxcbiAgICAgICAgICAgIHZlcnNpb25cbiAgICAgICAgfVxuICAgIH1cbik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "./src/components/SubscribeButton/styles.module.scss":
/*!***********************************************************!*\
  !*** ./src/components/SubscribeButton/styles.module.scss ***!
  \***********************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"subscribeButton\": \"styles_subscribeButton__1uQAs\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzPzQ0YTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TdWJzY3JpYmVCdXR0b24vc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3Vic2NyaWJlQnV0dG9uXCI6IFwic3R5bGVzX3N1YnNjcmliZUJ1dHRvbl9fMXVRQXNcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/SubscribeButton/styles.module.scss\n");

/***/ }),

/***/ "./src/pages/home.module.scss":
/*!************************************!*\
  !*** ./src/pages/home.module.scss ***!
  \************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"contentContainer\": \"home_contentContainer__21EWl\",\n\t\"hero\": \"home_hero__3Za5I\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcz81YWQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaG9tZS5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRlbnRDb250YWluZXJcIjogXCJob21lX2NvbnRlbnRDb250YWluZXJfXzIxRVdsXCIsXG5cdFwiaGVyb1wiOiBcImhvbWVfaGVyb19fM1phNUlcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/home.module.scss\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@prismicio/client":"^5.1.0","@stripe/stripe-js":"^1.16.0","@types/prismic-dom":"^2.1.1","axios":"^0.21.1","faunadb":"^4.3.0","next":"11.0.1","next-auth":"^3.27.3","prismic-dom":"^2.2.5","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.2.0","sass":"^1.35.2","stripe":"^8.165.0"},"devDependencies":{"@types/node":"^16.4.0","@types/react":"^17.0.14","eslint":"7.31.0","eslint-config-next":"11.0.1","typescript":"^4.3.5"}}');

/***/ }),

/***/ "@stripe/stripe-js":
/*!************************************!*\
  !*** external "@stripe/stripe-js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@stripe/stripe-js");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ (function(module) {

"use strict";
module.exports = require("stripe");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.tsx"));
module.exports = __webpack_exports__;

})();