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
exports.id = "pages/api/webhooks";
exports.ids = ["pages/api/webhooks"];
exports.modules = {

/***/ "./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n/* eslint-disable import/no-anonymous-default-export */\n\n\nasync function buffer(readable) {\n  const chunks = [];\n\n  for await (const chunk of readable) {\n    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);\n  }\n\n  return Buffer.concat(chunks);\n}\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nconst relevantEvents = new Set(['checkout.session.completed']);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const buf = await buffer(req);\n    const secret = req.headers['stripe-signature'];\n    let event;\n\n    try {\n      event = _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);\n    } catch (error) {\n      return res.status(400).send(`webhook error ${error.message}`);\n    }\n\n    const type = event.type;\n\n    if (relevantEvents.has(type)) {\n      console.log('Evento recebido gatinha: ', event);\n    }\n\n    res.json({\n      received: true\n    });\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method not allowed');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzPzUyOWYiXSwibmFtZXMiOlsiYnVmZmVyIiwicmVhZGFibGUiLCJjaHVua3MiLCJjaHVuayIsInB1c2giLCJCdWZmZXIiLCJmcm9tIiwiY29uY2F0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlbGV2YW50RXZlbnRzIiwiU2V0IiwicmVxIiwicmVzIiwibWV0aG9kIiwiYnVmIiwic2VjcmV0IiwiaGVhZGVycyIsImV2ZW50Iiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9XRUJIT09LX1NFQ1JFVCIsImVycm9yIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJ0eXBlIiwiaGFzIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJyZWNlaXZlZCIsInNldEhlYWRlciIsImVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUlBOztBQUVBLGVBQWVBLE1BQWYsQ0FBc0JDLFFBQXRCLEVBQXdDO0FBQ3BDLFFBQU1DLE1BQU0sR0FBRyxFQUFmOztBQUVBLGFBQVcsTUFBTUMsS0FBakIsSUFBMEJGLFFBQTFCLEVBQW1DO0FBQy9CQyxVQUFNLENBQUNFLElBQVAsQ0FDSSxPQUFPRCxLQUFQLEtBQWlCLFFBQWpCLEdBQTRCRSxNQUFNLENBQUNDLElBQVAsQ0FBWUgsS0FBWixDQUE1QixHQUFpREEsS0FEckQ7QUFHSDs7QUFFRCxTQUFPRSxNQUFNLENBQUNFLE1BQVAsQ0FBY0wsTUFBZCxDQUFQO0FBQ0g7O0FBRU0sTUFBTU0sTUFBTSxHQUFHO0FBQ2xCQyxLQUFHLEVBQUU7QUFDREMsY0FBVSxFQUFFO0FBRFg7QUFEYSxDQUFmO0FBTVAsTUFBTUMsY0FBYyxHQUFHLElBQUlDLEdBQUosQ0FBUSxDQUMzQiw0QkFEMkIsQ0FBUixDQUF2QjtBQUlBLCtEQUFlLE9BQU9DLEdBQVAsRUFBNEJDLEdBQTVCLEtBQW1EO0FBQzlELE1BQUdELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQWxCLEVBQXlCO0FBQ3JCLFVBQU1DLEdBQUcsR0FBRyxNQUFNaEIsTUFBTSxDQUFDYSxHQUFELENBQXhCO0FBQ0EsVUFBTUksTUFBTSxHQUFHSixHQUFHLENBQUNLLE9BQUosQ0FBWSxrQkFBWixDQUFmO0FBRUEsUUFBSUMsS0FBSjs7QUFFQSxRQUFJO0FBQ0FBLFdBQUssR0FBR0MsNEVBQUEsQ0FBK0JKLEdBQS9CLEVBQW9DQyxNQUFwQyxFQUE0Q0ksT0FBTyxDQUFDQyxHQUFSLENBQVlDLHFCQUF4RCxDQUFSO0FBQ0gsS0FGRCxDQUVFLE9BQU9DLEtBQVAsRUFBYztBQUNaLGFBQU9WLEdBQUcsQ0FBQ1csTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXNCLGlCQUFnQkYsS0FBSyxDQUFDRyxPQUFRLEVBQXBELENBQVA7QUFDSDs7QUFFRCxVQUFNQyxJQUFJLEdBQUdULEtBQUssQ0FBQ1MsSUFBbkI7O0FBRUEsUUFBR2pCLGNBQWMsQ0FBQ2tCLEdBQWYsQ0FBbUJELElBQW5CLENBQUgsRUFBNEI7QUFDeEJFLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLDJCQUFaLEVBQXlDWixLQUF6QztBQUNIOztBQUVETCxPQUFHLENBQUNrQixJQUFKLENBQVM7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBVDtBQUNILEdBbkJELE1BbUJLO0FBQ0RuQixPQUFHLENBQUNvQixTQUFKLENBQWMsT0FBZCxFQUF1QixNQUF2QjtBQUNBcEIsT0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQlUsR0FBaEIsQ0FBb0Isb0JBQXBCO0FBQ0g7QUFDSixDQXhCRCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvd2ViaG9va3MudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tYW5vbnltb3VzLWRlZmF1bHQtZXhwb3J0ICovXG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCB7IFJlYWRhYmxlIH0gZnJvbSAnc3RyZWFtJztcbmltcG9ydCBTdHJpcGUgZnJvbSBcInN0cmlwZVwiO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3N0cmlwZVwiO1xuXG5hc3luYyBmdW5jdGlvbiBidWZmZXIocmVhZGFibGU6UmVhZGFibGUpe1xuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xuXG4gICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiByZWFkYWJsZSl7XG4gICAgICAgIGNodW5rcy5wdXNoKFxuICAgICAgICAgICAgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJyA/IEJ1ZmZlci5mcm9tKGNodW5rKSA6IGNodW5rLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBCdWZmZXIuY29uY2F0KGNodW5rcyk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpOiB7XG4gICAgICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICAgIH1cbn1cblxuY29uc3QgcmVsZXZhbnRFdmVudHMgPSBuZXcgU2V0KFtcbiAgICAnY2hlY2tvdXQuc2Vzc2lvbi5jb21wbGV0ZWQnXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpPT57XG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcbiAgICAgICAgY29uc3QgYnVmID0gYXdhaXQgYnVmZmVyKHJlcSk7XG4gICAgICAgIGNvbnN0IHNlY3JldCA9IHJlcS5oZWFkZXJzWydzdHJpcGUtc2lnbmF0dXJlJ107XG4gICAgICAgIFxuICAgICAgICBsZXQgZXZlbnQ6IFN0cmlwZS5FdmVudDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXZlbnQgPSBzdHJpcGUud2ViaG9va3MuY29uc3RydWN0RXZlbnQoYnVmLCBzZWNyZXQsIHByb2Nlc3MuZW52LlNUUklQRV9XRUJIT09LX1NFQ1JFVCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoYHdlYmhvb2sgZXJyb3IgJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0eXBlID0gZXZlbnQudHlwZTtcblxuICAgICAgICBpZihyZWxldmFudEV2ZW50cy5oYXModHlwZSkpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0V2ZW50byByZWNlYmlkbyBnYXRpbmhhOiAnLCBldmVudCk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmVzLmpzb24oeyByZWNlaXZlZDogdHJ1ZX0pO1xuICAgIH1lbHNle1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/webhooks.ts\n");

/***/ }),

/***/ "./src/services/stripe.ts":
/*!********************************!*\
  !*** ./src/services/stripe.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"stripe\": function() { return /* binding */ stripe; }\n/* harmony export */ });\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! stripe */ \"stripe\");\n/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst stripe = new (stripe__WEBPACK_IMPORTED_MODULE_1___default())(process.env.STRIPE_KEY, {\n  apiVersion: '2020-08-27',\n  appInfo: {\n    name: 'Ignews',\n    version: _package_json__WEBPACK_IMPORTED_MODULE_0__.version\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvc3RyaXBlLnRzP2Q5NjgiXSwibmFtZXMiOlsic3RyaXBlIiwiU3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9LRVkiLCJhcGlWZXJzaW9uIiwiYXBwSW5mbyIsIm5hbWUiLCJ2ZXJzaW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUVPLE1BQU1BLE1BQU0sR0FBRyxJQUFJQywrQ0FBSixDQUNsQkMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBRE0sRUFFbEI7QUFDSUMsWUFBVSxFQUFFLFlBRGhCO0FBRUlDLFNBQU8sRUFBRTtBQUNMQyxRQUFJLEVBQUUsUUFERDtBQUVMQyxXQUFPQTtBQUZGO0FBRmIsQ0FGa0IsQ0FBZiIsImZpbGUiOiIuL3NyYy9zZXJ2aWNlcy9zdHJpcGUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2ZXJzaW9uIH0gZnJvbSAnLi4vLi4vcGFja2FnZS5qc29uJztcblxuaW1wb3J0IFN0cmlwZSBmcm9tICdzdHJpcGUnO1xuXG5leHBvcnQgY29uc3Qgc3RyaXBlID0gbmV3IFN0cmlwZShcbiAgICBwcm9jZXNzLmVudi5TVFJJUEVfS0VZLFxuICAgIHtcbiAgICAgICAgYXBpVmVyc2lvbjogJzIwMjAtMDgtMjcnLFxuICAgICAgICBhcHBJbmZvOiB7XG4gICAgICAgICAgICBuYW1lOiAnSWduZXdzJyxcbiAgICAgICAgICAgIHZlcnNpb25cbiAgICAgICAgfVxuICAgIH1cbik7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/stripe.ts\n");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"ignews","version":"0.1.0","private":true,"scripts":{"dev":"next dev","build":"next build","start":"next start","lint":"next lint"},"dependencies":{"@stripe/stripe-js":"^1.16.0","axios":"^0.21.1","faunadb":"^4.3.0","next":"11.0.1","next-auth":"^3.27.3","react":"17.0.2","react-dom":"17.0.2","react-icons":"^4.2.0","sass":"^1.35.2","stripe":"^8.165.0"},"devDependencies":{"@types/node":"^16.4.0","@types/react":"^17.0.14","eslint":"7.31.0","eslint-config-next":"11.0.1","typescript":"^4.3.5"}}');

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/webhooks.ts"));
module.exports = __webpack_exports__;

})();