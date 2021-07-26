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
exports.id = "pages/api/subscribe";
exports.ids = ["pages/api/subscribe"];
exports.modules = {

/***/ "./src/pages/api/subscribe.ts":
/*!************************************!*\
  !*** ./src/pages/api/subscribe.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/client */ \"next-auth/client\");\n/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_stripe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/stripe */ \"./src/services/stripe.ts\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faunadb */ \"faunadb\");\n/* harmony import */ var faunadb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faunadb__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_fauna__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/fauna */ \"./src/services/fauna.ts\");\n/* eslint-disable import/no-anonymous-default-export */\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (request, response) => {\n  if (request.method === 'POST') {\n    //Só aceita metodo post\n    const sessions = await (0,next_auth_client__WEBPACK_IMPORTED_MODULE_0__.getSession)({\n      req: request\n    }); //Pega o usuario logado\n\n    const user = await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query( //Query que busca um usuario no fauna pelo email\n    faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Get(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Match(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Index('user_by_email'), faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Casefold(sessions.user.email))));\n    let customerId = user.data.stripe_customer_id;\n\n    if (!customerId) {\n      const stripeCustomer = await _services_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.customers.create({\n        //Cria um customer no stripe\n        email: sessions.user.email\n      });\n      await _services_fauna__WEBPACK_IMPORTED_MODULE_3__.fauna.query(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Update(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Ref(faunadb__WEBPACK_IMPORTED_MODULE_2__.query.Collection('users'), user.ref.id), //Referencia do usuario\n      {\n        //Quais dados quer alterar?\n        data: {\n          stripe_customer_id: stripeCustomer.id\n        }\n      }));\n      customerId = stripeCustomer.id;\n    }\n\n    const stripeCheckoutSession = await _services_stripe__WEBPACK_IMPORTED_MODULE_1__.stripe.checkout.sessions.create({\n      customer: customerId,\n      //id do cliente\n      payment_method_types: ['card'],\n      billing_address_collection: 'required',\n      //endereço do entrega é obrigatório?\n      line_items: [//Itens colocados no carrinho\n      {\n        price: 'price_1JGNrCIxrY1DjMmonl0h94wH',\n        quantity: 1\n      } //idItem e quantidade\n      ],\n      mode: 'subscription',\n      allow_promotion_codes: true,\n      //pode usar cupom de desconto na compra?\n      success_url: process.env.STRIPE_SUCCESS_URL,\n      //Para onde enviar o usuario se ele comprar?\n      cancel_url: process.env.STRIPE_CANCEL_URL //Para onde enviar o usuario se ele enviar?\n\n    });\n    return response.status(200).json({\n      sessionsId: stripeCheckoutSession.id\n    });\n  } else {\n    response.setHeader('Allow', 'POST');\n    response.status(405).end('Method not allowed');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pZ25ld3MvLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cz81NWE1Il0sIm5hbWVzIjpbInJlcXVlc3QiLCJyZXNwb25zZSIsIm1ldGhvZCIsInNlc3Npb25zIiwiZ2V0U2Vzc2lvbiIsInJlcSIsInVzZXIiLCJmYXVuYSIsInEiLCJlbWFpbCIsImN1c3RvbWVySWQiLCJkYXRhIiwic3RyaXBlX2N1c3RvbWVyX2lkIiwic3RyaXBlQ3VzdG9tZXIiLCJzdHJpcGUiLCJyZWYiLCJpZCIsInN0cmlwZUNoZWNrb3V0U2Vzc2lvbiIsImN1c3RvbWVyIiwicGF5bWVudF9tZXRob2RfdHlwZXMiLCJiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbiIsImxpbmVfaXRlbXMiLCJwcmljZSIsInF1YW50aXR5IiwibW9kZSIsImFsbG93X3Byb21vdGlvbl9jb2RlcyIsInN1Y2Nlc3NfdXJsIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TVUNDRVNTX1VSTCIsImNhbmNlbF91cmwiLCJTVFJJUEVfQ0FOQ0VMX1VSTCIsInN0YXR1cyIsImpzb24iLCJzZXNzaW9uc0lkIiwic2V0SGVhZGVyIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQVdBLCtEQUFlLE9BQU9BLE9BQVAsRUFBZ0NDLFFBQWhDLEtBQTREO0FBQ3ZFLE1BQUdELE9BQU8sQ0FBQ0UsTUFBUixLQUFtQixNQUF0QixFQUE2QjtBQUFFO0FBQzNCLFVBQU1DLFFBQVEsR0FBRyxNQUFNQyw0REFBVSxDQUFDO0FBQUNDLFNBQUcsRUFBRUw7QUFBTixLQUFELENBQWpDLENBRHlCLENBQzBCOztBQUVuRCxVQUFNTSxJQUFJLEdBQUcsTUFBTUMsd0RBQUEsRUFBbUI7QUFDbENDLGtEQUFBLENBQ0lBLGdEQUFBLENBQ0lBLGdEQUFBLENBQVEsZUFBUixDQURKLEVBRUFBLG1EQUFBLENBQVdMLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRyxLQUF6QixDQUZBLENBREosQ0FEZSxDQUFuQjtBQVNBLFFBQUlDLFVBQVUsR0FBR0osSUFBSSxDQUFDSyxJQUFMLENBQVVDLGtCQUEzQjs7QUFHQSxRQUFHLENBQUNGLFVBQUosRUFBZTtBQUNYLFlBQU1HLGNBQWMsR0FBRyxNQUFNQyxxRUFBQSxDQUF3QjtBQUFFO0FBQ25ETCxhQUFLLEVBQUVOLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRztBQUQ0QixPQUF4QixDQUE3QjtBQUdBLFlBQU1GLHdEQUFBLENBQ05DLGlEQUFBLENBQ0lBLDhDQUFBLENBQU1BLHFEQUFBLENBQWEsT0FBYixDQUFOLEVBQTZCRixJQUFJLENBQUNTLEdBQUwsQ0FBU0MsRUFBdEMsQ0FESixFQUMrQztBQUN2QztBQUFFO0FBQ0VMLFlBQUksRUFBQztBQUNEQyw0QkFBa0IsRUFBRUMsY0FBYyxDQUFDRztBQURsQztBQURULE9BRlIsQ0FETSxDQUFOO0FBV0FOLGdCQUFVLEdBQUdHLGNBQWMsQ0FBQ0csRUFBNUI7QUFDSDs7QUFFRCxVQUFNQyxxQkFBcUIsR0FBRyxNQUFNSCw2RUFBQSxDQUFnQztBQUNoRUksY0FBUSxFQUFFUixVQURzRDtBQUN6QztBQUN2QlMsMEJBQW9CLEVBQUUsQ0FBQyxNQUFELENBRjBDO0FBR2hFQyxnQ0FBMEIsRUFBRSxVQUhvQztBQUd4QjtBQUN4Q0MsZ0JBQVUsRUFBRSxDQUFFO0FBQ1Y7QUFBQ0MsYUFBSyxFQUFFLGdDQUFSO0FBQTBDQyxnQkFBUSxFQUFFO0FBQXBELE9BRFEsQ0FDK0M7QUFEL0MsT0FKb0Q7QUFPaEVDLFVBQUksRUFBRSxjQVAwRDtBQVFoRUMsMkJBQXFCLEVBQUUsSUFSeUM7QUFRbkM7QUFDN0JDLGlCQUFXLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFUdUM7QUFTbkI7QUFDN0NDLGdCQUFVLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxpQkFWd0MsQ0FVcEI7O0FBVm9CLEtBQWhDLENBQXBDO0FBYUEsV0FBTzlCLFFBQVEsQ0FBQytCLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJDLElBQXJCLENBQTBCO0FBQUVDLGdCQUFVLEVBQUVqQixxQkFBcUIsQ0FBQ0Q7QUFBcEMsS0FBMUIsQ0FBUDtBQUNILEdBL0NELE1BK0NLO0FBQ0RmLFlBQVEsQ0FBQ2tDLFNBQVQsQ0FBbUIsT0FBbkIsRUFBNEIsTUFBNUI7QUFDQWxDLFlBQVEsQ0FBQytCLE1BQVQsQ0FBZ0IsR0FBaEIsRUFBcUJJLEdBQXJCLENBQXlCLG9CQUF6QjtBQUNIO0FBQ0osQ0FwREQiLCJmaWxlIjoiLi9zcmMvcGFnZXMvYXBpL3N1YnNjcmliZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby1hbm9ueW1vdXMtZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50JztcbmltcG9ydCB7IHN0cmlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3N0cmlwZSc7XG5cbmltcG9ydCB7IHF1ZXJ5IGFzIHEgfSBmcm9tICdmYXVuYWRiJztcbmltcG9ydCB7IGZhdW5hIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmF1bmEnO1xuXG50eXBlIFVzZXIgPSB7XG4gICAgcmVmOiB7XG4gICAgICAgIGlkOiBzdHJpbmc7XG4gICAgfVxuICAgIGRhdGE6IHsgXG4gICAgICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaW5nOyBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXF1ZXN0OiBOZXh0QXBpUmVxdWVzdCwgcmVzcG9uc2U6IE5leHRBcGlSZXNwb25zZSk9PntcbiAgICBpZihyZXF1ZXN0Lm1ldGhvZCA9PT0gJ1BPU1QnKXsgLy9Tw7MgYWNlaXRhIG1ldG9kbyBwb3N0XG4gICAgICAgIGNvbnN0IHNlc3Npb25zID0gYXdhaXQgZ2V0U2Vzc2lvbih7cmVxOiByZXF1ZXN0fSk7IC8vUGVnYSBvIHVzdWFyaW8gbG9nYWRvXG4gICAgICAgIFxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmF1bmEucXVlcnk8VXNlcj4oIC8vUXVlcnkgcXVlIGJ1c2NhIHVtIHVzdWFyaW8gbm8gZmF1bmEgcGVsbyBlbWFpbFxuICAgICAgICAgICAgcS5HZXQoXG4gICAgICAgICAgICAgICAgcS5NYXRjaChcbiAgICAgICAgICAgICAgICAgICAgcS5JbmRleCgndXNlcl9ieV9lbWFpbCcpLFxuICAgICAgICAgICAgICAgIHEuQ2FzZWZvbGQoc2Vzc2lvbnMudXNlci5lbWFpbClcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgIClcblxuICAgICAgICBsZXQgY3VzdG9tZXJJZCA9IHVzZXIuZGF0YS5zdHJpcGVfY3VzdG9tZXJfaWQ7XG5cblxuICAgICAgICBpZighY3VzdG9tZXJJZCl7XG4gICAgICAgICAgICBjb25zdCBzdHJpcGVDdXN0b21lciA9IGF3YWl0IHN0cmlwZS5jdXN0b21lcnMuY3JlYXRlKHsgLy9DcmlhIHVtIGN1c3RvbWVyIG5vIHN0cmlwZVxuICAgICAgICAgICAgICAgIGVtYWlsOiBzZXNzaW9ucy51c2VyLmVtYWlsLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhd2FpdCBmYXVuYS5xdWVyeShcbiAgICAgICAgICAgIHEuVXBkYXRlKFxuICAgICAgICAgICAgICAgIHEuUmVmKHEuQ29sbGVjdGlvbigndXNlcnMnKSwgdXNlci5yZWYuaWQpLCAvL1JlZmVyZW5jaWEgZG8gdXN1YXJpb1xuICAgICAgICAgICAgICAgICAgICB7IC8vUXVhaXMgZGFkb3MgcXVlciBhbHRlcmFyP1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTp7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmlwZV9jdXN0b21lcl9pZDogc3RyaXBlQ3VzdG9tZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdXN0b21lcklkID0gc3RyaXBlQ3VzdG9tZXIuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBzdHJpcGVDaGVja291dFNlc3Npb24gPSBhd2FpdCBzdHJpcGUuY2hlY2tvdXQuc2Vzc2lvbnMuY3JlYXRlKHtcbiAgICAgICAgICAgIGN1c3RvbWVyOiBjdXN0b21lcklkLCAgLy9pZCBkbyBjbGllbnRlXG4gICAgICAgICAgICBwYXltZW50X21ldGhvZF90eXBlczogWydjYXJkJ10sXG4gICAgICAgICAgICBiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbjogJ3JlcXVpcmVkJywgLy9lbmRlcmXDp28gZG8gZW50cmVnYSDDqSBvYnJpZ2F0w7NyaW8/XG4gICAgICAgICAgICBsaW5lX2l0ZW1zOiBbIC8vSXRlbnMgY29sb2NhZG9zIG5vIGNhcnJpbmhvXG4gICAgICAgICAgICAgICAge3ByaWNlOiAncHJpY2VfMUpHTnJDSXhyWTFEak1tb25sMGg5NHdIJywgcXVhbnRpdHk6IDF9IC8vaWRJdGVtIGUgcXVhbnRpZGFkZVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIG1vZGU6ICdzdWJzY3JpcHRpb24nLFxuICAgICAgICAgICAgYWxsb3dfcHJvbW90aW9uX2NvZGVzOiB0cnVlLCAvL3BvZGUgdXNhciBjdXBvbSBkZSBkZXNjb250byBuYSBjb21wcmE/XG4gICAgICAgICAgICBzdWNjZXNzX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX1NVQ0NFU1NfVVJMLCAvL1BhcmEgb25kZSBlbnZpYXIgbyB1c3VhcmlvIHNlIGVsZSBjb21wcmFyP1xuICAgICAgICAgICAgY2FuY2VsX3VybDogcHJvY2Vzcy5lbnYuU1RSSVBFX0NBTkNFTF9VUkwgICAvL1BhcmEgb25kZSBlbnZpYXIgbyB1c3VhcmlvIHNlIGVsZSBlbnZpYXI/XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oeyBzZXNzaW9uc0lkOiBzdHJpcGVDaGVja291dFNlc3Npb24uaWR9KVxuICAgIH1lbHNle1xuICAgICAgICByZXNwb25zZS5zZXRIZWFkZXIoJ0FsbG93JywgJ1BPU1QnKTtcbiAgICAgICAgcmVzcG9uc2Uuc3RhdHVzKDQwNSkuZW5kKCdNZXRob2Qgbm90IGFsbG93ZWQnKTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/api/subscribe.ts\n");

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

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/***/ (function(module) {

"use strict";
module.exports = require("next-auth/client");;

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/api/subscribe.ts"));
module.exports = __webpack_exports__;

})();