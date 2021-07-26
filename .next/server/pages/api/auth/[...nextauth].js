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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./src/pages/api/auth/[...nextauth].ts":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [//Formas de realizar login\n  next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET,\n    scope: 'read:user' //Operação ao logar \"ler usuário\"\n\n  })],\n  callbacks: {\n    //São \"middlewares\"\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.If( //Faz uma verificação if obviamente\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Not( //Verificação negativa\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Exists( //Verific se existe\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match( // significa que vai buscar um baseado em uma query\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('user_by_email'), //query que deve ser usada\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(user.email) //deve comparar com isso nas collections\n        ))), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Collection('users'), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get( //Caso exista ele vai dar um get nesse usuario\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(user.email)))));\n        return true;\n      } catch (error) {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz83MmNmIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJ1c2VyIiwiYWNjb3VudCIsInByb2ZpbGUiLCJlbWFpbCIsImZhdW5hIiwicSIsImRhdGEiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLCtEQUFlQSxnREFBUSxDQUFDO0FBQ3BCQyxXQUFTLEVBQUUsQ0FBRTtBQUNUQyxtRUFBQSxDQUFpQjtBQUNiQyxZQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFEVDtBQUViQyxnQkFBWSxFQUFFSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUcsb0JBRmI7QUFHYkMsU0FBSyxFQUFFLFdBSE0sQ0FHTTs7QUFITixHQUFqQixDQURPLENBRFM7QUFRcEJDLFdBQVMsRUFBRTtBQUFFO0FBQ1QsVUFBTUMsTUFBTixDQUFhQyxJQUFiLEVBQW1CQyxPQUFuQixFQUE0QkMsT0FBNUIsRUFBb0M7QUFDaEMsWUFBTTtBQUFFQztBQUFGLFVBQVlILElBQWxCOztBQUVBLFVBQUk7QUFDQSxjQUFNSSx3REFBQSxDQUNGQyw2Q0FBQSxFQUFNO0FBQ0ZBLHNEQUFBLEVBQU87QUFDSEEseURBQUEsRUFBVTtBQUNOQSx3REFBQSxFQUFTO0FBQ0xBLHdEQUFBLENBQVEsZUFBUixDQURKLEVBQzhCO0FBQzFCQSwyREFBQSxDQUFXTCxJQUFJLENBQUNHLEtBQWhCLENBRkosQ0FFMkI7QUFGM0IsU0FESixDQURKLENBREosRUFTSUUsaURBQUEsQ0FDSUEscURBQUEsQ0FBYSxPQUFiLENBREosRUFFSTtBQUFFQyxjQUFJLEVBQUU7QUFBRUg7QUFBRjtBQUFSLFNBRkosQ0FUSixFQWFJRSw4Q0FBQSxFQUFPO0FBQ0hBLHdEQUFBLENBQ0lBLGdEQUFBLENBQVEsZUFBUixDQURKLEVBRUlBLG1EQUFBLENBQVdMLElBQUksQ0FBQ0csS0FBaEIsQ0FGSixDQURKLENBYkosQ0FERSxDQUFOO0FBc0JBLGVBQU8sSUFBUDtBQUNILE9BeEJELENBd0JFLE9BQU9JLEtBQVAsRUFBYztBQUNaLGVBQU8sS0FBUDtBQUNIO0FBRUo7O0FBaENNO0FBUlMsQ0FBRCxDQUF2QiIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMnO1xuaW1wb3J0IHsgcXVlcnkgYXMgcSB9IGZyb20gJ2ZhdW5hZGInO1xuXG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2ZhdW5hJztcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoeyBcbiAgICBwcm92aWRlcnM6IFsgLy9Gb3JtYXMgZGUgcmVhbGl6YXIgbG9naW5cbiAgICAgICAgUHJvdmlkZXJzLkdpdEh1Yih7XG4gICAgICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICAgICAgICBzY29wZTogJ3JlYWQ6dXNlcicgLy9PcGVyYcOnw6NvIGFvIGxvZ2FyIFwibGVyIHVzdcOhcmlvXCJcbiAgICAgICAgfSksXG4gICAgXSxcbiAgICBjYWxsYmFja3M6IHsgLy9Tw6NvIFwibWlkZGxld2FyZXNcIlxuICAgICAgICBhc3luYyBzaWduSW4odXNlciwgYWNjb3VudCwgcHJvZmlsZSl7XG4gICAgICAgICAgICBjb25zdCB7IGVtYWlsIH0gPSB1c2VyO1xuXG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgICAgICAgICAgICAgICBxLklmKCAvL0ZheiB1bWEgdmVyaWZpY2HDp8OjbyBpZiBvYnZpYW1lbnRlXG4gICAgICAgICAgICAgICAgICAgICAgICBxLk5vdCggLy9WZXJpZmljYcOnw6NvIG5lZ2F0aXZhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5FeGlzdHMoIC8vVmVyaWZpYyBzZSBleGlzdGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5NYXRjaCggLy8gc2lnbmlmaWNhIHF1ZSB2YWkgYnVzY2FyIHVtIGJhc2VhZG8gZW0gdW1hIHF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksIC8vcXVlcnkgcXVlIGRldmUgc2VyIHVzYWRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpIC8vZGV2ZSBjb21wYXJhciBjb20gaXNzbyBuYXMgY29sbGVjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICAgXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgcS5DcmVhdGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5Db2xsZWN0aW9uKCd1c2VycycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgZGF0YTogeyBlbWFpbCB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHEuR2V0KCAvL0Nhc28gZXhpc3RhIGVsZSB2YWkgZGFyIHVtIGdldCBuZXNzZSB1c3VhcmlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLkNhc2Vmb2xkKHVzZXIuZW1haWwpIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxufSkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": function() { return /* binding */ fauna; }\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_SECRET\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX1NFQ1JFVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsMkNBQUosQ0FBVztBQUM1QkMsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEUSxDQUFYLENBQWQiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJztcblxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX1NFQ1JFVFxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

/***/ }),

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("faunadb");;

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth");;

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/providers");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();