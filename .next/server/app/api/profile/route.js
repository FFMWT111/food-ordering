"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/profile/route";
exports.ids = ["app/api/profile/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist\\client\\components\\action-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist\\client\\components\\request-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!*********************************************************************************************!*\
  !*** external "next/dist\\client\\components\\static-generation-async-storage.external.js" ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist\\client\\components\\static-generation-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5C18767%5CDesktop%5Cupload%5Cfood-ordering%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C18767%5CDesktop%5Cupload%5Cfood-ordering&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5C18767%5CDesktop%5Cupload%5Cfood-ordering%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C18767%5CDesktop%5Cupload%5Cfood-ordering&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_18767_Desktop_upload_food_ordering_src_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/profile/route.js */ \"(rsc)/./src/app/api/profile/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/route\",\n        pathname: \"/api/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\18767\\\\Desktop\\\\upload\\\\food-ordering\\\\src\\\\app\\\\api\\\\profile\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_18767_Desktop_upload_food_ordering_src_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/profile/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9maWxlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZmlsZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUMxODc2NyU1Q0Rlc2t0b3AlNUN1cGxvYWQlNUNmb29kLW9yZGVyaW5nJTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUMxODc2NyU1Q0Rlc2t0b3AlNUN1cGxvYWQlNUNmb29kLW9yZGVyaW5nJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvP2Y2ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcMTg3NjdcXFxcRGVza3RvcFxcXFx1cGxvYWRcXFxcZm9vZC1vcmRlcmluZ1xcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxwcm9maWxlXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9maWxlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZmlsZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZmlsZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXDE4NzY3XFxcXERlc2t0b3BcXFxcdXBsb2FkXFxcXGZvb2Qtb3JkZXJpbmdcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccHJvZmlsZVxcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9wcm9maWxlL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIGhlYWRlckhvb2tzLCBzdGF0aWNHZW5lcmF0aW9uQmFpbG91dCwgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5C18767%5CDesktop%5Cupload%5Cfood-ordering%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C18767%5CDesktop%5Cupload%5Cfood-ordering&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/User */ \"(rsc)/./src/app/models/User.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var _libs_mongoConnect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../libs/mongoConnect */ \"(rsc)/./src/app/libs/mongoConnect.js\");\n\n\n\n\n\n\n\n\nconst authOptions = {\n    secret: process.env.AUTH_SECRET,\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_6__.MongoDBAdapter)(_libs_mongoConnect__WEBPACK_IMPORTED_MODULE_7__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n            name: \"google\",\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"test@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                console.log(email, password);\n                mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(process.env.MONGO_URI);\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__.User.findOne({\n                    email\n                });\n                const passwordOk = user && bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compareSync(password, user.password);\n                if (passwordOk) {\n                    return user;\n                }\n                return null;\n            }\n        })\n    ]\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_3___default()(authOptions);\n // The credentials is used to generate a suitable form on the sign in page.\n // You can specify whatever fields you are expecting to be submitted.\n // e.g. domain, username, password, 2FA token, etc.\n // You can pass any HTML attribute to the <input> tag through the object.\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7QUFDVDtBQUNnQjtBQUNYO0FBQ2lDO0FBQ1Y7QUFDRDtBQUNBO0FBRWhELE1BQU1RLGNBQWM7SUFDekJDLFFBQVFDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUMvQkMsU0FBU1AscUVBQWNBLENBQUNDLDBEQUFhQTtJQUNyQ08sV0FBVztRQUNUVCxzRUFBY0EsQ0FBQztZQUNiVSxNQUFNO1lBQ05DLFVBQVVOLFFBQVFDLEdBQUcsQ0FBQ00sZ0JBQWdCO1lBQ3RDQyxjQUFjUixRQUFRQyxHQUFHLENBQUNRLG9CQUFvQjtRQUNoRDtRQUNBZiwyRUFBbUJBLENBQUM7WUFDbEJXLE1BQU07WUFDTkssSUFBSTtZQUNKQyxhQUFhO2dCQUNYQyxVQUFVO29CQUNSQyxPQUFPO29CQUNQQyxNQUFNO29CQUNOQyxhQUFhO2dCQUNmO2dCQUNBQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHO2dCQUM5QixNQUFNQyxRQUFRUixhQUFhUTtnQkFDM0IsTUFBTUgsV0FBV0wsYUFBYUs7Z0JBQzlCSSxRQUFRQyxHQUFHLENBQUNGLE9BQU9IO2dCQUVuQjFCLDZDQUFnQixDQUFDVSxRQUFRQyxHQUFHLENBQUNzQixTQUFTO2dCQUN0QyxNQUFNQyxPQUFPLE1BQU1oQyw4Q0FBSUEsQ0FBQ2lDLE9BQU8sQ0FBQztvQkFBRU47Z0JBQU07Z0JBQ3hDLE1BQU1PLGFBQWFGLFFBQVFqQyx5REFBa0IsQ0FBQ3lCLFVBQVVRLEtBQUtSLFFBQVE7Z0JBRXJFLElBQUlVLFlBQVk7b0JBQ2QsT0FBT0Y7Z0JBQ1Q7Z0JBRUEsT0FBTztZQUNUO1FBQ0Y7S0FDRDtBQUNILEVBQUU7QUFFRixNQUFNSSxVQUFVbkMsZ0RBQVFBLENBQUNLO0FBRWtCLENBRTNDLDJFQUEyRTtDQUMzRSxxRUFBcUU7Q0FDckUsbURBQW1EO0NBQ25ELHlFQUF5RSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzPzIzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2NyZWRlbnRpYWxzXCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcclxuaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XHJcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gXCIuLi8uLi8uLi9saWJzL21vbmdvQ29ubmVjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xyXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVQsXHJcbiAgYWRhcHRlcjogTW9uZ29EQkFkYXB0ZXIoY2xpZW50UHJvbWlzZSksXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIG5hbWU6IFwiZ29vZ2xlXCIsXHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcclxuICAgICAgbmFtZTogXCJDcmVkZW50aWFsc1wiLFxyXG4gICAgICBpZDogXCJjcmVkZW50aWFsc1wiLFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7XHJcbiAgICAgICAgICBsYWJlbDogXCJFbWFpbFwiLFxyXG4gICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IFwidGVzdEBleGFtcGxlLmNvbVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscywgcmVxKSB7XHJcbiAgICAgICAgY29uc3QgZW1haWwgPSBjcmVkZW50aWFscz8uZW1haWw7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBjcmVkZW50aWFscz8ucGFzc3dvcmQ7XHJcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwsIHBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkpO1xyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZE9rID0gdXNlciAmJiBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICBpZiAocGFzc3dvcmRPaykge1xyXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9O1xyXG5cclxuLy8gVGhlIGNyZWRlbnRpYWxzIGlzIHVzZWQgdG8gZ2VuZXJhdGUgYSBzdWl0YWJsZSBmb3JtIG9uIHRoZSBzaWduIGluIHBhZ2UuXHJcbi8vIFlvdSBjYW4gc3BlY2lmeSB3aGF0ZXZlciBmaWVsZHMgeW91IGFyZSBleHBlY3RpbmcgdG8gYmUgc3VibWl0dGVkLlxyXG4vLyBlLmcuIGRvbWFpbiwgdXNlcm5hbWUsIHBhc3N3b3JkLCAyRkEgdG9rZW4sIGV0Yy5cclxuLy8gWW91IGNhbiBwYXNzIGFueSBIVE1MIGF0dHJpYnV0ZSB0byB0aGUgPGlucHV0PiB0YWcgdGhyb3VnaCB0aGUgb2JqZWN0LlxyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJiY3J5cHQiLCJVc2VyIiwiTmV4dEF1dGgiLCJDcmVkZW50aWFsc1Byb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJNb25nb0RCQWRhcHRlciIsImNsaWVudFByb21pc2UiLCJhdXRoT3B0aW9ucyIsInNlY3JldCIsInByb2Nlc3MiLCJlbnYiLCJBVVRIX1NFQ1JFVCIsImFkYXB0ZXIiLCJwcm92aWRlcnMiLCJuYW1lIiwiY2xpZW50SWQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJpZCIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwiZW1haWwiLCJjb25zb2xlIiwibG9nIiwiY29ubmVjdCIsIk1PTkdPX1VSSSIsInVzZXIiLCJmaW5kT25lIiwicGFzc3dvcmRPayIsImNvbXBhcmVTeW5jIiwiaGFuZGxlciIsIkdFVCIsIlBPU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/profile/route.js":
/*!**************************************!*\
  !*** ./src/app/api/profile/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/User */ \"(rsc)/./src/app/models/User.js\");\n/* harmony import */ var _models_UserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/UserInfo */ \"(rsc)/./src/app/models/UserInfo.js\");\n\n\n\n\n\nasync function PUT(req) {\n    const mongoUrl = process.env.MONGODB_URI;\n    mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(mongoUrl);\n    const data = await req.json();\n    const { _id, name, image, ...otherUserInfo } = data;\n    let filter = {};\n    if (_id) {\n        filter = {\n            _id\n        };\n    } else {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        const email = session.user.email;\n        filter = {\n            email\n        };\n    }\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__.User.findOne(filter);\n    await _models_User__WEBPACK_IMPORTED_MODULE_3__.User.updateOne(filter, {\n        name,\n        image\n    });\n    await _models_UserInfo__WEBPACK_IMPORTED_MODULE_4__.UserInfo.findOneAndUpdate({\n        email: user.email\n    }, otherUserInfo, {\n        upsert: true\n    });\n    return Response.json(true);\n}\nasync function GET(req) {\n    const mongoUrl = process.env.MONGODB_URI;\n    mongoose__WEBPACK_IMPORTED_MODULE_0__.connect(mongoUrl);\n    const url = new URL(req.url);\n    const _id = url.searchParams.get(\"_id\");\n    let filterUser = {};\n    if (_id) {\n        filterUser = {\n            _id\n        };\n    } else {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        const email = session?.user?.email;\n        if (!email) {\n            return Response.json({});\n        }\n        filterUser = {\n            email\n        };\n    }\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__.User.findOne(filterUser).lean();\n    const userInfo = await _models_UserInfo__WEBPACK_IMPORTED_MODULE_4__.UserInfo.findOne({\n        email: user.email\n    }).lean();\n    return Response.json({\n        ...user,\n        ...userInfo\n    });\n// const session = await getServerSession(authOptions);\n// const email = session?.user?.email;\n// return Response.json(await User.findOne({ email }));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9maWxlL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFxQztBQUNRO0FBQ2E7QUFDakI7QUFDUTtBQUUxQyxlQUFlSyxJQUFJQyxHQUFHO0lBQzNCLE1BQU1DLFdBQVdDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztJQUN4Q1YsNkNBQWdCLENBQUNPO0lBRWpCLE1BQU1LLE9BQU8sTUFBTU4sSUFBSU8sSUFBSTtJQUMzQixNQUFNLEVBQUVDLEdBQUcsRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0MsZUFBZSxHQUFHTDtJQUUvQyxJQUFJTSxTQUFTLENBQUM7SUFDZCxJQUFJSixLQUFLO1FBQ1BJLFNBQVM7WUFBRUo7UUFBSTtJQUNqQixPQUFPO1FBQ0wsTUFBTUssVUFBVSxNQUFNbEIsMkRBQWdCQSxDQUFDQyw2REFBV0E7UUFDbEQsTUFBTWtCLFFBQVFELFFBQVFFLElBQUksQ0FBQ0QsS0FBSztRQUNoQ0YsU0FBUztZQUFFRTtRQUFNO0lBQ25CO0lBRUEsTUFBTUMsT0FBTyxNQUFNbEIsOENBQUlBLENBQUNtQixPQUFPLENBQUNKO0lBQ2hDLE1BQU1mLDhDQUFJQSxDQUFDb0IsU0FBUyxDQUFDTCxRQUFRO1FBQUVIO1FBQU1DO0lBQU07SUFDM0MsTUFBTVosc0RBQVFBLENBQUNvQixnQkFBZ0IsQ0FBQztRQUFFSixPQUFPQyxLQUFLRCxLQUFLO0lBQUMsR0FBR0gsZUFBZTtRQUNwRVEsUUFBUTtJQUNWO0lBRUEsT0FBT0MsU0FBU2IsSUFBSSxDQUFDO0FBQ3ZCO0FBRU8sZUFBZWMsSUFBSXJCLEdBQUc7SUFDM0IsTUFBTUMsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0lBQ3hDViw2Q0FBZ0IsQ0FBQ087SUFFakIsTUFBTXFCLE1BQU0sSUFBSUMsSUFBSXZCLElBQUlzQixHQUFHO0lBQzNCLE1BQU1kLE1BQU1jLElBQUlFLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO0lBRWpDLElBQUlDLGFBQWEsQ0FBQztJQUNsQixJQUFJbEIsS0FBSztRQUNQa0IsYUFBYTtZQUFFbEI7UUFBSTtJQUNyQixPQUFPO1FBQ0wsTUFBTUssVUFBVSxNQUFNbEIsMkRBQWdCQSxDQUFDQyw2REFBV0E7UUFDbEQsTUFBTWtCLFFBQVFELFNBQVNFLE1BQU1EO1FBQzdCLElBQUksQ0FBQ0EsT0FBTztZQUNWLE9BQU9NLFNBQVNiLElBQUksQ0FBQyxDQUFDO1FBQ3hCO1FBQ0FtQixhQUFhO1lBQUVaO1FBQU07SUFDdkI7SUFFQSxNQUFNQyxPQUFPLE1BQU1sQiw4Q0FBSUEsQ0FBQ21CLE9BQU8sQ0FBQ1UsWUFBWUMsSUFBSTtJQUNoRCxNQUFNQyxXQUFXLE1BQU05QixzREFBUUEsQ0FBQ2tCLE9BQU8sQ0FBQztRQUFFRixPQUFPQyxLQUFLRCxLQUFLO0lBQUMsR0FBR2EsSUFBSTtJQUVuRSxPQUFPUCxTQUFTYixJQUFJLENBQUM7UUFBRSxHQUFHUSxJQUFJO1FBQUUsR0FBR2EsUUFBUTtJQUFDO0FBQzVDLHVEQUF1RDtBQUN2RCxzQ0FBc0M7QUFDdEMsdURBQXVEO0FBQ3pEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZC1vcmRlcmluZy1hcHAvLi9zcmMvYXBwL2FwaS9wcm9maWxlL3JvdXRlLmpzPzEzNjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Vc2VyXCI7XHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uL21vZGVscy9Vc2VySW5mb1wiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBVVChyZXEpIHtcclxuICBjb25zdCBtb25nb1VybCA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG4gIG1vbmdvb3NlLmNvbm5lY3QobW9uZ29VcmwpO1xyXG5cclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICBjb25zdCB7IF9pZCwgbmFtZSwgaW1hZ2UsIC4uLm90aGVyVXNlckluZm8gfSA9IGRhdGE7XHJcblxyXG4gIGxldCBmaWx0ZXIgPSB7fTtcclxuICBpZiAoX2lkKSB7XHJcbiAgICBmaWx0ZXIgPSB7IF9pZCB9O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgICBjb25zdCBlbWFpbCA9IHNlc3Npb24udXNlci5lbWFpbDtcclxuICAgIGZpbHRlciA9IHsgZW1haWwgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoZmlsdGVyKTtcclxuICBhd2FpdCBVc2VyLnVwZGF0ZU9uZShmaWx0ZXIsIHsgbmFtZSwgaW1hZ2UgfSk7XHJcbiAgYXdhaXQgVXNlckluZm8uZmluZE9uZUFuZFVwZGF0ZSh7IGVtYWlsOiB1c2VyLmVtYWlsIH0sIG90aGVyVXNlckluZm8sIHtcclxuICAgIHVwc2VydDogdHJ1ZSxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24odHJ1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XHJcbiAgY29uc3QgbW9uZ29VcmwgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcclxuICBtb25nb29zZS5jb25uZWN0KG1vbmdvVXJsKTtcclxuXHJcbiAgY29uc3QgdXJsID0gbmV3IFVSTChyZXEudXJsKTtcclxuICBjb25zdCBfaWQgPSB1cmwuc2VhcmNoUGFyYW1zLmdldChcIl9pZFwiKTtcclxuXHJcbiAgbGV0IGZpbHRlclVzZXIgPSB7fTtcclxuICBpZiAoX2lkKSB7XHJcbiAgICBmaWx0ZXJVc2VyID0geyBfaWQgfTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG4gICAgY29uc3QgZW1haWwgPSBzZXNzaW9uPy51c2VyPy5lbWFpbDtcclxuICAgIGlmICghZW1haWwpIHtcclxuICAgICAgcmV0dXJuIFJlc3BvbnNlLmpzb24oe30pO1xyXG4gICAgfVxyXG4gICAgZmlsdGVyVXNlciA9IHsgZW1haWwgfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoZmlsdGVyVXNlcikubGVhbigpO1xyXG4gIGNvbnN0IHVzZXJJbmZvID0gYXdhaXQgVXNlckluZm8uZmluZE9uZSh7IGVtYWlsOiB1c2VyLmVtYWlsIH0pLmxlYW4oKTtcclxuXHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oeyAuLi51c2VyLCAuLi51c2VySW5mbyB9KTtcclxuICAvLyBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgLy8gY29uc3QgZW1haWwgPSBzZXNzaW9uPy51c2VyPy5lbWFpbDtcclxuICAvLyByZXR1cm4gUmVzcG9uc2UuanNvbihhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbCB9KSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiVXNlciIsIlVzZXJJbmZvIiwiUFVUIiwicmVxIiwibW9uZ29VcmwiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25uZWN0IiwiZGF0YSIsImpzb24iLCJfaWQiLCJuYW1lIiwiaW1hZ2UiLCJvdGhlclVzZXJJbmZvIiwiZmlsdGVyIiwic2Vzc2lvbiIsImVtYWlsIiwidXNlciIsImZpbmRPbmUiLCJ1cGRhdGVPbmUiLCJmaW5kT25lQW5kVXBkYXRlIiwidXBzZXJ0IiwiUmVzcG9uc2UiLCJHRVQiLCJ1cmwiLCJVUkwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJmaWx0ZXJVc2VyIiwibGVhbiIsInVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/profile/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/libs/mongoConnect.js":
/*!**************************************!*\
  !*** ./src/app/libs/mongoConnect.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2xpYnMvbW9uZ29Db25uZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtHQUFrRztBQUM1RDtBQUV0QyxJQUFJLENBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVyxFQUFFO0lBQzVCLE1BQU0sSUFBSUMsTUFBTTtBQUNsQjtBQUVBLE1BQU1DLE1BQU1KLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNRyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUVKLElBQUlQLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNRLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSCxTQUFTLElBQUlQLGdEQUFXQSxDQUFDSyxLQUFLQztRQUM5QkcsT0FBT0MsbUJBQW1CLEdBQUdILE9BQU9JLE9BQU87SUFDN0M7SUFDQUgsZ0JBQWdCQyxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUYsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL2FwcC9saWJzL21vbmdvQ29ubmVjdC5qcz83MDQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgYXBwcm9hY2ggaXMgdGFrZW4gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vdmVyY2VsL25leHQuanMvdHJlZS9jYW5hcnkvZXhhbXBsZXMvd2l0aC1tb25nb2RiXHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuXHJcbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQvTWlzc2luZyBlbnZpcm9ubWVudCB2YXJpYWJsZTogXCJNT05HT0RCX1VSSVwiJyk7XHJcbn1cclxuXHJcbmNvbnN0IHVyaSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xyXG5jb25zdCBvcHRpb25zID0ge307XHJcblxyXG5sZXQgY2xpZW50O1xyXG5sZXQgY2xpZW50UHJvbWlzZTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcclxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcclxuICB9XHJcbiAgY2xpZW50UHJvbWlzZSA9IGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlO1xyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucyk7XHJcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XHJcbn1cclxuXHJcbi8vIEV4cG9ydCBhIG1vZHVsZS1zY29wZWQgTW9uZ29DbGllbnQgcHJvbWlzZS4gQnkgZG9pbmcgdGhpcyBpbiBhXHJcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT0RCX1VSSSIsIkVycm9yIiwidXJpIiwib3B0aW9ucyIsImNsaWVudCIsImNsaWVudFByb21pc2UiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/libs/mongoConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/User.js":
/*!********************************!*\
  !*** ./src/app/models/User.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_1__.Schema({\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    image: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    streetAddress: {\n        type: String\n    },\n    postalCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    country: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nUserSchema.post(\"validate\", function(user) {\n    const notHashedPassword = user.password;\n    const salt = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().genSaltSync(10);\n    user.password = bcrypt__WEBPACK_IMPORTED_MODULE_0___default().hashSync(notHashedPassword, salt);\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_1__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_1__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy9Vc2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTRCO0FBQ3FCO0FBRWpELE1BQU1JLGFBQWEsSUFBSUQsNENBQU1BLENBQzNCO0lBQ0VFLE1BQU07UUFBRUMsTUFBTUM7SUFBTztJQUNyQkMsT0FBTztRQUFFRixNQUFNQztRQUFRRSxVQUFVO1FBQU1DLFFBQVE7SUFBSztJQUNwREMsVUFBVTtRQUFFTCxNQUFNQztJQUFPO0lBQ3pCSyxPQUFPO1FBQUVOLE1BQU1DO0lBQU87SUFDdEJNLE9BQU87UUFBRVAsTUFBTUM7SUFBTztJQUN0Qk8sZUFBZTtRQUFFUixNQUFNQztJQUFPO0lBQzlCUSxZQUFZO1FBQUVULE1BQU1DO0lBQU87SUFDM0JTLE1BQU07UUFBRVYsTUFBTUM7SUFBTztJQUNyQlUsU0FBUztRQUFFWCxNQUFNQztJQUFPO0lBQ3hCVyxPQUFPO1FBQUVaLE1BQU1hO1FBQVNDLFNBQVM7SUFBTTtBQUN6QyxHQUNBO0lBQUVDLFlBQVk7QUFBSztBQUdyQmpCLFdBQVdrQixJQUFJLENBQUMsWUFBWSxTQUFVQyxJQUFJO0lBQ3hDLE1BQU1DLG9CQUFvQkQsS0FBS1osUUFBUTtJQUN2QyxNQUFNYyxPQUFPekIseURBQWtCLENBQUM7SUFDaEN1QixLQUFLWixRQUFRLEdBQUdYLHNEQUFlLENBQUN3QixtQkFBbUJDO0FBQ3JEO0FBRU8sTUFBTUcsT0FBTzFCLDRDQUFNQSxFQUFFMEIsUUFBUTNCLCtDQUFLQSxDQUFDLFFBQVFHLFlBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kLW9yZGVyaW5nLWFwcC8uL3NyYy9hcHAvbW9kZWxzL1VzZXIuanM/M2IxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRcIjtcclxuaW1wb3J0IHsgbW9kZWwsIG1vZGVscywgU2NoZW1hIH0gZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBVc2VyU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGltYWdlOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcGhvbmU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBzdHJlZXRBZGRyZXNzOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcG9zdGFsQ29kZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGNpdHk6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBjb3VudHJ5OiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgYWRtaW46IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxuICB9LFxyXG4gIHsgdGltZXN0YW1wczogdHJ1ZSB9XHJcbik7XHJcblxyXG5Vc2VyU2NoZW1hLnBvc3QoXCJ2YWxpZGF0ZVwiLCBmdW5jdGlvbiAodXNlcikge1xyXG4gIGNvbnN0IG5vdEhhc2hlZFBhc3N3b3JkID0gdXNlci5wYXNzd29yZDtcclxuICBjb25zdCBzYWx0ID0gYmNyeXB0LmdlblNhbHRTeW5jKDEwKTtcclxuICB1c2VyLnBhc3N3b3JkID0gYmNyeXB0Lmhhc2hTeW5jKG5vdEhhc2hlZFBhc3N3b3JkLCBzYWx0KTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVscz8uVXNlciB8fCBtb2RlbChcIlVzZXJcIiwgVXNlclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJiY3J5cHQiLCJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIlVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsImVtYWlsIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImltYWdlIiwicGhvbmUiLCJzdHJlZXRBZGRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJjb3VudHJ5IiwiYWRtaW4iLCJCb29sZWFuIiwiZGVmYXVsdCIsInRpbWVzdGFtcHMiLCJwb3N0IiwidXNlciIsIm5vdEhhc2hlZFBhc3N3b3JkIiwic2FsdCIsImdlblNhbHRTeW5jIiwiaGFzaFN5bmMiLCJVc2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/app/models/UserInfo.js":
/*!************************************!*\
  !*** ./src/app/models/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserInfo: () => (/* binding */ UserInfo)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserInfoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    streetAddress: {\n        type: String\n    },\n    postalCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    country: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst UserInfo = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.UserInfo || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"UserInfo\", UserInfoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL21vZGVscy9Vc2VySW5mby5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBaUQ7QUFFakQsTUFBTUcsaUJBQWlCLElBQUlELDRDQUFNQSxDQUMvQjtJQUNFRSxPQUFPO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0MsZUFBZTtRQUFFSCxNQUFNQztJQUFPO0lBQzlCRyxZQUFZO1FBQUVKLE1BQU1DO0lBQU87SUFDM0JJLE1BQU07UUFBRUwsTUFBTUM7SUFBTztJQUNyQkssU0FBUztRQUFFTixNQUFNQztJQUFPO0lBQ3hCTSxPQUFPO1FBQUVQLE1BQU1DO0lBQU87SUFDdEJPLE9BQU87UUFBRVIsTUFBTVM7UUFBU0MsU0FBUztJQUFNO0FBQ3pDLEdBQ0E7SUFBRUMsWUFBWTtBQUFLO0FBR2QsTUFBTUMsV0FBV2hCLDRDQUFNQSxFQUFFZ0IsWUFBWWpCLCtDQUFLQSxDQUFDLFlBQVlHLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2Qtb3JkZXJpbmctYXBwLy4vc3JjL2FwcC9tb2RlbHMvVXNlckluZm8uanM/M2MyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbCwgbW9kZWxzLCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFVzZXJJbmZvU2NoZW1hID0gbmV3IFNjaGVtYShcclxuICB7XHJcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgICBzdHJlZXRBZGRyZXNzOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcG9zdGFsQ29kZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICAgIGNpdHk6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBjb3VudHJ5OiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gICAgcGhvbmU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgICBhZG1pbjogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9IG1vZGVscz8uVXNlckluZm8gfHwgbW9kZWwoXCJVc2VySW5mb1wiLCBVc2VySW5mb1NjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIlVzZXJJbmZvU2NoZW1hIiwiZW1haWwiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJzdHJlZXRBZGRyZXNzIiwicG9zdGFsQ29kZSIsImNpdHkiLCJjb3VudHJ5IiwicGhvbmUiLCJhZG1pbiIsIkJvb2xlYW4iLCJkZWZhdWx0IiwidGltZXN0YW1wcyIsIlVzZXJJbmZvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/models/UserInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/lru-cache","vendor-chunks/@auth","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5C18767%5CDesktop%5Cupload%5Cfood-ordering%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5C18767%5CDesktop%5Cupload%5Cfood-ordering&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();