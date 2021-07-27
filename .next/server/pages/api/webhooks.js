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

/***/ "./src/pages/api/_lib/manageSubscription.ts":
/*!**************************************************!*\
  !*** ./src/pages/api/_lib/manageSubscription.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"saveSubscription\": function() { return /* binding */ saveSubscription; }\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/fauna */ \"./src/services/fauna.ts\");\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/stripe */ \"./src/services/stripe.ts\");\n\n\n\nasync function saveSubscription(subscriptionId, customerId) {\n  const userRef = await _services_fauna__WEBPACK_IMPORTED_MODULE_1__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Select(\"ref\", faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Index('user_by_stripe_customer_id'), customerId))));\n  const subscription = await _services_stripe__WEBPACK_IMPORTED_MODULE_2__.stripe.subscriptions.retrieve(subscriptionId);\n  const subscriptionData = {\n    id: subscription.id,\n    userId: userRef,\n    status: subscription.status,\n    price_id: subscription.items.data[0].price.id\n  };\n  await _services_fauna__WEBPACK_IMPORTED_MODULE_1__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Create(faunadb__WEBPACK_IMPORTED_MODULE_0__.query.Collection('subscriptions'), {\n    data: subscriptionData\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL19saWIvbWFuYWdlU3Vic2NyaXB0aW9uLnRzP2YzMDgiXSwibmFtZXMiOlsic2F2ZVN1YnNjcmlwdGlvbiIsInN1YnNjcmlwdGlvbklkIiwiY3VzdG9tZXJJZCIsInVzZXJSZWYiLCJmYXVuYSIsInEiLCJzdWJzY3JpcHRpb24iLCJzdHJpcGUiLCJzdWJzY3JpcHRpb25EYXRhIiwiaWQiLCJ1c2VySWQiLCJzdGF0dXMiLCJwcmljZV9pZCIsIml0ZW1zIiwiZGF0YSIsInByaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVPLGVBQWVBLGdCQUFmLENBQWlDQyxjQUFqQyxFQUF5REMsVUFBekQsRUFDSDtBQUNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNQyx3REFBQSxDQUNwQkMsaURBQUEsQ0FDRSxLQURGLEVBRUVBLDhDQUFBLENBQ0VBLGdEQUFBLENBQ0VBLGdEQUFBLENBQVEsNEJBQVIsQ0FERixFQUVFSCxVQUZGLENBREYsQ0FGRixDQURvQixDQUF0QjtBQVlBLFFBQU1JLFlBQVksR0FBRyxNQUFNQywyRUFBQSxDQUE4Qk4sY0FBOUIsQ0FBM0I7QUFFQSxRQUFNTyxnQkFBZ0IsR0FBRztBQUN2QkMsTUFBRSxFQUFFSCxZQUFZLENBQUNHLEVBRE07QUFFdkJDLFVBQU0sRUFBRVAsT0FGZTtBQUd2QlEsVUFBTSxFQUFFTCxZQUFZLENBQUNLLE1BSEU7QUFJdkJDLFlBQVEsRUFBRU4sWUFBWSxDQUFDTyxLQUFiLENBQW1CQyxJQUFuQixDQUF3QixDQUF4QixFQUEyQkMsS0FBM0IsQ0FBaUNOO0FBSnBCLEdBQXpCO0FBT0UsUUFBTUwsd0RBQUEsQ0FDSkMsaURBQUEsQ0FDRUEscURBQUEsQ0FBYSxlQUFiLENBREYsRUFFRTtBQUFFUyxRQUFJLEVBQUVOO0FBQVIsR0FGRixDQURJLENBQU47QUFPTCIsImZpbGUiOiIuL3NyYy9wYWdlcy9hcGkvX2xpYi9tYW5hZ2VTdWJzY3JpcHRpb24udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBxdWVyeSBhcyBxIH0gZnJvbSAnZmF1bmFkYic7XG5pbXBvcnQgeyBmYXVuYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9mYXVuYVwiO1xuaW1wb3J0IHsgc3RyaXBlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvc3RyaXBlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVTdWJzY3JpcHRpb24oIHN1YnNjcmlwdGlvbklkOiBzdHJpbmcsIGN1c3RvbWVySWQ6IHN0cmluZyxcbiAgKSB7XG4gICAgY29uc3QgdXNlclJlZiA9IGF3YWl0IGZhdW5hLnF1ZXJ5KFxuICAgICAgcS5TZWxlY3QoXG4gICAgICAgIFwicmVmXCIsXG4gICAgICAgIHEuR2V0KFxuICAgICAgICAgIHEuTWF0Y2goXG4gICAgICAgICAgICBxLkluZGV4KCd1c2VyX2J5X3N0cmlwZV9jdXN0b21lcl9pZCcpLFxuICAgICAgICAgICAgY3VzdG9tZXJJZFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgICk7XG4gIFxuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IGF3YWl0IHN0cmlwZS5zdWJzY3JpcHRpb25zLnJldHJpZXZlKHN1YnNjcmlwdGlvbklkKVxuXG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uRGF0YSA9IHtcbiAgICAgIGlkOiBzdWJzY3JpcHRpb24uaWQsXG4gICAgICB1c2VySWQ6IHVzZXJSZWYsXG4gICAgICBzdGF0dXM6IHN1YnNjcmlwdGlvbi5zdGF0dXMsXG4gICAgICBwcmljZV9pZDogc3Vic2NyaXB0aW9uLml0ZW1zLmRhdGFbMF0ucHJpY2UuaWQsXG4gICAgfVxuXG4gICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgcS5DcmVhdGUoXG4gICAgICAgICAgcS5Db2xsZWN0aW9uKCdzdWJzY3JpcHRpb25zJyksXG4gICAgICAgICAgeyBkYXRhOiBzdWJzY3JpcHRpb25EYXRhIH1cbiAgICAgICAgKVxuICAgICAgKVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/_lib/manageSubscription.ts\n");

/***/ }),

/***/ "./src/pages/api/webhooks.ts":
/*!***********************************!*\
  !*** ./src/pages/api/webhooks.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": function() { return /* binding */ config; }\n/* harmony export */ });\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var _lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/manageSubscription */ \"./src/pages/api/_lib/manageSubscription.ts\");\n/* eslint-disable import/no-anonymous-default-export */\n\n\n\nasync function buffer(readable) {\n  const chunks = [];\n\n  for await (const chunk of readable) {\n    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);\n  }\n\n  return Buffer.concat(chunks);\n}\n\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};\nconst relevantEvents = new Set(['checkout.session.completed']);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  if (req.method === 'POST') {\n    const buf = await buffer(req);\n    const secret = req.headers['stripe-signature'];\n    let event;\n\n    try {\n      event = _services_stripe__WEBPACK_IMPORTED_MODULE_0__.stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBHOOK_SECRET);\n    } catch (error) {\n      return res.status(400).send(`webhook error ${error.message}`);\n    }\n\n    const type = event.type;\n\n    if (relevantEvents.has(type)) {\n      try {\n        switch (type) {\n          case 'checkout.session.completed':\n            const checkoutSession = event.data.object;\n            await (0,_lib_manageSubscription__WEBPACK_IMPORTED_MODULE_1__.saveSubscription)(checkoutSession.subscription.toString(), checkoutSession.customer.toString());\n            break;\n\n          default:\n            throw new Error('Unhandled event.');\n        }\n      } catch (err) {\n        return res.json({\n          error: 'Webhook handler failed.'\n        });\n      }\n    }\n\n    res.json({\n      received: true\n    });\n  } else {\n    res.setHeader('Allow', 'POST');\n    res.status(405).end('Method not allowed');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzPzUyOWYiXSwibmFtZXMiOlsiYnVmZmVyIiwicmVhZGFibGUiLCJjaHVua3MiLCJjaHVuayIsInB1c2giLCJCdWZmZXIiLCJmcm9tIiwiY29uY2F0IiwiY29uZmlnIiwiYXBpIiwiYm9keVBhcnNlciIsInJlbGV2YW50RXZlbnRzIiwiU2V0IiwicmVxIiwicmVzIiwibWV0aG9kIiwiYnVmIiwic2VjcmV0IiwiaGVhZGVycyIsImV2ZW50Iiwic3RyaXBlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9XRUJIT09LX1NFQ1JFVCIsImVycm9yIiwic3RhdHVzIiwic2VuZCIsIm1lc3NhZ2UiLCJ0eXBlIiwiaGFzIiwiY2hlY2tvdXRTZXNzaW9uIiwiZGF0YSIsIm9iamVjdCIsInNhdmVTdWJzY3JpcHRpb24iLCJzdWJzY3JpcHRpb24iLCJ0b1N0cmluZyIsImN1c3RvbWVyIiwiRXJyb3IiLCJlcnIiLCJqc29uIiwicmVjZWl2ZWQiLCJzZXRIZWFkZXIiLCJlbmQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBSUE7QUFDQTs7QUFFQSxlQUFlQSxNQUFmLENBQXNCQyxRQUF0QixFQUF3QztBQUNwQyxRQUFNQyxNQUFNLEdBQUcsRUFBZjs7QUFFQSxhQUFXLE1BQU1DLEtBQWpCLElBQTBCRixRQUExQixFQUFtQztBQUMvQkMsVUFBTSxDQUFDRSxJQUFQLENBQ0ksT0FBT0QsS0FBUCxLQUFpQixRQUFqQixHQUE0QkUsTUFBTSxDQUFDQyxJQUFQLENBQVlILEtBQVosQ0FBNUIsR0FBaURBLEtBRHJEO0FBR0g7O0FBRUQsU0FBT0UsTUFBTSxDQUFDRSxNQUFQLENBQWNMLE1BQWQsQ0FBUDtBQUNIOztBQUVNLE1BQU1NLE1BQU0sR0FBRztBQUNsQkMsS0FBRyxFQUFFO0FBQ0RDLGNBQVUsRUFBRTtBQURYO0FBRGEsQ0FBZjtBQU1QLE1BQU1DLGNBQWMsR0FBRyxJQUFJQyxHQUFKLENBQVEsQ0FDM0IsNEJBRDJCLENBQVIsQ0FBdkI7QUFJQSwrREFBZSxPQUFPQyxHQUFQLEVBQTRCQyxHQUE1QixLQUFtRDtBQUM5RCxNQUFHRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFsQixFQUF5QjtBQUNyQixVQUFNQyxHQUFHLEdBQUcsTUFBTWhCLE1BQU0sQ0FBQ2EsR0FBRCxDQUF4QjtBQUNBLFVBQU1JLE1BQU0sR0FBR0osR0FBRyxDQUFDSyxPQUFKLENBQVksa0JBQVosQ0FBZjtBQUVBLFFBQUlDLEtBQUo7O0FBRUEsUUFBSTtBQUNBQSxXQUFLLEdBQUdDLDRFQUFBLENBQStCSixHQUEvQixFQUFvQ0MsTUFBcEMsRUFBNENJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxxQkFBeEQsQ0FBUjtBQUNILEtBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDWixhQUFPVixHQUFHLENBQUNXLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFzQixpQkFBZ0JGLEtBQUssQ0FBQ0csT0FBUSxFQUFwRCxDQUFQO0FBQ0g7O0FBRUQsVUFBTUMsSUFBSSxHQUFHVCxLQUFLLENBQUNTLElBQW5COztBQUVBLFFBQUdqQixjQUFjLENBQUNrQixHQUFmLENBQW1CRCxJQUFuQixDQUFILEVBQTRCO0FBQ3hCLFVBQUk7QUFDQSxnQkFBT0EsSUFBUDtBQUNJLGVBQUssNEJBQUw7QUFDSSxrQkFBTUUsZUFBZSxHQUFHWCxLQUFLLENBQUNZLElBQU4sQ0FBV0MsTUFBbkM7QUFDQSxrQkFBTUMseUVBQWdCLENBQ2xCSCxlQUFlLENBQUNJLFlBQWhCLENBQTZCQyxRQUE3QixFQURrQixFQUVsQkwsZUFBZSxDQUFDTSxRQUFoQixDQUF5QkQsUUFBekIsRUFGa0IsQ0FBdEI7QUFLQTs7QUFDSjtBQUNJLGtCQUFNLElBQUlFLEtBQUosQ0FBVSxrQkFBVixDQUFOO0FBVlI7QUFZSCxPQWJELENBYUUsT0FBT0MsR0FBUCxFQUFZO0FBQ1YsZUFBT3hCLEdBQUcsQ0FBQ3lCLElBQUosQ0FBUztBQUFFZixlQUFLLEVBQUU7QUFBVCxTQUFULENBQVA7QUFDSDtBQUNKOztBQUVEVixPQUFHLENBQUN5QixJQUFKLENBQVM7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBVDtBQUNILEdBbENELE1Ba0NLO0FBQ0QxQixPQUFHLENBQUMyQixTQUFKLENBQWMsT0FBZCxFQUF1QixNQUF2QjtBQUNBM0IsT0FBRyxDQUFDVyxNQUFKLENBQVcsR0FBWCxFQUFnQmlCLEdBQWhCLENBQW9CLG9CQUFwQjtBQUNIO0FBQ0osQ0F2Q0QiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3dlYmhvb2tzLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBSZWFkYWJsZSB9IGZyb20gJ3N0cmVhbSc7XG5pbXBvcnQgU3RyaXBlIGZyb20gXCJzdHJpcGVcIjtcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zdHJpcGVcIjtcbmltcG9ydCB7IHNhdmVTdWJzY3JpcHRpb24gfSBmcm9tIFwiLi9fbGliL21hbmFnZVN1YnNjcmlwdGlvblwiO1xuXG5hc3luYyBmdW5jdGlvbiBidWZmZXIocmVhZGFibGU6UmVhZGFibGUpe1xuICAgIGNvbnN0IGNodW5rcyA9IFtdO1xuXG4gICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiByZWFkYWJsZSl7XG4gICAgICAgIGNodW5rcy5wdXNoKFxuICAgICAgICAgICAgdHlwZW9mIGNodW5rID09PSAnc3RyaW5nJyA/IEJ1ZmZlci5mcm9tKGNodW5rKSA6IGNodW5rLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBCdWZmZXIuY29uY2F0KGNodW5rcyk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gICAgYXBpOiB7XG4gICAgICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICAgIH1cbn1cblxuY29uc3QgcmVsZXZhbnRFdmVudHMgPSBuZXcgU2V0KFtcbiAgICAnY2hlY2tvdXQuc2Vzc2lvbi5jb21wbGV0ZWQnXG5dKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpPT57XG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKXtcbiAgICAgICAgY29uc3QgYnVmID0gYXdhaXQgYnVmZmVyKHJlcSk7XG4gICAgICAgIGNvbnN0IHNlY3JldCA9IHJlcS5oZWFkZXJzWydzdHJpcGUtc2lnbmF0dXJlJ107XG4gICAgICAgIFxuICAgICAgICBsZXQgZXZlbnQ6IFN0cmlwZS5FdmVudDtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXZlbnQgPSBzdHJpcGUud2ViaG9va3MuY29uc3RydWN0RXZlbnQoYnVmLCBzZWNyZXQsIHByb2Nlc3MuZW52LlNUUklQRV9XRUJIT09LX1NFQ1JFVCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDApLnNlbmQoYHdlYmhvb2sgZXJyb3IgJHtlcnJvci5tZXNzYWdlfWApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0eXBlID0gZXZlbnQudHlwZTtcblxuICAgICAgICBpZihyZWxldmFudEV2ZW50cy5oYXModHlwZSkpe1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2godHlwZSl7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrb3V0LnNlc3Npb24uY29tcGxldGVkJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrb3V0U2Vzc2lvbiA9IGV2ZW50LmRhdGEub2JqZWN0IGFzIFN0cmlwZS5DaGVja291dC5TZXNzaW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2F2ZVN1YnNjcmlwdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja291dFNlc3Npb24uc3Vic2NyaXB0aW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tvdXRTZXNzaW9uLmN1c3RvbWVyLnRvU3RyaW5nKClcbiAgICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBldmVudC4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7IGVycm9yOiAnV2ViaG9vayBoYW5kbGVyIGZhaWxlZC4nIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmVzLmpzb24oeyByZWNlaXZlZDogdHJ1ZX0pO1xuICAgIH1lbHNle1xuICAgICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsICdQT1NUJyk7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoJ01ldGhvZCBub3QgYWxsb3dlZCcpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/api/webhooks.ts\n");

/***/ }),

/***/ "./src/services/fauna.ts":
/*!*******************************!*\
  !*** ./src/services/fauna.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fauna\": function() { return /* binding */ fauna; }\n/* harmony export */ });\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst fauna = new faunadb__WEBPACK_IMPORTED_MODULE_0__.Client({\n  secret: process.env.FAUNADB_SECRET\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvc2VydmljZXMvZmF1bmEudHM/OGY0ZCJdLCJuYW1lcyI6WyJmYXVuYSIsIkNsaWVudCIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJGQVVOQURCX1NFQ1JFVCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFTyxNQUFNQSxLQUFLLEdBQUcsSUFBSUMsMkNBQUosQ0FBVztBQUM1QkMsUUFBTSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUM7QUFEUSxDQUFYLENBQWQiLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvZmF1bmEudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdmYXVuYWRiJztcblxuZXhwb3J0IGNvbnN0IGZhdW5hID0gbmV3IENsaWVudCh7XG4gICAgc2VjcmV0OiBwcm9jZXNzLmVudi5GQVVOQURCX1NFQ1JFVFxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/fauna.ts\n");

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

/***/ "faunadb":
/*!**************************!*\
  !*** external "faunadb" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("faunadb");;

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