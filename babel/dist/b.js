"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {};
exports.default = void 0;

var _a = require("./a");

Object.keys(_a).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _a[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _a[key];
    }
  });
});
var _default = 'b';
exports.default = _default;