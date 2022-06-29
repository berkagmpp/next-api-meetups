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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\n// this is never be exposed to the client, always credential\n// this is a secure place to store credential\n// POST /api/new-meetup\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://Berkagmpp:iHvCmVMWmdAmfW7m@cluster0.xhth6cm.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupCollection = db.collection(\"meetups\");\n        const result = await meetupCollection.insertOne(data); //  insert 1 new documents (data) into this meetupCollection\n        console.log(result);\n        client.close(); // close the database connection once it's done\n        // from here send response\n        res.status(201).json({\n            message: \"Meetup inserted!\"\n        }); // set a HTTP status code of the response which will be returned\n    }\n    ;\n}\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsNERBQTREO0FBQzVELDZDQUE2QztBQUM3Qyx1QkFBdUI7QUFFdkIsZUFBZUMsT0FBTyxDQUFFQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDdkIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFckIsTUFBTUMsTUFBTSxHQUFHLE1BQU1QLHdEQUFtQixDQUFDLDJHQUEyRyxDQUFDO1FBQ3JKLE1BQU1TLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFFdEIsTUFBTUMsZ0JBQWdCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUVqRCxNQUFNQyxNQUFNLEdBQUcsTUFBTUYsZ0JBQWdCLENBQUNHLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDLEVBQUksNERBQTREO1FBRXJIUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7UUFFcEJMLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFLENBQUMsQ0FBSywrQ0FBK0M7UUFFbkUsMEJBQTBCO1FBQzFCYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLE9BQU8sRUFBRSxrQkFBa0I7U0FBQyxDQUFDLENBQUMsQ0FBSSxnRUFBZ0U7S0FDM0g7O0NBQ0o7O0FBRUQsaUVBQWVsQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gJ21vbmdvZGInO1xyXG5cclxuLy8gdGhpcyBpcyBuZXZlciBiZSBleHBvc2VkIHRvIHRoZSBjbGllbnQsIGFsd2F5cyBjcmVkZW50aWFsXHJcbi8vIHRoaXMgaXMgYSBzZWN1cmUgcGxhY2UgdG8gc3RvcmUgY3JlZGVudGlhbFxyXG4vLyBQT1NUIC9hcGkvbmV3LW1lZXR1cFxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlciAocmVxLCByZXMpIHtcclxuICAgIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vQmVya2FnbXBwOmlIdkNtVk1XbWRBbWZXN21AY2x1c3RlcjAueGh0aDZjbS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eScpO1xyXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG1lZXR1cENvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cENvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpOyAgIC8vICBpbnNlcnQgMSBuZXcgZG9jdW1lbnRzIChkYXRhKSBpbnRvIHRoaXMgbWVldHVwQ29sbGVjdGlvblxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG5cclxuICAgICAgICBjbGllbnQuY2xvc2UoKTsgICAgIC8vIGNsb3NlIHRoZSBkYXRhYmFzZSBjb25uZWN0aW9uIG9uY2UgaXQncyBkb25lXHJcblxyXG4gICAgICAgIC8vIGZyb20gaGVyZSBzZW5kIHJlc3BvbnNlXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6ICdNZWV0dXAgaW5zZXJ0ZWQhJ30pOyAgICAvLyBzZXQgYSBIVFRQIHN0YXR1cyBjb2RlIG9mIHRoZSByZXNwb25zZSB3aGljaCB3aWxsIGJlIHJldHVybmVkXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();