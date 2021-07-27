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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  providers: [//Formas de realizar login\n  next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().GitHub({\n    clientId: process.env.GITHUB_CLIENT_ID,\n    clientSecret: process.env.GITHUB_CLIENT_SECRET,\n    scope: 'read:user' //Operação ao logar \"ler usuário\"\n\n  })],\n  callbacks: {\n    //São \"middlewares\"\n    async session(session) {\n      //useSession() é nativo, mas aqui podemos modifica-lo\n      try {\n        const userActiveSubscription = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Intersection([faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('subscription_by_user_ref'), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(session.user.email))))), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('subscription_by_status'), \"active\")])));\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: userActiveSubscription\n        });\n      } catch (error) {\n        return _objectSpread(_objectSpread({}, session), {}, {\n          activeSubscription: null\n        });\n      }\n    },\n\n    async signIn(user, account, profile) {\n      const {\n        email\n      } = user;\n\n      try {\n        await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.If( //Faz uma verificação if obviamente\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Not( //Verificação negativa\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Exists( //Verific se existe\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match( // significa que vai buscar um baseado em uma query\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('user_by_email'), //query que deve ser usada\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(user.email) //deve comparar com isso nas collections\n        ))), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Collection('users'), {\n          data: {\n            email\n          }\n        }), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get( //Caso exista ele vai dar um get nesse usuario\n        faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(user.email)))));\n        return true;\n      } catch (error) {\n        return false;\n      }\n    }\n\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz83MmNmIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwicHJvdmlkZXJzIiwiUHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJjYWxsYmFja3MiLCJzZXNzaW9uIiwidXNlckFjdGl2ZVN1YnNjcmlwdGlvbiIsImZhdW5hIiwicSIsInVzZXIiLCJlbWFpbCIsImFjdGl2ZVN1YnNjcmlwdGlvbiIsImVycm9yIiwic2lnbkluIiwiYWNjb3VudCIsInByb2ZpbGUiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0EsK0RBQWVBLGdEQUFRLENBQUM7QUFDcEJDLFdBQVMsRUFBRSxDQUFFO0FBQ1RDLG1FQUFBLENBQWlCO0FBQ2JDLFlBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGdCQURUO0FBRWJDLGdCQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxvQkFGYjtBQUdiQyxTQUFLLEVBQUUsV0FITSxDQUdNOztBQUhOLEdBQWpCLENBRE8sQ0FEUztBQVFwQkMsV0FBUyxFQUFFO0FBQUU7QUFDVCxVQUFNQyxPQUFOLENBQWNBLE9BQWQsRUFBc0I7QUFBRTtBQUNwQixVQUFJO0FBQ0EsY0FBTUMsc0JBQXNCLEdBQUcsTUFBTUMsd0RBQUEsQ0FDakNDLDhDQUFBLENBQ0lBLHVEQUFBLENBQWUsQ0FDWEEsZ0RBQUEsQ0FDSUEsZ0RBQUEsQ0FBUSwwQkFBUixDQURKLEVBRUlBLGlEQUFBLENBQ0ksS0FESixFQUVJQSw4Q0FBQSxDQUNJQSxnREFBQSxDQUNJQSxnREFBQSxDQUFRLGVBQVIsQ0FESixFQUVJQSxtREFBQSxDQUFXSCxPQUFPLENBQUNJLElBQVIsQ0FBYUMsS0FBeEIsQ0FGSixDQURKLENBRkosQ0FGSixDQURXLEVBYVhGLGdEQUFBLENBQ0lBLGdEQUFBLENBQVEsd0JBQVIsQ0FESixFQUVJLFFBRkosQ0FiVyxDQUFmLENBREosQ0FEaUMsQ0FBckM7QUF1QkEsK0NBQ09ILE9BRFA7QUFFSU0sNEJBQWtCLEVBQUVMO0FBRnhCO0FBSUgsT0E1QkQsQ0E0QkUsT0FBT00sS0FBUCxFQUFjO0FBQ1osK0NBQ09QLE9BRFA7QUFFSU0sNEJBQWtCLEVBQUU7QUFGeEI7QUFJSDtBQUNKLEtBcENNOztBQXFDUCxVQUFNRSxNQUFOLENBQWFKLElBQWIsRUFBbUJLLE9BQW5CLEVBQTRCQyxPQUE1QixFQUFvQztBQUNoQyxZQUFNO0FBQUVMO0FBQUYsVUFBWUQsSUFBbEI7O0FBRUEsVUFBSTtBQUNBLGNBQU1GLHdEQUFBLENBQ0ZDLDZDQUFBLEVBQU07QUFDRkEsc0RBQUEsRUFBTztBQUNIQSx5REFBQSxFQUFVO0FBQ05BLHdEQUFBLEVBQVM7QUFDTEEsd0RBQUEsQ0FBUSxlQUFSLENBREosRUFDOEI7QUFDMUJBLDJEQUFBLENBQVdDLElBQUksQ0FBQ0MsS0FBaEIsQ0FGSixDQUUyQjtBQUYzQixTQURKLENBREosQ0FESixFQVNJRixpREFBQSxDQUNJQSxxREFBQSxDQUFhLE9BQWIsQ0FESixFQUVJO0FBQUVRLGNBQUksRUFBRTtBQUFFTjtBQUFGO0FBQVIsU0FGSixDQVRKLEVBYUlGLDhDQUFBLEVBQU87QUFDSEEsd0RBQUEsQ0FDSUEsZ0RBQUEsQ0FBUSxlQUFSLENBREosRUFFSUEsbURBQUEsQ0FBV0MsSUFBSSxDQUFDQyxLQUFoQixDQUZKLENBREosQ0FiSixDQURFLENBQU47QUFzQkEsZUFBTyxJQUFQO0FBQ0gsT0F4QkQsQ0F3QkUsT0FBT0UsS0FBUCxFQUFjO0FBQ1osZUFBTyxLQUFQO0FBQ0g7QUFFSjs7QUFwRU07QUFSUyxDQUFELENBQXZCIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBQcm92aWRlcnMgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycyc7XG5pbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYic7XG5cbmltcG9ydCB7IGZhdW5hIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvZmF1bmEnO1xuaW1wb3J0IHsgc2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aCh7IFxuICAgIHByb3ZpZGVyczogWyAvL0Zvcm1hcyBkZSByZWFsaXphciBsb2dpblxuICAgICAgICBQcm92aWRlcnMuR2l0SHViKHtcbiAgICAgICAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgICAgIHNjb3BlOiAncmVhZDp1c2VyJyAvL09wZXJhw6fDo28gYW8gbG9nYXIgXCJsZXIgdXN1w6FyaW9cIlxuICAgICAgICB9KSxcbiAgICBdLFxuICAgIGNhbGxiYWNrczogeyAvL1PDo28gXCJtaWRkbGV3YXJlc1wiXG4gICAgICAgIGFzeW5jIHNlc3Npb24oc2Vzc2lvbil7IC8vdXNlU2Vzc2lvbigpIMOpIG5hdGl2bywgbWFzIGFxdWkgcG9kZW1vcyBtb2RpZmljYS1sb1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyQWN0aXZlU3Vic2NyaXB0aW9uID0gYXdhaXQgZmF1bmEucXVlcnkoXG4gICAgICAgICAgICAgICAgICAgIHEuR2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgcS5JbnRlcnNlY3Rpb24oW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3N1YnNjcmlwdGlvbl9ieV91c2VyX3JlZicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLlNlbGVjdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLkdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLk1hdGNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X2VtYWlsJyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQoc2Vzc2lvbi51c2VyLmVtYWlsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgnc3Vic2NyaXB0aW9uX2J5X3N0YXR1cycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICk7XG4gICAgXG4gICAgICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgICAgICAuLi5zZXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdWJzY3JpcHRpb246IHVzZXJBY3RpdmVTdWJzY3JpcHRpb25cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnNlc3Npb24sXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVN1YnNjcmlwdGlvbjogbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgc2lnbkluKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpe1xuICAgICAgICAgICAgY29uc3QgeyBlbWFpbCB9ID0gdXNlcjtcblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICAgICAgICAgICAgcS5JZiggLy9GYXogdW1hIHZlcmlmaWNhw6fDo28gaWYgb2J2aWFtZW50ZVxuICAgICAgICAgICAgICAgICAgICAgICAgcS5Ob3QoIC8vVmVyaWZpY2HDp8OjbyBuZWdhdGl2YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuRXhpc3RzKCAvL1ZlcmlmaWMgc2UgZXhpc3RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuTWF0Y2goIC8vIHNpZ25pZmljYSBxdWUgdmFpIGJ1c2NhciB1bSBiYXNlYWRvIGVtIHVtYSBxdWVyeVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLCAvL3F1ZXJ5IHF1ZSBkZXZlIHNlciB1c2FkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZCh1c2VyLmVtYWlsKSAvL2RldmUgY29tcGFyYXIgY29tIGlzc28gbmFzIGNvbGxlY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHEuQ3JlYXRlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuQ29sbGVjdGlvbigndXNlcnMnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGRhdGE6IHsgZW1haWwgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBxLkdldCggLy9DYXNvIGV4aXN0YSBlbGUgdmFpIGRhciB1bSBnZXQgbmVzc2UgdXN1YXJpb1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHEuSW5kZXgoJ3VzZXJfYnlfZW1haWwnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcS5DYXNlZm9sZCh1c2VyLmVtYWlsKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/auth/[...nextauth].ts\n");

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